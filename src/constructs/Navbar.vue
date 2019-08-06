<template>
  <header>
    <!-- Fixed navbar -->
    <nav class="navbar navbar-expand-md navbar-dark bg-dark">
      <div class="container">
        <router-link to="/" class="navbar-brand" tag="a">Vue Shop</router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
          <ul class="navbar-nav mr-auto">
            <router-link to="/" exact activeClass="active" class="nav-item" tag="li">
              <a class="nav-link">Home</a>
            </router-link>
            <router-link to="/about" activeClass="active" class="nav-item" tag="li">
              <a class="nav-link">About us</a>
            </router-link>
            <router-link to="/products" activeClass="active" class="nav-item" tag="li">
              <a class="nav-link">Products</a>
            </router-link>
          </ul>
          <form class="form-inline mt-2 mt-md-0">
            <input
              class="form-control mr-sm-2"
              type="text"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-success my-2 my-sm-0" @click.prevent="show">Login</button>
          </form>
        </div>
      </div>
    </nav>
    <app-login></app-login>
  </header>
</template>

<script>
import Login from "./Login";

export default {
  components: {
    appLogin: Login
  },
  methods: {
    show() {
      this.$modal.show("login-modal", {
        height: "auto"
      });
    }
  }
};
</script>

<style>
</style>

