<template>
    <div>
        <form>
            <div class="card-header">
                <h4>Reading text </h4>
                <button  class="btn btn-default" v-on:click.prevent="createReadingQuestion">Add Reading Question </button>
                <button  class="btn btn-danger" v-on:click="deleteReadingQuestion">Delete Reading Question </button>
            </div>
            <div class="card-body">
                <div class="col-lg-12">
                    <textarea placeholder="Please enter the reading text" class="form-control" id="readingText" v-model="readingText"></textarea>
                </div>
                
                <div  v-for="readingQuestion in readingQuestions" :key="readingQuestion.id" >

                    <div class="col-lg-12 ">
                     <h4>Question - {{ readingQuestion.id }}

                     </h4>
                 </div>

                 <div class="col-lg-12 ">
                    <textarea placeholder="Please enter the question" class="form-control " :id="readingQuestion.id" v-model="readingQuestion.questionText"></textarea>
                </div>
                <div class="col-lg-12 ">
                    <Answers :questionId="readingQuestion.id"></Answers>
                </div>
            </div>

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
},
components:{
  Answers
}
}
</script>

