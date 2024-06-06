<template>
  <form class="form" @submit.prevent>
    <h4>Создать пост</h4>
    <my-input v-model="post.name" placeholder="Название"/>
    <my-input v-model="post.content" placeholder="Содержание"/>
    <my-button style="align-self: flex-end" @click="createPost">Создать</my-button>
  </form>
</template>

<script>
import {v4 as uuidv4} from "uuid";
export default {
  data() {
    return {
      post: {
        name: '',
        content: ''
      },
    }
  },
  methods: {
    createPost() {
      this.post.id = uuidv4();
      this.post.likes = 0;
      this.$emit("createPost", this.post);
      this.post = {
        name: '',
            content: ''
      };
    }
  }
}
</script>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>