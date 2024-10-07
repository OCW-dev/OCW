import { bip39, BigNumber } from "@okxweb3/crypto-lib";
import { EthWallet, MessageTypes } from "@okxweb3/coin-ethereum";
import pkg from '@okxweb3/crypto-lib';
const { ethUtil } = pkg;
import { BtcWallet } from "@okxweb3/coin-bitcoin";
import CryptoJS from 'crypto-js';
import dotenv from 'dotenv';

import Wallet from "./Wallet.js";

async function run(){

  console.log("welcome to ocw!\n\n");

    let now = new Date();
    let timestamp_isos = now.toISOString();
    let timestamp = now.getTime();
    let timestamp_str = timestamp.toString();


    let wallet = new Wallet();

    let ethWallet = new EthWallet();
    let ethWalletCreds = await wallet.GenWallet(ethWallet, "evm", timestamp);
    let btcWallet = new BtcWallet();
    let btcWalletCreds = await wallet.GenWallet(btcWallet, "utxo", timestamp);


    console.log("eth wallet creds: ", ethWalletCreds, "\n\n");
    console.log("btc wallet creds: ", btcWalletCreds, "\n\n");




    let account_creation_response = await wallet.createAccount(ethWalletCreds, timestamp_str, timestamp_isos);
    console.log(account_creation_response);

    const accountId = account_creation_response.data[0].accountId;

    let account_addresses = await wallet.getAccountDetails(accountId, timestamp_isos);
    if (account_addresses === null) {
      console.error('Error retrieving account details');
    } else {
      console.log(account_addresses.data[0]);
    }


}

await run();