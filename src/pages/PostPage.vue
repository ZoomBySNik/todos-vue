<template>
  <div class="flex-vertical gap1" v-show="!isPostsLoading">
    <h1>Главная страница</h1>
    <my-dialog v-model:show="createPostDialogVisible">
      <post-form @createPost="createPost"/>
    </my-dialog>
    <section class="section">
      <div class="section-header">
        <my-select v-model="selectedSort" :options="sortOptions"></my-select>
        <my-input v-model.trim="searchData" placeholder="Поиск среди заметок"/>
        <my-button @click="showDialog" style="align-self: flex-end">Создать пост</my-button>
      </div>
      <post-list
          :posts="sortedAndSearchedPosts"
          @removePost="removePost"
          @addLike="addLike"
          @addDislike="addDislike"
      />
      <div ref="observer" class="observer"></div>
    </section>
    <!--<div class="flex-horizontal gap05 to-center">
      <my-button v-for="pageNumber in totalPages" :disabled="pageNumber === this.page"
                 @click="changePage(pageNumber)">{{ pageNumber }}
      </my-button>
    </div>-->
  </div>
  <my-loading v-show="isPostsLoading"></my-loading>
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
      searchData: '',
      page: 1,
      limit: 15,
      totalPages: 0,
      sortOptions: [
        {value: 'title', name: 'По заголовку'},
        {value: 'body', name: 'По содержанию'},
        {value: 'likes', name: 'По количеству лайек'}
      ],
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
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
          params: {
            _page: this.page,
            _limit: this.limit
          }
        });
        this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit)
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
    async fetchMorePosts() {
      try {
        this.page += 1;
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
          params: {
            _page: this.page,
            _limit: this.limit
          }
        });
        this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit)
        let postsWithoutLikes = response.data;
        postsWithoutLikes.forEach((post) => {
          post.likes = Math.round(Math.random() * 100);
        });
        this.posts = [...this.posts, ...postsWithoutLikes];


      } catch (e) {
        alert(`Ошибка ${e}`)
      }
    },
    /*changePage(pageNumber) {
      this.page = pageNumber;
    },*/
  },
  mounted() {
    this.fetchPosts();
    const options = {
      rootMargin: '0px',
      threshold: 1.0
    }
    const callback = (entries) => {
      if (entries[0].isIntersecting) {
        this.fetchMorePosts()
      }
    };
    const observer = new IntersectionObserver(callback, options);
    observer.observe(this.$refs.observer);
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
    sortedAndSearchedPosts() {
      return this.sortedPosts.filter(p => p.title.toLowerCase().includes(this.searchData.toLowerCase()) | p.body.toLowerCase().includes(this.searchData.toLowerCase()))
    }
  },
  watch: {
    /*page() {
      this.fetchPosts()
    }*/
  }
}
</script>

<style scoped>

</style>