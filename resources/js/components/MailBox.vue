<template>
    <div class="mailbox text-center mb-3 my-mb-4 bg-secondary d-flex flex-column" ref="mailbox" @click="handleMailbox">
        <div class="mailbox__hole pb-md-3 pb-1"></div>
        <p class="fs-10 text-black mt-1 mb-0 pb-2 pb-md-4">{{ text }}</p>
    </div>
</template>

<script>
    export default {
        name: "mailbox",
        props: ['text'],
        data () {
            return {
                mailBoxFallen: false
            }
        },
        methods: {
            handleMailbox(e) {
                if(!this.mailBoxFallen) this.$refs.mailbox.classList.add('drop')
            },
        }
    };
</script>
