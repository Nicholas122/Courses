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

        <button class="btn btn-secondary edit-btn" @click.prevent="editQuestions"> Edit </button>
        <button class="btn btn-danger edit-btn" @click.prevent="removeQuestion"> Delete </button>
      </div>  
    </div> 
  </div>   
</template>
<script>
import { mapActions } from 'vuex';


export default {
  props: {
    question: {
      type: Object,
      required:true,

    }, 
    index: Number, 
  },  
  methods: {
    ...mapActions([
      'deleteQuestion',
      ]),
    removeQuestion() {
      this.deleteQuestion(this.question.id);
    },
    editQuestions() {

    },
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
