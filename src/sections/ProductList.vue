<template>
  <div class="products" id="products">
    <div class="container">
      <h1 class="text-center p-5">Our Products List</h1>
      <div class="row">
        <div class="col-md-4 mt-2" v-for="product in products">
          <div class="card product-item">
            <carousel :perPage="1">
              <slide v-for="(image, index) in product.images">
                <img
                  :src="image"
                  class="card-img-top"
                  alt="..."
                  style="display: block; width: 250px!important; margin: 0 auto;"
                />
              </slide>
            </carousel>
            <div class="card-body">
              <div class="d-flex justify-content-between">
                <h5 class="card-title">{{product.name}}</h5>
                <h5 class="card-price">{{product.price | currency}}</h5>
              </div>
              <add-to-cart
                :name="product.name"
                :price="product.price"
                :p-id="product.id"
                :image="getImage(product.images)"
              ></add-to-cart>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { db } from "../firebase";
import Cart from "../components/Cart";
export default {
  data() {
    return {
      products: []
    };
  },

  components: {
    addToCart: Cart
  },

  firestore() {
    return {
      products: db.collection("products")
    };
  },

  methods: {
    getImage(images) {
      return images[0];
    }
  }
};
</script>


<style lang="scss">
.products {
  margin-top: 7rem;
  background: #f2f2f2;
  padding-bottom: 3rem;
}
.card-top-img {
  width: 250px !important;
  margin: 0 auto;
}
</style>
