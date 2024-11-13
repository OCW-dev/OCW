<template>
  <div class="loading-container">
    <div class="logo-container">
       <svg width="360" height="360"> 
        <circle
          cx="180"
          cy="180"
          r="175"
          stroke="#000000"
          stroke-width="10"
          fill="none"></circle>
        <circle
          cx="180"
          cy="180"
          r="175" 
          stroke="#535B7E"
          stroke-width="10"
          fill="none"
          :stroke-dasharray="circumference"
          :stroke-dashoffset="circumference - (circumference * progress) / 100"
          style="transition: stroke-dashoffset 0.1s;"></circle> 
      </svg>
      <img class="logo" src="../assets/logo_ocw.png"  />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      progress: 0,
      interval: null,
      radius: 180, 
      circumference: 0,
    };
  },
  mounted() {
    this.circumference = 2 * Math.PI * this.radius;
    this.startLoading();
  },
  beforeDestroy() {
    clearInterval(this.interval);
  },
  methods: {
    getActiveAccount() {
      const accounts = [
        {
          AccountName: 'Nikita',
          AccountId: 1,
          Balance: 100,
          TelegramId: '123456789',
          WalletName: ['a', 'b', 'c', 'd'],
          isActive: false,
        },
        {
          AccountName: 'Kostya',
          AccountId: 2,
          Balance: 200,
          TelegramId: '987654321',
          WalletName: ['a', 'b'],
          isActive: false ,
        },
        {
          AccountName: 'Ilya',
          AccountId: 3,
          Balance: 300,
          TelegramId: '1122334455',
          WalletName: ['c', 'd'],
          isActive: true,
        },
      ];
      return accounts.find(account => account.isActive);
    },
    startLoading() {
      this.interval = setInterval(() => {
        if (this.progress < 100) {
          this.progress += 2; // Увеличиваем прогресс на 2% каждые 100 мс
        } else {
          clearInterval(this.interval);
          const activeAccount = this.getActiveAccount();
          if (activeAccount) {
            this.$router.push({ path: '/main', query: { AccountName: activeAccount.AccountName,
                                                        AccountId: activeAccount.AccountId,
                                                        Balance: activeAccount.Balance,
                                                        TelegramId: activeAccount.TelegramId,
                                                        WalletName: activeAccount.WalletName.join(','),} });
          } else {
            this.$router.push({ path: '/reglogwalletpage', query: { Hello: "Hello"}});
          }
        }
      }, 50);
    },
  },
};
</script>

<style scoped>

.loading-container {
  display: flex;
  justify-content: center; /* Центрируем по горизонтали */
  align-items: center; /* Центрируем по вертикали */
  height: 100vh; /* Занимаем всю высоту экрана */
  background: #000000;
}

.logo-container {
  position: relative; /* Позволяет позиционировать дочерние элементы */
}

.logo {
  position: absolute;
  top: calc(50% - 170.6px); /* Центрируем логотип по вертикали */
  left: calc(50% - 170.5px); /* Центрируем логотип по горизонтали */
 
}

svg {
  display: block; /* Убираем пробелы вокруг SVG */
}
</style>