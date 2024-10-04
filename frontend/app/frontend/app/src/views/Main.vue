<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <div class="main-container">
    
    <div class="flex-row-ba">
        <div class="switcher">
        <div class="option" :class="{ selected: selected === 'Contest' }" @click="handleClick('Contest')"> Contest </div>
        <div class="option" :class="{ selected: selected === 'Wallet' }" @click="handleClick('Wallet')"> Wallet </div>
        </div>
        <div class="regroup">
            <button class="btn-notifications"></button>
            <button class="btn-search"></button>
        </div>
        <button class="icon"></button>
    </div>

    
    
    <div class="rectangle-2">
      <div class="flex-column">
        <span class="comma">783,930</span>
        <div class="wallet-c-account">
          <span class="wallet-c">Wallet C </span><span class="empty"> </span
          ><span class="account">Account </span>
        </div>
        <button class="btn-copy"></button>
      </div>
      <div class="image"></div>
      <span class="dollar">$</span>
    </div>

    <div class="flex-row">
      <RouterLink class="rectangle-3" to="select_network">
        <div class="ellipse"></div>
        <span class="receive">Receive</span>
        <div class="icon-4"></div>
      </RouterLink>

      <RouterLink class="rectangle-5" to="select_crypto_to_send">
        <div class="ellipse-6"></div>
        <span class="send">Send</span>
        <div class="icon-7"></div>
      </RouterLink>

      <RouterLink class="rectangle-8" to="swap">
        <div class="ellipse-9"></div>
        <span class="swap">Swap</span>
        <div class="vector"></div>
      </RouterLink>
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
      <div class="img-8"></div>
      <span class="text-12">$1.0037</span><span class="text-13">+0.63%</span
      ><span class="text-14">$61,768</span>
    </div>
    <div class="section-5">
      <span class="text-15">7.238</span>
      <div class="box-2">
        <div class="pic-6"></div>
        <span class="text-16">USDC</span>
      </div>
    </div>
    <div class="box-3">
      <span class="text-17">$69.45</span>
      <div class="section-6">
        <span class="text-18">$0.9995</span><span class="text-19">-0.02%</span>
      </div>
    </div>
    <div class="box-4">
      <span class="text-1a">ETH</span><span class="text-1b">0.393039</span>
      <div class="pic-7"></div>
      <span class="text-1c">$2,784.59</span><span class="text-1d">+0.63%</span
      ><span class="flex-row-b">$273,093</span>
    </div>
    <div class="div">
      <span class="usdt-c">USDT</span><span class="dot-d">50.6797</span>
      <div class="picture-type-png"></div>
      <span class="dollar-e">$1.0037</span
      ><span class="plus-percent">+0.63%</span
      ><span class="flex-row-d">$61,768</span>
    </div>
    <div class="dot-f">
      <span class="regroup-10">7.238</span>
      <div class="regroup-11">
        <div class="picture-usdc"></div>
        <span class="usdc">USDC</span>
      </div>
    </div>
    <div class="flex-row-eaa">
      <span class="dollar-12">$69.45</span>
      <div class="regroup-13">
        <span class="dollar-14">$0.9995</span
        ><span class="minus-percent">-0.02%</span>
      </div>
    </div>
    <div class="flex-row-15">
      <span class="eth-16">ETH</span><span class="dot-17">0.393039</span>
      <div class="picture-eth-18"></div>
      <span class="dollar-sign">$2,784.59</span
      ><span class="percentage-up">+0.63%</span
      ><span class="dollar-amount">$273,093</span>
    </div>
    <div class="flex-row-a">
      <span class="usdt-19">USDT</span><span class="usdt-amount">50.6797</span>
      <div class="picture-type"></div>
      <span class="dollar-sign-1a">$1.0037</span
      ><span class="percentage-up-1b">+0.63%</span
      ><span class="dollar-amount-1c">$61,768</span>
    </div>
    <div class="flex-row-c">
      <span class="number-amount">7.238</span>
      <div class="regroup-1d">
        <div class="picture-usdc-1e"></div>
        <span class="usdc-1f">USDC</span>
      </div>
    </div>
    <div class="flex-row-c-20">
      <span class="dollar-amount-21">$69.45</span>
      <div class="regroup-22">
        <span class="dollar-sign-23">$0.9995</span
        ><span class="percentage-down">-0.02%</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: 'Wallet',
    };
  },
  methods: {
    handleClick(option) {
      this.selected = option;
    },
  },
};
</script>
<style src="../assets/main.css"></style>
