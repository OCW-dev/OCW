<template>
  <div class="main-container">
    <RouterLink class="back" to="/swap">
    </RouterLink>
    <span class="swap">Confirm swap</span>



    <div class="rectangle" v-if="payCurrency">
      <div class="flex-row-bc">
        <span class="send">You pay</span> <span class="balance">You get</span>
      </div>
      <div class="flex-row-eb">
        <img :src="payCurrency.icon" alt="coin" class="picture-coin" /> <img :src="receiveCurrency.icon" alt="coin" class="picture-coin2" />
        <span class="cryptoId">{{ payCurrency.name }}</span>   <span class="cryptoId2">{{ receiveCurrency.name }}</span>
        <span class="dollar-a">${{ payCurrency.price }}</span>   <span class="dollar-a2">${{ receiveCurrency.price }}</span>
      </div>
    </div>

    <div class="rectangle-1" v-if="receiveCurrency">
      <div class="flex-row-bc">
        <span class="send2">{{amount}} {{(payCurrency.name).toLowerCase()}}</span> 
        <span class="send3">{{ ((payCurrency.price * this.amount) / receiveCurrency.price ).toFixed(5) }} {{ (receiveCurrency.name).toLowerCase() }}</span>
        <button class="send4" @click="swapcrypto" >Swap</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      payCurrency: null,
      receiveCurrency: null,
      amount: null,
    };
  },
  created() {
    // Получаем данные из query-параметров
    if (this.$route.query.payCurrency) {
      this.payCurrency = JSON.parse(this.$route.query.payCurrency);
    }
    if (this.$route.query.receiveCurrency) {
      this.receiveCurrency = JSON.parse(this.$route.query.receiveCurrency);
    }
    if (this.$route.query.amount) {
      this.amount = JSON.parse(this.$route.query.amount);
    }
  },
  methods: {
    swapcrypto() {
        alert(`Обмениваем ${this.payCurrency.name} на ${this.receiveCurrency.name}`);
    }
  }
};
</script>

<style scoped>

.amount{
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  position: absolute;
  height: calc(20 * var(--rpx));
  top: calc(3 * var(--rpx));
  left: calc(120 * var(--rpx));
  color: #ffffff;
  font-family: Montserrat, var(--default-font-family);
  font-size: calc(30 * var(--rpx));
  font-weight: 600;
  line-height: calc(19 * var(--rpx));
  text-align: left;
  white-space: nowrap;
  z-index: 9;
}

.swap_in_dollar{
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    position: absolute;
    height: calc(15 * var(--rpx));
    top: calc(20 * var(--rpx));
    left: calc(252 * var(--rpx));
    color: #545454;
    font-family: Montserrat, var(--default-font-family);
    font-size: calc(10 * var(--rpx));
    font-weight: 600;
    line-height: calc(19.503999710083008 * var(--rpx));
    text-align: left;
    white-space: nowrap;
    z-index: 10;
    overflow: hidden;
}
.dollar-a {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  position: absolute;
  height: calc(12 * var(--rpx));
  top: calc(24.5 * var(--rpx));
  left: calc(39 * var(--rpx));
  color: #545454;
  font-family: Montserrat, var(--default-font-family);
  font-size: calc(10 * var(--rpx));
  font-weight: 600;
  line-height: calc(12 * var(--rpx));
  text-align: left;
  white-space: nowrap;
  z-index: 15;
}
.dollar-a2 {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  position: absolute;
  height: calc(12 * var(--rpx));
  top: calc(24.5 * var(--rpx));
  left: calc(235 * var(--rpx));
  color: #545454;
  font-family: Montserrat, var(--default-font-family);
  font-size: calc(10 * var(--rpx));
  font-weight: 600;
  line-height: calc(12 * var(--rpx));
  text-align: left;
  white-space: nowrap;
  z-index: 15;
}

.inline-address {
    position: relative;
    width: calc(75 * var(--rpx));
    cursor: pointer;
    background: #212121;
    border-radius: calc(10 * var(--rpx));
    resize: none;
    font-size: calc(14 * var(--rpx));
    border-width: 0px;
    overflow-wrap: break-word;
    text-align: left, center;
    line-height: calc(33 * var(--rpx));
    padding: 0; /* Убрать отступы */
    border: none; /* Убрать границу */
    color: #ffffff;
    padding-left: calc(5 * var(--rpx));

    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    position: absolute;
    height: calc(20 * var(--rpx));
    top: calc(0 * var(--rpx));
    left: calc(246.5 * var(--rpx));
    color: #ffffff;
    font-family: Montserrat, var(--default-font-family);
    font-size: calc(16 * var(--rpx));
    font-weight: 600;
    line-height: calc(19.503999710083008 * var(--rpx));
    text-align: left;
    white-space: nowrap;
    z-index: 10;
    overflow: hidden;
}

.button-enabled {
  background-color: #4D9D44; /* Зеленый цвет для активной кнопки */
  color: #ffffff;
}

.button-disabled {
  background-color: #212121; /* Серый цвет для неактивной кнопки */
  color: #666; /* Более светлый цвет текста */
}

