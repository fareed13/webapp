<template>
  <div>
    <Header></Header>
    <v-row>
      <v-col cols="4" offset="5">
         <v-chip
          class="ma-2"
          color="primary"
          label>
          <v-icon left>mdi-account-circle-outline</v-icon>{{name}}</v-chip>
         <h3>Hello, {{name}} Welcome to resturant </h3>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="10" offset="1">
        
          <v-card>
            <v-card-title>
              <v-text-field
              v-model="search"
              append-icon="mdi-magnify"
              label="Search"
              single-line
              hide-details></v-text-field>
            </v-card-title>
            
             <v-data-table
             :headers="headers"
             :items="resturant"
             :items-per-page="5"
             :search="search"
             class="elevation-1">
             
             <template v-slot:item.action="{ item }">
               <v-icon
                small
                class="mr-2"
                @click="editResturant(item.id)">mdi-pencil</v-icon>
                
                <v-icon
                small
                @click="deleteResturant(item.id)">mdi-delete</v-icon>

              </template>

             </v-data-table>
             
          </v-card>
      </v-col>
    </v-row>
    
    
  </div>
</template>

<script>
import axios from 'axios'
import Header from "../components/Header.vue"
  export default {
    name: 'Home',
    components:{
      Header
    },

    data () {

      return {
        name:'',
        search: '',
        resturant:[],
         headers: [
          
          { text: 'Id', value: 'id' },
          { text: 'Name', value: 'name' },
          { text: 'Contact', value: 'contact' },
          { text: 'Addres', value: 'address' },
          { text: 'Action', value: 'action' },
          
        ],
      }
      
    },
    
    methods:{
      editResturant(itemid){
        this.$router.push({name:'Updaterest', params: { id: itemid }})
        
      },
      async deleteResturant(itemid){
        let result =await axios.delete('http://localhost:3000/resturant/'+itemid);
        console.warn(result)
        if(result.status==200){
         this.loadData()
        }
      },

      async loadData(){
        let user = localStorage.getItem('user-info');
       this.name= JSON.parse(user).name;
      if(!user)
      {
        this.$router.push({name:'SignUp'})
      }

      // for resturant get

      let result= await axios.get("http://localhost:3000/resturant")
      console.log(result)
      this.resturant = result.data;
      }
    },
    async mounted(){
      this.loadData();
    }
    
  }
</script>

<style lang="scss" scoped>

</style>