<template>
  
    <v-row class="text-center">
      <v-col cols="12">
          <div class="nav d-flex ">
              <router-link to="/">Home</router-link>
              <router-link  to="/Addresturant">Add resturant</router-link >
              <!-- <router-link  to="/Formresturant">Update resturant</router-link > -->
              <a @click="logOUt" href="#">Logout</a>
          </div>
      </v-col>
    </v-row>
  
</template>

<script>

  export default {
    name: 'Header',

    data () {

      return {
        
      }
      
    },
    
    methods:{
      logOUt(){
        
        localStorage.clear();
        this.$router.push({name:'LogIn'})
      }
    },
    mounted(){
      
    }
    
  }
</script>


<style lang="scss" scoped>
.nav{
    background-color:#333;
}
.nav a{
  color: white;
  background-color: rgb(61, 139, 139);
  text-decoration:none;
  padding: 7px;
  margin-right: 24px;
}
.nav a:hover{
  background-color: rgb(0, 81, 255);
}
</style>