<template>
  <div class="main-container">
    <RouterLink class="back" to="/select_network"></RouterLink>
    <span class="select-crypt-receive">Select crypto to receive</span>
    <SelectCryptoR/>
  </div>
</template>

<script setup>
import SelectCryptoR from "../assets/components/SelectCryptoRList.vue";
</script>

<style scoped>

.back {
  position: absolute;
  width: calc(10 * var(--rpx));
  height: calc(20 * var(--rpx));
  top: calc(10 * var(--rpx));
  left: calc(30.5 * var(--rpx));
  background: url(../assets/images/80c6e76d-d2e0-4f0a-bb6e-2865912be671.png) no-repeat center;
  background-size: 100% 100%;
  z-index: 1;
}
.select-crypt-receive {
  display: block;
  position: relative;
  height: calc(33 * var(--rpx));
  margin: calc(29.99999998711054 * var(--rpx)) 0 0 calc(30 * var(--rpx));
  color: #ffffff;
  font-family: Montserrat, var(--default-font-family);
  font-size: calc(25 * var(--rpx));
  font-weight: 500;
  line-height: calc(32.63999938964844 * var(--rpx));
  text-align: left;
  white-space: nowrap;
  z-index: 1;
  top: calc(10 * var(--rpx));
}
.rectangle {
  position: relative;
  width: calc(372 * var(--rpx));
  height: calc(34 * var(--rpx));
  margin: calc(23 * var(--rpx)) 0 0 calc(27 * var(--rpx));
  background: #212121;
  z-index: 44;
  overflow: hidden;
  border-radius: calc(30 * var(--rpx));
}
.vector {
  position: absolute;
  width: 4.3%;
  height: 47.06%;
  top: 26.47%;
  left: 4.03%;
  background: url(../assets/images/72ddd738-905b-4507-92d9-07020a16b229.png)
    no-repeat center;
  background-size: 100% 100%;
  z-index: 45;
}
.search-crypto {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  position: absolute;
  height: calc(12 * var(--rpx));
  top: calc(11 * var(--rpx));
  left: calc(36 * var(--rpx));
  color: #949494;
  font-family: Montserrat, var(--default-font-family);
  font-size: calc(10 * var(--rpx));
  font-weight: 800;
  line-height: calc(12 * var(--rpx));
  text-align: left;
  white-space: nowrap;
  z-index: 46;
}
.flex-row {
  position: relative;
  width: calc(375 * var(--rpx));
  height: calc(32 * var(--rpx));
  margin: calc(23 * var(--rpx)) 0 0 calc(27 * var(--rpx));
  z-index: 8;
}
.eth {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  position: absolute;
  height: calc(20 * var(--rpx));
  top: 0;
  left: calc(39 * var(--rpx));
  color: #ffffff;
  font-family: Montserrat, var(--default-font-family);
  font-size: calc(16 * var(--rpx));
  font-weight: 600;
  line-height: calc(19.503999710083008 * var(--rpx));
  text-align: left;
  white-space: nowrap;
  z-index: 4;
}
.amount {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  position: absolute;
  height: calc(20 * var(--rpx));
  top: 0;
  left: calc(301 * var(--rpx));
  color: #ffffff;
  font-family: Montserrat, var(--default-font-family);
  font-size: calc(16 * var(--rpx));
  font-weight: 600;
  line-height: calc(19.503999710083008 * var(--rpx));
  text-align: left;
  white-space: nowrap;
  z-index: 5;
}
.picture-eth {
  position: absolute;
  top: calc(1 * var(--rpx));
  right: calc(345 * var(--rpx));
  bottom: calc(1 * var(--rpx));
  left: 0;
  background: url(../assets/images/fcec7b19-4500-4cbe-8ca0-70bebc422621.png)
    no-repeat center;
  background-size: cover;
  z-index: 3;
  overflow: hidden;
  border-radius: calc(17 * var(--rpx));
}
.price {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  position: absolute;
  height: calc(12 * var(--rpx));
  top: calc(20 * var(--rpx));
  left: calc(39 * var(--rpx));
  color: #545454;
  font-family: Montserrat, var(--default-font-family);
  font-size: calc(10 * var(--rpx));
  font-weight: 600;
  line-height: calc(12 * var(--rpx));
  text-align: left;
  white-space: nowrap;
  z-index: 6;
}
.plus-zero-six-three-percent {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  position: absolute;
  height: calc(12 * var(--rpx));
  top: calc(20 * var(--rpx));
  left: calc(92 * var(--rpx));
  color: #26de5b;
  font-family: Montserrat, var(--default-font-family);
  font-size: calc(10 * var(--rpx));
  font-weight: 600;
  line-height: calc(12 * var(--rpx));
  text-align: left;
  white-space: nowrap;
  z-index: 8;
}
.text-7 {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  position: absolute;
  height: calc(12 * var(--rpx));
  top: calc(20 * var(--rpx));
  left: calc(301 * var(--rpx));
  color: #545454;
  font-family: Montserrat, var(--default-font-family);
  font-size: calc(10 * var(--rpx));
  font-weight: 600;
  line-height: calc(12 * var(--rpx));
  text-align: left;
  white-space: nowrap;
  z-index: 7;
}
.flex-row-1 {
  position: relative;
  width: calc(365 * var(--rpx));
  height: calc(32 * var(--rpx));
  margin: calc(25 * var(--rpx)) 0 0 calc(27 * var(--rpx));
  z-index: 29;
}
.usdt {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  position: absolute;
  height: calc(20 * var(--rpx));
  top: 0;
  left: calc(39 * var(--rpx));
  color: #ffffff;
  font-family: Montserrat, var(--default-font-family);
  font-size: calc(16 * var(--rpx));
  font-weight: 600;
  line-height: calc(19.503999710083008 * var(--rpx));
  text-align: left;
  white-space: nowrap;
  z-index: 24;
}
.fifty-point-six-seven-nine-seven {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  position: absolute;
  height: calc(20 * var(--rpx));
  top: 0;
  left: calc(301 * var(--rpx));
  color: #ffffff;
  font-family: Montserrat, var(--default-font-family);
  font-size: calc(16 * var(--rpx));
  font-weight: 600;
  line-height: calc(19.503999710083008 * var(--rpx));
  text-align: left;
  white-space: nowrap;
  z-index: 25;
}
.picture-png {
  position: absolute;
  top: calc(1 * var(--rpx));
  right: calc(335 * var(--rpx));
  bottom: calc(1 * var(--rpx));
  left: 0;
  background: url(../assets/images/01abcae0-0b19-4b1e-91a2-b2f570a797ca.png)
    no-repeat center;
  background-size: cover;
  z-index: 29;
  overflow: hidden;
  border-radius: calc(17 * var(--rpx));
}
.text-a {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  position: absolute;
  height: calc(12 * var(--rpx));
  top: calc(20 * var(--rpx));
  left: calc(39 * var(--rpx));
  color: #545454;
  font-family: Montserrat, var(--default-font-family);
  font-size: calc(10 * var(--rpx));
  font-weight: 600;
  line-height: calc(12 * var(--rpx));
  text-align: left;
  white-space: nowrap;
  z-index: 26;
}
.plus-zero-six-three-percent-2 {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  position: absolute;
  height: calc(12 * var(--rpx));
  top: calc(20 * var(--rpx));
  left: calc(82 * var(--rpx));
  color: #26de5b;
  font-family: Montserrat, var(--default-font-family);
  font-size: calc(10 * var(--rpx));
  font-weight: 600;
  line-height: calc(12 * var(--rpx));
  text-align: left;
  white-space: nowrap;
  z-index: 28;
}
.text-c {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  position: absolute;
  height: calc(12 * var(--rpx));
  top: calc(20 * var(--rpx));
  left: calc(301 * var(--rpx));
  color: #545454;
  font-family: Montserrat, var(--default-font-family);
  font-size: calc(10 * var(--rpx));
  font-weight: 600;
  line-height: calc(12 * var(--rpx));
  text-align: left;
  white-space: nowrap;
  z-index: 27;
}
.flex-row-3 {
  position: relative;
  width: calc(344 * var(--rpx));
  height: calc(30 * var(--rpx));
  margin: calc(25 * var(--rpx)) 0 0 calc(27 * var(--rpx));
  z-index: 36;
}
.seven-point-two-three-eight {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  position: absolute;
  height: calc(20 * var(--rpx));
  top: 0;
  left: calc(301 * var(--rpx));
  color: #ffffff;
  font-family: Montserrat, var(--default-font-family);
  font-size: calc(16 * var(--rpx));
  font-weight: 600;
  line-height: calc(19.503999710083008 * var(--rpx));
  text-align: left;
  white-space: nowrap;
  z-index: 32;
}
.regroup {
  position: absolute;
  top: 0;
  right: calc(257 * var(--rpx));
  bottom: 0;
  left: 0;
  z-index: 36;
}
.usdc-picture {
  position: absolute;
  top: 0;
  right: calc(57 * var(--rpx));
  bottom: 0;
  left: 0;
  background: url(../assets/images/449300a2-735d-4b43-b463-6dd5c34cdbac.png)
    no-repeat center;
  background-size: cover;
  z-index: 36;
  overflow: hidden;
  border-radius: calc(17 * var(--rpx));
}
.usdc {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  position: absolute;
  height: calc(20 * var(--rpx));
  top: 0;
  left: calc(39 * var(--rpx));
  color: #ffffff;
  font-family: Montserrat, var(--default-font-family);
  font-size: calc(16 * var(--rpx));
  font-weight: 600;
  line-height: calc(19.503999710083008 * var(--rpx));
  text-align: left;
  white-space: nowrap;
  z-index: 31;
}
.flex-row-a {
  position: relative;
  width: calc(296 * var(--rpx));
  height: calc(12 * var(--rpx));
  margin: calc(-10 * var(--rpx)) 0 0 calc(66 * var(--rpx));
  z-index: 35;
}
.dollar-amount {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  position: absolute;
  height: calc(12 * var(--rpx));
  top: 0;
  left: calc(262 * var(--rpx));
  color: #545454;
  font-family: Montserrat, var(--default-font-family);
  font-size: calc(10 * var(--rpx));
  font-weight: 600;
  line-height: calc(12 * var(--rpx));
  text-align: left;
  white-space: nowrap;
  z-index: 34;
}
.regroup-4 {
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  width: calc(80 * var(--rpx));
  height: calc(12 * var(--rpx));
  top: 0;
  left: 0;
  z-index: 35;
}
.dollar-amount-5 {
  flex-shrink: 0;
  position: relative;
  height: calc(12 * var(--rpx));
  color: #545454;
  font-family: Montserrat, var(--default-font-family);
  font-size: calc(10 * var(--rpx));
  font-weight: 600;
  line-height: calc(12 * var(--rpx));
  text-align: left;
  white-space: nowrap;
  z-index: 33;
}
.percentage-change {
  flex-shrink: 0;
  position: relative;
  height: calc(12 * var(--rpx));
  color: #b81b1b;
  font-family: Montserrat, var(--default-font-family);
  font-size: calc(10 * var(--rpx));
  font-weight: 600;
  line-height: calc(12 * var(--rpx));
  text-align: left;
  white-space: nowrap;
  z-index: 35;
}
.flex-row-a-6 {
  position: relative;
  width: calc(375 * var(--rpx));
  height: calc(32 * var(--rpx));
  margin: calc(25 * var(--rpx)) 0 0 calc(27 * var(--rpx));
  z-index: 15;
}
.eth-7 {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  position: absolute;
  height: calc(20 * var(--rpx));
  top: 0;
  left: calc(39 * var(--rpx));
  color: #ffffff;
  font-family: Montserrat, var(--default-font-family);
  font-size: calc(16 * var(--rpx));
  font-weight: 600;
  line-height: calc(19.503999710083008 * var(--rpx));
  text-align: left;
  white-space: nowrap;
  z-index: 11;
}
.eth-amount {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  position: absolute;
  height: calc(20 * var(--rpx));
  top: 0;
  left: calc(301 * var(--rpx));
  color: #ffffff;
  font-family: Montserrat, var(--default-font-family);
  font-size: calc(16 * var(--rpx));
  font-weight: 600;
  line-height: calc(19.503999710083008 * var(--rpx));
  text-align: left;
  white-space: nowrap;
  z-index: 12;
}
.picture-eth-8 {
  position: absolute;
  top: calc(1 * var(--rpx));
  right: calc(345 * var(--rpx));
  bottom: calc(1 * var(--rpx));
  left: 0;
  background: url(../assets/images/f3445c98-ba33-4e68-8dba-f352e2f2198d.png)
    no-repeat center;
  background-size: cover;
  z-index: 10;
  overflow: hidden;
  border-radius: calc(17 * var(--rpx));
}
.dollar-amount-9 {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  position: absolute;
  height: calc(12 * var(--rpx));
  top: calc(20 * var(--rpx));
  left: calc(39 * var(--rpx));
  color: #545454;
  font-family: Montserrat, var(--default-font-family);
  font-size: calc(10 * var(--rpx));
  font-weight: 600;
  line-height: calc(12 * var(--rpx));
  text-align: left;
  white-space: nowrap;
  z-index: 13;
}
.percentage-change-a {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  position: absolute;
  height: calc(12 * var(--rpx));
  top: calc(20 * var(--rpx));
  left: calc(92 * var(--rpx));
  color: #26de5b;
  font-family: Montserrat, var(--default-font-family);
  font-size: calc(10 * var(--rpx));
  font-weight: 600;
  line-height: calc(12 * var(--rpx));
  text-align: left;
  white-space: nowrap;
  z-index: 15;
}
.total-amount {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  position: absolute;
  height: calc(12 * var(--rpx));
  top: calc(20 * var(--rpx));
  left: calc(301 * var(--rpx));
  color: #545454;
  font-family: Montserrat, var(--default-font-family);
  font-size: calc(10 * var(--rpx));
  font-weight: 600;
  line-height: calc(12 * var(--rpx));
  text-align: left;
  white-space: nowrap;
  z-index: 14;
}
.flex-row-b {
  position: relative;
  width: calc(344 * var(--rpx));
  height: calc(30 * var(--rpx));
  margin: calc(25 * var(--rpx)) 0 0 calc(27 * var(--rpx));
  z-index: 43;
}
.number-7238 {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  position: absolute;
  height: calc(20 * var(--rpx));
  top: 0;
  left: calc(301 * var(--rpx));
  color: #ffffff;
  font-family: Montserrat, var(--default-font-family);
  font-size: calc(16 * var(--rpx));
  font-weight: 600;
  line-height: calc(19.503999710083008 * var(--rpx));
  text-align: left;
  white-space: nowrap;
  z-index: 39;
}
.regroup-c {
  position: absolute;
  top: 0;
  right: calc(257 * var(--rpx));
  bottom: 0;
  left: 0;
  z-index: 43;
}
.picture-usdc {
  position: absolute;
  top: 0;
  right: calc(57 * var(--rpx));
  bottom: 0;
  left: 0;
  background: url(../assets/images/ef1d01cf-395a-4fa1-b501-3c3a6aec3254.png)
    no-repeat center;
  background-size: cover;
  z-index: 43;
  overflow: hidden;
  border-radius: calc(17 * var(--rpx));
}
.usdc-d {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  position: absolute;
  height: calc(20 * var(--rpx));
  top: 0;
  left: calc(39 * var(--rpx));
  color: #ffffff;
  font-family: Montserrat, var(--default-font-family);
  font-size: calc(16 * var(--rpx));
  font-weight: 600;
  line-height: calc(19.503999710083008 * var(--rpx));
  text-align: left;
  white-space: nowrap;
  z-index: 38;
}
.flex-row-e {
  position: relative;
  width: calc(296 * var(--rpx));
  height: calc(12 * var(--rpx));
  margin: calc(-10 * var(--rpx)) 0 0 calc(66 * var(--rpx));
  z-index: 42;
}
.dollar-amount-f {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  position: absolute;
  height: calc(12 * var(--rpx));
  top: 0;
  left: calc(262 * var(--rpx));
  color: #545454;
  font-family: Montserrat, var(--default-font-family);
  font-size: calc(10 * var(--rpx));
  font-weight: 600;
  line-height: calc(12 * var(--rpx));
  text-align: left;
  white-space: nowrap;
  z-index: 41;
}
.regroup-10 {
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  width: calc(80 * var(--rpx));
  height: calc(12 * var(--rpx));
  top: 0;
  left: 0;
  z-index: 42;
}
.dollar-text {
  flex-shrink: 0;
  position: relative;
  height: calc(12 * var(--rpx));
  color: #545454;
  font-family: Montserrat, var(--default-font-family);
  font-size: calc(10 * var(--rpx));
  font-weight: 600;
  line-height: calc(12 * var(--rpx));
  text-align: left;
  white-space: nowrap;
  z-index: 40;
}
.negative-percent {
  flex-shrink: 0;
  position: relative;
  height: calc(12 * var(--rpx));
  color: #b81b1b;
  font-family: Montserrat, var(--default-font-family);
  font-size: calc(10 * var(--rpx));
  font-weight: 600;
  line-height: calc(12 * var(--rpx));
  text-align: left;
  white-space: nowrap;
  z-index: 42;
}
.flex-row-11 {
  position: relative;
  width: calc(375 * var(--rpx));
  height: calc(32 * var(--rpx));
  margin: calc(25 * var(--rpx)) 0 0 calc(27 * var(--rpx));
  z-index: 22;
}
.eth-text {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  position: absolute;
  height: calc(20 * var(--rpx));
  top: 0;
  left: calc(39 * var(--rpx));
  color: #ffffff;
  font-family: Montserrat, var(--default-font-family);
  font-size: calc(16 * var(--rpx));
  font-weight: 600;
  line-height: calc(19.503999710083008 * var(--rpx));
  text-align: left;
  white-space: nowrap;
  z-index: 18;
}
.dot-text {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  position: absolute;
  height: calc(20 * var(--rpx));
  top: 0;
  left: calc(301 * var(--rpx));
  color: #ffffff;
  font-family: Montserrat, var(--default-font-family);
  font-size: calc(16 * var(--rpx));
  font-weight: 600;
  line-height: calc(19.503999710083008 * var(--rpx));
  text-align: left;
  white-space: nowrap;
  z-index: 19;
}
.eth-picture {
  position: absolute;
  top: calc(1 * var(--rpx));
  right: calc(345 * var(--rpx));
  bottom: calc(1 * var(--rpx));
  left: 0;
  background: url(../assets/images/d3805a79-19ac-44f4-bc1b-a2cbf9710fbb.png)
    no-repeat center;
  background-size: cover;
  z-index: 17;
  overflow: hidden;
  border-radius: calc(17 * var(--rpx));
}
.dollar-amount-12 {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  position: absolute;
  height: calc(12 * var(--rpx));
  top: calc(20 * var(--rpx));
  left: calc(39 * var(--rpx));
  color: #545454;
  font-family: Montserrat, var(--default-font-family);
  font-size: calc(10 * var(--rpx));
  font-weight: 600;
  line-height: calc(12 * var(--rpx));
  text-align: left;
  white-space: nowrap;
  z-index: 20;
}
.positive-percent {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  position: absolute;
  height: calc(12 * var(--rpx));
  top: calc(20 * var(--rpx));
  left: calc(92 * var(--rpx));
  color: #26de5b;
  font-family: Montserrat, var(--default-font-family);
  font-size: calc(10 * var(--rpx));
  font-weight: 600;
  line-height: calc(12 * var(--rpx));
  text-align: left;
  white-space: nowrap;
  z-index: 22;
}
.dollar-amount-13 {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  position: absolute;
  height: calc(12 * var(--rpx));
  top: calc(20 * var(--rpx));
  left: calc(301 * var(--rpx));
  color: #545454;
  font-family: Montserrat, var(--default-font-family);
  font-size: calc(10 * var(--rpx));
  font-weight: 600;
  line-height: calc(12 * var(--rpx));
  text-align: left;
  white-space: nowrap;
  z-index: 21;
}


</style>
