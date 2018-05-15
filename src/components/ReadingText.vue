<template>
  <div>
    <form>
        <div class="row marg zero-marg">
          <textarea placeholder="Please enter the reading text" class="form-control" rows="12" id="readingText" v-model="readingText"></textarea>
        </div>
        
        <div  v-for="(readingQuestion, index)  in readingQuestions" :key="readingQuestion.id" >
            <div class="row zero-marg answer-header no-marg no-border-bottom" >
              <div class="col-xs-11 col-sm-11 col-md-11 marg">
                <h4>
                  Question - {{ index + 1 }}
                </h4>
              </div>
              <div class="col-xs-1 col-sm-1  col-md-1 marg text-center">
                <span  style="color:#dc3545;cursor:pointer" @click.prevent="removereadingQuestion(readingQuestion.id)"><b>X</b> </span>
              </div>
              <div class="col-xs-12 col-sm-12 col-md-12 ">
                <textarea placeholder="Please enter the question" class="form-control " rows="6" v-model="readingQuestion.questionText" :name="readingQuestion.id" v-validate="'required'" :class="{'has-error': errors.has(readingQuestion.id) }"></textarea>
                <span v-show="errors.has(readingQuestion.id)" class="help error-message">This value should not be blank.</span>
              </div>
            </div>
            <div>
              <Answers :questionId="readingQuestion.id"></Answers>
            </div>
        </div>
        <div class="row marg zero-marg">
          <button  class="btn btn-success " v-on:click.prevent="createReadingQuestion">Add Reading Question </button>
      </div>
    
  </form>
</div>
</template>

<script>
import Answers from './Answers';
import { mapActions } from 'vuex';
import { mapState } from 'vuex'
import { mapGetters } from 'vuex'


export default {
  inject: ['$validator'],
  computed: { 
    ...mapGetters([
      'getReadingText',
      ]),
    readingText: {
      get () {
        return this.getReadingText
      },
      set (value) {
        this.setReadingText(value)
      }
    },
    ...mapState(['readingQuestions'])
  },
  mounted () {
      this.$emit('validateAnswers');
  },
  methods: {
    ...mapActions([
      'addReadingQuestion',
      'deleteReadingQuestion',
      'setReadingText',
      ]),
    createReadingQuestion(questionText,questionWeight){
      var readingQuestions = {
        questionText: '',
        questionWeight: 1,
      };

      this.addReadingQuestion(readingQuestions);
    },

    removereadingQuestion(id) {
      this.deleteReadingQuestion(id);
    },

    validateAnswers() {
      this.$validator.validateAll();
    }
  },
  components:{
    Answers
  }
}
</script>