button {
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  width: calc(115 * var(--rpx));
  height: calc(57 * var(--rpx));
  border-radius: calc(12 * var(--rpx));
  font-family: Montserrat, var(--default-font-family);
  font-size: calc(30 * var(--rpx));
}
.goSwap {
  display: flex; 
  justify-content: center;
  margin-top: calc(33 * var(--rpx)); 
}

.flex-row-ebx {
  flex-shrink: 0;
  position: relative;
  width: calc(124 * var(--rpx));
  height: calc(57.4359130859375 * var(--rpx));
  background: #1e1e1e;
  z-index: 79;
  border-radius: calc(12 * var(--rpx));
}
.flex-row-ebx:hover {
  background-color: #272727;
}
.flex-row-ebx:active {
  background-color: #424242;
  transform: scale(0.98);
}

.flex-row-e {
  position: relative;
  width: calc(375 * var(--rpx));
  height: calc(32 * var(--rpx));
  left: calc(-5 * var(--rpx));;
  margin: calc(34.5640869140625 * var(--rpx)) 0 0 calc(34 * var(--rpx));
  z-index: 17;
}

.cryptoId {
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
  z-index: 13;
}
.cryptoId2 {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  position: absolute;
  height: calc(20 * var(--rpx));
  top: 0;
  left: calc(235 * var(--rpx));
  color: #ffffff;
  font-family: Montserrat, var(--default-font-family);
  font-size: calc(16 * var(--rpx));
  font-weight: 600;
  line-height: calc(19.503999710083008 * var(--rpx));
  text-align: left;
  white-space: nowrap;
  z-index: 13;
}
.cryptoId3{
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  position: absolute;
  height: calc(20 * var(--rpx));
  top: 0;
  left: calc(200 * var(--rpx));
  color: #ffffff;
  font-family: Montserrat, var(--default-font-family);
  font-size: calc(25 * var(--rpx));
  font-weight: 600;
  line-height: calc(19.503999710083008 * var(--rpx));
  text-align: left;
  white-space: nowrap;
  z-index: 13;
}
.dot {
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
  z-index: 14;
}

.picture-coin {
  position: absolute;
  top: calc(1 * var(--rpx));
  right: calc(345 * var(--rpx));
  bottom: calc(1 * var(--rpx));
  left: 0;
  background-size: cover;
  z-index: 12;
  overflow: hidden;
  border-radius: calc(17 * var(--rpx));
  width: calc(30 * var(--rpx));
  height: calc(30 * var(--rpx));
}
.picture-coin2 {
  position: absolute;
  top: calc(1 * var(--rpx));
  left: calc(190 * var(--rpx));
  bottom: calc(1 * var(--rpx));
  background-size: cover;
  z-index: 12;
  overflow: hidden;
  border-radius: calc(17 * var(--rpx));
  width: calc(30 * var(--rpx));
  height: calc(30 * var(--rpx));
}


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
  left: calc(190 * var(--rpx));
  color: #717171;
  font-family: Montserrat, var(--default-font-family);
  font-size: calc(15 * var(--rpx));
  font-weight: 500;
  line-height: calc(25 * var(--rpx));
  text-align: left;
  white-space: nowrap;
  z-index: 7;
}
.balance2 {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: absolute;
  height: calc(25 * var(--rpx));
  top: 0;
  left: calc(190 * var(--rpx));
  color: #ffffff;
  font-family: Montserrat, var(--default-font-family);
  font-size: calc(23 * var(--rpx));
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
  height: calc(25 * var(--rpx));
  top: calc(0 * var(--rpx));
  left: 0;
  color: #717171;
  font-family: Montserrat, var(--default-font-family);
  font-size: calc(15 * var(--rpx));
  font-weight: 500;
  line-height: calc(25 * var(--rpx));
  text-align: left;
  white-space: nowrap;
  z-index: 4;
}
.send2 {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: absolute;
  height: calc(25 * var(--rpx));
  top: calc(0 * var(--rpx));
  left: 0;
  color: #ffffff;
  font-family: Montserrat, var(--default-font-family);
  font-size: calc(23 * var(--rpx));
  font-weight: 500;
  line-height: calc(25 * var(--rpx));
  text-align: left;
  white-space: nowrap;
  z-index: 4;
}
.send3 {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: absolute;
  height: calc(25 * var(--rpx));
  top: calc(25 * var(--rpx));
  left: 0;
  color: #ffffff;
  font-family: Montserrat, var(--default-font-family);
  font-size: calc(23 * var(--rpx));
  font-weight: 500;
  line-height: calc(25 * var(--rpx));
  text-align: left;
  white-space: nowrap;
  z-index: 4;
}
.send4 {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: absolute;
  height: calc(28 * var(--rpx));
  top: calc(50 * var(--rpx));
  left: 0;
  color: #ffffff;
  font-family: Montserrat, var(--default-font-family);
  font-size: calc(23 * var(--rpx));
  font-weight: 500;
  line-height: calc(25 * var(--rpx));
  text-align: left, top;
  white-space: nowrap;
  z-index: 4;
  background: #4D9D44;
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
  left: calc(253 * var(--rpx));
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
  margin: calc(5 * var(--rpx)) 0 0 calc(25 * var(--rpx));
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