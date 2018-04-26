<template>
  <div>
    <div class="container">
      <div class="card">
        <div  class="card-header">
          <h3>Create Question </h3>
        </div>
        <div class="card-body">
          <form>
            <div class="form-group">
              <label for="question-text"><b> Question:</b></label>
              <div class="right">
                <label><b>Choose weight:</b></label> 
                <select  id="question-weigth"  v-model="question.weight" >
                  <option  value="10" >10</option>
                  <option  value="20">20</option>
                  <option  value="30">30</option>
                </select>
              </div>
              <textarea type="text" id="question-text" rows="5" class="form-control"  placeholder="Please enter text for question" v-model="question.text"></textarea>
            </div>
            <div class="form-group"> 
              <label><b>Choose question type:</b></label> 
              <select  id="question-type" v-model="question.type" >
                <option  value="user-input" >User input</option>
                <option  value="multiply-choise">Multiply choise</option>
                <option  value="reading-text">Reading text</option>
              </select>
            </div>    
            <label for=""></label>

            <div v-if="question.type == 'user-input'">
              <div class="card">
                <div class="card-header">
                  <h4>User must answer of this question </h4>
                </div>
              </div>
            </div>
            <div v-if="question.type == 'multiply-choise' ">
              <div class="card">
                <Answers> </Answers>
              </div>        
            </div>
            <div v-if="question.type =='reading-text' ">
              <div class="card">
                <readingText></readingText>
              </div>
            </div>
            <!-- <uerInput><userInput> -->
              <button type="submit" class="btn btn-success" @click.prevent="submitHandler">Add Question </button>
            </form>
          </div>     
        </div> 
      </div>

    </div>
  </template>

  <script>
import ReadingText from './ReadingText';
import { mapActions } from 'vuex';
import Answers from './Answers';

export default {
  data() {
    return {
      question: {}
    };
  },
  methods: {
    ...mapActions([
      'addQuestion',
    ]),
    submitHandler() {
      this.addQuestion(this.question)
        .then(() => { this.question = {}; });
    },
  },
  components: {
    ReadingText,
    Answers,
  },
};
</script>

 <style>
.right {
  float: right;
}
.marg {
  margin-top: 10px;
  margin-bottom: 10px;
}
.padd {
  padding-top: 5px;
}
.no-padd {
  padding: 0px;
}
.yes-marg {
  margin-left: 15px;
  margin-right: 15px;
}
</style>
