<template>
  <div class="home">
    <CartForm/>
  </div>
</template>

<script>
import CartForm from '@/components/CartForm.vue';
export default {
  name: 'AddCart',
  components: {
    CartForm
  }
}
</script>
