<template>
 <form action="#" @submit.prevent="onSubmit">
    <p v-if="errorsPresent" class="error">Please fill out both fields!</p>


    <div class="ui labeled input fluid">
      <div class="ui label">
        <i class="calendar plus icon"></i>Title
      </div>
      <input type="text" placeholder="Enter task..." v-model="task.task1" />
    </div>

    <div class="ui labeled input fluid">
      <div class="ui label">
   <i class="info circle icon"></i> Description
      </div>
      <input type="text" placeholder="Enter Details" v-model="task.task2" />
    </div>


     <div class="ui labeled input fluid">
      <div class="ui label">
   <i class="info circle icon"></i> is_active

      </div>
   
   Yes<input type="radio" :value="true" v-model="task.task3" name="radio">
     No<input type="radio" :value="false" v-model="task.task3" name="radio"> 
      
    </div>
 <div class="ui labeled input fluid">
      <div class="ui label">
   <i class="info circle icon"></i> Select

      </div>
   
    <select v-model="task.task4">
  <option disabled value="">Please select one</option>
  <option>Plan</option>
  <option>Development</option>
  <option>QA</option>
  <option>Done</option>
</select>
 </div>
    <button class="positive ui button">Submit</button>
  </form>
</template>

<script>
export default {
  name: 'task-form',
  props: {
    task: {
      type: Object,
      required: false,
      default: () => {
        return {
          task1: '',
          task2: '',
          task3: false,
          task4:''
        };
      }
    }
  },
  data() {
    return {
      errorsPresent: false
    };
  },
  methods: {
    onSubmit: function() {
        this.errorsPresent = true;
        this.$emit('createOrUpdate', this.task);
      
    }
  }
};
</script>

<style scoped>
.error {
  color: red;
}
</style>