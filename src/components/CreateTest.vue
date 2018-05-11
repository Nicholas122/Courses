<template>
  <div class="container">
    <div class="row">
      <question-header :headerTitle="headerTitle"> </question-header>
    </div>

    <div class="row">
      <div class="col-sm-6 col-md-6">
        <questions></questions>

        <button v-if="this.questions" class="btn btn-success create-test-btn"  @click.prevent="createTest">Create test</button>
      </div>
      <div class="col-sm-6 col-md-6">
        <component :is="questionComponent"></component>
      </div>
    </div>
  </div>
</template>

<script>
import questionHeader from "./Header";
import QuestionsList from "./QuestionsList";
import AddQuestion from "./AddQuestion";
import EditQuestion from "./EditQuestion";
import { mapActions } from 'vuex';
import { mapState } from 'vuex'

export default {
  props: ['courseId'],
  data() {
    return {
      headerTitle: 'Create test',
    };
  },
  created() {
      this.setCourseId(this.courseId);
  },
  computed: mapState({
    questions: state => state.questions,
    testData: state => state.test.data,
    questionComponent: state => state.questionComponent
  }),
  components: {
    questionHeader,
    questions: QuestionsList,
    AddQuestion,
    EditQuestion
  },
  methods: {
    ...mapActions([
      'createTestRequest',
      'mergeTestData',
      'setCourseId'
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