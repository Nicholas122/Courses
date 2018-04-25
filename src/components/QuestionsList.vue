<template>
  <div class="container">
    <QuestionItem v-for="(question, i) in questions" 
    :key="question.id"
    v-bind:question="question" 
    v-bind:index="(i+1)"></QuestionItem>
  </div>
</template>

<script>

import QuestionItem from './QuestionItem';
import QuestionServices from './QuestionServices'
import store from '../store';


export default {
  computed: { questions: () => store.state.questions },
  components: {
    QuestionItem,
  },

}
</script>
