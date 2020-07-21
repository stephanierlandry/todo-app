<template>
  <div>
    <form @submit="addTodo">
      <input type="text" v-model="title" name="title" class="add-bar">
      <button type="submit" class="add-btn"><plus-icon size="2x" class="custom-class"></plus-icon></button>
    </form>
  </div>
</template>

<script>

  import { v4 as uuidv4 } from 'uuid';
  import { PlusIcon} from 'vue-feather-icons'


  export default {
    name: 'AddTodo',
    components:{
      PlusIcon
    },
    data() {
      return {
        title: ''
      }
    },
    methods: {
      addTodo(e) {
        e.preventDefault();
        const newTodoObj = {
          id: uuidv4(),
          title: this.title,
          completed: false
        }
        this.$emit('add-todo', newTodoObj);
        this.title = '';
      }
    }
  }
</script>

<style scoped>


  .add-bar{
    width:75%;
  }

  .add-btn{
    margin-left: .5em;
    background: none;
    border: none;
    top: 11.95em;
    position: absolute;
  }

  .add-btn:hover{
  cursor:pointer;
  }
</style>
