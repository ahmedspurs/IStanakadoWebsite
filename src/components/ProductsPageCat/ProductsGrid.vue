<template>
  <div class="product-grid">
    <!-- start form search -->
    <h2 class="py-2 text-center">
      {{ header.name }}
    </h2>
    <div class="flex justify-center items-center w-full py-2 px-4">
      <label for="simple-search" class="sr-only">بحث عن منتج</label>
      <div class="relative w-full md:w-1/2">
        <div
          class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"
        >
          <svg
            class="w-5 h-5 text-gray-500 dark:text-gray-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </div>
        <input
          v-model="search"
          type="text"
          id="simple-search"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="ابحث عن منتج"
          required=""
        />
      </div>
    </div>
    <div
      class="h-1/2 flex items-center justify-center"
      v-if="filtered.length == 0"
    >
      <p class="text-center">عفوا لا توجد منتجات</p>
    </div>
    <div
      class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 p-4"
      v-if="filtered.length != 0"
    >
      <div
        :key="item.id"
        v-for="item in filtered"
        class="max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700"
      >
        <router-link :to="'/ProductPage/' + item.id">
          <img
            class="pb-2 rounded-t-lg w-full h-56"
            :src="'https://admin.istanakado.com/uploads/' + item.image"
            alt="product image"
          />
          <div class="px-5 pb-5">
            <a href="#">
              <h5
                class="pt-2 text-lg font-semibold tracking-tight text-gray-900 dark:text-white mb-4"
              >
                {{ item.name }}
              </h5>
            </a>

            <div class="flex justify-between items-center">
              <span
                class="text-xl text-violet-600 font-bold text-gray-900 dark:text-white"
                >{{
                  parseFloat(item.buyPrice) + parseFloat(item.collectionPrice)
                }}
                جس
              </span>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      search: "",
      products: [],
      header: [],
    };
  },
  created() {
    this.header = this.allCategories.filter(
      (word) => word.id == this.$route.params.id
    );
    this.products = this.allProducts.filter(
      (word) => word.categoryId == this.$route.params.id
    );
  },
  computed: {
    ...mapGetters(["allProducts", "allCategories"]),
    filtered() {
      return this.products.filter((item) => {
        return item.name.includes(this.search);
      });
    },
  },
};
</script>

<style></style>
