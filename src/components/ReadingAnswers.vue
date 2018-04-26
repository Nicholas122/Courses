<template>
    <div>
        <form>
                <div class="row">
                    <div class="col-lg-8 text-right marg no-padd">
                        <button  class="btn btn-danger "   v-on:click="deleteReadingAnswer">Delete answer </button>
                    </div>
                    <div class="col-lg-4 text-right marg">
                        <button  class="btn btn-success  "   v-on:click="addReadingAnswer">Add answer </button>
                    </div>
                    
                </div>
                <div class="container row marg" v-for="questionAnswer in questionAnswers" :key="questionAnswer.id" >
                    
                    <div class="col-lg-1 no-padd text-center">
                        <span><b>{{ questionAnswer.id }})</b></span>
                    </div>
                    <div class="col-lg-10">
                        <input type="text" placeholder="Please enter the answer" class="form-control" v-model="questionAnswer.text">
                    </div>
                    <div class="col-lg-1">
                        <input type="checkbox"  :id="questionAnswer.id"  v-model="questionAnswer.correct">
                    </div>
                    
                </div>
        </form>
    </div>
</template>

<script>
import AddQuestion from "./AddQuestion";
import store from "../store";

export default {
  data() {
    return {
      questionAnswers: [
        {
          id: 1,
          text: "",
          correct: ""
        }
      ]
    };
  },
  methods: {
    addReadingAnswer(text, correct) {
      var id = this.questionAnswers[this.questionAnswers.length - 1].id + 1;
      this.questionAnswers.push({
        id,
        text: "",
        correct: ""
      });

      store.commit("addReadingAnswer", this.questionAnswers);
    },
    deleteReadingAnswer(id) {
      if (this.questionAnswers.length > 1) {
        var id = this.questionAnswers[this.questionAnswers.length - 1].id - 1;
        this.questionAnswers.splice(id, 1);
      }
    }
  }
};
</script>
