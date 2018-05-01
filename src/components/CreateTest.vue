<template>
  <div class="container">
    <div class="row">
      <question-header :courseId="courseId"/>
    </div>

    <div class="row">
      <div class="col-md-6 col-padding-0">
        <questions></questions>

        <div class="container">
          <button class="btn btn-success create-test-btn"  @click.prevent="createTest">Create test</button>
        </div>
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
            import questionHeader from "./Header";
            import QuestionsList from "./QuestionsList";
            import AddQuestion from "./AddQuestion";

            export default {
              props: ['courseId'],
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
                add: AddQuestion
              },
              methods: {
                createTest() {
                  console.log('Create test!')
                }
              }
            };
            </script>
            <style>
            .col-padding-0 {
              padding: 0px;
            }
            .create-test-btn {
              width: 120px;
              height: 40px;
            }
            </style>