<template>
  <div class="form-group">
    <label><b>Choose question type:</b></label>
    <select id="question-type" v-model="questionType">
      <option
        v-bind:value="key"
        v-bind:key="key"
        v-for="(type, key) in types"
      >{{type}}</option>
    </select>
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
