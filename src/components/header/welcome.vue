<template>
  <div class="navbar bg-black text-white">
  <div class="flex-1">
      <router-link :to="''" class="btn btn-ghost normal-case text-xl">Inicio</router-link>
  </div>
  <div class="flex-none">
    <ul class="menu menu-horizontal px-1">
      <li><router-link :to="'/perfil'">Usuario</router-link></li>
      <li><router-link :to="'/post'">Post</router-link></li>
      <li><router-link :to="'/login'">Login</router-link></li>
      <li><router-link :to="'/register'">Register</router-link></li>
    </ul>
  </div>
</div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>

</style>