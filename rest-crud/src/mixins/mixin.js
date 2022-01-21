import axios from "axios"
export default {
    method: {
        async addResturant(){
        const result = await axios.post('http://localhost:3000/resturant',{
          name:this.resturant.name,
          address:this.resturant.address,
          contact:this.resturant.contact,
        });
        if(result.status==201)
      {
        this.$router.push({name:'Home'})
      }
        console.warn(result)
      },
     async editResturant(){
        console.log(this.resturant)
        const result = await axios.put("http://localhost:3000/resturant/"+this.$route.params.id,{
          name:this.resturant.name,
          address:this.resturant.address,
          contact:this.resturant.contact,
        });
        if(result.status==200)
      {
        this.$router.push({name:'Home'})
      }
      }
    },
    async mounted(){
      let user = localStorage.getItem('user-info');

      if(!user)
      {
        this.$router.push({name:'SignUp'})
      }
      console.log(this.$route.params)

      if(this.$route.params.id)
      {
         const result = await axios.get("http://localhost:3000/resturant/"+this.$route.params.id)
         this.resturant=result.data
      }
      
     
      // console.warn(this.$router)
      // const result = await axios.get("http://localhost:3000/resturant/"+this.$route.params.id)
    }
}