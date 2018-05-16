<template>
  <div class="container">
    <div v-bind:style="{ display: isActive }">
      <div class="alert alert-success alert-dismissible" v-if="testCreate === true" role="alert" >
          <strong>Warning!</strong> Better check yourself, you're not looking too good.
          <button  type="button" data-dismiss="alert" aria-label="Close" class="close" @click.prevent="close"><span aria-hidden="true">х</span></button>
      </div> 
    </div>
    <div class="row">
      <question-header :headerTitle="headerTitle"> </question-header>
    </div>

    <div class="row">
      <div class="col-sm-6 col-md-6">
        <questions></questions>

        <button v-if="this.questions"  class="btn btn-success create-test-btn"  @click.prevent="createTest" >Create test</button>
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
      testCreate: false,
      isActive: 'inline',
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
      close(){
        console.log('2ef')
        this.isActive = 'none';
      },
    createTest() {
      console.log('pre-add')
      console.log(this.questions.length)
      if(this.questions.length >= 1 ){
           this.mergeTestData()
           this.createTestRequest(this.testData);
          console.log('add')
      
      if(this.testData.title !== '' && this.testData.description !== '' && this.testData.section !== '' &&
         this.testData.timeLimit !== '' && this.testData.retakeTimeout !== '' && this.testData.passingScorePercent !== '' ){
            this.testCreate = true;
           
            console.log('watch')
      }
      }
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