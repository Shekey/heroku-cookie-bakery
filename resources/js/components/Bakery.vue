<template>
    <div class="min-vh-10" :class="[isItNight ? 'night' : 'bg-white']">
        <div class="container">
            <alert :showAlert="showAlert" :message="message" :orderTime="orderTime | formatDate"></alert>

            <div class="row row-no-gutters pt-5 pb-5">
                <div class="col-3 offset-8 col-md-2 mt-6 mt-md-0">
                    <sun @handleNightMode="handleNightMode"></sun>
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
                            <window :isItNight="isItNight"></window>

                        </div>
                        <div class="col-4 px-3 mt-6 position-relative">
                            <div class="bg-info ratio" style="--bs-aspect-ratio: 150%;" @click="handleOrder"></div>
                            <div class="position-absolute handle"></div>
                        </div>

                        <div class="col-3 px-2 d-flex justify-content-between flex-column">
                            <window :isItNight="isItNight"></window>
                            <mailbox text="Mailbox"></mailbox>
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
    import alert from './Alert';
    import sun from './Sun';
    import mailbox from './MailBox';
    import Window from "./Window";

    export default {
        name: "App",
        components: {
            Window,
            alert,
            sun,
            mailbox,
        },
        data () {
            return {
                isItNight: false,
                orderTime: null,
                showAlert: false,
                interval: null,
                message: null,
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
            handleNightMode(value) {
                this.isItNight = value
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
                this.message = 'Successfully created order!';

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
