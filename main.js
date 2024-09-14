import { bip39, BigNumber } from "@okxweb3/crypto-lib";
import { EthWallet, MessageTypes } from "@okxweb3/coin-ethereum";
import { BaseWallet } from "@okxweb3/coin-base";
import { AtomWallet } from "@okxweb3/coin-cosmos";
import pkg from '@okxweb3/crypto-lib';
const { ethUtil } = pkg;
import {SolWallet} from "@okxweb3/coin-solana";
import { BtcWallet } from "@okxweb3/coin-bitcoin";
import { TonWallet } from "@okxweb3/coin-ton";
import { TrxWallet } from "@okxweb3/coin-tron";


import { hashMessage } from "@okxweb3/coin-ethereum";
import CryptoJS from 'crypto-js';
import { Interface } from "readline";
import { Console } from "console";
import { type } from "os";

import { OKX_API } from "./okx_api.js";
import * as dotenv from 'dotenv';
dotenv.config();



const apiConfig = {
  apiKey: 'f016cc3f-5271-4570-83a3-0669adb8213f',
  secretKey: '6DF35789346D0AC222C6268E2C6B6021',
  passphrase: '20077002nNn_',
  project: 'ccdab6e3108e1466baf058696243eeae',
  baseUrl: 'https://www.okx.com'
};


async function GenBtcWallet(wallet) {
    
    let privateKey = await wallet.getRandomPrivateKey();
    // native segwit address
    let params2 = {
    privateKey: privateKey,
    addressType: "segwit_native",
    };
    let address = await wallet.getNewAddress(params2);
    
    let signParams = {
        privateKey: privateKey,
        data: {
          type: 0,
          address: address.address,
          message: "hello world!",
        }
      };
      let res = await wallet.signMessage(signParams)

      let credentials = {
        "privateKey": privateKey,
        "address": address.address,
        "publicKey": address.publicKey,
        "signature": res
    }
    return credentials;
    
}


