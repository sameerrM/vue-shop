<template>
  <modal name="login-modal"
         width="50%"
         height="auto"
         transition="nice-modal-fade"
         classes="demo-modal-class"
         :min-height="200">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Modal title</h5>
        <button type="button" class="close" @click="hide">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <ul class="nav nav-fill nav-pills mb-3" id="pills-tab">
          <li class="nav-item">
            <a class="nav-link active" id="pills-home-tab">Login</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" id="pills-register-tab">Signup</a>
          </li>
        </ul>
        <div class="tab-content" id="pills-tabContent">
          <div class="tab-pane fade show" id="pills-login" role="tabpanel" aria-labelledby="pills-login-tab">
            <h5 class="text-center">Login Please</h5>
            <div class="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
              <small class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
            </div>

            <div class="form-group">
              <button class="btn btn-primary">Login</button>
            </div>

          </div>
          <div class="tab-pane fade" id="pills-register">

            <h5 class="text-center">Create New Account</h5>

            <div class="form-group">
              <label for="name">Your name</label>
              <input type="text" class="form-control" id="name" placeholder="Your nice name">
            </div>

            <div class="form-group">
              <label for="email">Email address</label>
              <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email">
            </div>
            <div class="form-group">
              <label for="password">Password</label>
              <input type="password" class="form-control" id="password" placeholder="Password">
            </div>

            <div class="form-group">
              <button class="btn btn-primary">Signup</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </modal>
</template>

<script>
  export default {
    methods:{
      hide (e) {
        e.preventDefault();
        this.$modal.hide('login-modal');
      }
    }
  }
</script>

<style scoped>

  .modal-content{
    width: 100%;
    height: 100%;
  }

</style>
