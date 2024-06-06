<template>
  <div v-if="posts.length > 0" class="post-wrapper">
    <post-item
        v-for="post in posts"
        :key="post.id"
        :post="post"
        @removePost="$emit('removePost', post)"
        @addLike="$emit('addLike', post)"
        @addDislike="$emit('addDislike', post)"
    />
  </div>
  <h1 v-else class="error">Постов нема</h1>
</template>

<script>
import PostItem from "@/components/PostItem.vue";

export default {
  components: {PostItem},
  props: {
    posts: {
      type: Array,
      required: true
    },
  },

}
</script>

<style scoped>
.post-wrapper {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  gap: 1rem;
}
</style>