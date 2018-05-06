<template>
  <div class="container">
    <div class="row">
      <question-header :courseId="courseId"/>
    </div>

    <div class="row">
      <div class="col-md-6 col-padding-0">
        <questions></questions>

        <div class="container" v-if="this.questions">
          <button class="btn btn-success create-test-btn"  @click.prevent="createTest">Create test</button>
        </div>
      </div>
      <div class="col-md-6 col-padding-0">
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
  props: ['courseId'],
  data() {
    return {
      mode: "AddView",
      editedQuestion: {}
    };
  },
  computed: mapState({
    questions: state => state.questions,
    testData: state => state.test.data
  }),
  components: {
    questionHeader,
    questions: QuestionsList,
    AddQuestion
  },
  methods: {
    ...mapActions([
      'createTestRequest',
      'mergeTestData'
      ]),
    createTest() {
      this.mergeTestData()
      this.createTestRequest(this.testData);
    }
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