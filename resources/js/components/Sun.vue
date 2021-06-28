<template>
    <div class="ratio ratio-1x1 rounded-circle cursor-pointer"
         :class="[isItNight ? 'moon' : 'bg-warning']"
         @click="handleNightMode"></div>
</template>

<script>
    export default {
        name: "sun",
        data () {
            return {
                isItNight: false
            }
        },
        methods: {
            handleNightMode() {
                this.isItNight = !this.isItNight;
                this.$emit('handleNightMode', this.isItNight)
            },
        }
    };
</script>
