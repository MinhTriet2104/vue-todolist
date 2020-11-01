<template>
  <input type="text" @input="handleOnChange" :value="keyword" placeholder="Enter keyword to search..." />
</template>

<script>
export default {
  name: 'SearchBar',
  props: ['keyword', 'handleKeywordChange'],
  methods: {
    handleOnChange(e) {
      this.handleKeywordChange(e.target.value);
    }
  }
}
</script>

<style scoped>
input {
  width: 100%;
}
</style>