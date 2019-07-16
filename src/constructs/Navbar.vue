<template>
    <header>
    <!-- Fixed navbar -->
        <nav class="navbar navbar-expand-md navbar-dark bg-dark">
            <div class="container">
                <a class="navbar-brand" href="#">Vue Shop</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarCollapse">
                    <ul class="navbar-nav mr-auto">
                        <router-link to="/home" activeClass="nav-item active" tag="li">
                            <a class="nav-link">Home</a>
                        </router-link>
                        <router-link to="/about" activeClass="nav-item active" tag="li">
                            <a class="nav-link">About us</a>
                        </router-link>
                        <router-link to="/products" activeClass="nav-item active" tag="li">
                            <a class="nav-link">Products</a>
                        </router-link>
                    </ul>
                    <form class="form-inline mt-2 mt-md-0">
                        <input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search">
                        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    </header>
</template>

<script>
export default {
    
}
</script>

<style >

</style>

