<template>
    <div class="main-container">
        <BackArrow @go-back="navigateBack" />
        <span class="select-crypt-to-send">Select crypto to send</span>
        <div class="flex-row-f">
            <span class="eth">ETH</span><span class="dot">0.393039</span>
            <div class="picture-eth"></div>
            <span class="dollar-amount">$2,784.59</span
            ><span class="percentage">+0.63%</span
            ><span class="dollar-amount-1">$273,093</span>
        </div>
        <div class="flex-row">
            <span class="currency">USDT</span
            ><span class="currency-value">50.6797</span>
            <div class="image"></div>
            <span class="dollar-value">$1.0037</span
            ><span class="percentage-change">+0.63%</span
            ><span class="dollar-amount-2">$61,768</span>
        </div>
        <div class="flex-row-fc">
            <span class="decimal-number">7.238</span>
            <div class="regroup-colon">
                <div class="usdc-picture"></div>
                <span class="usdc">USDC</span>
            </div>
        </div>
        <div class="flex-row-f-3">
            <span class="dollar">$69.45</span>
            <div class="regroup">
                <span class="dollar-4">$0.9995</span
                ><span class="negative-percent">-0.02%</span>
            </div>
        </div>
        <div class="flex-row-c">
            <span class="eth-5">ETH</span><span class="dot-6">0.393039</span>
            <div class="picture-eth-7"></div>
            <span class="dollar-8">$2,784.59</span
            ><span class="percentage-9">+0.63%</span
            ><span class="dollar-a">$273,093</span>
        </div>
    </div>
</template>

<script>
import BackArrow from "../components/icons/BackButton.vue";

export default {
    components: {
        BackArrow,
    },
    methods: {
        navigateBack() {
            this.$router.go(-1); // Этот метод вернет на предыдущую страницу, если вы используете Vue Router
        },
    },
};
</script>

<style src="../assets/select_crypto_to_send.css"></style>
