<template>
  <div
    class="section section-signup"
    style="background-image: url('img/bg11.jpg'); background-size: cover; background-position: top center; min-height: 700px;"
    id="signup-form"
  >
    <div class="container">
      <div class="row">
        <card class="card-signup" header-classes="text-center" color="orange">
          <template slot="header">
            <h3 class="card-title title-up">Sign Up</h3>
            <p>{{ firstname }}</p>
            <p>{{ lastname }}</p>
            <p>{{ email }}</p>
            <ul>
              <li v-for="(obj, key) in results" :key="key">
                {{ obj.title }}
              </li>
            </ul>
            <div class="social-line">
              <a
                href="#pablo"
                class="btn btn-neutral btn-facebook btn-icon btn-round"
              >
                <i class="fab fa-facebook-square"></i>
              </a>
              <a
                href="#pablo"
                class="btn btn-neutral btn-twitter btn-icon btn-lg btn-round"
              >
                <i class="fab fa-twitter"></i>
              </a>
              <a
                href="#pablo"
                class="btn btn-neutral btn-google btn-icon btn-round"
              >
                <i class="fab fa-google-plus"></i>
              </a>
            </div>
          </template>
          <template>
            <fg-input
              class="no-border"
              placeholder="First Name..."
              addon-left-icon="now-ui-icons users_circle-08"
              v-model="firstname"
            >
            </fg-input>

            <fg-input
              class="no-border"
              placeholder="Last Name..."
              addon-left-icon="now-ui-icons text_caps-small"
              v-model="lastname"
            >
            </fg-input>

            <fg-input
              class="no-border"
              placeholder="Email"
              addon-left-icon="now-ui-icons ui-1_email-85"
              v-model="email"
            >
            </fg-input>
          </template>
          <div class="card-footer text-center">
            <n-button type="neutral" round size="lg" v-on:click="submit">Get Started</n-button>
          </div>
        </card>
      </div>
      <div class="col text-center">
        <router-link
          to="/login"
          class="btn btn-simple btn-round btn-white btn-lg"
        >
          View Login Page
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
  import { Card, FormGroupInput, Button } from '@/components';
  import config from '../../utils/app.config'
  import axios from 'axios'

  export default {
    name : 'signup-form',
    components: {
      Card,
      [Button.name]: Button,
      [FormGroupInput.name]: FormGroupInput
    },
    data : ()=> {
      return {
        firstname: '',
        lastname : '',
        email : '',
        results : []
      }
    },
    methods : {
      submit : function (event) {
      },
      setVal : function first() {
        this.firstname = 'hello'
      },
      getPopular : function getPopular() {
        axios({
          method : 'GET',
          url : config.BASE_URL + '/trendings',
        })
        .then(res=>{
          this.results = res.data.results
        }) 
        .catch(err=>{
          this.results = []
        })
      }
    },
    mounted : function (){
      this.getPopular()
    }
  };

</script>
<style></style>