async function GenWallet(wallet, chainIndex, timestamp){

    


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


async function create_account(wallet_credentials, timestamp_str, timestamp_isos) {

    
        // const headers = {
    //     'OK-ACCESS-PROJECT': process.env.PROJECT_ID,
    //     'OK-ACCESS-KEY': process.env.API,
    //     'OK-ACCESS-PASSPHRASE': process.env.PASSPHRASE
    // }
    // const okx_api = new OKX_API(headers);
    // headers = okx_api.configure_headers(required_url, "POST", body, true);
    // const api_params = { method: "POST", headers, body };
    // const req = new Request("https://www.okx.com" + required_url, api_params);
    // const account_id = await okx_api.sendFetch(req);
    // const return_data = Object.assign({}, {
    //   code: account_id.code,
    //   msg: account_id.msg,
    //   data: account_id.data.map((item) => ({ accountId: item.accountId }))
    // });
    // return return_data;

    const required_url = `/api/v5/wallet/account/create-account`;
  
    const body = JSON.stringify({
      addresses: [
        {
          chainIndex: "1",
          address: wallet_credentials.address,
          publicKey: wallet_credentials.publicKey,
          signature: wallet_credentials.signature
        },
        {
          chainIndex: "10",
          address: wallet_credentials.address,
          publicKey: wallet_credentials.publicKey,
          signature: wallet_credentials.signature
        },
        {
          chainIndex: "43114",
          address: wallet_credentials.address,
          publicKey: wallet_credentials.publicKey,
          signature: wallet_credentials.signature
        },
        {
          chainIndex: "42161",
          address: wallet_credentials.address,
          publicKey: wallet_credentials.publicKey,
          signature: wallet_credentials.signature
        },
        {
          chainIndex: "56",
          address: wallet_credentials.address,
          publicKey: wallet_credentials.publicKey,
          signature: wallet_credentials.signature
        },
        {
            chainIndex: "8453",
            address: wallet_credentials.address,
            publicKey: wallet_credentials.publicKey,
            signature: wallet_credentials.signature
        },
        {
            chainIndex: "59144",
            address: wallet_credentials.address,
            publicKey: wallet_credentials.publicKey,
            signature: wallet_credentials.signature
        },
        {
            chainIndex: "1101",
            address: wallet_credentials.address,
            publicKey: wallet_credentials.publicKey,
            signature: wallet_credentials.signature
        },
        {
            chainIndex: "5000",
            address: wallet_credentials.address,
            publicKey: wallet_credentials.publicKey,
            signature: wallet_credentials.signature
        },
        {
            chainIndex: "324",
            address: wallet_credentials.address,
            publicKey: wallet_credentials.publicKey,
            signature: wallet_credentials.signature
        },
        {
            chainIndex: "1116",
            address: wallet_credentials.address,
            publicKey: wallet_credentials.publicKey,
            signature: wallet_credentials.signature
        },
        {
            chainIndex: "250",
            address: wallet_credentials.address,
            publicKey: wallet_credentials.publicKey,
            signature: wallet_credentials.signature
        },
        {
            chainIndex: "137",
            address: wallet_credentials.address,
            publicKey: wallet_credentials.publicKey,
            signature: wallet_credentials.signature
        },
        {
            chainIndex: "66",
            address: wallet_credentials.address,
            publicKey: wallet_credentials.publicKey,
            signature: wallet_credentials.signature
        },
        {
            chainIndex: "25",
            address: wallet_credentials.address,
            publicKey: wallet_credentials.publicKey,
            signature: wallet_credentials.signature
        },
        {
            chainIndex: "204",
            address: wallet_credentials.address,
            publicKey: wallet_credentials.publicKey,
            signature: wallet_credentials.signature
        },
        {
            chainIndex: "42170",
            address: wallet_credentials.address,
            publicKey: wallet_credentials.publicKey,
            signature: wallet_credentials.signature
        },


      ],
      signMessage: timestamp_str
    });


    let sign_creation = CryptoJS.enc.Base64.stringify(CryptoJS.HmacSHA256(timestamp_isos + 'POST' + required_url + body, '6DF35789346D0AC222C6268E2C6B6021'));

    try {
        const response = await fetch('https://www.okx.com/api/v5/wallet/account/create-account', {
          method: 'POST',
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
            'OK-ACCESS-PROJECT': apiConfig['project'],
            'OK-ACCESS-KEY': 'f016cc3f-5271-4570-83a3-0669adb8213f',
            'OK-ACCESS-SIGN': sign_creation,
            'OK-ACCESS-PASSPHRASE': apiConfig['passphrase'],
            'OK-ACCESS-TIMESTAMP': timestamp_isos
          },
          body: body
        });
        const json = await response.json();
        return json;
      } 
      catch (error) {
        console.error(error);
        return null;
      }
      
}

