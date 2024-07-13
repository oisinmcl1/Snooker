<template>
  <div id="app">
    <ScoreDisplay label = "Frame Score" :player1score="10" :player2Score="15" />
  </div>
</template>

<script>
import ScoreDisplay from './components/ScoreDisplay.vue';

export default {
  name: 'App',
  components: {
    ScoreDisplay
  }
}
</script>

<style>
</style>
