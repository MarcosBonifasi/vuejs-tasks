<template>
    <transition name="fade">
        <b-list-group-item href="#" class="d-flex align-items-center justify-content-between">
            <form @submit.prevent="updateTask">
                <input id="task-name" type="text" v-model="task.name" ref="name" :disabled="!updatable" required/>
            </form>
            <!-- <p class="m-0"> {{ task.name }} </p> -->
            <div class="d-flex align-items-center justify-content-between">
                <a class="m-2" @click="setUpdatable"> <b-icon icon="pencil-fill" variant="dark" class="fs-5"></b-icon> </a>
                <a class="m-2" @click="deleteTask(task._id)"> <b-icon icon="trash-fill" variant="danger fs-4"></b-icon> </a>
            </div>
        </b-list-group-item>
    </transition>
</template>

<script>
export default {
    props: {
        task: {
            type: Object,
        }
    },
    data(){
        return {
            updatable: false
        }
    },
    methods: {
        deleteTask(task_id){
            this.$emit("delete:task", task_id)
        },
        setUpdatable(){
            this.updatable = !this.updatable
        },
        async updateTask(){
            if(!this.task.name || !this.task._id) return

            this.$emit("put:task", { id: this.task._id, data: { name: this.task.name  }})
            setTimeout(() => {
                this.updatable = false
            }, 100);
        }
    }
}
</script>

<style>

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

#task-name {
    background-color: transparent!important;
    border: none;
}

</style>