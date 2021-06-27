<template>
    <section class="w-100 h-100 min-vh-10 d-flex flex-column align-items-center container">

        <h1 class="my-5">Orders</h1>


        <table class="table">
            <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Created at</th>
                <th scope="col">Updated at</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="item in orders">
                <th scope="row">{{ item.id }}</th>
                <td>{{ item.created_at | formatDate }}</td>
                <td>{{ item.updated_at | formatDate }}</td>
            </tr>
            </tbody>
        </table>

    </section>
</template>
<script>
    import moment from "moment";

    export default {
        name: "listOrders",
        data () {
            return {
                orders: null
            }
        },
        mounted () {
            axios
                .get('/api/orders')
                .then(response => (this.orders = response.data))
        },
        filters: {
            formatDate: function (value) {
                if (value) {
                    return moment(String(value)).format('MM/DD/YYYY HH:mm')
                }
            }
        },
    };
</script>
<style>
</style>

