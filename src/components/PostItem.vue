<template>
  <div class="post">
    <div class="post-header"><strong>{{ post.name }}</strong></div>
    <div class="post-body">{{ post.content }}</div>
    <div class="post-bottom">
      <div style="align-self: center">Лайки: <strong>{{ post.likes }}</strong></div>

      <div class="post-buttons">
        <my-button @click="$emit('addLike', post)">Лайкнуть</my-button>
        <my-button @click="$emit('addDislike', post)">Нелайкнуть</my-button>
        <my-button @click="$emit('removePost', post)" class="reject">Грохнуть нахуй</my-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  methods: {

  }
}
</script>

<style scoped>
.post {
  display: flex;
  flex-direction: column;
  flex: 1 1 calc(1 / 3 * 100% - 1rem);
  max-width: calc(1 / 3 * 100% - 1rem);
  padding: 1rem;
  background: #ddd;
  border-radius: 1rem;
  box-sizing: border-box;
  gap: 1rem;
}

.post-header {
  font-weight: bold;
}

.post-body {
  display: flex;
  flex-direction: column;
}

.post-bottom {
  display: flex;
  margin-top: auto;
  flex-direction: row;
  justify-content: space-between;
  gap: .5rem;
}

.post-buttons {
  display: flex;
  align-self: flex-end;
  align-items: center;
  flex-direction: row;
  gap: .5em;
}
</style>