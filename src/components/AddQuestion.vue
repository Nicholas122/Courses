<template>
  <div>
    <div class="container">
      <div class="card">
        <div  class="card-header">
          <h3>Create Question </h3>
        </div>
        <div class="card-body">
          <form @submit.prevent="create">
            <div class="form-group">
              <label for="question-text"><b> Question:</b></label>
              <div class="right">
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
              </div>
              <div class="form-group">
                <textarea name="question" v-validate="'required'" :class="{ 'form-control': true, 'has-error': errors.has('question') }" type="text" id="question-text" rows="5" class="form-control mb-2"  placeholder="Please enter text for question" v-model.trim="question.text" ></textarea>
                <span v-show="errors.has('question')" class="help error-message">This value should not be blank.</span>
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
                <Answers :questionId="1"> </Answers>
              </div>        
            </div>
            <div v-if="questionType == 'READING_TEXT'">
              <div class="card">
                <readingText></readingText>
              </div>
            </div>
            
            <input :disabled="errors.any()" type="submit" class="btn btn-success marg"  value="Add Question"> 
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
import VeeValidate from 'vee-validate'

export default {

  data() {
    return {
      text: '',
      question: {},
      
    };
  },
  created: function(){
       
      },
  computed: mapState({
    questionType: state => state.questionType,
  }),
  methods: {
    ...mapActions([
      'addQuestion',
      ]),
      create: function() {
          this.$validator.validateAll().then((result) => {
              if (result) {
                  this.addQuestion(this.question).then(() => { this.question ={};})
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
    border-color: #dc3545;
    -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
    box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
}
.error-message {
    color: #dc3545;
}
/* .form-control {
    border:1px solid gray;
} */
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
