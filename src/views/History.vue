<template>
  <div class="history">
    <Carts v-bind:carts="carts"/>
  </div>
</template>

<script>
import axios from 'axios';
import Carts from '@/components/Carts.vue';
export default {
  name:'History',
  components: {
    Carts
  },
  data(){
    return {
      carts: []
    }
  },
  created() {
    axios.get('http://localhost:3000/carts/true')
    .then(res => this.carts = res.data)
    .catch(err => console.log(err));
  }
}
</script>