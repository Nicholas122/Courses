<template>
    <div>
        <form>
            <div class="card-header">
                <h4>Reading text </h4>
                <button  class="btn btn-default" v-on:click="addReadingQuestion">Add Reading Question </button>
                <button  class="btn btn-danger" v-on:click="deleteReadingQuestion">Delete Reading Question </button>
            </div>
            <div class="card-body">
                <div class="col-lg-12">
                    <textarea placeholder="Please enter the reading text" class="form-control" name="" id="" ></textarea>
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
                        <ReadingAnswers></ReadingAnswers>
                    </div>
                </div>
                
            </div>
        </form>
    </div>
</template>

<script>

import QuestionServices from './QuestionServices'
import ReadingAnswers from '../components/ReadingAnswers'
import store from '../store';

export default {
  data(){
      return {
            readingQuestions: [
                    {
                        id:1,
                        questionText:'',
                        questionWeight:'',
                        questionAnswers:[ 
                            {
                                id:1,
                                text:'',
                                correct:''
                            }
                        ]
                    }
                ],
                
      }
  },
  methods: {
        addReadingQuestion(questionText,questionWeight){
            var id = this.readingQuestions[this.readingQuestions.length-1].id +1;
            this.readingQuestions.push({
                id,
                questionText,
                questionWeight,
                
               
            })

            store.commit('addReadingQuestion', this.readingQuestions);
        },
        deleteReadingQuestion(id){
            if(this.readingQuestions.length > 1) {
            var id= this.readingQuestions[this.readingQuestions.length-1].id - 1;
            this.readingQuestions.splice(id,1);
            }
        },
  },
  components:{
      ReadingAnswers
  }
}
</script>
    
