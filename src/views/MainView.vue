<template>
  <div class="md:flex gap-4 m-4 items-center">
    <v-btn 
      height="60"
      width="60"
      :icon="`mdi-plus`"
      color="blue"
      size="x-large" 
      elevation="20" 
      @click="addingQuiz = true"
    >
    </v-btn>
    <v-dialog
      v-model="addingQuiz"
      width="auto"
    >
    <v-card
      max-width="400"
      prepend-icon="mdi-newspaper-variant"
      title="Добавление нового квиза!"
    >
        <template v-slot:text class="flex items-center">
          <v-text-field v-model="quizTitle" variant="outlined" label="Название квиза:"></v-text-field>
          <v-text-field v-model="quizSubtitle" variant="outlined" label="Описание квиза:"></v-text-field>
          <v-text-field v-model="quizText" variant="outlined" label="Текс:"></v-text-field>
          <p class="mb-4">Цвет:</p>
          <v-color-picker
            hide-inputs
            v-model="color"
            >
          </v-color-picker>
        </template>
        <template v-slot:actions>
          <v-btn
            class="ms-auto"
            text="Отмена"
            color="red"
            @click="addingQuiz = false"
          ></v-btn>
          <v-btn 
            color="blue"
            @click="addQuiz">
            Создать
          </v-btn>
        </template>
      </v-card>
    </v-dialog>
    <v-card class="my-4 md:my-0" elevation="8" title="Привет!" text="Тут ты можешь добавить свои квизы" color="grey" prepend-icon="mdi-information"></v-card>
  </div>

  <div class="grid gap-4 m-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
    <v-card v-for="quiz in store.quizes" elevation="20" :title="quiz.title" :subtitle="quiz.subtitle" :text="quiz.text" :color="quiz.color">
      <v-card-actions>
        <v-btn
          @click="openQuiz(quiz.id)"
        >Пройти!</v-btn>
        <v-spacer></v-spacer>
        <v-btn 
          @click="openQuiz(quiz.id)"
          color="medium-emphasis"
          icon="mdi-pencil"
          size="small"
        ></v-btn>
        <v-btn
          color="medium-emphasis"
          icon="mdi-delete"
          size="small"
          @click="deleteQuiz(quiz.id)"
        ></v-btn>
      </v-card-actions>
    </v-card>
  </div>

  <v-dialog
      v-model="edditingQuiz"
      width="auto"
    >
    <v-card
      max-width="400"
      prepend-icon="mdi-newspaper-variant"
      title="Добавление вопросов квиза!"
    >
      <template v-slot:text>
        <v-card 
          v-for="quiz_data in quiz_datas[currentIndex]" 
          prepend-icon="mdi-lightbulb-question-outline" 
          :title="quiz_data.question" 
          :text="quiz_data.answer"
        />
        <v-btn>
          Добавить
        </v-btn>
      </template>
      <template v-slot:actions>
        <v-btn
          class="ms-auto"
          text="Отмена"
          color="red"
          @click="edditingQuiz = false"
        ></v-btn>
        <v-btn 
          color="blue"
          @click="">
          Сохранить
        </v-btn>
      </template>
    </v-card>
  </v-dialog>
    
</template>

<script setup>
import { useQuizesStore } from "../stores/quizes.js";
import { ref } from "vue";

const store = useQuizesStore()
let addingQuiz = ref(false)
let edditingQuiz = ref(false)

let quizTitle = ref('')
let quizSubtitle = ref('')
let quizText = ref('')
let currentIndex = ref()
let color = ref("#00FFAA")

store.quizes = []
store.quiz_datas = []
store.iter = 0

function addQuiz() {
  addingQuiz.value = false

  store.quizes.push(
    {"id": store.iter,
    "title": quizTitle.value,
    "subtitle": quizSubtitle.value,
    "text": quizText.value,
    "color": color.value}
  )
  store.quiz_datas.push(ref([]))
  quizText.value = ""
  quizSubtitle.value = ""
  quizTitle.value = ""
  store.iter++;
  
}
function openQuiz(id) {
  alert("Opening " + id)
}

function editQuiz(id) {
  currentIndex.value = id
  edditingQuiz.value = true
  
}

function deleteQuiz(idr) {
  store.quizes = store.quizes.filter(function(obj) {
    return obj.id !== idr;
  });
  store.quiz_datas = store.quiz_datas.filter(function(obj) {
    return obj.id !== idr;
  });
}

</script>
