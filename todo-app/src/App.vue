<template>
  <div id="app">
    <div class="md-layout">
      <div class="md-layout-item"></div>
      <div class="md-layout-item md-size-75">
        <md-card>
          <md-card-content>
              <md-card-header>
                <h1>todo</h1>
              </md-card-header>
              <AddTodo v-on:add-todo="addTodo"/>
              <Todos v-bind:todos="todos" v-on:delete-todo="deleteTodo"/>
          </md-card-content>
        </md-card>
      </div>
      <div class="md-layout-item"></div>
    </div>
  </div>
</template>

<script>
  import Todos from './components/Todos';
  import AddTodo from './components/AddTodo';

  export default {
    name: 'app',
    components: {
      Todos,
      AddTodo
    },
    data() {
      return {
        todos: [
          {
            id: 1,
            title: 'Go workout',
            completed: false
          },
          {
            id: 2,
            title: 'Do laundry',
            completed: false
          },
          {
            id: 3,
            title: 'Cook food',
            completed: false
          },
          {
            id: 4,
            title: 'Clean up room',
            completed: false
          },
          {
            i: 5,
            title: 'Finish work',
            completed: false
          }
        ],
      }
    },
    methods: {
      addTodo(newTodoObj) {
        this.todos = [...this.todos, newTodoObj];
      },
      deleteTodo(todoId) {
        this.todos = this.todos.filter(todo => todo.id !== todoId);
      }
    }
  }
</script>

<style  scoped>

  .md-card{
  width:100%;
  }

</style>
