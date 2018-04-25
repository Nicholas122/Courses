import Vue from 'vue'
import _ from 'lodash';

export default new Vue ({
    data:{
        questions : [
            {
                id:1,
                text:'What new1 in js ?',
                type:'user-input',
                weight:'10',
                answers:[
                    {
                        id:1,
                        text:'Lorem ipsun what?',
                        correct:false,
                    },
                    {
                        id:2,
                        text:'23142134 ipsun what?',
                        correct:false,
                    },
                    {
                        id:3,
                        text:'etwewtwet ipsun what?',
                        correct:false,
                    }
                ]
            },
            {
                id:2,
                text:'What new2 in js ?',
                type:'multiply-choise',
                weight:'20',
                answers:[
                    {
                        id:1,
                        text:'Lorem ipsun what?',
                        correct:false,
                    },
                    {
                        id:2,
                        text:'23142134 ipsun what?',
                        correct:false,
                    },
                    {
                        id:3,
                        text:'etwewtwet ipsun what?',
                        correct:false,
                    }

                ]
            },
            {
                id:3,
                text:'What new3 in js ?',
                type:'reading-text',
                weight:'30',
                answers:[
                    {
                        id:1,
                        text:'Lorem ipsun what?',
                        correct:false,
                    },
                    {
                        id:2,
                        text:'23142134 ipsun what?',
                        correct:false,
                    },
                    {
                        id:3,
                        text:'etwewtwet ipsun what?',
                        correct:false,
                    }

                ],
                readingQuestions: [
                    {
                        readingText:''
                    },
                    {
                        id:1,
                        questionText:'',
                        questionWeight:'',
                        questionAnswers:[
                            {
                                id:1,
                                text:'Lorem ipsun what?',
                                correct:false,
                            }
                        ]
                    }
                ]
                
            }
        ]
    },
    methods:{
        editDetail(id){
             let questionToEdit = _.find(this.questions, {id:id}) 
             this.$emit("editDetail",questionToEdit);
        },
        addQuestion(text,type,weight, answers){
            var id= this.questions[this.questions.length-1].id + 1;
            this.questions.push({
                id,
                text,
                type,
                weight,
                answers
            })
            
        },
        // addAnswer(text,correct) {  console.log(this)
        //     var id= this.questions[this.questions.length-1].id + 1;
        //     this.questions.push({
        //         answers:[
        //             {
        //                 id,
        //                 text,
        //                 correct,
        //             }
        //         ]

                
                
        //     })
        // },
        deleteQuestion(id){
            if(this.questions.length > 1) {
            var id= this.questions[this.questions.length-1].id - 1;
            this.questions.splice(id, 1);  
            }
        }
    }
});