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
				<questions ></questions> 
			
				</div>
				<div class="col-md-6 col-padding-0">
					<div>
						<component :is="componentName"></component>
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
import QuestionsList from './components/QuestionsList';
import EditQuestion from './components/EditQuestion';
import AddQuestion from './components/AddQuestion';
import questionHeader from './components/Header';


export default {
  	data() { 
		return {
		mode:'AddView',
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
    'edit':EditQuestion,
	'add':AddQuestion,


  }
  
}
</script>
<style>
.col-padding-0 {
	padding: 0px;
}
</style>

