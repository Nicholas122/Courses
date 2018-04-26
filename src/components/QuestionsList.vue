<template>
  <div class="container">
    <QuestionItem v-for="(question, i) in questions" 
    :key="question.id"
    :question="question" 
    :index="(i+1)"></QuestionItem>
  </div>
</template>

<script>

import QuestionItem from './QuestionItem';
import store from '../store';

export default {
  computed: { questions: () => store.state.questions },
  components: {
    QuestionItem,
  },
  methods: {
    editQuestion(id) {
    }
  }

}
</script>
