<template>
  <div v-bind:class="{ 'completed': todo.completed }" class="display">
    <p class="title"
      contenteditable="true"
      v-on:keydown.enter="updateTask($event, todo)"
      v-on:blur="updateTask($event, todo)"
      v-bind:class="{completed: todo.isComplete}">{{ todo.title }}</p>
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
      updateTask: function(e, todo){
        e.preventDefault();
        todo.title = e.target.innerText;
        e.target.blur();
      }
    },
    created() {
      console.log(this.todo)
    }
  }
</script>

<style scoped>
  p{
    font-size: 1.5em;
  }

  p:hover{
    cursor:pointer;
    background-color:#FCFBE4;
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
