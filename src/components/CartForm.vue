<template>
    <form @submit="Save" class="m-5 border border-dark rounded">
    <input v-model="cartName" type="text" class="form-control m-2" placeholder="Cart name">
    <div v-for="tobuy in toBuys" :key="tobuy.name" class="form-row m-5 border border-dark rounded">
            <div class="col-7 m-1">
                <input v-model="tobuy.name" type="text" class="form-control" placeholder="Name">
            </div>
            <div class="col m-1">
                <input v-model="tobuy.amount" type="number" class="form-control" placeholder="Amount">
            </div>
    </div>
    <div @click="populate" class="btn btn-success m-2">Add</div>
    <button type="submit" class="btn btn-primary m-2">Save</button>
</form>
</template>

<script>
import axios from 'axios';
import { required, minLength, maxLength } from 'vuelidate/lib/validators'; 
export default {
    name:'CartForm',
    data() {
        return {
            cartName: '',
            toBuys: [{name: '', amount:1,isDone:false}]
        }
    },
    methods: {
        Save() {
            console.log(this.toBuys);
            axios.post(`http://localhost:3000/carts`,
            {
                name: this.cartName,
                toBuys: this.toBuys,
                isDone: false
            })
            .then()
            .catch(err => console.log(err));
        },
        populate() {
            this.toBuys.push({name: '', amount:'',isDone:false});
        }
    },
    validators: {
        cartName: {
            required,
            minLength: minLength(1),
            maxLength: maxLength(300)
        }
    }
}
</script>