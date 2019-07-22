<template>
  <modal name="login-modal"
         :width="400"
         height="auto"
         :adaptive="true"
         class="login-modal"
  >
    <div class="tabs">
      <ul class="nav nav-fill nav-pills mb-3" id="pills-tab" role="tablist">
        <li class="nav-item">
          <a
            class="nav-link"
            @click="selectTab(0)"
            :class="{active : currentTab === 0}"
          >
            Login
          </a>
        </li>
        <li class="nav-item">
          <a
            class="nav-link"
            @click="selectTab(1)"
            :class="{active : currentTab === 1}"
          >
            Signup
          </a>
        </li>
      </ul>

      <div v-if="currentTab === 0" class="tab-content">
        <form>
          <h3 class="text-center">Login Please</h3>
          <br>
          <div class="form-group">
            <label for="Email1">Email address</label>
            <input type="email" class="form-control" id="Email1" aria-describedby="emailHelp" placeholder="Enter email">
            <small id="email" class="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <div class="form-group">
            <label for="InputPassword1">Password</label>
            <input type="password" class="form-control" id="InputPassword1" placeholder="Password">
          </div>
          <button type="submit" class="btn btn-primary">Login</button>
        </form>
      </div>

      <div v-if="currentTab === 1" class="tab-content">
        <form>
          <h3 class="text-center">Create New Account</h3>
          <br>
          <div class="form-group">
            <label for="inputName">Your name</label>
            <input type="text" v-model="name" class="form-control" id="inputName" aria-describedby="textName"
                   placeholder="Enter neame">
          </div>
          <div class="form-group">
            <label for="inputEmail">Email Address</label>
            <input type="text" v-model="email" class="form-control" id="inputEmail" aria-describedby="textemail"
                   placeholder="Enter neame">
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" v-model="password" class="form-control" id="exampleInputPassword1"
                   placeholder="Password">
          </div>
          <button @click="register" class="btn btn-primary">Signup</button>
        </form>
      </div>
    </div>
  </modal>
</template>

<script>

  import {fb} from '../firebase'

  export default {
    data () {
      return {
        currentTab: 0,
        name: null,
        email: null,
        password: null,
      }
    },
    methods: {
      selectTab (selectedTab) {
        this.currentTab = selectedTab
      },
      register () {
        fb.auth().createUserWithEmailAndPassword(this.email, this.password)
          .then((user) => {
            this.$router.replace('admin');
          })
          .catch(function (error) {
            var errorCode = error.code
            var errorMessage = error.message
            if (errorCode == 'auth/weak-password') {
              alert('The password is too weak.')
            } else {
              alert(errorMessage)
            }
            console.log(error)
          })
      }
    }
  }
</script>

<style scoped lang="scss">

  .tabs {
    width: 100%;
    height: 100%;
    padding: 20px 15px;

    .nav {
      .nav-item {
        margin: 0 2px;

        a {
          cursor: pointer;
          transition: all .2s ease-out;

          &:hover {
            background-color: #03A9F4;
            color: #fff;
          }
        }

        .active {
          background-color: #03A9F4;
        }
      }
    }
  }

</style>
