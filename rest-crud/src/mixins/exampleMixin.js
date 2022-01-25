import axios from "axios"

export default {
    methods: {
        // home.vue 
        editResturanttable(itemid){
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
      },
        // home.vue end

        // form.vue
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
        },
    //  login.vue
     async logIn(){

         let result = await axios.get(
           `http://localhost:3000/user?email=${this.email}&password=${this.password}`
         )
         console.log(result);

         if(result.status==200 && result.data.length>0){
          alert("login done");
   
          localStorage.setItem("user-info",JSON.stringify(result.data[0]))
          this.$router.push({name:'Home'})
        }
        },
    //  signup.vue
     async signUp(){
        let result = await axios.post("http://localhost:3000/user",{
          name:this.name,
          email:this.email,
          password:this.password
        });
        
        console.warn("result");

        if(result.status==201){
          alert("signUp done go directly home");
   
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
  
    // form.vue end
}