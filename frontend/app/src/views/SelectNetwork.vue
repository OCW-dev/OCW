<template>
  <div class="main-container">
    <RouterLink class="back" to="/"></RouterLink>
    <span class="select-network-1">Select network</span>
    <ChainList/>
  </div>
</template>

<script setup>
import ChainList from "../assets/components/BlockChainRList.vue";

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


.arrow {
  position: relative;
  width: calc(1 * var(--rpx));
  height: calc(1.2889459277687365e-8 * var(--rpx));
  margin: calc(40 * var(--rpx)) 0 0 calc(28 * var(--rpx));
  background: url(../assets/images/1c39f044-e70b-42cf-8339-b32c4846163e.png)
    no-repeat center;
  background-size: cover;
}
.select-network-1 {
  display: block;
  position: relative;
  height: calc(33 * var(--rpx));
  margin: calc(29.99999998711054 * var(--rpx)) 0 0 calc(27 * var(--rpx));
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
  width: calc(376 * var(--rpx));
  height: calc(34 * var(--rpx));
  margin: calc(23 * var(--rpx)) 0 0 calc(27 * var(--rpx));
  background: #212121;
  z-index: 2;
  overflow: hidden;
  border-radius: calc(30 * var(--rpx));
}
.vector {
  position: absolute;
  width: 4.26%;
  height: 47.06%;
  top: 26.47%;
  left: 3.99%;
  background: url(../assets/images/8092bf77-05e2-49e0-b3f3-5c81834d7569.png)
    no-repeat center;
  background-size: 100% 100%;
  z-index: 3;
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
  z-index: 4;
}
.flex-row {
  position: relative;
  width: calc(376 * var(--rpx));
  height: calc(33 * var(--rpx));
  margin: calc(41 * var(--rpx)) 0 0 calc(27 * var(--rpx));
  z-index: 20;
}
.zero {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: absolute;
  height: calc(20 * var(--rpx));
  top: 0;
  left: calc(363 * var(--rpx));
  color: #ffffff;
  font-family: Montserrat, var(--default-font-family);
  font-size: calc(12 * var(--rpx));
  font-weight: 700;
  line-height: calc(20 * var(--rpx));
  text-align: left;
  white-space: nowrap;
  z-index: 15;
}
.picture-bnb {
  position: absolute;
  top: calc(5 * var(--rpx));
  right: calc(356 * var(--rpx));
  bottom: calc(8 * var(--rpx));
  left: 0;
  background: url(../assets/images/d6252b2f-0765-4c88-97bf-3aa7aa15625b.png)
    no-repeat center;
  background-size: cover;
  z-index: 5;
  overflow: hidden;
  border-radius: calc(17 * var(--rpx));
}
.bnb-smart-chain {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: absolute;
  height: calc(20 * var(--rpx));
  top: calc(5 * var(--rpx));
  left: calc(47 * var(--rpx));
  color: #ffffff;
  font-family: Montserrat, var(--default-font-family);
  font-size: calc(13 * var(--rpx));
  font-weight: 400;
  line-height: calc(20 * var(--rpx));
  text-align: left;
  white-space: nowrap;
  z-index: 8;
}
.dollar {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: absolute;
  height: calc(20 * var(--rpx));
  top: calc(13 * var(--rpx));
  left: calc(344 * var(--rpx));
  color: #717171;
  font-family: Montserrat, var(--default-font-family);
  font-size: calc(10 * var(--rpx));
  font-weight: 700;
  line-height: calc(20 * var(--rpx));
  text-align: left;
  white-space: nowrap;
  z-index: 20;
}
.flex-row-dc {
  position: relative;
  width: calc(376 * var(--rpx));
  height: calc(33 * var(--rpx));
  margin: calc(18 * var(--rpx)) 0 0 calc(27 * var(--rpx));
  z-index: 21;
}
.zero-2 {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: absolute;
  height: calc(20 * var(--rpx));
  top: 0;
  left: calc(363 * var(--rpx));
  color: #ffffff;
  font-family: Montserrat, var(--default-font-family);
  font-size: calc(12 * var(--rpx));
  font-weight: 700;
  line-height: calc(20 * var(--rpx));
  text-align: left;
  white-space: nowrap;
  z-index: 16;
}
.picture-bnb-3 {
  position: absolute;
  top: calc(5 * var(--rpx));
  right: calc(356 * var(--rpx));
  bottom: calc(8 * var(--rpx));
  left: 0;
  background: url(../assets/images/285c7fe3-e9ad-4ab9-b486-5cd578ea231a.png)
    no-repeat center;
  background-size: cover;
  z-index: 6;
  overflow: hidden;
  border-radius: calc(17 * var(--rpx));
}
.bnb-smart-chain-4 {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: absolute;
  height: calc(20 * var(--rpx));
  top: calc(5 * var(--rpx));
  left: calc(47 * var(--rpx));
  color: #ffffff;
  font-family: Montserrat, var(--default-font-family);
  font-size: calc(13 * var(--rpx));
  font-weight: 400;
  line-height: calc(20 * var(--rpx));
  text-align: left;
  white-space: nowrap;
  z-index: 9;
}
.zero-dollars {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: absolute;
  height: calc(20 * var(--rpx));
  top: calc(13 * var(--rpx));
  left: calc(344 * var(--rpx));
  color: #717171;
  font-family: Montserrat, var(--default-font-family);
  font-size: calc(10 * var(--rpx));
  font-weight: 700;
  line-height: calc(20 * var(--rpx));
  text-align: left;
  white-space: nowrap;
  z-index: 21;
}
.flex-row-ee {
  position: relative;
  width: calc(376 * var(--rpx));
  height: calc(33 * var(--rpx));
  margin: calc(18 * var(--rpx)) 0 0 calc(27 * var(--rpx));
  z-index: 22;
}
.number-0 {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: absolute;
  height: calc(20 * var(--rpx));
  top: 0;
  left: calc(363 * var(--rpx));
  color: #ffffff;
  font-family: Montserrat, var(--default-font-family);
  font-size: calc(12 * var(--rpx));
  font-weight: 700;
  line-height: calc(20 * var(--rpx));
  text-align: left;
  white-space: nowrap;
  z-index: 17;
}
.picture-bnb-5 {
  position: absolute;
  top: calc(5 * var(--rpx));
  right: calc(356 * var(--rpx));
  bottom: calc(8 * var(--rpx));
  left: 0;
  background: url(../assets/images/aeecb4a6-ceb7-4ed4-a664-dd6ce99ddfca.png)
    no-repeat center;
  background-size: cover;
  z-index: 7;
  overflow: hidden;
  border-radius: calc(17 * var(--rpx));
}
.bnb-smart-chain-6 {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: absolute;
  height: calc(20 * var(--rpx));
  top: calc(5 * var(--rpx));
  left: calc(47 * var(--rpx));
  color: #ffffff;
  font-family: Montserrat, var(--default-font-family);
  font-size: calc(13 * var(--rpx));
  font-weight: 400;
  line-height: calc(20 * var(--rpx));
  text-align: left;
  white-space: nowrap;
  z-index: 10;
}
.zero-dollars-7 {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: absolute;
  height: calc(20 * var(--rpx));
  top: calc(13 * var(--rpx));
  left: calc(344 * var(--rpx));
  color: #717171;
  font-family: Montserrat, var(--default-font-family);
  font-size: calc(10 * var(--rpx));
  font-weight: 700;
  line-height: calc(20 * var(--rpx));
  text-align: left;
  white-space: nowrap;
  z-index: 22;
}
.flex-row-b {
  position: relative;
  width: calc(376 * var(--rpx));
  height: calc(33 * var(--rpx));
  margin: calc(18 * var(--rpx)) 0 0 calc(27 * var(--rpx));
  z-index: 23;
}
.span-0 {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: absolute;
  height: calc(20 * var(--rpx));
  top: 0;
  left: calc(363 * var(--rpx));
  color: #ffffff;
  font-family: Montserrat, var(--default-font-family);
  font-size: calc(12 * var(--rpx));
  font-weight: 700;
  line-height: calc(20 * var(--rpx));
  text-align: left;
  white-space: nowrap;
  z-index: 18;
}
.picture-bnb-8 {
  position: absolute;
  top: calc(5 * var(--rpx));
  right: calc(356 * var(--rpx));
  bottom: calc(8 * var(--rpx));
  left: 0;
  background: url(../assets/images/fccf9352-84e9-4b4d-93c9-52d3777922d1.png)
    no-repeat center;
  background-size: cover;
  z-index: 13;
  overflow: hidden;
  border-radius: calc(17 * var(--rpx));
}
.bnb-smart-chain-9 {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: absolute;
  height: calc(20 * var(--rpx));
  top: calc(5 * var(--rpx));
  left: calc(47 * var(--rpx));
  color: #ffffff;
  font-family: Montserrat, var(--default-font-family);
  font-size: calc(13 * var(--rpx));
  font-weight: 400;
  line-height: calc(20 * var(--rpx));
  text-align: left;
  white-space: nowrap;
  z-index: 11;
}
.dollar-0 {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: absolute;
  height: calc(20 * var(--rpx));
  top: calc(13 * var(--rpx));
  left: calc(344 * var(--rpx));
  color: #717171;
  font-family: Montserrat, var(--default-font-family);
  font-size: calc(10 * var(--rpx));
  font-weight: 700;
  line-height: calc(20 * var(--rpx));
  text-align: left;
  white-space: nowrap;
  z-index: 23;
}
.flex-row-c {
  position: relative;
  width: calc(376 * var(--rpx));
  height: calc(33 * var(--rpx));
  margin: calc(18 * var(--rpx)) 0 0 calc(27 * var(--rpx));
  z-index: 24;
}
.span-0-a {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: absolute;
  height: calc(20 * var(--rpx));
  top: 0;
  left: calc(363 * var(--rpx));
  color: #ffffff;
  font-family: Montserrat, var(--default-font-family);
  font-size: calc(12 * var(--rpx));
  font-weight: 700;
  line-height: calc(20 * var(--rpx));
  text-align: left;
  white-space: nowrap;
  z-index: 19;
}
.picture-bnb-b {
  position: absolute;
  top: calc(5 * var(--rpx));
  right: calc(356 * var(--rpx));
  bottom: calc(8 * var(--rpx));
  left: 0;
  background: url(../assets/images/db2ab2a5-4791-4fe3-94c9-c8e3f1287f4e.png)
    no-repeat center;
  background-size: cover;
  z-index: 14;
  overflow: hidden;
  border-radius: calc(17 * var(--rpx));
}
.bnb-smart-chain-c {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: absolute;
  height: calc(20 * var(--rpx));
  top: calc(5 * var(--rpx));
  left: calc(47 * var(--rpx));
  color: #ffffff;
  font-family: Montserrat, var(--default-font-family);
  font-size: calc(13 * var(--rpx));
  font-weight: 400;
  line-height: calc(20 * var(--rpx));
  text-align: left;
  white-space: nowrap;
  z-index: 12;
}
.dollar-d {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: absolute;
  height: calc(20 * var(--rpx));
  top: calc(13 * var(--rpx));
  left: calc(344 * var(--rpx));
  color: #717171;
  font-family: Montserrat, var(--default-font-family);
  font-size: calc(10 * var(--rpx));
  font-weight: 700;
  line-height: calc(20 * var(--rpx));
  text-align: left;
  white-space: nowrap;
  z-index: 24;
}

</style>
