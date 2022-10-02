<template>
  <!-- component -->
  <nav class="bg-white md:border-b border-gray-300">
    <div
      class="
        container
        mx-auto
        px-6
        py-3
        md:flex md:justify-between md:items-center
      "
    >
      <div class="flex justify-between items-center">
        <!-- Mobile menu button -->
        <div class="flex md:hidden" @click="hidden = !hidden">
          <button
            type="button"
            class="
              text-gray-500
              hover:text-gray-600
              focus:outline-none focus:text-gray-600
            "
            aria-label="toggle menu"
          >
            <svg viewBox="0 0 24 24" class="h-6 w-6 fill-current">
              <path
                fill-rule="evenodd"
                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
              ></path>
            </svg>
          </button>
        </div>
      

        <div>
          <router-link
            class="
              text-violet-700 text-xl
              font-bold
              md:text-2xl
              hover:text-gray-700
            "
            to="/"
            >Istana Kado</router-link
          >
        </div>

          <div class="flex justify-center md:hidden">
          <router-link
            class="relative text-gray-700 hover:text-gray-600"
            to="/CartPage"
          >
            <svg
              class="h-6 w-6"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 3H5L5.4 5M7 13H17L21 5H5.4M7 13L5.4 5M7 13L4.70711 15.2929C4.07714 15.9229 4.52331 17 5.41421 17H17M17 17C15.8954 17 15 17.8954 15 19C15 20.1046 15.8954 21 17 21C18.1046 21 19 20.1046 19 19C19 17.8954 18.1046 17 17 17ZM9 19C9 20.1046 8.10457 21 7 21C5.89543 21 5 20.1046 5 19C5 17.8954 5.89543 17 7 17C8.10457 17 9 17.8954 9 19Z"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <span
              v-if="$store.state.products.cart.length > 0"
              class="
                absolute
                top-0
                left-0
                rounded-full
                bg-indigo-500
                text-white
                p-1
                text-xs
              "
            ></span>
          </router-link>
          <!-- <router-link
            class="relative text-gray-700 hover:text-gray-600"
            to="/ProfilePage"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
          </router-link> -->
        </div>
      </div>

      <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
      <div class="md:flex items-center" :class="{ hidden: hidden }">
        <div class="flex flex-col md:flex-row md:mx-6 py-2">
          <router-link
            class="
              my-1
              text-sm text-gray-700
              font-medium
              hover:text-violet-500
              md:mx-4 md:my-0
              md:border-none
              border-b boder-gray-300
              p-4
              md:p-0
            "
            to="/"
            @click="hidden = !hidden"
            >الرئيسيه</router-link
          >
          <router-link
            class="
              my-1
              text-sm text-gray-700
              font-medium
              hover:text-violet-500
              md:mx-4 md:my-0
              md:border-none
              border-b boder-gray-300
              p-4
              md:p-0
            "
            to="/CategoryPage"
            @click="hidden = !hidden"
            >الاقسام</router-link
          >
          <router-link
            class="
              my-1
              text-sm text-gray-700
              font-medium
              hover:text-violet-500
              md:mx-4 md:my-0
              md:border-none
              border-b boder-gray-300
              p-4
              md:p-0
            "
            to="/ProductsPage"
            @click="hidden = !hidden"
            >المتجر</router-link
          >
          <router-link
            class="
              my-1
              text-sm text-gray-700
              font-medium
              hover:text-violet-500
              md:mx-4 md:my-0
              md:border-none
              border-b boder-gray-300
              p-4
              md:p-0
            "
            to="/ContactPage"
            @click="hidden = !hidden"
            >تواصل معنا</router-link
          >
           <router-link
            class="
                 my-1
              text-sm text-gray-700
              font-medium
              hover:text-violet-500
              md:mx-4 md:my-0
              md:border-none
              border-b boder-gray-300
              p-4
              md:p-0
            "
            to="/ProfilePage"
            @click="hidden = !hidden"
            > الملف الشخصي</router-link
          >
        </div>
      </div>

      <div class="md:flex hidden justify-center">
        <router-link
          class="relative text-gray-700 hover:text-gray-600"
          to="/CartPage"
        >
          <svg
            class="h-6 w-6 "
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 3H5L5.4 5M7 13H17L21 5H5.4M7 13L5.4 5M7 13L4.70711 15.2929C4.07714 15.9229 4.52331 17 5.41421 17H17M17 17C15.8954 17 15 17.8954 15 19C15 20.1046 15.8954 21 17 21C18.1046 21 19 20.1046 19 19C19 17.8954 18.1046 17 17 17ZM9 19C9 20.1046 8.10457 21 7 21C5.89543 21 5 20.1046 5 19C5 17.8954 5.89543 17 7 17C8.10457 17 9 17.8954 9 19Z"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <span
            v-if="$store.state.products.cart.length > 0"
            class="
              absolute
              top-0
              left-0
              rounded-full
              bg-indigo-500
              text-white
              p-1
              text-xs
            "
          ></span>
        </router-link>
     
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "AppHeader",
  data() {
    return {
      hidden: true,
    };
  },
};
</script>

<style></style>
