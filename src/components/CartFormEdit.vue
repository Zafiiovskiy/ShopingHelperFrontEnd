<template>
    <div>
        <form @submit="Save" class="m-5 border border-dark rounded">
        <input v-model="this.cart.name" type="text" class="form-control m-2" placeholder="Cart name">
        <div v-for="tobuy in this.cart.toBuys" :key="tobuy.name" class="form-row m-5 border border-dark rounded">
                <div class="col-7 m-1">
                    <input v-model="tobuy.name" type="text" class="form-control" placeholder="Name">
                </div>
                <div class="col m-1">
                    <input v-model="tobuy.amount" type="number" class="form-control" placeholder="Amount">
                </div>
        </div>
        <button type="submit" class="btn btn-primary m-2">Save</button>
    </div>
</template>

<script>
export default {
    name:'CartFormEdit',
    props:["cart"]
}
</script>