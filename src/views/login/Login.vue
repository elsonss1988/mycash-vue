<template>
    <div class="hero-body">
    <div class="container">
      <div class="columns is-centered">
        <div class="column is-5-tablet is-4-desktop is-3-widescreen">
          <form @submit="onSubmit" class="box">
            <div class="field">
              <label for="" class="label">Email</label>
              <div class="control has-icons-left">
                <input type="email" v-model="email" placeholder="e.g. bobsmith@gmail.com" class="input" required>
                <span class="icon is-small is-left">
                  <i class="fa fa-envelope"></i>
                </span>
              </div>
            </div>
            <div class="field">
              <label for="" class="label">Password</label>
              <div class="control has-icons-left">
                <input type="password" v-model="senha" placeholder="*******" class="input" required>
                <span class="icon is-small is-left">
                  <i class="fa fa-lock"></i>
                </span>
              </div>
            </div>
            <div class="field">
              <label for="" class="checkbox">

              </label>
            </div>
            <div class="field">
              <button class="button is-success">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import createHttp from '@/services/axiosConfig'
export default {   

    data(){
        return{
            email:'',
            senha:''
        }
    },
    methods:{
        async onSubmit(e){
            e.preventDefault();
            const bodyData = new FormData()
            bodyData.append('grant_type','password')
            bodyData.append('username',this.email)
            bodyData.append('password',this.senha)            
            console.log(this.email,this.senha)

            const http = createHttp()
            const res  = await http.post('/oauth/token',bodyData,{
                auth:{
                    username:'mycash-web',
                    password:'SENHAFORTE'

                }
            })
            console.log(res)

            if(res.status === 200){
              localStorage.setItem("mycash",res.data.access_token)
              this.$router.push('/')
            }
        }
    }
}
</script>

<style>

</style>