<template>
  <div class="subCat">
    <div class="text-center pt-8">
      <h2
        class="text-center mb-10 text-2xl font-bold"
        v-if="$route.params.type == 'formal'"
      >
        هدايا حسب النوع
      </h2>
      <h2
        class="text-center mb-10 text-2xl font-bold"
        v-if="$route.params.type == 'special'"
      >
        المناسبات
      </h2>
      <h2
        class="text-center mb-10 text-2xl font-bold"
        v-if="$route.params.type == 'to'"
      >
        هديه الي شخص
      </h2>
      <h2
        class="text-center mb-10 text-2xl font-bold"
        v-if="$route.params.type == 'beauty'"
      >
        العنايه بالبشرة
      </h2>
    </div>
    <div class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 px-4">
      <div
        class="max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700"
        :key="item"
        v-for="item in categories"
      >
        <router-link :to="'/productsPage/' + item.id">
          <img
            class="pb-2 rounded-t-lg h-72 w-full"
            :src="'https://admin.istanakado.com/uploads/' + item.image"
            alt="product image"
          />
          <div class="pb-5">
            <h5
              class="text-xl text-center font-semibold tracking-tight text-gray-900 dark:text-white mb-4"
            >
              {{ item.name }}
            </h5>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  created() {
    // this.veirfy();

    this.$store.dispatch("fetchCategories");
    this.categories = this.allCategories.filter(
      (word) => word.type == this.$route.params.type
    );
  },
  computed: mapGetters(["allCategories"]),
  // inject: ["veirfy"],
};
</script>

<style></style>
