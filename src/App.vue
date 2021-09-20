<template>
  <b-container class="p-2 text-center">
    <div class="m-4">
      <h1 class="fs-1 fw-bold text-dark">To Do APP</h1>
      <img alt="Vue logo" src="./assets/logo.png" />
    </div>

    <b-row class="text-start">
      <b-col ml="12" lg="4" md="4" sm="12">
        <h3 class="fs-3 ps-4">Add a new Task</h3>
        <TaskForm v-on:add:task="addTask" />
      </b-col>

      <b-col ml="12" lg="8" md="8" sm="12" class="todolist col">
        <h3 class="fs-3 ps-4">To Do List</h3>
        <b-list-group v-if="tasks.length > 0" class="p-2">
          <Task
            v-for="task in tasks"
            v-bind:key="task._id"
            v-bind:task="task"
            v-on:delete:task="deleteTask"
            v-on:put:task="putTask"
          />
        </b-list-group>
        <b-list-group v-else>
          <p class="m-4 text-secondary">No tasks</p>
        </b-list-group>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import TaskForm from "./components/TaskForm.vue";
import Task from "./components/Task.vue";
import RestTaskService from "./services/RestTaskService";

export default {
  name: "App",
  data() {
    return {
      tasks: [],
    };
  },
  created() {
    this.getTasks();
  },
  components: {
    TaskForm,
    Task,
  },
  methods: {
    addTask(task) {
      this.tasks.unshift({
        _id: task._id,
        name: task.name,
      });
    },
    getTasks() {
      RestTaskService.getTasks()
        .then((result) => {
          this.tasks = result.payload.documents;
        })
        .catch((error) => {
          console.log(`Error: ${error}`);
        });
    },
    async putTask(task) {
      await RestTaskService.putTask(task.id, task.data);
    },
    deleteTask(task_id) {
      RestTaskService.deleteTask(task_id)
        .then(() => {
          this.tasks = this.tasks.filter((task) => task._id != task_id);
        })
        .catch((error) => {
          console.log(`Error: ${error}`);
        });
    },
  },
};
</script>

<style>
#app {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  width: 100vw;
}
</style>
