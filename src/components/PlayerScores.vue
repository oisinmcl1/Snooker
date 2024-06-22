<!-- src/components/PlayerScores.vue -->
<template>
    <div class="player-scores">
      <h2>{{ playerName }}</h2>
      <ul>
        <li v-for="(score, index) in scores" :key="index">{{ score }}</li>
      </ul>
      <p>Total Score: {{ totalScore }}</p>
      <div v-if="isTurn">
        <h3>Your Turn</h3>
        <div class="buttons">
          <button v-for="(points, color) in snookerColors" :key="color" @click="addScore(points)">
            {{ color }} ({{ points }})
          </button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'PlayerScores',
    props: {
      playerName: {
        type: String,
        required: true
      },
      isTurn: {
        type: Boolean,
        required: true
      }
    },
    data() {
      return {
        scores: [],
        snookerColors: {
          Red: 1,
          Yellow: 2,
          Green: 3,
          Brown: 4,
          Blue: 5,
          Pink: 6,
          Black: 7
        }
      };
    },
    computed: {
      totalScore() {
        return this.scores.reduce((acc, score) => acc + score, 0);
      }
    },
    methods: {
      addScore(points) {
        this.scores.push(points);
        this.$emit('score-added', points);
      }
    }
  };
  </script>
  
  <style scoped>
  .player-scores {
    border: 1px solid #ccc;
    padding: 16px;
    margin: 8px;
  }
  .buttons button {
    margin: 4px;
  }
  </style>
  