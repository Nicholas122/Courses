<template>
  <div>
    <QuestionItem v-for="(question, i) in questions" 
    :key="question.id"
    :question="question" 
    :index="(i)"></QuestionItem>
  </div>
</template>

<script>
import QuestionItem from "./QuestionItem";
import { mapState } from 'vuex'

export default {
  computed: mapState({
    questions: state => state.questions,
  }),
  components: {
    QuestionItem
  },
};
</script>
