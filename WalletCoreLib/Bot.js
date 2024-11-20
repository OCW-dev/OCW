
import { EthWallet, MessageTypes } from "@okxweb3/coin-ethereum";
import { bip39, BigNumber } from "@okxweb3/crypto-lib";

import Wallet from "./Wallet.js";
import TelegramBot from 'node-telegram-bot-api';
import { mergeSignedBuyingPsbt } from "@okxweb3/coin-bitcoin";
const API_KEY_BOT = '7941989275:AAFXuwVUSWklQWPgVgeJQ8UD4dL1t5uiH4k';

const bot = new TelegramBot(API_KEY_BOT, {
    polling: {
        interval: 300,
        autoStart: true    
    }
});

const commands = [
    {
        command: "start",
        description: "Start the bot"
    },
    {
        command: "menu",
        description: "Show menu"
    }
];

bot.setMyCommands(commands);

bot.on("polling_error", err => console.log(err.data.error.message));

bot.on('text', async (msg) => {
    const chatId = msg.chat.id;

    try {
        if (msg.text === '/start') {
            await bot.sendMessage(chatId, "Hello, it's OCW Wallet Test Bot!");
        }
        else if (msg.text === '/menu') {
            const inlineKeyboard = {
                reply_markup: {
                    inline_keyboard: [
                        [
                            { text: 'Import Wallet', callback_data: 'import' },
                            { text: 'Create Wallet', callback_data: 'create' }
                        ]
                    ]
                }
            };
            
            await bot.sendMessage(chatId, "Please choose an option:", inlineKeyboard);
        }

    }
    catch(error) {
        console.log(error);
    }
});

const userWallets = {};
const msgsToSpecificDetails = {};



const inlineKeyboardWalletMenu = {
    reply_markup: {
        inline_keyboard: [
            [
                { text: '↗️Send', callback_data: 'send' },
                { text: '↙️Receive', callback_data: 'receive' },
                { text: '⏳History', callback_data: 'history' },
                { text: '💸Your Assets', callback_data: 'assets' }
            ]
        ]
    }
};



// async function sendTx(msg, userWallets) {
//     const amount = msg.text;
//     const walletInfoForReceive = userWallets[chatId];

//     let txSigningInfo = await wallet.getSigningInfo('1', walletInfoForReceive.address, toAddress, amount, timestamp_isos);
//     console.log(txSigningInfo.data[0]);

//     let txSing = await wallet.buildTx(walletInfoForReceive.address, ethWallet, toAddress, walletInfoForReceive.privateKey);
//     console.log(txSing);

//     let broadcastTx = await wallet.broadcastTx(txSing, accountId, '1', walletInfoForReceive.address, timestamp_isos);
//     console.log(broadcastTx);
// }


