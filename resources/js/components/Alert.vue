<template>
    <div class="text-center mt-5 alert alert-success px-3 position-absolute order-created" :class="[!showAlert ? 'opacity-0': '']" role="alert">
        {{ message }}
        <p>{{ orderTime }}</p>
    </div>
</template>

<script>
    export default {
        name: "alert",
        props: {
            showAlert: Boolean,
            orderTime: String,
            message: String,
        },
    };
</script>
