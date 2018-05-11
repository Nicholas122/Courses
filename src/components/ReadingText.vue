<template>
  <div>
    <form>
        <div class="row marg zero-marg">
          <textarea placeholder="Please enter the reading text" class="form-control" rows="12" id="readingText" v-model="readingText"></textarea>
        </div>
        
        <div  v-for="(readingQuestion, index)  in readingQuestions" :key="readingQuestion.id" >
            <div class="row zero-marg answer-header no-marg no-border-bottom" >
              <div class="col-lg-11 marg">
                <h4>
                  Question - {{ index + 1 }}
                </h4>
              </div>
              <div class="col-lg-1 marg text-center">
                <span  style="color:#dc3545;cursor:pointer" @click.prevent="removereadingQuestion(readingQuestion.id)"><b>X</b> </span>
              </div>
              <div class="col-lg-12 ">
                <textarea placeholder="Please enter the question" class="form-control " rows="6" :id="readingQuestion.id" v-model="readingQuestion.questionText"></textarea>
              </div>
            </div>
            <div class="row zero-marg">
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
    }
  },
  components:{
    Answers
  }
}
</script>

