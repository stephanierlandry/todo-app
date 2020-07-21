<template>
  <div v-bind:class="{ 'completed': todo.completed }" class="display">
    <p v-on:click="markComplete">{{ todo.title }}</p>
    <button @click="$emit('delete-todo', todo.id)" class="x-btn"><x-icon size="1.5x" class="custom-class"></x-icon></button>
  </div>
</template>

<script>
  import { XIcon } from 'vue-feather-icons'

  export default {
    name: 'Todo',
    props: [
      "todo"
    ],
    components: {
      XIcon
    },
    methods: {
      markComplete() {
        this.todo.completed = !this.todo.completed
      }
    }
  }
</script>

<style scoped>
  p{
    font-size: 1.5em;
  }

  p:hover{
    cursor:pointer;
  }

  .completed {
    text-decoration: line-through;
  }

  .display{
    display:flex;
  }

  .x-btn{
  background:none;
  border:none;
  font-weight: bold;
  color: red;
  font-size: 1em;
  margin-left: 1em;
  }

  .x-btn:hover{
  cursor:pointer;
  color: #A50909;
  }
</style>
