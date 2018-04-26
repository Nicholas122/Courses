<template>
    <div class="container">
        <div class="row">
            <question-header/>
        </div>

        <div class="row">
            <div class="col-md-6 col-padding-0">
                <questions></questions>
            </div>
            <div class="col-md-6 col-padding-0">
                <div>
                    <component :is="componentName" :question="editedQuestion"></component>
                    <!-- <keep-alive>
                    </keep-alive>	 -->
                    <!-- <edit></edit>
                        <add></add> -->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import questionHeader from "@/components/Header";
import QuestionsList from "@/components/QuestionsList";
import EditQuestion from "@/components/EditQuestion";
import AddQuestion from "@/components/AddQuestion";

export default {
  data() {
    return {
      mode: "AddView",
      editedQuestion: {}
    };
  },
  computed: {
    componentName() {
      return this.mode == "AddView" ? "add" : "edit";
    }
  },
  components: {
    questionHeader,
    questions: QuestionsList,
    edit: EditQuestion,
    add: AddQuestion
  }
};
</script>
<style>
.col-padding-0 {
  padding: 0px;
}
</style>