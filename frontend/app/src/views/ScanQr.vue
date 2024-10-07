<template>
    <div class="main-container">
        <BackArrow @go-back="navigateBack" />
        <div class="flex-column-dd">
            <span class="scan-qr-code">Scan QR Code</span
            ><span class="find-qr-address">Find QR that contains address</span>
            <div class="rectangle">
                <div class="flex-column-fdb">
                    <div class="vector"></div>
                    <div class="vector-1"></div>
                </div>
                <div class="vector-2"></div>
            </div>
            <div class="vector-3"></div>
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

<style src="../assets/scan_qr.css"></style>
