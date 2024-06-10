<template>
  <div class="flex-vertical gap1" v-show="!isPostsLoading">
    <h1>Главная страница</h1>
    <section class="section">
      <div class="section-header">
        <my-select :model-value="selectedSort" @update:model-value="setSelectedSort" :options="sortOptions"></my-select>
        <my-input v-focus :model-value="searchData" @update:model-value="setSearchData" placeholder="Поиск среди заметок"/>
      </div>
      <post-list
          :posts="sortedAndSearchedPosts"
          @removePost="removePost"
          @addLike="incrementLikes"
          @addDislike="decrementLikes"
      />
      <div v-intersection="fetchMorePosts" class="observer"></div>
    </section>
  </div>
  <my-loading v-show="isPostsLoading"></my-loading>
</template>

<script>
import PostForm from "@/components/PostForm.vue";
import PostList from '@/components/PostList.vue';
import {mapState, mapActions, mapGetters, mapMutations} from 'vuex';
export default {
  components: {
    PostList,
    PostForm
  },
  data() {
    return {

    }
  },
  methods: {
    ...mapMutations({
      setPage: 'post/setPage',
      setSearchData: 'post/setSearchData',
      setSelectedSort: 'post/setSelectedSort',
      incrementLikes: 'post/incrementLikes',
      decrementLikes: 'post/decrementLikes',
      resetPage: 'post/resetPage',
    }),
    ...mapActions({
      fetchMorePosts: "post/fetchMorePosts",
      fetchPosts: "post/fetchPosts",
      createPost: "post/createPost",
    }),
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
  },
  mounted() {
    this.fetchPosts()
  },
  beforeUnmount() {
    this.resetPage()
  },
  computed: {
    ...mapState({
      posts: state => state.post.posts,
      isPostsLoading: state => state.post.isPostsLoading,
      selectedSort: state => state.post.selectedSort,
      searchData: state => state.post.searchData,
      page: state => state.post.page,
      limit: state => state.post.limit,
      totalPages: state => state.post.totalPages,
      sortOptions: state => state.post.sortOptions,
    }),
    ...mapGetters({
      sortedPosts: 'post/sortedPosts',
      sortedAndSearchedPosts: 'post/sortedAndSearchedPosts',
    })
  },
}
</script>

<style scoped>

</style>