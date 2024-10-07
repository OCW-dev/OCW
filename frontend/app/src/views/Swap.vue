<template>
    <div class="main-container">
        <BackArrow @go-back="navigateBack" />
        <span class="swap">Swap</span>
        <div class="rectangle">
            <div class="flex-row-bc">
                <span class="balance">Balance: 0</span
                ><span class="send">Send </span>
            </div>
            <div class="flex-row-eb">
                <div class="picture-eth"></div>
                <span class="eth">ETH</span><span class="zero">0</span>
            </div>
        </div>
        <div class="rectangle-1">
            <span class="receive">Receive</span>
            <div class="flex-row-da">
                <span class="select">Select</span><span class="zero-2">0</span>
            </div>
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

<style src="../assets/swap.css"></style>