bot.on('callback_query', async (callbackQuery) => {
    const chatId = callbackQuery.message.chat.id;
    const messageId = callbackQuery.message.message_id; // Get the message ID
    const data = callbackQuery.data;

    let now = new Date();
    let timestamp_isos = now.toISOString();
    let timestamp = now.getTime();
    let timestamp_str = timestamp.toString();

    let wallet = new Wallet();
    let ethWallet = new EthWallet();

    try {
        switch(data) {
            case 'import':
                await bot.answerCallbackQuery(callbackQuery.id);
                const importKeyboard = {
                    reply_markup: {
                        inline_keyboard: [
                            [
                                { text: '12 words', callback_data: '12_words' },
                                { text: '24 words', callback_data: '24_words' }
                            ]
                        ]
                    }
                };
                await bot.editMessageReplyMarkup(importKeyboard.reply_markup, { chat_id: chatId, message_id: messageId });
                break;
        
                case '12_words':
                case '24_words':
                    await bot.answerCallbackQuery(callbackQuery.id);
                    const expectedWords = data === '12_words' ? 12 : 24;
                    const responseMessage = await bot.sendMessage(chatId, `Enter your mnemonics, they should contain ${expectedWords} words:`);

                    setTimeout(() => {
                        bot.deleteMessage(chatId, responseMessage.message_id).catch(err => console.error(err));
                    }, 5000);

                    bot.once('text', async (msg) => {
                        const userInput = msg.text;
                        const words = userInput.trim().split(/\s+/);
                        if (words.length !== expectedWords) {
                            const mnemonicMessage = await bot.sendMessage(chatId, `Mnemonics should contain ${expectedWords} words.`);
                            
                            setTimeout(() => {
                                bot.deleteMessage(chatId, mnemonicMessage.message_id).catch(err => console.error(err));
                            }, 5000);
                            
                            return;
                        }

                        const isValid = bip39.validateMnemonic(userInput);
                        if (!isValid) {
                            const mnemonicMessage = await bot.sendMessage(chatId, "Mnemonics are incorrect");
                            
                            setTimeout(() => {
                                bot.deleteMessage(chatId, mnemonicMessage.message_id).catch(err => console.error(err));
                            }, 5000);
                            
                            return;
                        } else {
                            const mnemonicMessage = await bot.sendMessage(chatId, "Mnemonics approved!");
                            
                            setTimeout(() => {
                                bot.deleteMessage(chatId, mnemonicMessage.message_id).catch(err => console.error(err));
                            }, 5000);

                            let walletInfo = await wallet.importWallet(userInput, ethWallet, timestamp_isos, timestamp_str);
                            console.log(walletInfo);
                            // console.log(walletInfo.balance);

                            userWallets[chatId] = walletInfo;

                            console.log(walletInfo.accountId);
                            
                            

                            
                            //TODO : implement greeting
                            await bot.sendMessage(chatId, `Hello, ${chatId}\n💰 $${walletInfo.balance}\n <code>${walletInfo.address}</code>`, inlineKeyboardWalletMenu);
                        }
                    });
                    break;
            
                case 'send': //TODO :  implement send
                    const sendKeyboard = {
                        reply_markup: {
                            inline_keyboard: [
                                [
                                    { text: 'send on evm', callback_data: 'send_evm' },
                                    { text: 'send btc', callback_data: 'send_btc' },
                                    { text: 'your option', callback_data: 'user_option'}
                                ]
                            ]
                        }
                    };
                    await bot.sendMessage(chatId, 'Choose.  Send ETH or BTC or your option', sendKeyboard);
                    // await bot.sendMessage(chatId, 'Enter the recipient address:');
                    // bot.once('text', async (msg) => {
                    //     const toAddress = msg.text;

                    //     await  bot.sendMessage(chatId, 'Enter the amount:');
                    //     bot.once('text', async (msg) => {
                    //         await sendTx(msg, userWallets);
                    //     })
                    // })
                    


                    break;
                    case 'send_evm':
                        const selectTokenKeyboard = {
                            reply_markup: {
                                inline_keyboard: [
                                    [
                                        { text: 'BNB', callback_data: 'send_bnb' },
                                        { text: 'ETH', callback_data: 'send_eth' },
                                        { text: 'your option', callback_data: 'user_option'}
                                    ]
                                ]
                            }
                        };
                        await bot.sendMessage(chatId, 'choose specific', selectTokenKeyboard);
                        break;

                        case 'send_bnb': // TODO : Implement logic of chosing specific token ( Now only bnb native )
                            let chainIndex = `56`;

                            await bot.sendMessage(chatId, 'Enter the recipient address:');
                            bot.once('text', async (msg) => {
                                
                                const toAddress = msg.text;
                                
                                await bot.sendMessage(chatId, 'Enter the amount:');
                                bot.once('text', async (msg) => {
                                    
                                    const amount = msg.text;
                                    const walletInfoForSend = userWallets[chatId];
                                    
                                    let txCreds = wallet.sendTx(chainIndex, walletInfoForSend.address, toAddress, amount, timestamp_isos, ethWallet, walletInfoForSend.privateKey, ``, walletInfoForSend.accountId);
                                    console.log(txCreds);
                                    await bot.sendMessage(chatId, `${txCreds.singInfo}`);

                                })
                                
                            })



                        break;
            
                    case 'receive':
                        const receiveOptionsKeyboard = {
                            reply_markup: {
                                inline_keyboard: [
                                    [
                                        { text: 'Ethereum', callback_data: 'eth' },
                                        { text: 'Bitcoin', callback_data: 'btc' },
                                        { text: 'Ton', callback_data: 'ton' },
                                        { text: 'Solana', callback_data: 'sol' },
                                        { text: 'BNB', callback_data: 'bnb' },
                                    ]
                                ]
                            }
                        };
                        await bot.sendMessage(chatId, `Select blockchain:`, receiveOptionsKeyboard);
                        break;
                    
                    case 'eth':
                        const walletInfoForReceive = userWallets[chatId];
                            const ethMessage = await bot.sendMessage(chatId, `Your Ethereum address: <code>${walletInfoForReceive.address}</code>`, { parse_mode: "HTML" });

                            setTimeout(() => {
                                bot.deleteMessage(chatId, ethMessage.message_id).catch(err => console.error(err));
                            }, 5000);

                        break;

                    case 'history':

                    const historyOptionsKeyboard = {
                        reply_markup: {
                            inline_keyboard: [
                                [
                                    { text: 'more info', callback_data: 'more' },                                    ]
                                ]
                           }
                    };
                    
                    const walletInfoForhistory = userWallets[chatId];
                    const history = await wallet.getTxHistoryByAccount(walletInfoForhistory.accountId, timestamp_isos);
                    

                    const transactionList = history.data[0].transactionList;

                    const fromAddress = transactionList.from; // Adjust index if there are multiple addresses
                    
                    
                    for (let index = 0; index < transactionList.length; index++) {                            
                        const element = transactionList[index];
                        const hisMsg = await bot.sendMessage(chatId, `transaction ${index + 1}: \n+${element.amount} ${element.symbol}`, historyOptionsKeyboard);
                        msgsToSpecificDetails[hisMsg.message_id] = {
                            "txHash": element.txHash,
                            "chainIndex": element.chainIndex,
                            "amount":  element.amount
                        }
                        
                        
                    }

                    //\ntxHash - ${element.txHash}\ntxTime - ${element.txTime}\ntoken address - ${element.tokenAddress}\nfrom - ${element.from}
                    
                    break;

                    case 'more':
                        
                    const moreInfoOptionsKeyboard = {
                            reply_markup: {
                                inline_keyboard: [
                                    [
                                        { text: 'close', callback_data: 'close' },                             
                                    ]
                                ]
                            }
                        };
                    
                        const msgId = callbackQuery.message.message_id; // Получаем идентификатор сообщения
                        const transactionDetails = msgsToSpecificDetails[msgId]; // Извлекаем информацию о транзакции по идентификатору сообщения

                        if (transactionDetails) {
                            const { txHash, chainIndex, amount } = transactionDetails;

                      
                            const txInfo = await wallet.getSpecificTx(chainIndex, txHash, timestamp_isos);
                            console.log(txInfo);

                            
                            console.log(txInfo.data[0].fromDetails);

                            
                            await bot.sendMessage(chatId, `From: ${JSON.stringify(txInfo.data[0].fromDetails)}\n\nChain Index: ${chainIndex}\n\nAmount: ${amount}\n\nTransaction Hash: ${txHash}\n\nTransaction time: ${txInfo.data[0].txTime}\n\nGas limit: ${txInfo.data[0].gasLimit}\n\nGas Used: ${txInfo.data[0].gasUsed}\n\nGas price: ${txInfo.data[0].gasPrice}\n\nNonce: ${txInfo.data[0].nonce}\n\nTransaction status: ${txInfo.data[0].txStatus}`,  moreInfoOptionsKeyboard);
                        } else {
                            await bot.sendMessage(chatId, "Transaction details not found.");
                        }
                        break;
                    case 'close':
                        const delmMsgId = callbackQuery.message.message_id;
                        await bot.deleteMessage(chatId, delmMsgId);

                case 'assets':
                    // Handle assets logic here
                    break;

            case 'create':
                
                await bot.answerCallbackQuery(callbackQuery.id);
                let ethWalletCreds = await wallet.GenWallet(ethWallet, "evm", timestamp);
                console.log("eth wallet creds: ", ethWalletCreds, "\n\n");

                let account_creation_response = await wallet.createAccount(ethWalletCreds, timestamp_str, timestamp_isos);
                console.log(account_creation_response);

                const accountId = account_creation_response.data[0].accountId;
                console.log(accountId);

                let account_addresses = await wallet.getAccountDetails(accountId, timestamp_isos);
                if (account_addresses === null) {
                    console.error('Error retrieving account details');
                } else {
                    console.log(account_addresses.data[0]);
                }

                const response = await wallet.getTotalBalanceByAddress(account_addresses.data[0].addresses[0].address, `1`, timestamp_isos);
                const totalValue = response.data[0].totalValue;

                await bot.sendMessage(chatId, `❗Always keep in mind that if you lose your seed phrase or private keys you won't be able to recover your assets\n\n📍Write down your seed phrase. \n\nYour mnemonics:\n<code>${ethWalletCreds.mnemonic}</code>`, { parse_mode: "HTML" });
                
                
                let walletInfo = await wallet.importWallet(ethWalletCreds.mnemonic, ethWallet, timestamp_isos, timestamp_str);
                            console.log(walletInfo);
                            console.log(walletInfo.balance);

                            userWallets[chatId] = walletInfo;

                            console.log(walletInfo.accountId);
                            
                            
                            //TODO : implement greeting
                            await bot.sendMessage(chatId, `Hello, ${chatId}\n💰 $${walletInfo.balance}\n <code>${walletInfo.address}</code>`, inlineKeyboardWalletMenu);
                       


                break; 
        }
    } catch(error) {
        console.log(error);
    }
});