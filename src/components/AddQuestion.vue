<template>
  <div>
    <div class="container">
      <div class="card">
        <div  class="card-header">
          <h3>Create Question </h3>
        </div>
        <div class="card-body">
          <form>
            <div class="form-group">
              <label for="question-text"><b> Question:</b></label>
              <div class="right">
                <label><b>Choose weight:</b></label> 
                <select  id="question-weigth"  v-model="question.weight" >
                  <option  value="1">1</option>
                  <option  value="2">2</option>
                  <option  value="3">3</option>
                  <option  value="4">4</option>
                  <option  value="5">5</option>
                </select>
              </div>
              <textarea type="text" id="question-text" rows="5" class="form-control"  placeholder="Please enter text for question" v-model="question.text"></textarea>
            </div>
            <QuestionTypeSelector />
            <label for=""></label>
            <div v-if="questionType == 'USER_INPUT'">
              <div class="card">
                <div class="card-header">
                  <h4>User must answer of this question </h4>
                </div>
              </div>
            </div>
            <div v-if="questionType == 'MULTIPLY_CHOISE'">
              <div class="card">
                <Answers> </Answers>
              </div>        
            </div>
            <div v-if="questionType == 'READING_TEXT'">
              <div class="card">
                <readingText></readingText>
              </div>
            </div>

              <button type="submit" class="btn btn-success" @click.prevent="submitHandler">Add Question </button>
            </form>
          </div>     
        </div> 
      </div>

    </div>
  </template>

  <script>
import { mapActions } from 'vuex';
import { mapState } from 'vuex'
import ReadingText from './ReadingText';
import QuestionTypeSelector from './QuestionTypeSelector';
import Answers from './Answers';

export default {
  data() {
    return {
      question: {}
    };
  },
  computed: mapState({
    questionType: state => state.questionType,
  }),
  methods: {
    ...mapActions([
      'addQuestion',
    ]),
    submitHandler() {
      this.addQuestion(this.question)
        .then(() => { this.question = {};});
    },
  },
  components: {
    ReadingText,
    Answers,
    QuestionTypeSelector,
  },
};
</script>

 <style>
.right {
  float: right;
}
.marg {
  margin-top: 10px;
  margin-bottom: 10px;
}
.padd {
  padding-top: 5px;
}
.no-padd {
  padding: 0px;
}
.yes-marg {
  margin-left: 15px;
  margin-right: 15px;
}
</style>
