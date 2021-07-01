<template>
<nav class="navbar is-primary" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
      <span class="navbar-item">
      <strong>MyCash</strong>
      </span>

    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-start">
        <router-link to="/">
            <a class="navbar-item">
                Lancamento
            </a>
        </router-link>
        
        <router-link to="/usuarios">
            <a class="navbar-item">
                Usuarios
            </a>
      </router-link>

      
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <router-link to="/login" class="button">
            Log In
          </router-link>
          <button class="button is-danger" @click="onLogout">
            Log Out
          </button>
        </div>
      </div>
    </div>
  </div>
</nav>
  
</template>

<script>
export default {
  methods:{
    onLogout(){
      localStorage.removeItem('mycash_token')
      this.$router.push('/login')
    }
    

  }
}
</script>

<style>


</style>