<template>
  <div class="main-container">
    <RouterLink class="back" to="/">
    </RouterLink>
    <span class="swap">Swap</span>
    <div class="rectangle">
      <div class="flex-row-bc">
        <span class="balance">Balance: 0</span><span class="send">Send </span>
      </div>
      <div class="flex-row-eb">
        <div class="picture-eth-png"></div>
        <span class="eth">ETH</span><span class="zero">0</span>
      </div>
    </div>
    <div class="rectangle-1">
      <div class="flex-row-bc">
        <span class="send">Receive </span>
      </div>
      <div class="flex-row-eb" @click="goToCryptoList">
        <img class="picture-png" v-if="selectedCryptoImage" :src="selectedCryptoImage" alt="">
        <span class="eth1">{{ selectedCrypto ? selectedCrypto : 'Select' }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { inject, ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const globalInt = inject('globalInt');
globalInt.value += 1;

const selectedCrypto = ref(null);
const selectedCryptoImage = ref(null); 
const router = useRouter();

// Получаем данные из параметров запроса при монтировании компонента
onMounted(() => {
  const query = new URLSearchParams(window.location.search);
  if (query.has('selectedCrypto')) {
    selectedCrypto.value = query.get('selectedCrypto');
  }
  
  if (query.has('imageUrl')) { // Проверяем наличие URL иконки
    selectedCryptoImage.value = query.get('imageUrl');
  }
});

function goToCryptoList() {
  router.push({ path: '/cryptos' });
}
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


.swap {
  display: block;
  position: relative;
  height: calc(33 * var(--rpx));
  margin: calc(29.999999987110527 * var(--rpx)) 0 0 calc(30 * var(--rpx));
  color: #ffffff;
  font-family: Montserrat, var(--default-font-family);
  font-size: calc(25 * var(--rpx));
  font-weight: 700;
  line-height: calc(32.63999938964844 * var(--rpx));
  text-align: left;
  white-space: nowrap;
  z-index: 1;
}
.rectangle {
  position: relative;
  width: calc(380 * var(--rpx));
  height: calc(100 * var(--rpx));
  margin: calc(33 * var(--rpx)) 0 0 calc(25 * var(--rpx));
  background: #212121;
  z-index: 2;
  overflow: visible auto;
  border-radius: calc(12 * var(--rpx) * 1.5); 

}
.flex-row-bc {
  position: relative;
  width: calc(330 * var(--rpx));
  height: calc(33 * var(--rpx));
  margin: calc(10 * var(--rpx)) 0 0 calc(20 * var(--rpx));
  z-index: 7;
}
.balance {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: absolute;
  height: calc(25 * var(--rpx));
  top: 0;
  left: calc(251 * var(--rpx));
  color: #ffffff;
  font-family: Montserrat, var(--default-font-family);
  font-size: calc(15 * var(--rpx));
  font-weight: 500;
  line-height: calc(25 * var(--rpx));
  text-align: left;
  white-space: nowrap;
  z-index: 7;
}
.send {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: absolute;
  height: calc(30 * var(--rpx));
  top: calc(3 * var(--rpx));
  left: 0;
  color: #717171;
  font-family: Montserrat, var(--default-font-family);
  font-size: calc(15 * var(--rpx));
  font-weight: 500;
  line-height: calc(30 * var(--rpx));
  text-align: left;
  white-space: nowrap;
  z-index: 4;
}
.flex-row-eb {
  position: relative;
  width: calc(330 * var(--rpx));
  height: calc(25 * var(--rpx));
  margin: calc(2 * var(--rpx)) 0 0 calc(20 * var(--rpx));
  z-index: 10;
}
.picture-eth-png {
  position: absolute;
  top: 0;
  right: calc(305 * var(--rpx));
  bottom: 0;
  left: 0;
  background: url(../assets/images/df512e4c-ccce-4542-96a8-e590a4aa3a04.png)
    no-repeat center;
  background-size: cover;
  z-index: 8;
  overflow: hidden;
  border-radius: calc(17 * var(--rpx));
}
.picture-png {
  top: 0;
  width: calc(20 * var(--rpx));
  height: calc(20 * var(--rpx));
  right: calc(305 * var(--rpx));
  bottom: 0;
  left: 0;
  z-index: 8;
  overflow: hidden;
  border-radius: calc(17 * var(--rpx));
}

.eth {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  position: absolute;
  height: calc(20 * var(--rpx));
  top: calc(3 * var(--rpx));
  left: calc(30 * var(--rpx));
  color: #ffffff;
  font-family: Montserrat, var(--default-font-family);
  font-size: calc(16 * var(--rpx));
  font-weight: 600;
  line-height: calc(19.503999710083008 * var(--rpx));
  text-align: left;
  white-space: nowrap;
  z-index: 9;
}
.eth1 {
  color: #ffffff;
  font-family: Montserrat, var(--default-font-family);
  font-size: calc(16 * var(--rpx));
}
.zero {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  position: absolute;
  height: calc(20 * var(--rpx));
  top: calc(3 * var(--rpx));
  left: calc(319 * var(--rpx));
  color: #ffffff;
  font-family: Montserrat, var(--default-font-family);
  font-size: calc(16 * var(--rpx));
  font-weight: 600;
  line-height: calc(19.503999710083008 * var(--rpx));
  text-align: left;
  white-space: nowrap;
  z-index: 10;
}
.rectangle-1 {
  position: relative;
  width: calc(380 * var(--rpx));
  height: calc(100 * var(--rpx));
  margin: calc(33 * var(--rpx)) 0 0 calc(25 * var(--rpx));
  background: #212121;
  z-index: 3;
  overflow:hidden;

  border-radius: calc(12 * var(--rpx) * 1.5); 

}
.receive {
  display: flex;
  position: absolute;
  height: calc(30 * var(--rpx));
  margin: calc(13 * var(--rpx)) 0 0 calc(20 * var(--rpx));
  color: #717171;
  font-family: Montserrat, var(--default-font-family);
  font-size: calc(15 * var(--rpx));
  font-weight: 500;
  line-height: calc(30 * var(--rpx));
  text-align: left;
  white-space: nowrap;
  z-index: 5;



  align-items: center;
  justify-content: flex-start;
  
  height: calc(30 * var(--rpx));
  top: calc(3 * var(--rpx));
  left: 0;
  color: #717171;
  font-family: Montserrat, var(--default-font-family);
  font-size: calc(15 * var(--rpx));
  font-weight: 500;
  line-height: calc(30 * var(--rpx));
  text-align: left;
  white-space: nowrap;
  z-index: 4;
}
.flex-row-da {
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  width: calc(329 * var(--rpx));
  height: calc(30 * var(--rpx));
  margin: calc(7 * var(--rpx)) 0 0 calc(21 * var(--rpx));
  z-index: 11;


  position: relative;
  width: calc(330 * var(--rpx));
  height: calc(25 * var(--rpx));
  margin: calc(2 * var(--rpx)) 0 0 calc(20 * var(--rpx));
  z-index: 11;
}
.select {
  flex-shrink: 0;
  position: relative;
  height: calc(30 * var(--rpx));
  color: #ffffff;
  font-family: Montserrat, var(--default-font-family);
  font-size: calc(16 * var(--rpx));
  font-weight: 500;
  line-height: calc(30 * var(--rpx));
  text-align: left;
  white-space: nowrap;
  z-index: 6;
}
.zero-2 {
  flex-shrink: 0;
  position: relative;
  height: calc(20 * var(--rpx));
  color: #ffffff;
  font-family: Montserrat, var(--default-font-family);
  font-size: calc(16 * var(--rpx));
  font-weight: 600;
  line-height: calc(19.503999710083008 * var(--rpx));
  text-align: left;
  white-space: nowrap;
  z-index: 11;
}

</style>