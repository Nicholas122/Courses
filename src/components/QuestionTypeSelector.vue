<template>
  <div class="row marg zero-marg">

    <div class="col-xs-6 col-sm-6 col-md-6 no-padd">
      <label><b>Choose question type:</b></label>
    </div>
    <div class="col-xs-6 col-sm-6  col-md-6 no-padd">  
      <select id="question-type" class="question-type-select form-control" size="1" v-model="questionType">
        <option  class="f-text"
        v-bind:value="key"
        v-bind:key="key"
        v-for="(type, key) in types" ><b>{{type}}</b></option>
      </select>
    </div>  
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex';
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
   ...mapGetters ([
        'getQuestionType'
      ]),
    questionType: {
      get() {
        return this.getQuestionType;
      },
      set(value) {
        return this.setQuestionType(value);
      },
    },
  },
};

</script>


