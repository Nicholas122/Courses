<template>
  <div class="row marg zero-marg">

    <div class="col-lg-6 no-padd">
      <label><b>Choose question type:</b></label>
    </div>
    <div class="col-lg-6 no-padd">  
      <select id="question-type" class="question-type-select form-control" v-model="questionType">
        <option class="f-text"
        v-bind:value="key"
        v-bind:key="key"
        v-for="(type, key) in types"
        ><b  >{{type}}</b></option>
      </select>
    </div>  
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import * as types from '../store/questionTypes';

export default {
  data() {
    return {
      types,
    };
  },
  methods: {
    ...mapActions(['setQuestionType']),
  },
  computed: {
    questionType: {
      get() {
        return this.$store.questionType;
      },
      set(value) {
        return this.setQuestionType(value);
      },
    },
  },
};
</script>


