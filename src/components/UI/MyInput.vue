<script>
export default {
  name: 'my-input',
  props: {
    modelValue: [String, Number],
  },
  methods: {
    updateInput(event) {
      this.$emit('update:modelValue', event.target.value);
    }
  }
}
</script>

<template>
  <input class="input" type="text" :value="modelValue" @input="updateInput" />
</template>

<style scoped>
.input {
  width: 100%;
  border-radius: 0.5rem;
  border: solid darkseagreen;
  padding: .5rem;
}
</style>