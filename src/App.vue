<template>
  <div class="app">
    <section class="section">
      <post-form @createPost="createPost"/>
    </section>
    <section class="section">
      <post-list
          :posts="posts"
          @removePost="removePost"
          @addLike="addLike"
          @addDislike="addDislike"
      />
    </section>
  </div>
</template>

<script>
import PostForm from "@/components/PostForm.vue";
import PostList from '@/components/PostList.vue';
export default {
  components: {
    PostList, PostForm
  },
  data() {
    return {
      posts: [
        {
          id: 1,
          name: 'Пост про жизь',
          content: 'Жизь надо жить чтобы потом не жаловаца',
          likes: 0,
        },
        {
          id: 2,
          name: 'Ауф пост',
          content: 'Работа не волк, работа work',
          likes: 0,
        },
        {
          id: 3,
          name: 'Анекдот про медведя',
          content: 'Искал медь, сгорел медведь',
          likes: 0,
        },
        {
          id: 4,
          name: 'Анекдот про медведя 2',
          content: 'Шёл медведь по лесу, увидел машину, сел в неё и сгорел',
          likes: 0,
        },
        {
          id: 5,
          name: 'Анекдот про вовочку',
          content: 'Урок, учитель говорит придумайте рассказ со словом ананас. Машенька говорит, папа купил домой ананас. Вовочка говорит от нас папа ушёл. Учитель, а где же слово ананас? Вовочка: А на нас ему похуй',
          likes: 0,
        },
      ],
    }
  },
  methods: {
    createPost(post) {
      this.posts.push(post);
    },
    removePost(post) {
      this.posts = this.posts.filter(p => p.id !== post.id)
    },
    addLike(post) {
      const index = this.posts.findIndex(p => p.id === post.id);
      if (index !== -1) {
        this.posts[index] = { ...this.posts[index], likes: this.posts[index].likes + 1 };
      }
    },
    addDislike(post) {
      const index = this.posts.findIndex(p => p.id === post.id);
      if (index !== -1) {
        this.posts[index] = { ...this.posts[index], likes: this.posts[index].likes - 1 };
      }
    },
  }
}
</script>

<style scoped>
</style>