<template>
  <div class="app">
    <h1>Главная страница</h1>
    <my-dialog v-model:show="createPostDialogVisible">
      <post-form @createPost="createPost"/>
    </my-dialog>
    <section class="section" v-if="!isPostsLoading">
      <div class="section-header">
        <my-select v-model="selectedSort" :options="sortOptions"></my-select>
        <my-input v-model="searchData" placeholder="Поиск среди заметок"/>
        <my-button @click="showDialog" style="align-self: flex-end">Создать пост</my-button>
      </div>
      <post-list
          :posts="sortedAndSearchedPosts"
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
    PostList,
    PostForm
  },
  data() {
    return {
      posts: [],
      createPostDialogVisible: false,
      isPostsLoading: true,
      selectedSort: '',
      sortOptions: [
        {value: 'title', name: 'По заголовку'},
        {value: 'body', name: 'По содержанию'},
        {value: 'likes', name: 'По количеству лайек'}
      ],
      searchData: '',
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
        this.posts[index].likes += 1;
        this.posts = [...this.posts];
      }
    },
    addDislike(post) {
      const index = this.posts.findIndex(p => p.id === post.id);
      if (index !== -1) {
        this.posts[index].likes -= 1;
        this.posts = [...this.posts];
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
  },
  computed: {
    sortedPosts() {
      let sortedPosts = [...this.posts];

      switch (this.selectedSort) {
        case "title":
          sortedPosts = sortedPosts.sort((a, b) => a.title?.localeCompare(b.title));
          break;
        case "body":
          sortedPosts = sortedPosts.sort((a, b) => a.body?.localeCompare(b.body));
          break;
        case "likes":
          sortedPosts = sortedPosts.sort((a, b) => a.likes - b.likes);
          break;
        default:
          break;
      }
      return sortedPosts
    },
    sortedAndSearchedPosts(){
      return this.sortedPosts.filter(p => p.title.includes(this.searchData) | p.body.includes(this.searchData))
    }
  },
}
</script>

<style scoped>

</style>