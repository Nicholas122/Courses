<template>
    <div class="container">
        <div class="row">
            <question-header :headerTitle="headerTitle"></question-header>
        </div>

        <div class="row">
            <div class="col-md-6">
                <questions></questions>

                <button v-if="this.questions" class="btn btn-success create-test-btn" @click.prevent="editTest()">
                    Save test
                </button>

            </div>
            <div class="col-md-6">
                <component :is="questionComponent"></component>

            </div>
        </div>
    </div>
</template>

<script>
    import questionHeader from "./Header";
    import QuestionsList from "./QuestionsList";
    import AddQuestion from "./AddQuestion";
    import EditQuestion from "./EditQuestion";
    import {mapActions} from 'vuex';
    import {mapState} from 'vuex'

    export default {
        props: ['testId'],
        data() {
            return {
                headerTitle: 'Edit test',
            };
        },
        created() {
            this.fetchTest(this.testId);
            this.fetchQuestion(this.testId);
        },
        computed: mapState({
            questions: state => state.questions,
            testData: state => state.test,
            questionComponent: state => state.questionComponent
        }),
        components: {
            questionHeader,
            questions: QuestionsList,
            AddQuestion,
            EditQuestion
        },
        methods: {
            ...mapActions([
                'editTestRequest',
                'mergeTestData',
                'fetchTest',
                'fetchQuestion',
                'fetchSections'
            ]),
            editTest() {
                this.testData.data.id = this.testId;
                this.testData.data.section = this.testData.data.section.id;
                this.mergeTestData();
                this.editTestRequest(this.testData);
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