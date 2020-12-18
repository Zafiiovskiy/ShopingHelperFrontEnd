<template>
    <div class="input-group container">
        <div class="input-group-prepend ">
            <div class="input-group-text">
            <input type="checkbox" :checked="this.tobuy.isDone" v-on:change="markComlete" aria-label="Checkbox for following text input">
            </div>
        </div>
        <div class="form-control">{{tobuy.name}}</div>
        <div class="input-group-append">
            <span class="input-group-text bg-dark text-white">Amount</span>
            <span class="input-group-text bg-dark text-white">{{tobuy.amount}}</span>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: "ToBuy",
    props: ["tobuy","_id"],
    methods: {
        markComlete(){
            this.tobuy.isDone = !this.tobuy.isDone;
            console.log(`${this._id}/${this.tobuy._id}/${!this.tobuy.isDone}`);
            axios.patch(`http://localhost:3000/carts/${this._id}/${this.tobuy._id}`, 
            { 
                name:   this.tobuy.name,
                amount: this.tobuy.amount,
                isDone:  this.tobuy.isDone
            })
            .then()
            .catch(err => console.log(err));
        }
    }
}
</script>

<style scoped>
</style>