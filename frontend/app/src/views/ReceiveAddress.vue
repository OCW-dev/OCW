<template>
    <div class="main-container">
        <BackArrow @go-back="navigateBack" />
        <span class="receiving-address">Receiving address</span
        ><span class="enter-wallet-name"
            >Enter wallet name or Ens domain name </span
        ><button class="rectangle">
            <span class="paste">Paste</span>
            <div class="vector"></div>
        </button>
        <div class="line"></div>
        <div class="group"></div>
        <div class="arrow"></div>
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

<style src="../assets/receive_address.css"></style>
