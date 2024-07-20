<template>
    <div class = "pClass">
        <div class = "pInfo">
            <p> {{ pName }}</p>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'PlayerScore',

        props: {
            pName: {
                type: String,
                required: true
            },
            initScore: {
                type: Number,
                default: 0
            },
            pStyle :{
                type: String,
                reuqired: true
            }
        },

        data() {
            return {
                playerScore: this.initScore
            };
        }
    }
</script>

<style scoped>
.pInfo {
  font-size: 24px;
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
}

</style>