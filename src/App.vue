<template>
  <div id="app">
    <app-navbar></app-navbar>
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from './constructs/Navbar'

export default {
  components: {
    appNavbar: Navbar
  }
}
</script>


<style lang="scss">

</style>
