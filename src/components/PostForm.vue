<template>
  <form class="form" @submit.prevent>
    <h4>Создать пост</h4>
    <my-input v-model="post.title" placeholder="Название"/>
    <my-input v-model="post.body" placeholder="Содержание"/>
    <my-button style="align-self: flex-end" @click="createPost">Создать</my-button>
  </form>
</template>

<script>
import {v4 as uuidv4} from "uuid";
export default {
  data() {
    return {
      post: {
        title: '',
        body: ''
      },
    }
  },
  methods: {
    createPost() {
      this.post.id = uuidv4();
      this.post.likes = 0;
      this.$emit("createPost", this.post);
      this.post = {
        title: '',
        body: ''
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