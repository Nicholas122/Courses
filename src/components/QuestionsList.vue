<template>
  <div class="container">
    <QuestionItem v-for="(question, i) in questions" 
    :key="question.id"
    :question="question" 
    :index="(i+1)" @editQuestion="editQuestion"></QuestionItem>
  </div>
</template>

<script>

import QuestionItem from './QuestionItem';
import store from '../store';
import _ from 'lodash';

export default {
  computed: { questions: () => store.state.questions },
  components: {
    QuestionItem,
  },
  methods: {
    editQuestion(id) {
      let question = _.find(this.questions, {id: id});

      this.$emit('editQuestion', question);
    }
  }

}
</script>
