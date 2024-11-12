<template>
    <div class="main-container">
    <span class="scr-phrase" >Enter your secret phrase</span>
        <div class="blocks-container">
            <div v-for="i in 12" :key="i" class="block">
                <span>{{ i }}.</span>
                <input 
                    type="text" 
                    v-model="inputValues[i - 1]" 
                    placeholder='word' 
                    class="input" 
                    :id="`input-${i}`" 
                />
            </div>
        </div>
        <div class="button-container">
        <button 
            class="import-button" 
            :disabled="!allInputsFilled" 
            @click="importData"
        >
            Import
        </button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            inputValues: Array(12).fill(''), // Массив для хранения значений input
        };
    },
    computed: {
        allInputsFilled() {
            return this.inputValues.every(value => value.trim() !== ''); // Проверка, заполнены ли все input
        }
    },
    methods: {
        importData() {
            // Логика для обработки данных перед переходом
            console.log(this.inputValues); // Здесь вы можете обработать данные по своему усмотрению

            // Переход на главную страницу
            this.$router.push({ path: '/' });
        }
    }
};
</script>

<style scoped>
.blocks-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center; /* Центрируем блоки по горизонтали */
}

.block {
    width: calc(150 * var(--rpx)); /* Ширина блока */
    height: calc(50 * var(--rpx)); /* Высота блока */
    margin: calc(10 * var(--rpx)); /* Отступы между блоками */
    font-family: Montserrat, var(--default-font-family);
    font-size: calc(18 * var(--rpx));
    background-color: #3e3e3e; /* Цвет фона блока */
    color: #ffffff; /* Цвет текста */
    display: flex; /* Для центрирования текста */
    align-items: center; /* Вертикальное центрирование текста */
    justify-content: center; /* Горизонтальное центрирование текста */
    border-radius: calc(10 * var(--rpx)); /* Закругление углов блока */
}

.import-button {
    margin-top:  calc(20 * var(--rpx)); /* Отступ сверху для кнопки */
    padding: 10px 20px; /* Отступы кнопки */
    background-color: #212121; /* Цвет кнопки */
    color: white; /* Цвет текста кнопки */
    border: none; /* Убираем рамку */
    border-radius: 5px; /* Закругление углов кнопки */
    cursor: pointer; /* Указатель при наведении */
    width: calc(150 * var(--rpx)); /* Ширина блока */
    height: calc(50 * var(--rpx)); /* Высота блока */
    font-family: Montserrat, var(--default-font-family);
    font-size: calc(18 * var(--rpx));
    border-radius: calc(10 * var(--rpx)); 
}

.import-button:disabled {
    font-size: calc(13 * var(--rpx));
    background-color: #101010; /* Цвет кнопки, когда она отключена */
}

.button-container {
    display: flex; /* Используем flexbox для центрирования */
    justify-content: center; /* Центрируем кнопку по горизонтали */
}

.scr-phrase{
  display: block;
  position: relative;
  height: calc(33 * var(--rpx));
  margin: calc(29 * var(--rpx)) 0 calc(30 * var(--rpx)) calc(30 * var(--rpx));
  color: #ffffff;
  font-family: Montserrat, var(--default-font-family);
  font-size: calc(25 * var(--rpx));
  font-weight: 700;
  line-height: calc(32.63999938964844 * var(--rpx));
  text-align: left;
  white-space: nowrap;
  z-index: 1;
  top: calc(10 * var(--rpx));
  left: calc(25 * var(--rpx));
}

.input{
position: relative;
    background: #212121;
    color: #ffffff;
    font-family: Montserrat, var(--default-font-family);
    font-size: calc(16 * var(--rpx));
    overflow: hidden;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0;
    border: none;
    width: calc(100 * var(--rpx));
    height: calc(20 * var(--rpx));
    border-radius: calc(9 * var(--rpx));
    padding-left: calc(10 * var(--rpx));
    padding-bottom: calc(3 * var(--rpx));
}
</style>