<template>
  <v-container fluid>
    <v-row class="text-center bg-singup">
      <v-col cols="12">
          <img class="log-icon" src="../assets/logicon.png" alt="">
          <h1 style="color:white; margin-left:100px;">Sign Up</h1>
     </v-col>
     <v-col cols="3" offset="5">
         <div class="form-signup">
             <v-text-field
             v-model="name"
             dense
             outlined
             background-color="white"
             label="Enter Name"></v-text-field>

             <v-text-field
             v-model="email"
             dense
             outlined
             background-color="white"
             width="50%" 
             label="Enter Email"></v-text-field>

            <v-text-field
            v-model="password"
             dense
             outlined
             background-color="white"
             width="50%" 
             label="Enter password"></v-text-field>
              <div class="d-flex justify-space-around">
             <v-btn x-large @click="signUp">sigup</v-btn>
             <!-- <v-btn x-large @click="logIn">login</v-btn> -->
              </div>

         </div>
     </v-col>
     <v-spacer></v-spacer>
    </v-row>
  </v-container>
</template>

<script>
import axios from 'axios'
  export default {
    name: 'SignUp',

    data () {

      return {
        name:'',
        email:'',
        password:''
      }
      
    },
    
    methods:{
      logIn(){
        this.$router.push({name:'Login'})
      },
      async signUp(){
        let result = await axios.post("http://localhost:3000/user",{
          name:this.name,
          email:this.email,
          password:this.password
        });
        
        console.warn("result");

        if(result.status==201){
          alert("signin done");
   
          localStorage.setItem("user-info",JSON.stringify(result.data))

          // debuging code

          // const abc = this
          // console.log(abc)
          // console.log(this)
          // debugger

          this.$router.push({name:'Home'})
        }
        // console.warn("signup something",this.name,this.email,this.password);
      }
    },
    mounted(){
      let user = localStorage.getItem('user-info');

      if(user)
      {
        this.$router.push({name:'Home'})
      }
    }
    
  }
</script>

<style lang="scss" scoped>
.log-icon{
    width: 100px;
    height: 100px;
    border-radius: 50px;
    border: 5px solid silver;
    margin-left: 100px;
}
.bg-singup{
    background-image: url(../assets/loginbg.png);
    height: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}
</style>