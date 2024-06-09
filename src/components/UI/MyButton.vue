<script>
export default {
  name: 'my-button'
}
</script>

<template>
  <button class="button"><slot></slot></button>
</template>

<style scoped>
.button {
  padding: .6rem 1rem;
  border: none;
  border-radius: .5rem;
  background: darkseagreen;
  margin: auto 0;
  text-wrap: nowrap;
}

.button:hover {
  background: mediumseagreen;
}
.button:disabled:hover {
  background: darkseagreen;
}
</style>