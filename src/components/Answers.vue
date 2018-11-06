<template>
  <div>
    <form>

      <div class="card-body">
        <div class="row marg" v-for="(answer, index) in answers" :key="answer.uid" >

         <div class="col-lg-1 no-padd text-center">
           <span><b>{{ index + 1}})</b></span>
         </div>
         <div class="col-lg-9">
           <input type="text" placeholder="Please enter the answer" class="form-control" v-model="answer.text">
         </div>
         <div class="col-lg-1">
           <input type="checkbox"  :id="answer.uid"  v-model="answer.correct">
         </div>
         <div class="col-lg-1 no-padd text-center">
           <span  style="color:#dc3545;cursor:pointer" @click.prevent="removeAnswer(answer.uid)"> <b>X</b> </span>
         </div>
       </div>
       <div class="answer-header">
        <div class="row">
          <div class="col-lg-4">
            <button  class="btn btn-success" @click.prevent="createAnswer">Add answer </button>
          </div>
          <div class="col-lg-8 padd">  
            <span class="padd"><h6>Please add answer for question</h6></span>
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
