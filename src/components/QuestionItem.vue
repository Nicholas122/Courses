<template>
  <div class="card">
    <div class="card-header">
      <div  class="col-xs-12 col-sm-12 col-md-12">
        <h3>Question {{ index + 1}}</h3>
      </div>
    </div>
    <div class="card-body">
      <div class="col-xs-12 col-sm-12  col-md-12" v-if="question.type != 'READING_TEXT'">
        <p><span class="question-info">Question type:</span> {{ getConst(question.type) }}</p>
        <p><span class="question-info">Weight:</span> {{ question.weight }}</p>
        <p><span class="question-info">Question text:</span> {{question.text}}</p>
        <span class="question-info" v-if="question.answers.length > 0">Answers:</span>
        <div class="row marg" v-for="(answer, index) in question.answers" :key="answer.id" >

         <div class="col-xs-1 col-sm-1  col-md-1 no-padd text-center">
           <span><b>{{ index + 1 }})</b></span>
         </div>
         <div class="col-xs-10 col-sm-10  col-md-10">
           <input type="text" placeholder="Please enter the answer" class="form-control" v-model="answer.text" disabled="">
         </div>
         <div class="col-xs-1 col-sm-1  col-md-1">
           <input type="checkbox"  :id="answer.id"  v-model="answer.correct" disabled="">
         </div>

       </div>
     </div>  
   </div>
   

   <div class="card-body" v-if="question.type == 'READING_TEXT'">
    <p><span class="question-info">Question text:</span> {{question.text}}</p>
    <p><span class="question-info">Question type:</span> {{ getConst(question.type) }}</p>
    <p><span class="question-info">Reading text:</span> {{question.readingText}}</p>
    <p><span class="question-info" v-if="question.weight">Weight:</span> {{ question.weight }}</p>
    <span class="question-info" v-if="question.subQuestions.length > 0">Reading questions:</span>
    <div class="card-body" v-for="(readingQuestion, i) in question.subQuestions" :key="readingQuestion.id">
      <span class="question-info">Question {{i + 1}}:</span>
      <div class="card-body">
        <p><span class="question-info">Question text:</span> {{readingQuestion.questionText}}</p>
        <span class="question-info" v-if="readingQuestion.answers.length > 0">Answers:</span>

        <div class="row marg" v-for="(answer, index) in readingQuestion.answers" :key="answer.id" >

         <div class="col-xs-1 col-sm-1 col-md-1 no-padd text-center">
           <span><b>{{ index + 1 }})</b></span>
         </div>
         <div class="col-xs-10 col-sm-10 col-md-10">
           <input type="text" placeholder="Please enter the answer" class="form-control" v-model="answer.text" disabled="">
         </div>
         <div class="col-xs-1 col-sm-1 col-md-1">
           <input type="checkbox"  :id="answer.id"  v-model="answer.correct" disabled="">
         </div>
       </div>
     </div>

   </div>
 </div>  

 <div class="card-body">
   <button class="btn btn-secondary edit-btn" @click.prevent="editQuestions"> Edit </button>
   <button class="btn btn-danger edit-btn"  @click.prevent="removeQuestion"> Delete </button>
 </div>
</div> 
 
</template>
<script>
import { mapActions , mapState} from 'vuex';
import * as types from '../store/questionTypes';


export default {
  props: {
    index: Number, 
    question: Object
  },
  methods: {
    ...mapActions([
      'deleteQuestion',
      'editQuestion'
       ]),
    removeQuestion() {
      this.deleteQuestion(this.question.id);
    },
    getConst(constName) {
      return types[constName];
    },
    editQuestions()
    {
      this.editQuestion(this.question.id);
      window.scroll({
        top:0, left:0, behavior: 'smooth'
      });
    }
  },

};

</script>

<style>
.edit-btn {
  margin-top:15px;
}

.card {
  margin-top: 15px;
  margin-bottom:15px;

}

.question-info {
  font-weight: bold;
}

</style>
