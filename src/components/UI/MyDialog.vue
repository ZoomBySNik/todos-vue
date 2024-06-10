<script>
import toggleMixin from "@/mixins/toggleMixin";

export default {
  name: 'my-dialog',
  mixins: [toggleMixin]
}
</script>

<template>
  <div class="dialog" v-if="show" @click="hideDialog">
    <div @click.stop class="dialog__content">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.dialog{
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.6);
  position: fixed;
  display: flex;
}
.dialog__content{
  margin: auto;
  background: #fff;
  border-radius: 2rem;
  min-width: 15rem;
  min-height: 10rem;
  padding: 2rem;
}
</style>