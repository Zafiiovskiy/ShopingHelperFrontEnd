<template>
    <div>
        <div v-bind:key="cart._id" v-for="cart in carts">
            <Cart v-on:finish-cart="finishCart" v-bind:cart="cart"/>
        </div>
    </div>
</template>

<script>
import Cart from './Cart.vue';
export default {
    name: "Carts",
    components: {
        Cart
    },
    props:["carts"],
    methods: {
        finishCart(_id) {
            this.carts = this.carts.filter(x => x._id != _id);
            console.log(_id);
        }
    }
}
</script>

<style scoped>

</style>