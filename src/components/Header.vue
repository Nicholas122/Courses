<template>
    <div class="container">
        <h2 class="page-header">Create Test</h2>
        <form class="form-group">
            <div class="testBorder">
                <div class="testLimits">
                    <div class="row" >
                        <div class="col-md-4" >
                            <label for="lTitle">Title</label>
                            <input id="lTitle" name="lTitle" class="form-control" type="text" maxlength="300" placeholder="Max length 300" v-model="title">
                        </div>

                        <div class="col-md-4">
                            <label for="lDescription">Description</label>
                            <input id="lDescription" name="lDescription" class="form-control" type="text" maxlength="500" placeholder="Max length 500" v-model="description">
                        </div>

                        <div class="col-md-4">
                            <label for="CourseSection">Select Section</label>                
                            <select name="CourseSection" id="CourseSection" class="form-control" v-model="section">
                                <option v-for="section in sections" v-bind:value="section.id">{{section.name}}</option>
                            </select>
                        </div>
                        <div class="col-md-4">
                            <!--Time Limits-->
                            <label for="lTimeLimits" class="control-label">Time limit</label>
                            <input id="lTimeLimits" name="lTimeLimits" class="form-control  timeLimits" type="number" min="0" maxlength="10" v-model="timeLimit">
                            <label class="timePHolders">* sets the test time limit in minutes</label>
                        </div>
                        <div class="col-md-4">
                            <label for=": {

                        }lTestRate" class="control-label">Pass/fail score</label>
                        <input id="lTestRate" name="lTestRate" class="form-control  timeLimits" type="number" min="0" max="100" value="60" v-model="testRate">
                        <label class="timePHolders">* passing score in percent</label>
                    </div>
                    <div class="col-md-4">
                        <label class="control-label">Retake timeout</label>
                        <input id="lRetakeTimeout" name="lRetakeTimeout" class="form-control  timeLimits" type="number" min="1" max="365" v-model="retakeTimeout">
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

export default {
  props: ['courseId'],
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
</style>
