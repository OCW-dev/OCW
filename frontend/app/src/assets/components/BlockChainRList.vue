<template>
  <div>
    <BlockItem
      v-for="(chain, index) in chains"
      :key="chain.id"
      :chainId="chain.chainId"
      :amount="chain.amount"
      :chainicon="chain.icon || '../images/question.png'"
    />
  </div>
</template>

<script>
import BlockItem from "./BlockChainRItem.vue"

export default {
  components: {
    BlockItem
  },
  data() {
    return {
      chains: this.getTestChains()
    };
  },
  methods: {
    getTestChains() {
      return [
        {
          icon: 'https://cryptologos.cc/logos/bnb-bnb-logo.png',
          chainId: 'BNB',
          amount: 0.5, //Баланс по блокчейну
        },
        {
          icon: 'https://cryptologos.cc/logos/ethereum-eth-logo.png',
          chainId: 'Ethereum',
          amount: 1, //Баланс по блокчейну
        },
        {
          icon: 'https://cryptologos.cc/logos/solana-sol-logo.png',
          chainId: 'Solana',
          amount: 2, //Баланс по блокчейну
        },
        {
          icon: 'https://cryptologos.cc/logos/polygon-matic-logo.png',
          chainId: 'Polygon',
          amount: 10, //Баланс по блокчейну
        },
        {
          icon: 'https://cryptologos.cc/logos/tron-trx-logo.png',
          chainId: 'Tron',
          amount: 100, //Баланс по блокчейну
        },
      ];
    }
  }
}
</script>

<style scoped>

</style>