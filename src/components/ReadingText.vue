<template>
  <div>
    <form>
      <div class="answer-header">
        <div class="row">
          <div class="col-lg-7">
            <h4>Reading text </h4>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-12">
          <textarea placeholder="Please enter the reading text" class="form-control" id="readingText" v-model="readingText" rows="20"></textarea>
        </div>
      </div>
      <div  v-for="(readingQuestion, index)  in readingQuestions" :key="readingQuestion.id" style="margin-top:  20px">

        <div class="row">
          <div class="col-lg-11">
            <h4>
              Question - {{ index + 1 }}
            </h4>
          </div>
          <div class="col-lg-1 no-padd text-center">
            <span  style="color:#dc3545;cursor:pointer" @click.prevent="removereadingQuestion(readingQuestion.id)"><b>X</b> </span>
          </div>
        </div>  
        <div class="row">
          <div class="col-lg-12 ">
            <textarea placeholder="Please enter the question" class="form-control " :id="readingQuestion.id" v-model="readingQuestion.questionText"></textarea>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12 ">
            <Answers :questionId="readingQuestion.id"></Answers>
            <div :id="'errors-' + readingQuestion.id"></div>
          </div>
        </div>
      </div>
        <div class="card-body">
          <div class="row">
            <div class="col-lg-7">
              <button  class="btn btn-success " v-on:click.prevent="createReadingQuestion">Add Reading Question </button>
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

      removereadingQuestion(id) {
        this.deleteReadingQuestion(id);
      }
    },
    components:{
      Answers
    }
  }
</script>

