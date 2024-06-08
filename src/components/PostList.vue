<template>
  <div v-if="posts.length > 0" class="post-wrapper">
    <transition-group name="post-list">
      <post-item
          v-for="post in posts"
          :key="post.id"
          :post="post"
          @removePost="$emit('removePost', post)"
          @addLike="$emit('addLike', post)"
          @addDislike="$emit('addDislike', post)"
      />
    </transition-group>
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
.post-list-item{
  display: inline-block;
  margin-right: 1rem;
}
.post-list-enter-active,
.post-list-leave-active {
  transition: all .5s ease-out;
}
.post-list-enter-from,
.post-list-leave-to {
  opacity: 0;
  transform: translateY(1rem);
}
.post-list-move {
  transition: all .5s linear;
}
</style>