import { bip39, BigNumber } from "@okxweb3/crypto-lib";
import { EthWallet, MessageTypes } from "@okxweb3/coin-ethereum";

import dotenv from 'dotenv';

    dotenv.config({ path: './data.env' });

class Wallet {
    
    apiKey = process.env.API_KEY;
    secretKey = process.env.SECRET_KEY;
    passphrase = process.env.PASSPHRASE;
    project = process.env.PROJECT;
    baseUrl = process.env.BASE_URL;
  
    constructor() {
        this.apiKey = process.env.API_KEY;
        this.secretKey = process.env.SECRET_KEY;
        this.passphrase = process.env.PASSPHRASE;
        this.project = process.env.PROJECT;
        this.baseUrl = process.env.BASE_URL;
    }

    async GenWallet(wallet, chainIndex, timestamp) {
        let mnemonic = bip39.generateMnemonic();
    

        let param_private_key ={ 
            mnemonic: mnemonic,
            hdPath: await wallet.getDerivedPath({index: 0})
        }
        let privateKey = await wallet.getDerivedPrivateKey(param_private_key);

        let param_address = {
            privateKey: privateKey
        }
        let account = await wallet.getNewAddress(param_address);
        
        let addrParam = {
            address: account.address
        };
        let valid = await wallet.validAddress(addrParam);

        let credentials = {};

        switch (chainIndex) {
            case "evm":

                let t_str = timestamp.toString();
                let data = {
                    type: MessageTypes.PERSONAL_SIGN,
                    message: t_str
                };
                let signParams = {
                    privateKey: privateKey,
                    data: data
                };
                let result = await wallet.signMessage(signParams);

                let verifyMessageParams = {
                    signature: result,
                    data: data,
                    address: account.address
                };
                const verified = await wallet.verifyMessage(verifyMessageParams)


                credentials = {
                    "mnemonic": mnemonic,
                    "privateKey": privateKey,
                    "address": account.address,
                    "publicKey": account.publicKey,
                    "signature": result,
                    "timestamp":  t_str,
                    "verified": verified,
                    "hdPath": param_private_key.hdPath,
                    "validation": valid 
                }
            
                break;
            case "utxo":

                var msg = '' + Date.parse(new Date());
                console.log('msg', msg)


                let sign_params_utxo = {
                    privateKey: privateKey,
                    data: {
                        type: 0,
                        address: account.address,
                        message: msg,
                    }
                };

                let result_utxo = await wallet.signMessage(sign_params_utxo)
                console.info('signed result', result_utxo)


                let verify_message_params_utxo = {
                    signature: result_utxo,
                    data: {
                        message: msg,
                        type: 0,
                        publicKey: account.publicKey,
                    }
                };

                const verified_utxo = await wallet.verifyMessage(verify_message_params_utxo)
                console.info("verified", verified_utxo)
                credentials = {
                    "mnemonic": mnemonic,
                    "privateKey": privateKey,
                    "address": account.address,
                    "publicKey": account.publicKey,
                    "signature": result_utxo,
                    "timestamp":  timestamp,
                    "verified": verified_utxo,
                }
                break;
            case "ton":
                const param = {
                    address: account.address
                };
                const isValid = await wallet.validAddress(param);
                credentials = {
                    "mnemonic": mnemonic,
                    "privateKey": privateKey,
                    "address": account.address,
                    "publicKey": account.publicKey,
                    "signature": isValid.toString(),
                    "timestamp":  timestamp,
                    "verified": isValid,
                }
                break;
            case "tron":
                let message = "hello world";
                message = "0x" + Buffer.from(message, "utf8").toString("hex");

                const params= {
                    privateKey: "privateKey",
                    data: {
                        type: "hex",
                        message: message
                    }
                };
                const result_tron = await wallet.signMessage(params);
                credentials = {
                    "mnemonic": mnemonic,
                    "privateKey": privateKey,
                    "address": account.address,
                    "publicKey": account.publicKey,
                    "signature": result_tron.toString()
                }
                break;
            case "sol":
                var msg = '' + Date.parse(new Date());
                let param_sol= {
                    privateKey: privateKey, 
                    data: msg
                }
                let tx = await wallet.signMessage(param_sol);
                credentials = {
                    "mnemonic": mnemonic,
                    "privateKey": privateKey,
                    "address": account.address,
                    "publicKey": account.publicKey,
                    "signature": tx.toString(),
                    "timestamp":  timestamp,
                    "validation": valid,
                }
            default:
                break;
        }
        return credentials;
    }
}


export default Wallet;