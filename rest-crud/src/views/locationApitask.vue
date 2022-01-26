<template>
  <v-container fluid>
    <v-row class="text-center">
     <h1>Api location task</h1>
     <v-btn
    @click="locaTion"
    outlined>Test Location</v-btn>
    </v-row>
  </v-container>
</template>

<script>
import axios from 'axios'
  export default {
    name: 'SignUp',

    data () {

      return {
        
      }
      
    },
    
//   this comment code just give latitude and longititude in console 
//but if you want location with address use same both function for this generate 
//api key from google console > credential> create api > publish api or enable api with 
//geocoding etc
//https://softauthor.com/vuejs-geolocation-get-user-location/ link for guide

    methods:{
        locaTion() {
          navigator.geolocation.getCurrentPosition(
      position => {
         this.getStreetAddressFrom(position.coords.latitude, position.coords.longitude)
      },
      error => {
         console.log(error.message);
      }
   );
  //      navigator.geolocation.getCurrentPosition(
  //     position => {
  //       console.log(position)
  //        console.log(position.coords.latitude);
  //        console.log(position.coords.longitude);
  //     },
  //     error => {
  //        console.log(error.message);
  //     },
  //  )



},
// await this.$axios.get use axios in nuxt
        async getStreetAddressFrom(lat, long) {
   try {
      var {
         data
      } = await axios.get(
         "https://maps.googleapis.com/maps/api/geocode/json?latlng=" +
         lat +
         "," +
         long +
         "&key=AIzaSyAdNTAaStQZgBMcl9EtwB-HacMM1UX4iys"
      );
      if (data.error_message) {
         console.log(data.error_message)
      } else {
         this.address = data.results[0].formatted_address;
      }
   } catch (error) {
      console.log(error.message);
   }
}
    },
    mounted(){
      
    }
    
  }
</script>

<style lang="scss" scoped>

</style>