<template>
  <div>
    <Formresturant />
  </div>
</template>

<script>
import Formresturant from "./Formresturant.vue"
  export default {
    name: 'Addrest',
    components:{
      Formresturant
    },

    data () {

      return {
        
      }
      
    },
    
    methods:{
      
    },
    mounted(){
      // let user = localStorage.getItem('user-info');

      // if(!user)
      // {
      //   this.$router.push({name:'SignUp'})
      // }
    }
    
  }
</script>

<style lang="scss" scoped>

</style>