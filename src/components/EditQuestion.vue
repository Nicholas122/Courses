<template>
  <div>
    <div class="card">
      <div  class="card-header">
        <h3>Edit Question</h3>
      </div>
      <div class="card-body">
        <form @submit.prevent="save">
          <div class="form-group right">
            <label><b>Choose weight:</b></label> 
            <select  name="weight" v-validate="'required'" :class="{ 'form-control': true, 'has-error': errors.has('weight') }" id="question-weigth"  v-model="question.weight" >
              <option  value="1">1</option>
              <option  value="2">2</option>
              <option  value="3">3</option>
              <option  value="4">4</option>
              <option  value="5">5</option>
            </select>
            <span v-show="errors.has('weight')" class="help error-message">This value should not be blank.</span>
          </div>
          <div class="form-group">
            <textarea name="question" v-validate="'required'" :class="{ 'form-control': true, 'has-error': errors.has('question') }" type="text" id="question-text" rows="5"  placeholder="Please enter text for question" v-model.trim="question.text" ></textarea>
            <span v-show="errors.has('question')" class="help error-message">This value should not be blank.</span>
          </div>
          <QuestionTypeSelector></QuestionTypeSelector>
          <label></label>
          <div v-if="question.type == 'USER_INPUT'">
            <div class="card">
              <div class="card-body">
                <h4>User must answer of this question </h4>
              </div>
            </div>
          </div>
          <div v-if="question.type == 'MULTIPLE_CHOICE'">
            <div class="card-body">
              <Answers :questionId="question.id"> </Answers>
            </div>        
          </div>
          <div v-if="question.type == 'READING_TEXT'">
            <div class="card-body">
              <readingText></readingText>
            </div>
          </div>

          <input :disabled="errors.any()" type="submit" class="btn btn-success marg"  value="Save Question"> 
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

    mounted() {
    },
    computed: {
     ...mapGetters ([
       'getQuestionText'
       ]),

     ...mapState({
      questionType: state => state.questionType,
      question: state => state.editedQuestion,
    }),
   },
   methods: {
    ...mapActions([
      'saveQuestion',
      ]),
    save: function() {
      this.$validator.validateAll().then((result) => {
        if (result) {
          this.saveQuestion(this.question);
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
