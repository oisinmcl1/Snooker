<!-- src/App.vue -->
<template>
  <div id="app">
    <div class="container">
      <div class="player-column">
        <PlayerScores
          playerName="Player 1"
          :isTurn="currentPlayer === 1"
          @score-added="updateScore(1)"
        />
      </div>
      <div class="player-column">
        <PlayerScores
          playerName="Player 2"
          :isTurn="currentPlayer === 2"
          @score-added="updateScore(2)"
        />
      </div>
    </div>
    <div class="turn-info">
      <p>Current Player: {{ currentPlayer }}</p>
      <button @click="changeTurn">End Turn</button>
    </div>
  </div>
</template>

<script>
import PlayerScores from './components/PlayerScores.vue';

export default {
  name: 'App',
  components: {
    PlayerScores
  },
  data() {
    return {
      currentPlayer: 1,
      scores: {
        1: 0,
        2: 0
      }
    };
  },
  methods: {
    updateScore(player, points) {
      this.scores[player] += points;
    },
    changeTurn() {
      this.currentPlayer = this.currentPlayer === 1 ? 2 : 1;
    }
  }
};
</script>

<style>
.container {
  display: flex;
}
.player-column {
  flex: 1;
  padding: 16px;
}
.turn-info {
  text-align: center;
  margin-top: 16px;
}
</style>
