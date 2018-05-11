<template>
  <div>
    <form>
      <div class="answer-header">
         
      

    <div class="card-body">
      <div class="row marg" v-for="(answer, index) in answers" :key="answer.id" >

       <div class="col-xs-1 col-sm-1 col-md-1 no-padd text-center">
         <span><b>{{ index + 1}})</b></span>
       </div>
       <div class="col-xs-9 col-sm-8 col-md-9">
         <input type="text" placeholder="Please enter the answer" class="form-control" v-model="answer.text">
       </div>
       <div class="col-xs-1 col-sm-1 col-md-1">
         <input type="checkbox"  :id="answer.id"  v-model="answer.correct">
       </div>
       <div class="col-xs-1 col-sm-1 col-md-1 no-padd text-center">
          <span  style="color:#dc3545;cursor:pointer" @click.prevent="removeAnswer(answer.uid)"> <b>X</b> </span>
        </div>
     </div>
     <div class="row">
          <div class="col-xs-4 col-sm-4 col-md-4">
            <button  class="btn btn-success" @click.prevent="createAnswer">Add answer </button>
          </div>
         
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
     return this.$store.getters.getAnswersByQuestionId(this.questionId);
      //return this.$store.state.answers
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
    },
   
  }

}
</script>
