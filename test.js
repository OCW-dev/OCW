import express from "express";

import https from "https";
import fs from "fs";
import path from 'path';

import YooKassa from 'yookassa';

import DataBase from './db_api.js';
import Bot from './bot.js';

import dotenv from 'dotenv';

dotenv.config()



const db_class = new DataBase(process.env.DATABASE_PATH);


const yooKassa = new YooKassa({
    shopId: process.env.YOOKASSA_SHOPID,
    secretKey: process.env.YOOKASSA_SECRETKEY
});

let url_ = "https://ocwvpn.ru:8876";


const app = express();
const router = express.Router();

const port = process.env.PORT;

app.use(express.static(path.join(process.cwd(), 'dist')));

router.get('/', (req,res) => { 
    res.sendFile(path.join(process.cwd(), "dist", "index.html")); 
})


router.get('/payment', async (req, res) => {
    const customData = {
        amount: req.query.amount,
        chatId: req.query.chatid,
      };

    const payment = await yooKassa.createPayment({
        amount: {
            value: customData["amount"],
            currency: "RUB"
        },
        // payment_method_data: {
        //     "type": "sbp"
        // },
        capture: true,
        confirmation: {
            type: "redirect",
            return_url: url_ + `?after_pay=${customData["amount"]}`
        },
        metadata: {
            chat_id: customData["chatId"]
        },
        description: "Покупка OVP"
    });

    res.redirect(payment.confirmation.confirmation_url);
});

app.get('/data/:id', async (req, res) => {
    res.json(await db_class.get_user_data(req.params.id));
})


app.use('/', router);


const options = {
    key: fs.readFileSync("/root/cert/ocwvpn.ru/privkey.pem"),
    cert: fs.readFileSync("/root/cert/ocwvpn.ru/fullchain.pem")
};

https.createServer(options, app)
    .listen(port, function (req, res) {
    console.log("Server started at port 8876"); // Deploy
});

// app.listen(port, () => {
//     console.log('Server is up on port ' + port); // Test
// });



import { XuiApi } from "3x-ui";
import Vpn from "./vpn.js";


//http://45.10.42.216:443/BD7y5xUm1sU7NPg
const username = process.env.USERNAME;
const password = process.env.PASSWORD;
const webPath = process.env.WEBPATH;
// ocwvpn.ru/DcBAsNyJN3k2WZc/

const api = new XuiApi(`https://${username}:${password}@ocwvpn.ru:35790/${webPath}`);
api.debug = true; // Enables debug mode - defualt is false
api.stdTTL = 60; // Cache time in seconds - default is 10s


const vpn_class = new Vpn(api);

// vpn_class.addNewClient(api, 1, "872365278", "nsdognso", 90, "OCW-VLESS-NL");



const bot = new Bot(process.env.BOT_TOKEN, db_class);

bot.run();