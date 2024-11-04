<template>
  <div>
    <HistoryItem
      v-for="(transaction, index) in transactions"
      :key="transaction.id"
      :icon="transaction.icon"
      :cryptoId="transaction.cryptoId"
      :fromAddress="transaction.fromAddress"
      :toAddress="transaction.toAddress"
      :amount="transaction.amount"
      :timestamp="transaction.timestamp"
      :isLoss="transaction.isLoss"
    />
  </div>
</template>

<script>
import HistoryItem from './HistoryItem.vue';

export default {
  components: {
    HistoryItem
  },
  data() {
    return {
      transactions: this.getTestTransactions()
    };
  },
  methods: {
    getTestTransactions() {
      return [
        {
          icon: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png', // Иконка Bitcoin
          cryptoId: 'BTC',
          fromAddress: '1A1...Na',
          toAddress: '3J9...Ly',
          amount: 0.5,
          timestamp: '11.03, 16:45',
          isLoss: false
        },
        {
          icon: 'https://cryptologos.cc/logos/ethereum-eth-logo.png', // Иконка Ethereum
          cryptoId: 'ETH',
          fromAddress: '0x3...88',
          toAddress: '0x5...a6',
          amount: 2.0,
          timestamp: '11.03, 16:45',
          isLoss: true 
        },
        {
          icon: 'https://cryptologos.cc/logos/litecoin-ltc-logo.png', // Иконка LITE
          cryptoId: 'LITE',
          fromAddress: 'rUq...s7',
          toAddress: 'rUq...s8',
          amount: 100,
          timestamp: '11.03, 16:45',
          isLoss: false
        },
        {
          icon: 'https://cryptologos.cc/logos/cardano-ada-logo.png', // Иконка Cardano
          cryptoId: 'ADA',
          fromAddress: 'add...s8',
          toAddress: 'add...s9',
          amount: 50,
          timestamp: '11.03, 16:45',
          isLoss: true
        }
      ];
    }
  }
};
</script>