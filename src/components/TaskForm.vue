<template>
  <div>
    <b-alert v-if="error" class="p-2 ms-2 me-2" variant="danger" show>  {{ error }} </b-alert>

    <b-alert v-if="response" variant="success" class="p-2 ms-2 me-2" show> {{ response }} </b-alert>

    <b-form @submit.prevent="postTask" class="p-2">
        <b-form-input v-model="task.name" class="mb-2" type="text" placeholder="Write a task" required/>
        <div class="d-grid gap-2 mb-2">
          <b-button type="submit" class="btn" variant="primary">Add</b-button>
        </div>
    </b-form>
  </div>
</template>


<script>
import RestTaskService from "./../services/RestTaskService"

export default {
  data() {
    return {
      task: {
        name: "",
      },
      response: null,
      error: null,
    };
  },
  methods: {
    postTask() {
      RestTaskService.postTask(this.task)
        .then((result) => {
            this.response = "Task added successfully!"

            this.$emit("add:task", {
                _id: result.payload.id,
                name: this.task.name
            })

            setTimeout(() => {
              this.response = null
            }, 2000);

            setTimeout(() => {
              this.task.name = ""
            }, 100);
        })
        .catch((error) => {
          console.log(error);
          this.error = "Error, Task not added"

          setTimeout(() => {
            this.error = null
          }, 3000);
        });
    },
  },
};
</script>


<style>

</style>
