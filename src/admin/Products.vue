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
        <h3 class="d-inline-block">Products list</h3>
        <button @click="addNew" class="btn btn-primary float-right">Add Product</button>
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
              <td>
                {{ product.name }}
              </td>
              <td>
                {{ product.price }}
              </td>
              <td>
                <button @click="editProduct(product)" class="btn btn-primary mr-2">Edit</button>
                <button @click="deleteProduct(product)" class="btn btn-danger">Delete</button>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <modal name="edit-modal"
           :width="600"
           height="auto"
           :adaptive="true"
           class="edit-modal"
    >
      <div class="edit-products">
        <form>
          <h3 class="text-center">Edit Product</h3>
          <br>
          <div class="form-group">
            <input v-model="product.name"  type="text" class="form-control" aria-describedby="emailHelp" placeholder="Product Name">
          </div>
          <div class="form-group">
            <vue-editor v-model="product.description"></vue-editor>
          </div>
          <hr>
          <div class="form-group">
            <input v-model="product.price" type="text" class="form-control" placeholder="Product price">
          </div>
          <div class="form-group">
            <input v-model="product.tag" type="text" class="form-control" placeholder="Product tags">
          </div>
          <div class="form-group">
            <label for="exampleFormControlFile1">Example file input</label>
            <input type="file" class="form-control-file" id="exampleFormControlFile1">
          </div>
          <button @click.prevent="closeModal" class="btn btn-secondary mr-2">Close</button>
          <button v-if="modal == 'new'" @click.prevent="addProduct()" class="btn btn-primary">Save changes</button>
          <button v-if="modal == 'edit'" @click.prevent="updateProduct()" class="btn btn-primary">Apply changes</button>
        </form>
      </div>
    </modal>
  </div>
</template>

<script>
  import { VueEditor } from "vue2-editor"
  import { db } from '../firebase'

  export default {
    data () {
      return {
        products: [],
        product: {
          name: null,
          description: null,
          price: null,
          tag: null,
          image: null
        },
        activeItem: null,
        modal: null
      }
    },

    components: {
      VueEditor
    },

    firestore() {
      return{
        products: db.collection('products')
      }
    },

    methods: {

      addNew() {
        this.modal = 'new';
        this.$modal.show('edit-modal');
      },

      updateProduct() {
        this.$firestore.products.doc(this.product.id).update(this.product)
        Toast.fire({
          type: 'success',
          title: 'Updated successfully'
        })
        this.$modal.hide('edit-modal');
      },

      editProduct(product) {
        this.modal = 'edit';
        this.product = product;
        this.$modal.show('edit-modal');
      },

      closeModal() {
        this.$modal.hide('edit-modal');
      },

      deleteProduct(doc) {
        Swal.fire({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          type: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
          if (result.value) {

            this.$firestore.products.doc(doc['.key']).delete()

            Toast.fire({
              type: 'success',
              title: 'Deleted successfully'
            })
          }
        })
      },

      readData() {
      },

      addProduct () {
        this.$firestore.products.add(this.product);
        Toast.fire({
          type: 'success',
          title: 'Product created successfully'
        })
        this.$modal.hide('edit-modal');
      },

    },

    created() {

    },
  }
</script>

<style scoped>
  .edit-products{
    padding: 20px 15px;
  }
</style>
