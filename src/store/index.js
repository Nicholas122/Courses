import Vue from 'vue'
import Vuex from 'vuex'
import { stat } from 'fs';

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
        test: {},
        questions: [],
        answers: [],
    },
    mutations: {
      addQuestion(state, question) {
           question.answers = state.answers;
           state.questions.push(question);
           state.answers = [];
    },
    addAnswer(state, answer) {
        state.answers.push(answer);
    },
    removeQuestion(state, position){
        state.questions.splice(position, 1);
    }

}
})