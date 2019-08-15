<template>
  <modal name="cart-modal" :width="600" height="auto" :adaptive="true" class="cart-modal">
    <div class="edit-products">
      <div class="cart-header">
        <h4>Cart Modal</h4>
      </div>
      <hr />
      <div class="cart-body">
        <ul>
          <li v-for="item in this.$store.state.cart" class="media">
            <img :src="item.productImage" width="80px" class="align-self-center mr-3" alt />
            <div class="media-body">
              <h5 class="mt-0">
                {{item.productName}}
                <button
                  class="btn btn-dark float-right"
                  @click.prevent="$store.commit('removeFromCart',item)"
                >X</button>
              </h5>
              <p class="mt-0">{{item.productPrice | currency}}</p>
              <p class="mt-0">Quantity : {{item.productQuantity }}</p>
            </div>
          </li>
        </ul>
      </div>
      <hr />
      <div class="cart-footer d-flex">
        <button @click="closeCartModal" class="btn btn-secondary mr-3">Continue Shopping</button>
        <router-link to="/checkout" class="btn btn-primary">Checkout</router-link>
      </div>
    </div>
  </modal>
</template>

<script>
export default {
  methods: {
    closeCartModal() {
      this.$modal.hide("cart-modal");
    }
  }
};
</script>

<style scoped lang="scss">
.edit-products {
  padding: 20px 15px;
}
.v--modal-overlay {
  overflow: auto;
}
</style>