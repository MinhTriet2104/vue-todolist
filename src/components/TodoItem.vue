<template>
  <div class="todo-item" :class="{ 'is-complete': completed }">
    <p>
      <input type="checkbox" @change="toggleComplete(id)" :checked="completed" />
      {{ title }}
      <button @click="deleteTodoItem(id)" type="button" class="del">x</button>
    </p>
  </div>
</template>

<script>
export default {
  name: "TodoItem",
  props: ["id", "title", "completed"],
  methods: {
    toggleComplete(id) {
      this.$store.commit('todos/toggleTodoItemComplete', id);
    },
    deleteTodoItem(id) {
      this.$store.commit('todos/deleteTodoItem', id)
    }
  }
};
</script>

<style scoped>
.todo-item {
  background: #f4f4f4;

  padding: 10px;

  border-bottom: 1px #ccc dotted;
}

.is-complete {
  text-decoration: line-through;
}

.del {
  background: #ff0000;
  color: #fff;

  padding: 5px 9px;

  border: none;
  border-radius: 50%;

  float: right;
  cursor: pointer;
}
</style>
