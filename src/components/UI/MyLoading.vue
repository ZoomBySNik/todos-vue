<script>
export default {
  name: 'my-loading',
}
</script>

<template>
  <div class="loading-wrapper">
    <div>
      <span class="loader"></span>
    </div>
  </div>
</template>

<style scoped>
.loading-wrapper{
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.15);
  position: fixed;
  display: flex;
}
.loading-wrapper div{
  margin: auto;
  width: 4rem;
  height: 4rem;
  display: flex;
}
.loader {
  font-size: 10px;
  width: 1em;
  height: 1em;
  border-radius: 50%;
  position: relative;
  text-indent: -9999em;
  animation: mulShdSpin 1.1s infinite ease;
  transform: translateZ(0);
}
@keyframes mulShdSpin {
  0%,
  100% {
    box-shadow: 0 -2.6em 0 0 #ffffff, 1.8em -1.8em 0 0 rgba(255,255,255, 0.2), 2.5em 0 0 0 rgba(255,255,255, 0.2), 1.75em 1.75em 0 0 rgba(255,255,255, 0.2), 0 2.5em 0 0 rgba(255,255,255, 0.2), -1.8em 1.8em 0 0 rgba(255,255,255, 0.2), -2.6em 0 0 0 rgba(255,255,255, 0.5), -1.8em -1.8em 0 0 rgba(255,255,255, 0.7);
  }
  12.5% {
    box-shadow: 0 -2.6em 0 0 rgba(255,255,255, 0.7), 1.8em -1.8em 0 0 #ffffff, 2.5em 0 0 0 rgba(255,255,255, 0.2), 1.75em 1.75em 0 0 rgba(255,255,255, 0.2), 0 2.5em 0 0 rgba(255,255,255, 0.2), -1.8em 1.8em 0 0 rgba(255,255,255, 0.2), -2.6em 0 0 0 rgba(255,255,255, 0.2), -1.8em -1.8em 0 0 rgba(255,255,255, 0.5);
  }
  25% {
    box-shadow: 0 -2.6em 0 0 rgba(255,255,255, 0.5), 1.8em -1.8em 0 0 rgba(255,255,255, 0.7), 2.5em 0 0 0 #ffffff, 1.75em 1.75em 0 0 rgba(255,255,255, 0.2), 0 2.5em 0 0 rgba(255,255,255, 0.2), -1.8em 1.8em 0 0 rgba(255,255,255, 0.2), -2.6em 0 0 0 rgba(255,255,255, 0.2), -1.8em -1.8em 0 0 rgba(255,255,255, 0.2);
  }
  37.5% {
    box-shadow: 0 -2.6em 0 0 rgba(255,255,255, 0.2), 1.8em -1.8em 0 0 rgba(255,255,255, 0.5), 2.5em 0 0 0 rgba(255,255,255, 0.7), 1.75em 1.75em 0 0 #ffffff, 0 2.5em 0 0 rgba(255,255,255, 0.2), -1.8em 1.8em 0 0 rgba(255,255,255, 0.2), -2.6em 0 0 0 rgba(255,255,255, 0.2), -1.8em -1.8em 0 0 rgba(255,255,255, 0.2);
  }
  50% {
    box-shadow: 0 -2.6em 0 0 rgba(255,255,255, 0.2), 1.8em -1.8em 0 0 rgba(255,255,255, 0.2), 2.5em 0 0 0 rgba(255,255,255, 0.5), 1.75em 1.75em 0 0 rgba(255,255,255, 0.7), 0 2.5em 0 0 #ffffff, -1.8em 1.8em 0 0 rgba(255,255,255, 0.2), -2.6em 0 0 0 rgba(255,255,255, 0.2), -1.8em -1.8em 0 0 rgba(255,255,255, 0.2);
  }
  62.5% {
    box-shadow: 0 -2.6em 0 0 rgba(255,255,255, 0.2), 1.8em -1.8em 0 0 rgba(255,255,255, 0.2), 2.5em 0 0 0 rgba(255,255,255, 0.2), 1.75em 1.75em 0 0 rgba(255,255,255, 0.5), 0 2.5em 0 0 rgba(255,255,255, 0.7), -1.8em 1.8em 0 0 #ffffff, -2.6em 0 0 0 rgba(255,255,255, 0.2), -1.8em -1.8em 0 0 rgba(255,255,255, 0.2);
  }
  75% {
    box-shadow: 0 -2.6em 0 0 rgba(255,255,255, 0.2), 1.8em -1.8em 0 0 rgba(255,255,255, 0.2), 2.5em 0 0 0 rgba(255,255,255, 0.2), 1.75em 1.75em 0 0 rgba(255,255,255, 0.2), 0 2.5em 0 0 rgba(255,255,255, 0.5), -1.8em 1.8em 0 0 rgba(255,255,255, 0.7), -2.6em 0 0 0 #ffffff, -1.8em -1.8em 0 0 rgba(255,255,255, 0.2);
  }
  87.5% {
    box-shadow: 0 -2.6em 0 0 rgba(255,255,255, 0.2), 1.8em -1.8em 0 0 rgba(255,255,255, 0.2), 2.5em 0 0 0 rgba(255,255,255, 0.2), 1.75em 1.75em 0 0 rgba(255,255,255, 0.2), 0 2.5em 0 0 rgba(255,255,255, 0.2), -1.8em 1.8em 0 0 rgba(255,255,255, 0.5), -2.6em 0 0 0 rgba(255,255,255, 0.7), -1.8em -1.8em 0 0 #ffffff;
  }
}
</style>