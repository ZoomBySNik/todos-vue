<template>
  <div class="post">
    <div class="post-header"><strong>{{ post.title }}</strong></div>
    <div class="post-body">{{ post.body }}</div>
    <div class="post-bottom">
      <div class="to-center flex-horizontal gap05">
        <p>Лайки: <strong>{{ post.likes }}</strong></p>
        <p>Id: <strong>{{ post.id }}</strong></p>
      </div>
      <div class="post-buttons">
        <div class="flex-horizontal">
          <my-button @click="$emit('addLike', post)">Лайк</my-button>
          <my-button @click="$emit('addDislike', post)">Дизлайк</my-button>
        </div>
        <my-button @click="$router.push(`/posts/${post.id}`)">Открыть</my-button>
        <my-button @click="$emit('removePost', post)" class="reject">Удалить</my-button>
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
  flex: 1 1 calc(1 / 2 * 100% - 1rem);
  max-width: calc(1 / 2 * 100% - 1rem);
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