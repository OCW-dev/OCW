<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
    <div class="main-container">
        <div class="flex-row-ba">
            <div class="rectangle">
                <div class="rectangle-1">
                    <span class="wallet">Wallet</span>
                </div>
                <span class="contest">Contest</span>
            </div>
            <div class="regroup">
                <div class="btn-notifications"></div>
                <div class="btn-search"></div>
            </div>
            <div class="icon"></div>
        </div>
        <div class="rectangle-2">
            <div class="flex-column">
                <span class="comma">783,930</span>
                <div class="wallet-c-account">
                    <span class="wallet-c">Wallet C </span
                    ><span class="empty"> </span
                    ><span class="account">Account </span>
                </div>
                <div class="btn-copy"></div>
            </div>
            <div class="image"></div>
            <span class="dollar">$</span>
        </div>
        <div class="flex-row">
            <div class="rectangle-3">
                <div class="ellipse"></div>
                <RouterLink class="receive" to="select_crypto_to_receive"
                    >Receive</RouterLink
                >
                <div class="icon-4"></div>
            </div>
            <div class="rectangle-5">
                <div class="ellipse-6"></div>
                <RouterLink class="send" to="select_crypto_to_send"
                    >Send</RouterLink
                >
                <div class="icon-7"></div>
            </div>
            <div class="rectangle-8">
                <div class="ellipse-9"></div>
                <RouterLink class="swap" to="swap">Swap</RouterLink>
                <div class="vector"></div>
            </div>
        </div>
        <div class="flex-row-e">
            <span class="eth">ETH</span><span class="dot">0.393039</span>
            <div class="picture-eth"></div>
            <span class="dollar-a">$2,784.59</span
            ><span class="percentage">+0.63%</span
            ><span class="dollar-b">$273,093</span>
        </div>
        <div class="flex-row-ec">
            <span class="usdt">USDT</span><span class="text-11">50.6797</span>
            <div class="pic-7"></div>
            <span class="text-12">$1.0037</span
            ><span class="text-13">+0.63%</span
            ><span class="text-14">$61,768</span>
        </div>
        <div class="section-6">
            <span class="text-15">7.238</span>
            <div class="section-7">
                <div class="img-7"></div>
                <span class="text-16">USDC</span>
            </div>
        </div>
        <div class="wrapper-3">
            <span class="text-17">$69.45</span>
            <div class="wrapper-4">
                <span class="text-18">$0.9995</span
                ><span class="text-19">-0.02%</span>
            </div>
        </div>
        <div class="box-6">
            <span class="text-1a">ETH</span
            ><span class="text-1b">0.393039</span>
            <div class="img-8"></div>
            <span class="text-1c">$2,784.59</span
            ><span class="text-1d">+0.63%</span
            ><span class="flex-row-b">$273,093</span>
        </div>
        <div class="div">
            <span class="usdt-c">USDT</span><span class="dot-d">50.6797</span>
            <div class="picture-type-png"></div>
            <span class="div-e">$1.0037</span
            ><span class="plus-percent">+0.63%</span
            ><span class="flex-row-d">$61,768</span>
        </div>
        <div class="div-f">
            <span class="dot-10">7.238</span>
            <div class="regroup-11">
                <div class="picture-usdc-png"></div>
                <span class="usdc">USDC</span>
            </div>
        </div>
        <div class="flex-row-eaa">
            <span class="div-12">$69.45</span>
            <div class="regroup-13">
                <span class="div-14">$0.9995</span
                ><span class="minus-percent">-0.02%</span>
            </div>
        </div>
        <div class="flex-row-15">
            <span class="eth-16">ETH</span><span class="dot-17">0.393039</span>
            <div class="picture-eth-18"></div>
            <span class="dollar-amount">$2,784.59</span
            ><span class="percentage-increase">+0.63%</span
            ><span class="total-amount">$273,093</span>
        </div>
        <div class="flex-row-a">
            <span class="currency-usdt">USDT</span
            ><span class="exchange-rate">50.6797</span>
            <div class="picture-type"></div>
            <span class="dollar-amount-19">$1.0037</span
            ><span class="percentage-increase-1a">+0.63%</span
            ><span class="total-amount-1b">$61,768</span>
        </div>
        <div class="flex-row-c">
            <span class="exchange-rate-1c">7.238</span>
            <div class="regroup-1d">
                <div class="picture-usdc"></div>
                <span class="currency-usdc">USDC</span>
            </div>
        </div>
        <div class="flex-row-c-1e">
            <span class="dollar-amount-1f">$69.45</span>
            <div class="regroup-20">
                <span class="dollar-amount-21">$0.9995</span
                ><span class="percentage-decrease">-0.02%</span>
            </div>
        </div>
    </div>
</template>

<style src="../assets/main.css"></style>
