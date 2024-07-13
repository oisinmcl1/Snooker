<template>
    <div class="score-disp">
        <h2>{{ label }}</h2>
    </div>

</template>

<script>
export default {
    props: {
        label: {
            type: String,
            required: true
        },
        player1Score: {
            type: Number,
            required: true
        },
        player2Score: {
            type: Number,
            required: true
        }
    }
}
</script>

<style>
</style>