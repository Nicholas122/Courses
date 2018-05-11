<template>
  <div>
    <div class="card">
      <div  class="card-header">
        <h3>Create Question </h3>
      </div>
      <div class="card-body">
        <form @submit.prevent="create">
          <!-- Selected question type component  -->
            <QuestionTypeSelector />

          <div class="row marg zero-marg">
            <div class="col-xs-6 col-sm-6 col-md-6 no-padd">
              <label><b>Choose weight:</b></label> 
            </div>
            <div class="col-xs-6 col-sm-6 col-md-6 no-padd">
              <select name="weight" v-validate="'required'" :class="{ 'form-control': true, 'has-error': errors.has('weight') }" id="question-weigth"  v-model="question.weight" >
                <option  class="f-text" value="1">1</option>
                <option class="f-text" value="2">2</option>
                <option class="f-text" value="3">3</option>
                <option class="f-text" value="4">4</option>
                <option class="f-text" value="5">5</option>
              </select>
            </div>
            
            <span v-show="errors.has('weight')" class="help error-message">This value should not be empty.</span>
          </div>
          <div class="form-group">
            <textarea name="question" v-validate="'required'" :class="{ 'form-control': true, 'has-error': errors.has('question') }" type="text" id="question-text" rows="5"  placeholder="Please enter text for question" v-model.trim="question.text" ></textarea>
            <span v-show="errors.has('question')" class="help error-message">This value should not be blank.</span>
          </div>
         <div v-if="questionType == 'USER_INPUT'">
            <div class="answer-header marg">

                <span>User will be asked to manually enter an answer into a text box</span>

            </div>
          </div>
          <div v-if="questionType == 'MULTIPLE_CHOICE'">

              <Answers :questionId="questionId"> </Answers>
              
          </div>
          <div v-if="questionType == 'READING_TEXT'">

              <readingText></readingText>

          </div>

          <button :disabled="errors.any()" type="submit" class="btn btn-success">Save Question</button> 
          <button  type="button" class="btn btn-primary" @click.prevent="emptyChanges">Cancel</button> 
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
        weight: 1,
      },
      
    };
  },
  mounted() {
      //this.editQuestion(this.question.id);
    },
    computed: {
     ...mapGetters ([
       'getQuestionText'
       ]),

     ...mapState({
      questionType: state => state.questionType,
      questionId: state => state.questionId
    }),
   },
   methods: {
    ...mapActions([
      'addQuestion',
      'clearData'
      ]),
    create: function() {
      this.$validator.validateAll().then((result) => {
        if (result) {
          this.question.id = this.questionId;
          
          this.addQuestion(this.question).then(() => { this.question ={};})
        }
      });
    },
    emptyChanges() {
      this.question = {weight: 1};

      this.clearData();
    }

  },
  components: {
    ReadingText,
    Answers,
    QuestionTypeSelector,
  }
};
</script>

<style>
.answer-header {
    padding: .75rem 1.25rem;
    margin-bottom: 10px;
    background-color: rgba(0,0,0,.03);
    border: 1px solid rgba(0,0,0,.125);
}
.f-text {
  font-size:16px;
}
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
.marg {
  margin-top: 10px;
  margin-bottom: 10px;
}

.zero-marg {
  margin-left: 0px;
  margin-right: 0px;
}
.no-marg {
  margin:0px
}
.no-border-bottom {
  border-bottom:none;
}
#question-weigth {
  height: 34px;
}
</style>
