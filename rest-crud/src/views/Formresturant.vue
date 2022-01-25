<template>
  <div>
    <Header></Header>
    <div class="Wrapform">
     <v-row>
      <v-col cols="7" offset="5">

     <h3 v-if="this.$route.params.id">Fill Form for Edit Resturant</h3>
     <h3 v-else>Fill Form for Add Resturant</h3>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="4" offset="4">
        <v-text-field
        v-model="resturant.name"
        solo
        dense
        outlined
        label="Edit Resturant Name"></v-text-field>
        <v-text-field
        v-model="resturant.address"
        solo
        dense
        outlined
        label="Edit Resturant Address"></v-text-field>
        <v-text-field
        v-model="resturant.contact"
        solo
        dense
        outlined
        label="Edit Resturant Contact"></v-text-field>
        <v-btn
        v-if="this.$route.params.id"
        @click="editResturant"
        block>Edit Resturant</v-btn>
        <v-btn 
        v-else-if="!this.$route.params.id"
        @click="addResturant"
        block>Add Resturant</v-btn>
      </v-col>
    </v-row>
    </div>
    
  </div>
</template>

<script>
import Header from "../components/Header.vue"
import  exampleMixin from "../mixins/exampleMixin"
import axios from "axios"
  export default {
    mixins:[exampleMixin],
    name: 'Updaterest',
    components:{
      Header
    },

    data () {

      return {
        resturant:[
          {
             name:'',
             address:'',
             contact:''
          }
        ]
      }
      
    },
    
    methods:{
        
    },

    async mounted() {
    
    
    let user = localStorage.getItem('user-info');
    

      if(!user)
      {
        // this.$router.push({ name: 'SignUp' })
        this.$router.push("/SignUp").catch(()=>{});
      }
      console.log(this.$route.params)

      if(this.$route.params.id)
      {
         const result = await axios.get("http://localhost:3000/resturant/"+this.$route.params.id)
          this.resturant = result.data
          console.log(this.resturant)
      }
        
      
    
        

        
        

      // console.warn(this.$router)
      // const result = await axios.get("http://localhost:3000/resturant/"+this.$route.params.id)
    }

    
  }
</script>

<style lang="scss" scoped>

</style>