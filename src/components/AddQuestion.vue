<template>
  <div>
    <div class="card">
      <div  class="card-header">
        <h3>Create Question </h3>
      </div>
      <div class="card-body">
        <form @submit.prevent="create">
          <div class="row">
            <div class="col-md-8">
              <QuestionTypeSelector />
            </div>
            <div class="col-md-4">
              <div class="form-group">
               <label style="display: block;"><b>Choose weight:</b></label> 
               <select  name="weight" v-validate="'required'" :class="{ 'form-control': true, 'has-error': errors.has('weight') }" id="question-weigth"  v-model="question.weight" >
                <option  value="1">1</option>
                <option  value="2">2</option>
                <option  value="3">3</option>
                <option  value="4">4</option>
                <option  value="5">5</option>
              </select>
              <span v-show="errors.has('weight')" class="help error-message">This value should not be blank.</span>
            </div>
          </div>
        </div>
        <div class="form-group">
          <textarea name="question" v-validate="'required'" :class="{ 'form-control': true, 'has-error': errors.has('question') }" type="text" id="question-text" rows="5"  placeholder="Please enter text for question" v-model.trim="question.text" ></textarea>
          <span v-show="errors.has('question')" class="help error-message">This value should not be blank.</span>
        </div>
        <label for=""></label>
        <div v-if="questionType == 'USER_INPUT'">
          <div class="answer-header">

            <h4>User must answer of this question </h4>

          </div>
        </div>
        <div v-if="questionType == 'MULTIPLE_CHOICE'">

          <Answers :questionId="questionId"> </Answers>
          <div v-if="answerError">
            <span class="error-message">
              {{ answerError }}
            </span>           
          </div>
        </div>
        <div v-if="questionType == 'READING_TEXT'">

          <readingText></readingText>

        </div>

        <input :disabled="errors.any()" type="submit" class="btn btn-success marg"  value="Save question"> 
      </form>
    </div>      
  </div>

</div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex';
  import { mapState } from 'vuex'
  import ReadingText from './ReadingText';
  import QuestionTypeSelector from './QuestionTypeSelector';
  import Answers from './Answers';
  import VeeValidate from 'vee-validate'


  export default {

    data() {
      return {
        question: {
          "weight": 1
        },
        answerError: ''
      };
    },
    mounted() {
      //this.editQuestion(this.question.id);
    },
    computed: {
     ...mapGetters ([
       'getQuestionText',
       'getAnswersByQuestionId'
       ]),

     ...mapState({
      questionType: state => state.questionType,
      questionId: state => state.questionId,
      readingQuestions: state => state.readingQuestions,
      readingTextQuestionErrors: state => state.readingTextQuestionErrors
    }),
   },
   methods: {
    ...mapActions([
      'addQuestion',
      ]),
    create: function() {
      this.$validator.validateAll().then((result) => {
        if (result) {
          if (this.questionType === 'MULTIPLE_CHOICE' && this.getAnswersByQuestionId(this.questionId).length < 2) {
            this.answerError = 'The question must have more than or equal to two answers.';
          }

          if (this.questionType === 'READING_TEXT') {
            this.readingTextQuestionErrors = [];
            for (var i = 0; i < this.readingQuestions.length; i++) {
              if (this.readingQuestions[i].answers.length < 2) {
                document.getElementById('errors-'+this.readingQuestions[i].id).innerHTML = '<span class="error-message">The question must have more than or equal to two answers.<span>';
                this.readingTextQuestionErrors[this.readingQuestions[i].id] = '<span class="error-message">The question must have more than or equal to two answers.<span>';
              }
            }

          }
          if (this.answerError === '' && this.readingTextQuestionErrors.length === 0) {
            this.question.id = this.questionId;

            this.addQuestion(this.question).then(() => { this.question ={"weight": 1};})
          }
        }
      });
    },

  },
  components: {
    ReadingText,
    Answers,
    QuestionTypeSelector,
  }
};
</script>

<style>
.help {
  background: white;
}

.has-error {
  border-color: #dc3545 !important;
  -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075) !important;
  box-shadow: inset 0 1px 1px rgba(0,0,0,.075) !important;
}
.error-message {
  color: #dc3545;
}
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

#question-weigth {
  height: 34px;
}
</style>
