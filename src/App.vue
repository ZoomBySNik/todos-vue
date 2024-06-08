<template>
  <div class="app">
    <my-dialog v-model:show="createPostDialogVisible">
      <post-form @createPost="createPost"/>
    </my-dialog>
    <my-button @click="showDialog" style="align-self: flex-end">Создать пост</my-button>
    <section class="section" v-if="!isPostsLoading">
      <post-list
          :posts="posts"
          @removePost="removePost"
          @addLike="addLike"
          @addDislike="addDislike"
      />
    </section>
    <my-loading v-else></my-loading>
  </div>
</template>

<script>
import PostForm from "@/components/PostForm.vue";
import PostList from '@/components/PostList.vue';
import axios from "axios";

export default {
  components: {
    MyLoading,
    PostList,
    PostForm
  },
  data() {
    return {
      posts: [],
      createPostDialogVisible: false,
      isPostsLoading: true,
    }
  },
  methods: {
    createPost(post) {
      this.posts.push(post);
      this.createPostDialogVisible = false;
    },
    removePost(post) {
      this.posts = this.posts.filter(p => p.id !== post.id)
    },
    addLike(post) {
      const index = this.posts.findIndex(p => p.id === post.id);
      if (index !== -1) {
        this.posts[index] = {...this.posts[index], likes: this.posts[index].likes + 1};
      }
    },
    addDislike(post) {
      const index = this.posts.findIndex(p => p.id === post.id);
      if (index !== -1) {
        this.posts[index] = {...this.posts[index], likes: this.posts[index].likes - 1};
      }
    },
    showDialog() {
      this.createPostDialogVisible = true;
    },
    async fetchPosts() {
      this.isPostsLoading = true;
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=15');
        this.posts = response.data;
        this.posts.forEach((post) => {
          post.likes = Math.round(Math.random() * 100);
        });

      } catch (e) {
        alert(`Ошибка ${e}`)
      } finally {
        this.isPostsLoading = false;
      }
    },
  },
  mounted() {
    this.fetchPosts()
  }
}
</script>

<style scoped>
</style>