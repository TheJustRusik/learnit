<template>
  <h1>Привет!</h1>
  <h2>Сейчас вы проходите квиз под номером: {{ store.current_quiz_id }}</h2>
  <h2>A вот его все вопросы и ответы:</h2>
  <p v-for="data in store.quiz_datas.get(store.current_quiz_id)">
    Вопросы: {{ data.question }} 
    <br>
    Ответы: {{ data.answer }}
  </p>
  <h2>Чтобы вернуться назад нажмите на эту кнопку, но это почему то стерёт все данные...</h2>
  <v-btn
    icon="mdi-arrow-left"
    @click="goToMainPage"
  ></v-btn>
</template>

<script setup>
import { useRouter } from "vue-router";
import { useQuizesStore } from "../stores/quizes.js";
import { ref } from "vue";

const store = useQuizesStore()
const router = useRouter()

function goToMainPage() {
  router.push("/")
}

</script>