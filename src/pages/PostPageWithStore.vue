<template>
  <div class="flex-vertical gap1" v-show="!isPostsLoading">
    <h1>Главная страница</h1>
    <my-dialog v-model:show="createPostDialogVisible">
      <post-form @createPost="createPost"/>
    </my-dialog>
    <section class="section">
      <div class="section-header">
        <my-select :model-value="selectedSort" @update:model-value="setSelectedSort" :options="sortOptions"></my-select>
        <my-input v-focus :model-value="searchData" @update:model-value="setSearchData" placeholder="Поиск среди заметок"/>
        <my-button @click="showDialog" style="align-self: flex-end">Создать пост</my-button>
      </div>
      <post-list
          :posts="sortedAndSearchedPosts"
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
      createPostDialogVisible: false,
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
      postPush: 'post/pushPost'
    }),
    ...mapActions({
      fetchMorePosts: "post/fetchMorePosts",
      fetchPosts: "post/fetchPosts",
    }),
    showDialog() {
      this.createPostDialogVisible = true;
    },
    createPost(post) {
      this.postPush(post);
      this.createPostDialogVisible = false;
    },
  },
  mounted() {
    if (this.posts.length === 0) {
      this.fetchPosts()
    }
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