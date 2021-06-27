let actions = {
    ADD_ORDER({
        commit
    }, order) {
       axios.post('/api/orders222', order).then(res => {
        if (res.data === "added")
            commit("ADD_ORDER", order);
            return order;
        }).catch(err => {
            return err;
        })


    },
}

export default actions
