<template>
	<div class="container">
		<div class="row">
			
			<question-header></question-header> 
			
			<div class="col-md-4">
				<span title="Click for change type" @click="(mode=(mode == 'AddView' ? 'EditView' : 'AddView'))"> Change type :
					<button class="btn btn-primary"> {{ mode }}</button>
				</span> 
			</div>
		</div>

		<div class="row">
			<div class="col-md-6 col-padding-0">
				<questions @editQuestion="editQuestion"></questions> 
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
import questionHeader from './components/Header';
import QuestionsList from './components/QuestionsList';
import EditQuestion from './components/EditQuestion';
import AddQuestion from './components/AddQuestion';


export default {
	data() { 
		return {
			mode:'AddView',
			editedQuestion: {}
		}            
	},
	computed:{
		componentName(){
			return this.mode == 'AddView' ? 'add' : 'edit';
		}
	},
	components: {
		questionHeader,
		'questions': QuestionsList,
		'edit': EditQuestion,
		'add': AddQuestion
	},
	methods: {
		editQuestion(question){
			this.editedQuestion = question;
			this.mode = 'edit';
		}
	}
	
}
</script>
<style>
.col-padding-0 {
	padding: 0px;
}
</style>

