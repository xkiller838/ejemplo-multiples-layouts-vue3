<template>
   <div class="flex items-center w-full">
    <div class="w-full bg-white rounded shadow-2xl p-2 m-4 md:max-w-md md:mx-auto">
      <router-link :to="'/'">
      <span class="w-full text-xl flex justify-end items-center pr-2">
        <svg  class="fill-current text-gray-500 hover:text-fuchsia-600 w-6 h-6 cursor-pointer"  xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
          <path d="M18.672 11h-1.672v6c0 0.445-0.194 1-1 1h-4v-6h-4v6h-4c-0.806 0-1-0.555-1-1v-6h-1.672c-0.598 0-0.47-0.324-0.060-0.748l8.024-8.032c0.195-0.202 0.451-0.302 0.708-0.312 0.257 0.010 0.513 0.109 0.708 0.312l8.023 8.031c0.411 0.425 0.539 0.749-0.059 0.749z"></path>
        </svg>
      </span>  
      </router-link>
      <span class="block w-full text-xl uppercase text-center mb-4">Registrate</span>
      <div class="px-4 pt-6 pb-8 mb-4 bg-white rounded">
        <div class="mb-4 md:flex md:justify-between">
          <div class="mb-4 md:mr-2 md:mb-0">
            <label class="block mb-2 text-sm font-bold text-gray-700" for="firstName">Nombres</label>
            <input class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow-md appearance-none focus:outline-none focus:shadow-outline" id="firstName"  type="text" placeholder="Nombres" autocomplete="off" />
          </div>
          <div class="md:ml-2">
            <label class="block mb-2 text-sm font-bold text-gray-700" for="lastName">Apellidos</label>
            <input class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow-md appearance-none focus:outline-none focus:shadow-outline" id="lastName" type="text" placeholder="Apellidos" autocomplete="off"/>
          </div>
        </div>
        <div class="mb-4">
          <label class="block mb-2 text-sm font-bold text-gray-700" for="email">Email</label>
          <input class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow-md appearance-none focus:outline-none focus:shadow-outline" id="email"  type="email" placeholder="Email" autocomplete="off"/>
        </div>
        <div class="mb-4 md:flex md:justify-between">
          <div class="mb-4 md:mr-2 md:mb-0">
            <label class="block mb-2 text-sm font-bold text-gray-700" for="password">Password</label>
            <input class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow-md appearance-none focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
          </div>
          <div class="md:ml-2">
            <label class="block mb-2 text-sm font-bold text-gray-700" for="c_password">Confirmar Password</label>
            <input class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow-md appearance-none focus:outline-none focus:shadow-outline " id="c_password" type="password" placeholder="******************" />
          </div>
        </div>
        <div class="mb-6 text-center">
          <button class="btn-block px-3 py-2 shadow-md shadow-slate-600/70 text-white bg-purple-600 rounded-md" type="button">
            Registrate
          </button>
        </div>
        <div class="mt-5">
        
        <label class="inline-flex items-center mb-3">
            <input type="checkbox" class="rounded checkbox-primary border-gray-300 text-purple-600 focus:border-purple-300 focus:ring focus:ring-offset-0 focus:ring-purple-200/50" checked />
              <span class="ml-2 text-sm">Estoy de acuerdo <a href="#" class="font-semibold text-purple-600 hover:underline">terminos y condiciones.</a></span>
          </label>
        </div>
        <hr class="mb-4 border-t"/>
        <div class="flex justify-between items-center">
          <p class="inline-block text-sm text-purple-600 align-baseline hover:text-blue-800">¿Ya tienes una cuenta? </p>
          <button class="btn-sm bg-white text-purple-600 border rounded-xl hover:scale-110 duration-300 text-sm">Login</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>

</style>