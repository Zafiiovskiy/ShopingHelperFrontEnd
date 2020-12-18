<template>
  <div class="home">
    <Carts v-bind:carts="carts"/>
  </div>
</template>

<script>
import axios from 'axios';
import Carts from '@/components/Carts.vue';
export default {
  name: 'Home',
  components: {
    Carts
  },
  data() {
    return { carts: []
    }
  },
  created() {
    axios.get('http://localhost:3000/carts/false')
    .then(res => this.carts = res.data)
    .catch(err => console.log(err));
  }
}
</script>
