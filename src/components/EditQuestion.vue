<template>
<div>
  <div class="container">
        <div class="card">
            <div  class="card-header">
                <h3>Edit Question {{ question.id }}</h3>
            </div>
            <div class="card-body">
                <!-- <p>{{question.text}}</p> -->
                <p>{{question.type}}</p>
                <p>{{question.answers}}</p>
                <p>{{question.weight}}</p>
                <textarea type="text" class="form-control" v-model="question.text" > </textarea>
                
            </div>  
        </div> 
     </div>
  </div>
</template>
<script>


export default {
  props: {
      question: {
        type: Object,
        required: true
      }
  },
  data(){
      return {
        
      }
  },
}
</script>

