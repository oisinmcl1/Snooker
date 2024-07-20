<template>
  <div id="app" class = "split-page">
    <PlayerScore pName="Player 1" initScore="0" pStyle="p1-Sec"/>
    <PlayerScore pName="Player 2" initScore="0" pStyle="p2-Sec"/>
  </div>
</template>

<script>
import PlayerScore from './components/PlayerScore.vue';

export default {
  name: 'App',
  components: {
    PlayerScore
  }
}
</script>

<style>
.app {
}

.split-page {
  display: flex;
  height: 100vh;
}

.p1-Sec, .p2-Sec {
  align-items: center;
  display: flex;
}

.p1-Sec {
  background-color: red;
}

.p2-Sec {
  background-color: blue;
}
</style>
