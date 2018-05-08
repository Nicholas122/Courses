<template>
  <div class="container">
    <div class="row">
      <question-header :headerTitle="headerTitle"></question-header>
    </div>

    <div class="row">
      <div class="col-md-6">
        <questions></questions>

        <button v-if="this.questions" class="btn btn-success create-test-btn"  @click.prevent="editTests(courseId)">Save test</button>

      </div>
      <div class="col-md-6">
        <add-question></add-question>
      </div>
    </div>
  </div>
</template>

<script>
import questionHeader from "./Header";
import QuestionsList from "./QuestionsList";
import AddQuestion from "./AddQuestion";
import { mapActions } from 'vuex';
import { mapState } from 'vuex'

export default {
  props: ['testId'],
  data() {
    return {
      editedQuestion: {},
      headerTitle: 'Edit test',
    };
  },
  created() {
        this.fetchTest(this.testId);
        this.fetchQuestion(this.testId);
  },
  computed: mapState({
    questions: state => state.questions,
    testData: state => state.test,
  }),
  components: {
    questionHeader,
    questions: QuestionsList,
    AddQuestion
  },
  methods: {
    ...mapActions([
      'createTestRequest',
      'mergeTestData',
      'fetchTest',
      'fetchQuestion'
      ]),
    
  }
};
</script>
<style>
.col-padding-0 {
  padding: 0px;
}
.create-test-btn {
  width: 120px;
  height: 40px;
}
</style>