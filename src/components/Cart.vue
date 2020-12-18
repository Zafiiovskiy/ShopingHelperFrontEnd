<template>
    <div>
        <div class="p-3 m-2 border border-dark rounded">
            <p>{{cart.name}}</p>
            <div v-bind:key="tobuy._id" v-for="tobuy in cart.toBuys">
                <ToBuy :tobuy="tobuy" :_id="cart._id"/>
            </div>
            <div class="row ml-5 mr-5 mt-3">
                <div v-if="cart.isDone" @click="AddToMain" class="btn m-2 btn-sm btn-outline-success col-sm">Add to main</div>
                <div v-if="!cart.isDone" @click="Finish" class="btn m-2 btn-sm btn-outline-success col-sm">Finish</div>
                <div @click="Delete" class="btn m-2 btn-sm btn-outline-danger col-sm">Delete</div>
                <div v-if="!cart.isDone" @click="Edit" class="btn m-2 btn-sm btn-outline-dark col-sm">Edit</div>
            </div>
            <div v-if="Editing">
                <CartFormEdit :cart="cart"/>
            </div>
        </div>
    </div>
</template>

<script>
import Axios from 'axios';
import ToBuy from './ToBuy.vue';
export default {
    name: "Cart",
    components: {
        ToBuy
    },
    props: ["cart"],
    methods: {
        Finish() {
            Axios.patch(`http://localhost:3000/carts/${this.cart._id}`,{ isDone: true })
            .then(this.$emit('finish-cart', this.cart._id))
            .catch(err => console.log(err));
        },
        Delete() {
            Axios.delete(`http://localhost:3000/carts/${this.cart._id}`)
            .then(this.$emit('finish-cart', this.cart._id))
            .catch(err => console.log(err));
        },
        Edit() {
            this.Editing = !this.Editing;
        },
        AddToMain() {
            Axios.patch(`http://localhost:3000/carts/${this.cart._id}`,{ isDone: false })
            .then(this.$emit('finish-cart', this.cart._id))
            .catch(err => console.log(err));
        }
    },
    data() {
        return { Editing: true }
    }
}
</script>

<style scoped>
</style>