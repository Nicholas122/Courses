import {
    ADD_QUESTION,
    DELETE_QUESTION,
    ADD_ANSWER,
    DELETE_ANSWER,
    ADD_READING_QUESTION,
    DELETE_READING_QUESTION,
    SET_QUESTION_TYPE,
    SET_READING_TEXT,
    SET_SECTIONS,
    CREATE_TEST_REQUEST,
    CREATE_TEST_SUCCESSFUL,
    CREATE_TEST_FAILURE,
    EDIT_TEST_REQUEST,
    EDIT_TEST_SUCCESSFUL,
    EDIT_TEST_FAILURE,
    SET_TEST_TITLE,
    SET_TEST_DESCRIPTION,
    SET_TEST_SECTION,
    SET_TEST_TIME_LIMIT,
    SET_TEST_RATE,
    SET_TEST_RETAKE_TIMEOUT,
    MERGE_TEST_DATA,
    SET_TEST_DATA,
    SET_QUESTION_DATA,
    SET_COURSE_ID,
    EDIT_QUESTION,
    FETCH_EDIT_QUESTION
} from './mutationTypes';

export default {
    [SET_QUESTION_TYPE](state, status) {
        state.questionType = status;

        if (status === 'MULTIPLE_CHOICE') {
            for (var i = 3; i >= 0; i--) {
               var maxUid = parseInt(Math.max.apply(Math, state.answers.map(function (o) {
                return o.uid;
            }))) || 0;



               state.answers.push({
                text:'',
                correct:'',
                questionId: state.questionId,
                uid: maxUid + 1
            })
           }
       }

       if (status === 'READING_TEXT') {
        state.readingQuestions.push({
            answers: [],
            id: 1,
            questionTest: "",
            questionWeight: 1
        })
        for (var i = 3; i >= 0; i--) {
            var maxUid = parseInt(Math.max.apply(Math, state.answers.map(function (o) {
                return o.uid;
            }))) || 0;

            state.answers.push({
                text:'',
                correct:'',
                questionId: 1,
                uid: maxUid + 1

            })
        }
    }
},
[DELETE_QUESTION](state, {id}) {
    state.questions = state.questions.filter(i => i.id !== id);
},
[ADD_QUESTION](state, question) {
    question.id = state.questionId;
    question.type = state.questionType;

    if (question.type === 'READING_TEXT') {
        for (var i = state.readingQuestions.length - 1; i >= 0; i--) {
            state.readingQuestions[i].answers = state.answers.filter(answer => answer.questionId === state.readingQuestions[i].id);
        }
        question.subQuestions = state.readingQuestions;
        question.readingText = state.readingText;

        state.readingQuestions = [];
        state.readingText = '';
    }
    else {
        question.answers = state.answers.filter(answer => answer.questionId === question.id);
    }

    state.answers = [];

    state.questions.push(question);

    var maxId = parseInt(Math.max.apply(Math, state.questions.map(function (o) {
        return o.id;
    }))) || 0;

    state.questionId = maxId + 1;
},
[DELETE_ANSWER](state, {uid}) {
    state.answers = state.answers.filter(i => i.uid !== uid);
},
[ADD_ANSWER](state, answer) {
    var maxId = parseInt(Math.max.apply(Math, state.answers.filter(item => item.questionId === answer.questionId).map(function (o) {
        return o.id;
    }))) || 0;
    var maxUid = parseInt(Math.max.apply(Math, state.answers.map(function (o) {
        return o.uid;
    }))) || 0;

    answer.uid = maxUid + 1;

    state.answers.push(answer);
},
[SET_READING_TEXT](state, text) {
    state.readingText = text;
},
[DELETE_READING_QUESTION](state, {id}) {
    state.readingQuestions = state.readingQuestions.filter(i => i.id !== id);
    state.questionId--;
},
[ADD_READING_QUESTION](state, question) {
    //var maxId = parseInt(Math.max.apply(Math,state.questions.map(function(o){return o.id;}))) || 0;

    question.id = state.questionId + 1;
    for (var i = 3; i >= 0; i--) {
        var maxUid = parseInt(Math.max.apply(Math, state.answers.map(function (o) {
            return o.uid;
        }))) || 0;

        state.answers.push({
            text:'',
            correct:'',
            questionId: question.id,
            uid: maxUid + 1

        })
    }
    //question.answers = state.answers.filter(answer => answer.questionId === question.id);
        //state.answers = [];

        state.readingQuestions.push(question);


        state.questionId++;


    },
    [SET_SECTIONS](state, sections) {
        state.sections = sections;

        if (state.test.creating) {
            state.test.data.section = sections[0];
        }
    },

    [CREATE_TEST_REQUEST](state) {
        state.test.creating = true;
    },
    [CREATE_TEST_SUCCESSFUL](state) {
        state.questions = [];

        state.test = {
            fetching: false,
            creating: false,
            error: false,
            errors: {},
            data: {
                title: '',
                questions: [],
                description: '',
                section: '',
                timeLimit: '',
                passingScorePercent: '',
                retakeTimeout: ''
            }
        };
    },
    [CREATE_TEST_FAILURE](state, errors) {
        state.test.creating = false;
        state.test.error = true;
        state.test.errors = errors.errors.response.data.form.children;
        state.test.data.section = state.sections.find(section => section.id === state.test.data.section)
    },
    [EDIT_TEST_REQUEST](state) {
        state.test.creating = true;
    },
    [EDIT_TEST_SUCCESSFUL](state) {
        state.questions = [];

        state.test = {
            fetching: false,
            creating: false,
            error: false,
            errors: {},
            data: {
                title: '',
                questions: [],
                description: '',
                section: '',
                timeLimit: '',
                passingScorePercent: '',
                retakeTimeout: ''
            }
        };
    },
    [EDIT_TEST_FAILURE](state, errors) {
        state.test.creating = false;
        state.test.error = true;
        state.test.errors = errors.errors.response.data.form.children;
    },

    [SET_TEST_TITLE](state, title) {
        state.test.data.title = title;
    },

    [SET_TEST_TITLE](state, title) {
        state.test.data.title = title;
    },

    [SET_TEST_DESCRIPTION](state, description) {
        state.test.data.description = description;
    },

    [SET_TEST_SECTION](state, section) {
        state.test.data.section = section;
    },

    [SET_TEST_TIME_LIMIT](state, timeLimit) {
        state.test.data.timeLimit = timeLimit;
    },

    [SET_TEST_RATE](state, rate) {
        state.test.data.passingScorePercent = rate;
    },

    [SET_TEST_RETAKE_TIMEOUT](state, retakeTimeout) {
        state.test.data.retakeTimeout = retakeTimeout;
    },

    [MERGE_TEST_DATA](state) {
        state.test.data.questions = state.questions;
    },

    [SET_TEST_DATA](state, data) {
        state.courseId = data.data.section.course.id;
        state.test.data.title = data.data.title;
        state.test.data.description = data.data.description;
        state.test.data.section = data.data.section;
        state.test.data.timeLimit = data.data.timeLimit;
        state.test.data.passingScorePercent = data.data.passingScorePercent;
        state.test.data.retakeTimeout = data.data.retakeTimeout;
        state.test.creating = false;
        state.test.updating = true;
    },

    [SET_QUESTION_DATA](state, data) {
        state.questions = data;

        var maxId = parseInt(Math.max.apply(Math, state.questions.map(function (o) {
            return o.id;
        }))) || 0;

        state.questionId = maxId + 1;
    },

    [SET_COURSE_ID](state, courseId) {
        state.courseId = courseId;
    },
    [EDIT_QUESTION](state, data) {
        if (state.questionType === 'USER_INPUT') {
            state.answers = [];
        }

        data.answers = state.answers;
        data.type = state.questionType;
        state.answers = [];

        if (state.questionType === 'READING_TEXT') {
            data.subQuestions = state.readingQuestions;
            data.readingText = state.readingText;

            state.readingQuestions = [];
            state.readingText = '';
        }

        state.questions = state.questions.map((q) => {
            if (q.id !== data.id) return q;

            return {
                ...q,
                ...data,
            };
        });

        state.editedQuestion = {};
        state.questionComponent = 'add-question';
    },

    [FETCH_EDIT_QUESTION](state, questionId) {
        state.questionComponent = 'edit-question';
        state.editedQuestion = Object.assign({}, state.questions.find(question => question.id === questionId));

        state.questionType = state.editedQuestion.type;

        if (state.editedQuestion.type === 'READING_TEXT') {
            state.readingText = state.editedQuestion.readingText;
            state.readingQuestions = state.editedQuestion.subQuestions.slice();

            for (var i = state.readingQuestions.length - 1; i >= 0; i--) {
                var answers = state.readingQuestions[i].answers.slice();

                state.answers = state.answers.concat(answers).slice();
            }
        }
        else {
            state.answers = state.editedQuestion.answers.slice();
        }
    }


};
