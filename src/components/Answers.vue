<template>
  <div>
    <form>
      <div class="card-header">

        <h4> Multiply choise 

          <!-- <a href="#" class="right btn btn-secondary edit-btn" @click="addAnswers"> Add answer </a> -->

          <!-- <a href="#" class=" btn btn-danger edit-btn " @click="deleteAnswers"> Delete answer </a> -->

          <button  class="btn btn-success" @click.prevent="addAnswer">Add answer </button>
          <button  class="btn btn-danger" @click.prevent="deleteAnswer">Delete answer </button>
        </h4>
      </div>

      <div class="card-body">
        <div class="row marg" v-for="(answer) in answers" :key="answer.id" >

         <div class="col-lg-1 no-padd text-center">
           <span><b>{{ answer.id }})</b></span>
         </div>
         <div class="col-lg-10">
           <input type="text" placeholder="Please enter the answer" class="form-control" v-model="answer.text">
         </div>
         <div class="col-lg-1">
           <input type="checkbox"  :id="answer.id"  v-model="answer.correct">
         </div>

       </div>
     </div> 
     <!-- <button  class="btn btn-success" @click="addAnswers">Add answer </button> -->
   </form>     
 </div>
</template>

<script>
import AddQuestion from './AddQuestion'
import store from '../store';

export default {
  data() {
    return {
     answers: store.state.answers

   }
 },

 methods: {
  addAnswer(text, correct) 
  {
    var id = 1;  

    if (store.state.answers[store.state.answers.length-1] != undefined) {
      id = store.state.answers[store.state.answers.length-1].id +1;
    }

    var answer = {
      id,
      text:'',
      correct:''
    };

    store.commit('addAnswer', answer);
  },
  deleteAnswer(id) {
    var id= this.answers[this.answers.length-1].id - 1;
    this.answers.splice(id,1);

  }
}

}
</script>
