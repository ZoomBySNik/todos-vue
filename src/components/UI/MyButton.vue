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
  text-wrap: nowrap;
  margin: auto;
}

.button:hover {
  background: mediumseagreen;
}
</style>