<template>
  <div>
    <div class="todo-items-container">
      <ul>
        <li v-bind:key="todo.id" v-for="todo in todos">
          <Todo v-bind:todo="todo" v-on:delete-todo="$emit('delete-todo', todo.id)"/>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import Todo from './Todo';
  export default {
    name: 'Todos',
    components: {
      Todo
    },
    props: [
      "todos"
    ]
  }
</script>

<style scoped>

ul{
  list-style: none;
  display: inline-block;
}

.display{
  display:flex;
}

.row{
  flex-direction:row;
}
</style>
