import axios from "axios";

const state = () => ({
  all: [],
  filtered: [],
});

const getters = {};

const actions = {
  async getAllTodos({ commit }) {
    const res = await axios.get(
      "https://jsonplaceholder.typicode.com/todos?_limit=10"
    );
    commit("setTodos", res.data);
  },
};

const mutations = {
  setTodos(state, todos) {
    state.all = todos;
  },
  addTodoItem(state, newTodo) {
    state.all = [...state.all, newTodo];
  },
  deleteTodoItem(state, id) {
    state.all = state.all.filter((todo) => todo.id !== id);
  },
  toggleTodoItemComplete(state, id) {
    const todoItem = state.all.find((todo) => todo.id === id);
    todoItem.completed = !todoItem.completed;
  },
  filterTodosByKeyword(state, keyword) {
    if (keyword.trim() === "") state.filtered = state.all;
    state.filtered = state.all.filter((todo) => todo.title.includes(keyword));
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