async function get_account_details(accountId, timestamp_isos) {
    let sign_info = CryptoJS.enc.Base64.stringify(CryptoJS.HmacSHA256(timestamp_isos + 'GET' + `/api/v5/wallet/account/account-detail?accountId=${accountId}`, '6DF35789346D0AC222C6268E2C6B6021'));
  
    try {
      const response = await fetch(`https://www.okx.com/api/v5/wallet/account/account-detail?accountId=${accountId}`, {
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
          'OK-ACCESS-PROJECT': apiConfig['project'],
          'OK-ACCESS-KEY': 'f016cc3f-5271-4570-83a3-0669adb8213f',
          'OK-ACCESS-SIGN': sign_info,
          'OK-ACCESS-PASSPHRASE': apiConfig['passphrase'],
          'OK-ACCESS-TIMESTAMP': timestamp_isos
        }
      });
  
      if (!response.ok) {
        throw new Error(`Error ${response.status}: ${response.statusText}`);
      }
  
      const json = await response.json();
      if (!json.data) {
        throw new Error('No data returned from API');
      }
      return json;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

async function run(){


    let now = new Date();
    let timestamp_isos = now.toISOString();
    let timestamp = now.getTime();
    let timestamp_str = timestamp.toString();


    let ethWallet = new EthWallet();
    let ethWalletCreds = await GenWallet(ethWallet, "evm", timestamp);
    let btcWallet = new  BtcWallet();
    let btcWalletCreds = await GenWallet(btcWallet, "utxo", timestamp);


    console.log("eth wallet creds: ", ethWalletCreds, "\n\n");
    console.log("btc wallet creds: ", btcWalletCreds, "\n\n");




    let account_creation_response = await create_account(ethWalletCreds, timestamp_str, timestamp_isos);
    console.log(account_creation_response);

    const accountId = account_creation_response.data[0].accountId;

    let account_addresses = await get_account_details(accountId, timestamp_isos);
    if (account_addresses === null) {
      console.error('Error retrieving account details');
    } else {
      console.log(account_addresses.data[0]);
    }
    
    

    // const body = JSON.stringify({
    //     addresses: [
    //       {
    //         chainIndex: "1",
    //         address: ethWalletCreds.address,
    //         publicKey: ethWalletCreds.publicKey,
    //         signature: ethWalletCreds.signature
    //       },
    //       {
    //         chainIndex: "10",
    //         address: ethWalletCreds.address,
    //         publicKey: ethWalletCreds.publicKey,
    //         signature: ethWalletCreds.signature
    //       },
    //       {
    //         chainIndex: "43114",
    //         address: ethWalletCreds.address,
    //         publicKey: ethWalletCreds.publicKey,
    //         signature: ethWalletCreds.signature
    //       },
    //       {
    //         chainIndex: "42161",
    //         address: ethWalletCreds.address,
    //         publicKey: ethWalletCreds.publicKey,
    //         signature: ethWalletCreds.signature
    //       },
    //       {
    //         chainIndex: "56",
    //         address: ethWalletCreds.address,
    //         publicKey: ethWalletCreds.publicKey,
    //         signature: ethWalletCreds.signature
    //       },
    //     ],
    //     signMessage: timestamp_str
    //   });

    // let sign_creation = CryptoJS.enc.Base64.stringify(CryptoJS.HmacSHA256(timestamp_isos + 'POST' + '/api/v5/wallet/account/create-account' + body, '6DF35789346D0AC222C6268E2C6B6021'));


  


    // fetch('https://www.okx.com/api/v5/wallet/account/create-account', {
    //     method: 'POST',
    //     headers: {
    //         'Content-type': 'application/json; charset=UTF-8',
    //         'OK-ACCESS-PROJECT': apiConfig['project'],
    //         'OK-ACCESS-KEY': 'f016cc3f-5271-4570-83a3-0669adb8213f',
    //         'OK-ACCESS-SIGN': sign_creation,
    //         'OK-ACCESS-PASSPHRASE': apiConfig['passphrase'],
    //         'OK-ACCESS-TIMESTAMP': timestamp_isos
    
    //     },
    //     body: body
    // })        
    // .then((response) => response.json())
    // .then((json) => console.log(json));

    // let sign_info = CryptoJS.enc.Base64.stringify(CryptoJS.HmacSHA256(timestamp_isos + 'GET' + '/api/v5/wallet/account/account-detail?accountId=0e463c4b-c775-4b40-a919-20371c820665', '6DF35789346D0AC222C6268E2C6B6021'));

    // fetch('https://www.okx.com/api/v5/wallet/account/account-detail?accountId=0e463c4b-c775-4b40-a919-20371c820665', {
    //     headers: {
    //         'Content-type': 'application/json; charset=UTF-8',
    //         'OK-ACCESS-PROJECT': apiConfig['project'],
    //         'OK-ACCESS-KEY': 'f016cc3f-5271-4570-83a3-0669adb8213f',
    //         'OK-ACCESS-SIGN': sign_info,
    //         'OK-ACCESS-PASSPHRASE': apiConfig['passphrase'],
    //         'OK-ACCESS-TIMESTAMP': timestamp_isos
    //     }
    // })    
    // .then((response) => response.json())
    // .then((json) => console.log(json));;

}

await run();

