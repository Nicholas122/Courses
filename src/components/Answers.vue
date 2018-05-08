<template>
  <div>
    <form>
      <div class="card-header">
        <!-- <a href="#" class="right btn btn-secondary edit-btn" @click="addAnswers"> Add answer </a> -->

        <!-- <a href="#" class=" btn btn-danger edit-btn " @click="deleteAnswers"> Delete answer </a> -->

        <button  class="btn btn-success" @click.prevent="createAnswer">Add answer </button>
      </h4>
    </div>

    <div class="card-body">
      <div class="row marg" v-for="(answer, index) in answers" :key="answer.id" >

       <div class="col-lg-1 no-padd text-center">
         <span><b>{{ index + 1}})</b></span>
       </div>
       <div class="col-lg-8">
         <input type="text" placeholder="Please enter the answer" class="form-control" v-model="answer.text">
       </div>
       <div class="col-lg-1">
         <input type="checkbox"  :id="answer.id"  v-model="answer.correct">
       </div>
       <div class="col-lg-1 no-padd text-center">
        <span  style="color:#dc3545;cursor:pointer" @click.prevent="removeAnswer(answer.uid)" class="glyphicon glyphicon-remove" aria-hidden="true"></span>
       </div>
     </div>
   </div> 
   <!-- <button  class="btn btn-success" @click="addAnswers">Add answer </button> -->
 </form>     
</div>
</template>

<script>
import AddQuestion from './AddQuestion'
import { mapActions, mapState } from 'vuex';

export default {
  props: ['questionId'],
  computed:{
    answers() {
      console.log(this.$store.getters.getAnswersByQuestionId(this.questionId));
      return this.$store.getters.getAnswersByQuestionId(this.questionId);
    } 
  },
  methods: {
    ...mapActions([
      'addAnswer',
      'deleteAnswer'
      ]),
    createAnswer(text, correct) 
    {
      var answer = {
        text:'',
        correct:'',
        questionId: this.questionId
      };

      this.addAnswer(answer);
    },
    removeAnswer(uid) {
      this.deleteAnswer(uid);
    }
  }

}
</script>
