<template>
  <div class="checkout">
    <app-navbar></app-navbar>
    <div class="container mt-5 pt-5">
      <div class="row align-items-center">
        <div class="col-md-12">
          <h1 class="py-4">Checkout page</h1>
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
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "../constructs/Navbar";

export default {
  components: {
    appNavbar: Navbar
  }
};
</script>