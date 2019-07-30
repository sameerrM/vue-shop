<template>
  <div class="products">
    <div class="container">
      <div class="intro h-100">
        <div class="row h-100 justify-content-center align-items-center">
          <div class="col-md-6">
            <h3>Products Page</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde, ducimus.
            </p>
          </div>
          <div class="col-md-6">
            <img src="/img/svg/products.svg" alt="" class="img-fluid">
          </div>
        </div>
      </div>
      <hr>
      <div class="product-test">
        <h3>Basic CRUD in Firebase</h3>
        <br>
        <form>
          <div class="form-group row">
            <label for="product_name" class="col-sm-2 col-form-label">Email</label>
            <div class="col-sm-10">
              <input type="text" v-model="product.name" class="form-control" id="product_name"
                     placeholder="Product Name">
            </div>
          </div>
          <div class="form-group row">
            <label for="product_price" class="col-sm-2 col-form-label">Password</label>
            <div class="col-sm-10">
              <input type="text" v-model="product.price" class="form-control" id="product_price" placeholder="Price">
            </div>
          </div>
          <div class="form-group row">
            <div class="col-sm-10">
              <button @click="saveData" class="btn btn-primary">Save data</button>
            </div>
          </div>
        </form>
        <hr>
        <h3>Products list</h3>
        <div class="table-responsive">
          <table class="table">
            <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Modify</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="product in products">
              <td>{{ product.data().name }}</td>
              <td>{{ product.data().price }}</td>
              <td>
                <button @click="editProduct(product)" class="btn btn-primary mr-2">Edit</button>
                <button @click="deleteProduct(product.id)" class="btn btn-danger">Delete</button>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <modal name="edit-modal"
           :width="400"
           height="auto"
           :adaptive="true"
           class="edit-modal"
    >
      <div class="edit-products">
        <form>
          <h3 class="text-center">Edit Product</h3>
          <br>
          <div class="form-group">
            <input type="text" v-model="product.name" class="form-control" aria-describedby="emailHelp" placeholder="Product Name">
          </div>
          <div class="form-group">
            <input type="text" v-model="product.price" class="form-control" placeholder="Price">
          </div>
          <button @click="closeModal" class="btn btn-secondary mr-2">Close</button>
          <button @click.prevent="updateProduct()" class="btn btn-primary">Save changes</button>
        </form>
      </div>
    </modal>
  </div>
</template>

<script>
  import { db } from '../firebase'

  export default {
    data () {
      return {
        products: [],
        product: {
          name: null,
          price: null
        },
        activeItem: null
      }
    },

    methods: {

      watcher() {
        db.collection("products").onSnapshot((querySnapshot) => {
            this.products = [];
            querySnapshot.forEach((doc) => {
              this.products.push(doc);
            });
          });
      },

      updateProduct() {

        db.collection("products").doc(this.activeItem).update(this.product)
          .then(() => {
            this.$modal.hide('edit-modal');
            this.watcher();
            console.log("Document successfully updated!");
          })
          .catch((error) => {
            // The document probably doesn't exist.
            console.error("Error updating document: ", error);
          });

      },

      editProduct(product) {
        this.$modal.show('edit-modal');

        this.product = product.data();
        this.activeItem = product.id;
      },

      closeModal(e) {
        e.preventDefault();
        this.$modal.hide('edit-modal');
      },

      deleteProduct(doc) {

        if(confirm('Are you sure ?')) {
          db.collection('products').doc(doc).delete()
            .then(() => {
              console.log('Document successfully deleted!');
            })
            .catch((error) => {
              console.error('Error removing document: ', error);
            })
        } else {

        }
      },

      readData() {
        db.collection('products').get().then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            this.products.push(doc);
          });
        });
      },

      saveData (e) {
        e.preventDefault()

        db.collection('products').add(this.product)
          .then((docRef) => {
            console.log('Document written with ID: ', docRef.id)
            this.readData();
          })
          .catch(function (error) {
            console.error('Error adding document: ', error)
          })
      },
      // reset () {
      //   Object.assign(this.$data, this.$options.data.apply(this))
      // }
    },

    created() {
      this.readData()
    },
  }
</script>

<style scoped>
  .edit-products{
    padding: 20px 15px;
  }
</style>
