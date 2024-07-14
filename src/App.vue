<template>
  <div id="app">
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

.p1-Sec {
}

.p2-Sec {
}
</style>
