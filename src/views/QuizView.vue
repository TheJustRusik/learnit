<template>
  <h1>Привет!</h1>
  <h2>Сейчас вы проходите квиз под номером: {{ store.current_quiz_id }}</h2>
  <h2>A вот его все вопросы и ответы:</h2>
  <div id="gridContainer" >
  <div v-for="fCard in store.quiz_datas.get(store.current_quiz_id)">
    <div :id="fCard.id" class="card f-card">
              <div class="card-body card-content red-prompt" @click="flipCard(fCard)">
                <div>
                  <p v-if="!fCard.revealed" v-html="fCard.question" class="prompt"></p>
                  <p v-else class="answer" v-html="fCard.answer"></p>
                  <!-- edit button -->
                  <!-- <button v-on:click="activateEditMode(fCard)" class="btn card-edit-btn pull-left"><i class="fa fa-pencil-alt"></i></button> -->
                  <!-- delete button -->
                  <!-- <button v-on:click="fCard.deletePending=true" @click.stop="stopProp" class="btn card-delete-btn pull-left"><i class="fa fa-trash"></i></button> -->
                  <!-- <p class="basebar-txt" v-if="fCard.deletePending">Delete?           -->
                    <!-- <span @click="deleteCard(fCard)" v-on:click.stop="stopProp" class="action-danger action pl-3">Yes, Delete</span> -->
                    <!-- <span @click="fCard.deletePending=false" @click.stop="stopProp" class="action-default action pl-3">No, Keep</span> -->
                  <!-- </p> -->
                </div>
              </div>
    </div>
  </div>
  </div>
  <h2>Чтобы вернуться назад нажмите на эту кнопку, но это почему то стерёт все данные...</h2>
  <v-btn
    icon="mdi-arrow-left"
    @click="goToMainPage"
  ></v-btn>
  <!-- <CardsStudy/> -->
    <div style="position: fixed; bottom: 0; height:max-content; width: 100%; background-color:#00123e;">
    
    <vue-sound
  livestream
  show-download
  title="The Show"
  title-link="http://www.google.com"
  details="Lorem Ipsum Dolor Sit Amet"
  details-link="http://www.bing.com"
  file="https://storage.googleapis.com/polylingua-videos/inputAudio.mp3"
  />
  </div>
</template>
<script setup>
import { useRouter } from "vue-router";
import { useQuizesStore } from "../stores/quizes.js";
import { ref } from "vue";
import VueSound from "@/components/VueSound.vue";
// import CardsStudy from "@/components/CardsStudy.vue";

const store = useQuizesStore()
const router = useRouter()

function goToMainPage() {
  router.push("/")
}
function flipCard(card) {
      card.revealed = !card.revealed;
}
</script>
<style>

.card ul, .card ol {
  text-align: left;
}
div#gridContainer div.card-content {
  padding-bottom: 3rem;
}
pre {
  font-family: monospace;
  background-color: #444;
  color: #44c87f;
  padding: 5px;
  border-radius: 3px;
  text-align: left;
}

.prompt {
  font-weight: bold;
}
.answer {
  width: 100%;
}
.button-container {
  display: flex;
  justify-content: space-between;
}
.button-container button {
  margin: 0 3px;
}
.f-card {
    margin: 100px;
    width: 22rem;
    height: 5px;
    margin: 10px auto;
    /* min-height: 250px; */
    max-width: 586px;
    box-shadow: 3px 3px 3px #c7a361;
    background-color: #C7AE80;
    /* background-color: #333; */
    /* transition: all .5; */
}
div.new-card {
  box-shadow: 0 0 41px #C7AE80, 3px 3px 3px #c7a361;
}
.nextPrevRow {
  margin: 10px auto;
  max-width: 586px;
}

.card-content {
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

button.card-edit-btn {
  position: absolute;
  bottom: 10px;
  left: 10px;
  width: 46px;
  height: 46px;
  background-color: #eee;
  color: #4b4b4b;
  border-radius: 50%;
  box-shadow: 1px 1px 2px #ccc;
}

button.card-delete-btn {
  position: absolute;
  bottom: 10px;
  left: 60px;
  width: 46px;
  height: 46px;
  background-color: #eee;
  color: #4b4b4b;
  border-radius: 50%;
  box-shadow: 1px 1px 2px #ccc;
}

button.card-edit-btn:hover{
  /* background-color: #dfdedf; */
  color: #333;
  box-shadow: 2px 2px 4px #ccc;
}

button.card-delete-btn:hover{
  /* background-color: #dfdedf; */
  color: #333;
  box-shadow: 2px 2px 4px #ccc;
}

.basebar-txt {
  position: absolute;
  bottom: 6px;
  left: 120px;
}

.card-body{
  background-color: #44c87f
}
.red-prompt {
  /* background-color: darkslateblue;
    color: var(--appleWhite); */
  background-color: rgb(139, 40, 40);
  /* color: var(--appleWhite); */
}
.apple-answer {
  background-color: #fff8e6;
}
body { 
    background-color: #ffe5b6;
}
.navbar-toggler {
    border: none;
    
}
.navbar-toggler:focus {
    border: none;
    box-shadow: none;
    border-color: none;
}

.first-container {
    height: 100%;
    margin: 65px 15px;
}
.second-container {
    margin: 0 auto;
}

.display-toggler {
    position: absolute;
    top: 65px;
    right: 10px;
}

.nextPrevRow {
    margin: 10px auto;
    max-width: 586px;
}

.card-content {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
}

.red-prompt {
    /* background-color: darkslateblue;
    color: var(--appleWhite); */
    background-color: white;
    /* color: var(--appleWhite); */
}
.apple-answer {
    background-color: var(--appleWhite);
}

pre {
    font-family: monospace;
    background-color: #444;
    color: var(--seaGreen);
    padding: 5px;
    border-radius: 3px;
    text-align: left;
}

span.action-danger {
    color: red;
    cursor: pointer;
}
span.action-default {
    color: var(--seaGreen);
    cursor: pointer;
}
span.action:hover {
    text-shadow: 0 0 2px #DDD;
}

.prompt {
    font-weight: bold;
}
.answer {
    width: 100%;
}
.button-container {
    justify-content: space-evenly;
}

.bg-light-blue {
    display: flex;
    background-color: #00adff;
}

/* Bootstrap overrides */
.card {
    margin: 50px;
    border: none;
}

/* Media Queries */
/* smallest devices */
@media (max-width: 575px) {

}

/* Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) {

}

/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) { 

}

/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) { 

}

/* Extra large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) { 

}
</style>