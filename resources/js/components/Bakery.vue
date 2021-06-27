<template>
    <div class="min-vh-10" :class="[isItNight ? 'night' : 'bg-white']">
        <div class="container">
            <div class="text-center mt-5 alert alert-success px-3 position-absolute order-created" :class="[!showAlert ? 'opacity-0': '']" role="alert">
                Successfully created order!
                <p>{{ orderTime | formatDate }}</p>
            </div>
            <div class="row row-no-gutters pt-5 pb-5">
                <div class="col-3 offset-8 col-md-2 mt-6 mt-md-0">
                    <div class="ratio ratio-1x1 rounded-circle cursor-pointer"
                         :class="[isItNight ? 'moon' : 'bg-warning']"
                         @click="handleNightMode"></div>
                </div>
                <div class="col-10 offset-1 col-md-8 offset-md-2 col-lg-4 offset-lg-4 mt-3 px-0">
                    <div class="triangle bg-triangle w-100"></div>
                    <div class="d-flex flex-wrap position-relative">
                        <div class="bg-secondary-light position-absolute w-100 h-100"></div>
                        <h1 class="col-8 offset-2 text-center text-uppercase  border-2 -mt-10 mb-4 d-flex justify-content-center">
                            <div class="fs-4 py-2 px-4 list-group-item-success bg-success b-success border">
                                <strong> cookie bakery</strong>
                            </div>
                        </h1>
                        <div class="col-3 offset-1 px-2">
                            <div class="ratio ratio-1x1 rounded-circle bg-blue border border-2 border-primary" @mouseleave="handleHoverWindow" @mouseenter="handleHoverWindow">
                                <img src="/img/cookie.jpg" class="ratio-1x1 rounded-circle opacity-0" alt="Cookie image">
                            </div>
                        </div>
                        <div class="col-4 px-3 mt-6 position-relative">
                            <div class="bg-info ratio" style="--bs-aspect-ratio: 150%;" @click="handleOrder"></div>
                            <div class="position-absolute handle"></div>
                        </div>

                        <div class="col-3 px-2">
                            <div class="ratio ratio-1x1 rounded-circle bg-blue border border-2 border-primary"
                                 @mouseleave="handleHoverWindow"
                                 @mouseenter="handleHoverWindow">
                                <img src="/img/cookie.jpg" class="ratio-1x1 rounded-circle opacity-0" alt="Cookie image">
                            </div>
                            <div class="mailbox text-center mt-3 bg-secondary d-flex flex-column" ref="mailbox" @click="handleMailbox">
                                <div class="mailbox__hole pb-3"></div>
                                <p class="fs-10 text-black mt-1 mb-0 px-2 pb-4">Mailbox</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import moment from 'moment';
    import {mapActions} from "vuex";

    export default {
        name: "App",
        data () {
            return {
                mailBoxFallen: false,
                isItNight: false,
                orderTime: null,
                showAlert: false,
                interval: null,
                time: 0
            }
        },
        filters: {
            formatDate: function (value) {
                if (value) {
                    return moment(String(value)).format('MM/DD/YYYY HH:mm')
                }
            }
        },
        watch: {
            time : function (val) {
                if(val > 2) {
                    this.showAlert = false;
                } else {
                    this.showAlert = true;
                }
            },
        },
        methods: {
            ...mapActions(["ADD_ORDER"]),
            handleHoverWindow(e) {
                if(this.isItNight) return;

                const cookie = e.target.querySelector('img');
                if(cookie) cookie.classList.toggle('opacity-0')
            },

            handleMailbox(e) {
                if(!this.mailBoxFallen) this.$refs.mailbox.classList.add('drop')
            },

            handleNightMode() {
                this.isItNight = !this.isItNight
                if(this.interval !== null) {
                    clearInterval(this.interval);
                    this.showAlert = false
                }
            },

            handleOrder() {
                if (this.isItNight) return;
                const a = new Date();
                this.orderTime = a.toISOString();
                this.$store.dispatch("ADD_ORDER", a.getTime())

                if(this.interval) {
                    clearInterval(this.interval);
                    this.time = 0;
                }
                this.interval = setInterval ( () => {
                    this.time += 1;
                }, 1000)
            }
        },
    };
</script>

<style>

    .cursor-pointer{
        cursor: pointer;
    }

    .bg-secondary-light {
        background: var(--bs-secondary);
        opacity: 0.3;
    }

    .night {
        background: #151843;
    }

    .order-created {
        box-shadow: 0px 0px 0px 5px rgb(148 200 126 / 9%),
        0px 0px 0px 30px rgb(148 200 126 / 3%);
    }

    .night .bg-blue {
        box-shadow: 0px 0px 0px 18px rgb(255 255 255 / 3%),
        0px 0px 0px 50px rgb(255 255 255 / 1%);
    }

    .moon {
        margin: 0 auto;
        background-color: #ebf3fe;
        display: block;
        border-radius: 50%;
        position: relative;
        box-shadow: inset -40px 0px 0px #d8e8f7, inset 20px 0px 0px #ffffff, inset -50px 0px 0px 20px #e2eefa, 0px 0px 0px 20px rgb(255 255 255 / 5%), 0px 0px 0px 40px rgb(255 255 255 / 3%), 0px 0px 0px 60px rgb(255 255 255 / 1%);
        border: solid 10px;
        transition: all 0.2s ease-in;
    }

    .opacity-0 {
        opacity: 0;
    }

    .ratio-1x1,
    .order-created {
        transition: opacity 0.3s ease;
    }

    .-mt-10 {
        margin-top: -28px;
        position: relative;
        z-index: 10;
    }

    .b-success.border {
        border-color: #578544 !important;
    }

    .mailbox__hole {
        width: 75%;
        margin: 10px auto;
        background: rgb(51, 51, 51);
    }

    .mailbox {
        position: relative;
        z-index: 10;
    }

    .drop {
        animation: drop 1s forwards;
    }

    @keyframes drop {
        0% {
            transform:
                rotate(15deg);
        }
        40% {
            transform:
                rotate(-15deg);
        }

        60% {
            transform:
                translate3d(0, calc(100% - 83px) , 0)  rotate(-15deg) ;
        }

        85% {
            transform:
                translate3d(0, calc(100% - 63px) , 0)  rotate(15deg) ;
        }

        100% {
            transform:
                translate3d(0, calc(100% - 63px) , 0)  rotate(0) ;
        }
    }

    .handle {
        width: 30px;
        height: 3px;
        z-index: 10;
        top: 50%;
        left: 20px;
        transform: translateY(-50%);
        background: var(--bs-orange);
    }

    .mt-6 {
        margin-top: 50px;
    }

    .triangle {
        width: 50%;
        height: 0;
        padding-left:50%;
        padding-bottom: 50%;
        overflow: hidden;
    }

    .triangle:after {
        content: "";
        display: block;
        width: 0;
        height: 0;
        margin-left:-500px;
        border-left: 500px solid transparent;
        border-right: 500px solid transparent;
        border-bottom: 500px solid var(--bs-coralr);
    }
</style>
