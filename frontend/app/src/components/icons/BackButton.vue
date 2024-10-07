<template>
    <div class="back-arrow" @click="handleClick">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            fill="currentColor"
        >
            <path d="M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
        </svg>
    </div>
</template>

<script>
export default {
    name: "BackArrow",
    methods: {
        handleClick() {
            // Здесь можно добавить обработчик события, например, для навигации назад
            this.$emit("go-back");
        },
    },
};
</script>

<style scoped>
.back-arrow {
    color: white;
    margin-top: 30px; /* Расположение от верхнего края */
    margin-left: 30px; /* Расположение от левого края */
    cursor: pointer; /* Указатель курсора при наведении */
    margin-bottom: 30px;
}
</style>
