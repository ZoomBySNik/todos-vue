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
  padding: .5rem 1rem;
  border: none;
  border-radius: .5rem;
  background: darkseagreen;
  text-wrap: nowrap;
}

.button:hover {
  background: mediumseagreen;
}
</style>