<template>
  <div v-bind:class="{ 'completed': todo.completed }" class="display">
    <p v-on:click="markComplete">{{ todo.title }}</p>
    <button @click="$emit('delete-todo', todo.id)" class="x-btn">X</button>
  </div>
</template>

<script>
export default {
  name: 'Todo',
  props: [
    "todo"
  ],
  methods: {
    markComplete() {
      this.todo.completed = !this.todo.completed
    }
  }
}
</script>

<style scoped>
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
  }

  .x-btn:hover{
  cursor:pointer;
  }
</style>
