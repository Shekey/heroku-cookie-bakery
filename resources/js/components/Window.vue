<template>
    <div class="ratio ratio-1x1 rounded-circle bg-blue border border-2 border-primary"
         @mouseleave="handleHoverWindow" @mouseenter="handleHoverWindow">
        <img src="/img/cookie.jpg" class="ratio-1x1 rounded-circle opacity-0" alt="Cookie image">
    </div>
</template>

<script>
    export default {
        name: "window",
        props: ['isItNight'],
        methods: {
            handleHoverWindow(e) {
                if(this.isItNight) return;

                const cookie = e.target.querySelector('img');
                if(cookie) cookie.classList.toggle('opacity-0')
            },
        }
    };
</script>
