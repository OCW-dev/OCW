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

    <CryptoList />
    
  </div>
</template>

<script>
import CryptoList from '../assets/components/CryptoList.vue';

export default {
  components: {
    CryptoList
  },
  data() {
    return {
      selected: 'Wallet',
      cryptoData: {

      }
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
