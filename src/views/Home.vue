<template>
  <div class="home">
    <app-navbar></app-navbar>
    <app-hero></app-hero>
    <productslist></productslist>
    <div class="container h-100">
      <div class="row p-5 h-100 justify-content-center align-items-center">
        <div class="col-md-6">
          <img src="/img/svg/product.svg" alt width="400" />
        </div>
        <div class="col-md-6">
          <h3>Learn More About us</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur quaerat voluptate iusto? Nihil voluptas vitae veritatis magnam reprehenderit, reiciendis ex? Libero quasi natus veniam voluptatum, voluptas exercitationem ratione consectetur et!</p>
          <button class="btn custom-btn btn-outline-primary mr-4">Browse Products</button>
        </div>
      </div>
    </div>
    <cart-modal></cart-modal>
  </div>
</template>

<script>
import Hero from "../components/Hero";
import ProductsList from "../sections/ProductList";
import Navbar from "../constructs/Navbar";
import CartModal from "../components/CartModal";

export default {
  components: {
    appHero: Hero,
    productslist: ProductsList,
    appNavbar: Navbar,
    cartModal: CartModal
  }
};
</script>
