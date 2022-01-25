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
                @click="editResturanttable(item.id)">mdi-pencil</v-icon>
                
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
import  exampleMixin from "../mixins/exampleMixin"
import Header from "../components/Header.vue"

  export default {
    mixins:[exampleMixin],
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
      
    },
   async mounted(){
      this.loadData();
    }
    
  }
</script>

<style lang="scss" scoped>

</style>