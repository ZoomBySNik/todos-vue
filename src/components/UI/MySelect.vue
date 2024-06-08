<script>
export default {
  name: 'my-select',
  props: {
    modelValue: {
      type: String,
    },
    options: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    changeOption(event){
      this.$emit('update:modelValue', event.target.value);
    }
  }
}
</script>

<template>
  <select class="custom-select" :value="modelValue" @change="changeOption">
    <option disabled value="">Выберите значение из списка</option>
    <option v-for="option in options" :key="option.value" :value="option.value">{{ option.name }}</option>
  </select>
</template>

<style scoped>
.custom-select {
  border-radius: .5rem;
  border: solid mediumseagreen;
}
</style>