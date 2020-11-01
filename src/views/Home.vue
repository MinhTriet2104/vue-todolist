<template>
  <div id="app">
    <AddTodo />
    <SearchBar :keyword="keyword" :handleKeywordChange="handleKeywordChange" />
    <Todos :todos="todosFilters" />
  </div>
</template>

<script>
import { mapState } from "vuex";

import AddTodo from "../components/AddTodo";
import SearchBar from "../components/SearchBar";
import Todos from "../components/Todos";

export default {
  name: "Home",
  components: {
    AddTodo,
    SearchBar,
    Todos,
  },
  data() {
    return {
      keyword: "",
    };
  },
  computed: {
    ...mapState({
      todos: (state) => state.todos.all,
      todosFilters: (state) => state.todos.filtered,
    }),
  },
  watch: {
    todos: function() {
      this.$store.commit("todos/filterTodosByKeyword", this.keyword);
    },
    keyword: function() {
      this.$store.commit("todos/filterTodosByKeyword", this.keyword);
    },
  },
  methods: {
    handleKeywordChange(value) {
      this.keyword = value;
    }
  },
  created() {
    this.$store.dispatch("todos/getAllTodos");
  },
};
</script>

<style>
* {
  font-family: Avenir, Helvetica, Arial, sans-serif;

  margin: 0;
  padding: 0;

  box-sizing: border-box;
}

.btn {
  display: inline-block;
  border: none;
  background: #555;
  color: #fff;
  padding: 7px 20px;
  cursor: pointer;
}

.btn:hover {
  background: #666;
}
</style>
