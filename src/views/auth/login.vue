<template>
  <div class="flex items-center h-screen w-full">
    <div
      class="w-full bg-white rounded shadow-2xl p-8 m-4 md:max-w-sm md:mx-auto"
    >
      <router-link :to="'/'">
        <span class="w-full text-xl flex justify-end items-center">
          <svg
            class="fill-current text-gray-500 hover:text-fuchsia-600 w-6 h-6 cursor-pointer"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
          >
            <path
              d="M18.672 11h-1.672v6c0 0.445-0.194 1-1 1h-4v-6h-4v6h-4c-0.806 0-1-0.555-1-1v-6h-1.672c-0.598 0-0.47-0.324-0.060-0.748l8.024-8.032c0.195-0.202 0.451-0.302 0.708-0.312 0.257 0.010 0.513 0.109 0.708 0.312l8.023 8.031c0.411 0.425 0.539 0.749-0.059 0.749z"
            ></path>
          </svg>
        </span>
      </router-link>
      <span class="block w-full text-xl text-center">Ingresa</span>
      <form class="mb-4" action="/" method="post">
        <div class="mb-4 md:w-full">
          <label for="email" class="block text-xs mb-1">Email</label>
          <div class="flex items-center bg-white rounded shadow-md mb-4">
            <span class="px-3">
              <svg
                class="fill-current text-gray-500 w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path
                  d="M18 2a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4c0-1.1.9-2 2-2h16zm-4.37 9.1L20 16v-2l-5.12-3.9L20 6V4l-10 8L0 4v2l5.12 4.1L0 14v2l6.37-4.9L10 14l3.63-2.9z"
                />
              </svg>
            </span>
            <input
              class="w-full h-12 focus:outline-none"
              type="email"
              name="email"
              placeholder="Email"
              autocomplete="off"
            />
          </div>
        </div>
        <div class="mb-6 md:w-full">
          <label for="password" class="block text-xs mb-1">Password</label>
          <div class="flex items-center bg-white rounded shadow-md mb-4">
            <span class="px-3">
              <svg
                class="fill-current text-gray-500 w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path
                  d="M4 8V6a6 6 0 1 1 12 0h-3v2h4a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z"
                />
              </svg>
            </span>
            <input
              class="w-full h-12 focus:outline-none"
              type="password"
              name="password"
              placeholder="Password"
              autocomplete="off"
            />
          </div>
        </div>
        <div class="mb-4 w-full flex justify-center items-center mt-5">
          <button
            type="button"
            class="btn-block px-3 py-2 shadow-md shadow-slate-600/70 text-white bg-purple-600 rounded-md"
          >
            Login
          </button>
        </div>
        <div class="mt-5">
          <label class="inline-flex items-center">
            <input
              type="checkbox"
              class="rounded checkbox-primary border-gray-300 text-purple-600 focus:border-purple-300 focus:ring focus:ring-offset-0 focus:ring-purple-200/50"
              checked
            />
            <span class="ml-2 text-sm"
              >Estoy de acuerdo
              <a href="#" class="font-semibold text-purple-600 hover:underline"
                >terminos y condiciones.</a
              ></span
            >
          </label>
        </div>
      </form>
      <hr class="mb-4 border-t" />
      <div class="mb-4 w-full flex justify-between items-center mt-5">
        <button class="text-purple-700 text-center text-sm">
          Olvide mi password?
        </button>
        <button
          class="btn-sm bg-white text-purple-600 border rounded-xl hover:scale-110 duration-300 text-sm"
          @click="register()"
        >
          Registrate
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
