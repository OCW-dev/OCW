<template>
  <div>
    <h1>Ваш адрес на {{ currency }} пока не завезли</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currency: this.$route.query.currency,
    };
  }
};
</script>