<template>
    <div>
        <div class="card">
            <div  class="card-header">
                <h3>Question {{ index }}</h3>
            </div>
            <div class="card-body">
                <p>{{question.text}}</p>
                <p>{{question.type}}</p>
            <div class="answers">
                <template v-for="answer  in question.answers" v-bind:answer="answer.id"  >
                    <!-- <p>{{question.answers.id }} ) {{question.answers.text}}</p> -->
                    <!-- {{ answer.text}}  {{answer.id}} {{ answer.key}} {} -->
                            {{ answer.id}} {{ answer.text}}

                </template>
            </div>    
                <p>{{question.weight}}</p>
                
                <a href="#" class="btn btn-secondary edit-btn" @click="editQuestions"> Edit </a>
                <a href="#" class="btn btn-danger edit-btn" @click="deleteQuestions"> Delete </a>
            </div>  
        </div> 
    </div>   
</template>
<script>
import QuestionServices from './QuestionServices'
import store from '../store';


export default {
  props: {
        question: {
            type: Object,
            requared:true,
     
      }, 
      index: Number, 
  },  
  methods: {
      editQuestions() {
           QuestionServices.editDetail(this.question.id);
      },
      deleteQuestions() {
        let questionId = this.question.id; 
        var position = store.state.questions.find(function (element, index) {
            if (element.id == questionId) {
              return index;
            };
        });

           store.commit('removeQuestion', position);
      }
  },

}
</script>

<style>
.edit-btn {
    margin-top:15px;
}

.card {
    margin-top: 15px;
    margin-bottom:15px;
    
}

</style>
