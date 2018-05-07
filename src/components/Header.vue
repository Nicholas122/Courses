<template>
    <div class="container">
        <h2 class="page-header">Create Test</h2>
        <form class="form-group">
            <div class="testBorder">
                <div class="testLimits">
                    <div class="row" >
                        <div class="col-md-4" >
                            <label for="lTitle">Title</label>
                            <input id="lTitle" name="lTitle" type="text" maxlength="300" placeholder="Max length 300" v-model="title"
                            :class="['form-control', {
                            'has-error': requestErrors.title,
                            'valid': !requestErrors.title,
                        }]" >
                        <span class="error-message" v-if="requestErrors.title">
                          {{ requestErrors.title }}
                      </span>
                  </div>

                  <div class="col-md-4">
                    <label for="lDescription">Description</label>
                    <input id="lDescription" name="lDescription" type="text" maxlength="500" placeholder="Max length 500" v-model="description"
                    :class="['form-control', {
                    'has-error': requestErrors.description,
                    'valid': !requestErrors.description,
                }]" >
                <span class="error-message" v-if="requestErrors.description">
                  {{ requestErrors.description }}
              </span>
          </div>

          <div class="col-md-4">
            <label for="CourseSection">Select Section</label>                
            <select name="CourseSection" id="CourseSection" v-model="section"
            :class="['form-control', {
            'has-error': requestErrors.section,
            'valid': !requestErrors.section,
        }]">
        <option v-for="section in sections" v-bind:value="section.id">{{section.name}}</option>
    </select>
    <span class="error-message" v-if="requestErrors.section">
      {{ requestErrors.section }}
  </span>
</div>
<div class="col-md-4">
    <!--Time Limits-->
    <label for="lTimeLimits" class="control-label">Time limit</label>
    <input id="lTimeLimits" name="lTimeLimits" type="number" min="0" maxlength="10" v-model="timeLimit"
    :class="['form-control', 'timeLimits', {
    'has-error': requestErrors.timeLimit,
    'valid': !requestErrors.timeLimit,
}]">
<span class="error-message" v-if="requestErrors.timeLimit">
    {{ requestErrors.timeLimit }}
</span>
<label class="timePHolders">* sets the test time limit in minutes</label>
</div>
<div class="col-md-4">
    <label for=": {

}lTestRate" class="control-label">Pass/fail score</label>
<input id="lTestRate" name="lTestRate" type="number" min="0" max="100" value="60" v-model="testRate" 
:class="['form-control', 'timeLimits', {
'has-error': requestErrors.passingScorePercent,
'valid': !requestErrors.passingScorePercent,
}]">
<span class="error-message" v-if="requestErrors.passingScorePercent">
    {{ requestErrors.passingScorePercent }}
</span>
<label class="timePHolders">* passing score in percent</label>
</div>
<div class="col-md-4">
    <label class="control-label">Retake timeout</label>
    <input id="lRetakeTimeout" name="lRetakeTimeout" type="number" min="1" max="365" v-model="retakeTimeout"
    :class="['form-control', 'timeLimits', {
    'has-error': requestErrors.retakeTimeout,
    'valid': !requestErrors.retakeTimeout,
}]">
<span class="error-message" v-if="requestErrors.retakeTimeout">
    {{ requestErrors.retakeTimeout }}
</span>
<label class="timePHolders">* period of time after which a user can retake the test in days</label>
</div>
</div>


</div>
</div>
</form>
</div>
</template> 
<script>
import {mapState, mapActions, mapGetters } from 'vuex';
import MaskedInput from 'vue-text-mask';

export default {
  props: ['courseId'],
  components: {
    MaskedInput,
},  
computed: {
    ...mapGetters([
        'getTestTitle',
        'getTestDescription',
        'getTestSection',
        'getTestTimeLimit',
        'getTestRetakeTimeout',
        'getTestRate'
        ]),
    ...mapState({
        sections: state => state.sections,
        requestErrors: state => state.test.errors,
    }),
    title: {
      get() {
        return this.getTestTitle;
    },
    set(value) {
        return this.setTestTitle(value);
    },
},
description: {
  get() {
    return this.getTestDescription;
},
set(value) {
    return this.setTestDescription(value);
},
},
section: {
  get() {
    return this.getTestSection;
},
set(value) {
    return this.setTestSection(value);
},
},

timeLimit: {
  get() {
    return this.getTestTimeLimit;
},
set(value) {
    return this.setTestTimeLimit(value);
},
},

testRate: {
  get() {
    return this.getTestRate;
},
set(value) {
    return this.setTestRate(value);
},
},

retakeTimeout: {
  get() {
    return this.getTestRetakeTimeout;
},
set(value) {
    return this.setTestRetakeTimeout(value);
},
},
},
methods: {
    ...mapActions([
      'fetchSections',
      'setTestTitle',
      'setTestDescription',
      'setTestSection',
      'setTestTimeLimit',
      'setTestRate',
      'setTestRetakeTimeout'
      ]),
},
mounted() {
  this.fetchSections(this.courseId);
}
}
</script>     
<style>
.testBorder {
    border: 1px solid #cccccc;
    border-radius: 6px;
}
.testLimits {
    margin: 20px;
}

.has-error {
    border-color: #dc3545;
    -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
    box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
}
.error-message {
    color: #dc3545;
}
</style>
