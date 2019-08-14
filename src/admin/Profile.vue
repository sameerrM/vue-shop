<template>
  <div class="products">
    <div class="container">
      <div class="intro h-100">
        <div class="row h-100 align-items-center">
          <div class="col-md-6 ml-3">
            <h3>Profile settings</h3>

            <p>Change your profile settings here</p>
          </div>
          <div class="col-md-5">
            <img src="/img/svg/profile.svg" width="300" alt class="img-fluid" />
          </div>
        </div>
      </div>

      <div class="profile-content">
        <ul class="nav nav-fill nav-pills mb-3" id="pills-tab" role="tablist">
          <li class="nav-item">
            <a class="nav-link" @click="selectTab(0)" :class="{active : currentTab === 0}">Profile</a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              @click="selectTab(1)"
              :class="{active : currentTab === 1}"
            >Account settings</a>
          </li>
        </ul>

        <div class="tab-content" v-if="currentTab === 0" id="myTabContent">
          <div class="container">
            <div class="row">
              <div class="col-md-6">
                <div class="form-group">
                  <input
                    type="text"
                    v-model="profile.name"
                    placeholder="Full name"
                    class="form-control"
                  />
                </div>
              </div>

              <div class="col-md-6">
                <div class="form-group">
                  <input
                    type="text"
                    v-model="profile.phone"
                    placeholder="Phone"
                    class="form-control"
                  />
                </div>
              </div>

              <div class="col-md-12">
                <div class="form-group">
                  <input
                    type="text"
                    v-model="profile.address"
                    placeholder="Address"
                    class="form-control"
                  />
                </div>
              </div>

              <div class="col-md-8">
                <div class="form-group">
                  <input
                    type="text"
                    v-model="profile.postCode"
                    placeholder="Postcode"
                    class="form-control"
                  />
                </div>
              </div>

              <div class="col-md-4">
                <div class="form-group">
                  <input
                    type="submit"
                    @click="updateProfile"
                    value="Save Changes"
                    class="btn btn-primary w-100"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="tab-content" v-if="currentTab === 1">
          <div class="container">
            <div class="row">
              <div class="col-md-12">
                <div
                  class="alert alert-info"
                >Please use the Reset password email button for reseting the password. The form doens't work currently</div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <input
                    type="text"
                    v-model="account.name"
                    placeholder="User name"
                    class="form-control"
                  />
                </div>
              </div>

              <div class="col-md-6">
                <div class="form-group">
                  <input
                    type="text"
                    v-model="account.email"
                    placeholder="Email address"
                    class="form-control"
                  />
                </div>
              </div>

              <div class="col-md-6">
                <div class="form-group">
                  <input
                    type="text"
                    v-model="account.password"
                    placeholder="New password"
                    class="form-control"
                  />
                </div>
              </div>

              <div class="col-md-6">
                <div class="form-group">
                  <input
                    type="text"
                    v-model="account.confirmPassword"
                    placeholder="Confirm password"
                    class="form-control"
                  />
                </div>
              </div>

              <div class="col-md-4">
                <div class="form-group">
                  <label for="exampleFormControlFile1">Example file input</label>
                  <input
                    type="file"
                    @change="uploadImage"
                    class="form-control-file"
                    id="exampleFormControlFile1"
                  />
                </div>
              </div>

              <div class="col-md-4">
                <div class="form-group">
                  <input type="submit" class="btn btn-primary w-100" />
                </div>
              </div>

              <div class="col-md-4">
                <div class="form-group">
                  <input type="button" class="btn btn-success w-100" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { fb, db } from "../firebase";
export default {
  data() {
    return {
      currentTab: 0,
      profile: {
        name: null,
        phone: null,
        address: null,
        postcode: null
      },

      account: {
        name: null,
        email: null,
        photoUrl: null,
        emailVerified: null,
        password: null,
        confirmPassword: null,
        uid: null
      }
    };
  },

  firestore() {
    const user = fb.auth().currentUser;
    return {
      profile: db.collection("profiles").doc(user.uid)
    };
  },

  methods: {
    selectTab(selectedTab) {
      this.currentTab = selectedTab;
    },

    updateProfile() {
      this.$firestore.profile.update(this.profile);
    },

    uploadImage() {}
  }
};
</script>

<style scoped lang="scss">
.profile-content {
  width: 100%;
  height: 100%;
  padding: 20px 15px;

  .nav {
    .nav-item {
      margin: 0 2px;
      padding: 0 15px;

      a {
        cursor: pointer;
        transition: all 0.2s ease-out;
        color: #fff;
        background-color: #007bff;
        border-color: #007bff;

        &:hover {
          background-color: #03a9f4;
          color: #fff;
        }
      }

      .active {
        background-color: #03a9f4;
      }
    }
  }
}
</style>

