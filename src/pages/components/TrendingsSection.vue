<template>
  <div
    class="section section-signup"
    id="signup-form"
  >
    <div class="container">
        <h2><strong>Trendings</strong></h2>
        <div  v-dragscroll.x style="display : flex; width : 100%; overflow : hidden;">
            <div v-for="(obj, key) in results" :key="key"> 
                <card class="card-signu" header-classes="text-center" color="orange" style="width : 200px; margin : 10px; height : auto;">
                    <template slot="header">
                        <img :src="'https://image.tmdb.org/t/p/w500/'+obj.poster_path" :alt="obj.title" style="height : 300px; object-fit:cover;"/>
                        <div style="padding : 10px">
                            <p style="white-space: nowrap; text-overflow: ellipsis; overflow: hidden;margin : 0px">{{ obj.title ? obj.title : obj.name }}</p>
                            <p style="margin : 0px">{{ obj.first_air_date ? getdate(obj.first_air_date) : getdate(obj.release_date) }}</p>
                        </div>
                    </template>
                </card>
            </div>
        </div>
    </div>
  </div>
</template>
<script>
  import { Card, FormGroupInput, Button } from '@/components';
  import { dragscroll } from 'vue-dragscroll'
  import config from '../../utils/app.config'
  import axios from 'axios'
  import moment from 'moment'

  export default {
    name : 'signup-form',
    components: {
      Card,
      [Button.name]: Button,
      [FormGroupInput.name]: FormGroupInput
    },
    directives: {
        'dragscroll': dragscroll
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
      getdate : function (date) {
        return moment(date, 'YYYY-MM-DD').format('MMM DD, YYYY')
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
