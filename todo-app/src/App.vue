<template>
  <div id="app">
    <div class="md-layout">
      <div class="md-layout-item"></div>
      <div class="md-layout-item md-size-75 todo-container">
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

  #app{
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  }

  .todo-container{
    margin-top: 2em;
    text-align: center;
  }

  .md-card{
    width: 100%;
  }

  h1{
    font-size: 5em;
    text-align: center;
    font-weight: 100;
  }


</style>
