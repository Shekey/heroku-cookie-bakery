let mutations = {
    ADD_ORDER(state, order) {
        state.orders.unshift(order)
        return order;
    },
}

export default mutations
