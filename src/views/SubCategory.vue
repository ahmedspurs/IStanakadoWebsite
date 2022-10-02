<template>
  <div class="subCat">
    <div class="text-center pt-8">
      <h2
        class="text-center mb-10 text-xl  text-gray-600"
        v-if="$route.params.type == 'formal'"
      >
        هدايا حسب النوع
      </h2>
      <h2
        class="text-center mb-10 text-xl  text-gray-600"
        v-if="$route.params.type == 'special'"
      >
        المناسبات
      </h2>
      <h2
        class="text-center mb-10 text-xl  text-gray-600"
        v-if="$route.params.type == 'to'"
      >
        هديه الي شخص
      </h2>
      <h2
        class="text-center mb-10 text-xl  text-gray-600"
        v-if="$route.params.type == 'beauty'"
      >
        العنايه بالبشرة
      </h2>
    </div>
    <div class="w-full px-4 ">
      <div class="flex justify-center flex-col items-center" :key="item" v-for="(item,  index) in categories">
        <router-link
          :to="'/productsPage/' + item.id"
          class="flex items-center px-12 h-[122px]  rounded-xl  my-2 w-full md:w-1/2"
          :class="colors[index]"
        >
          <img
            class=" rounded-t-lg h-16 w-16"
            :src="'https://admin.istanakado.com/uploads/' + item.image"
            alt="product image"
          />

          <h2
            class="
              text-white text-2xl px-8
            "
          >
            {{ item.name }}
          </h2>
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
  data() {
    return {
      colors: [
        "bg-pink-500",
        "bg-red-500",
        "bg-violet-500",
        "bg-green-500",
        "bg-pink-500",
        "bg-red-500",
        "bg-violet-500",
        "bg-green-500",
        "bg-pink-500",
        "bg-red-500",
        "bg-violet-500",
        "bg-green-500",
        "bg-pink-500",
        "bg-red-500",
        "bg-violet-500",
        "bg-green-500",
        "bg-pink-500",
        "bg-red-500",
        "bg-violet-500",
        "bg-green-500",
        "bg-pink-500",
        "bg-red-500",
        "bg-violet-500",
        "bg-green-500",
        "bg-pink-500",
        "bg-red-500",
        "bg-violet-500",
        "bg-green-500",
        "bg-pink-500",
        "bg-red-500",
        "bg-violet-500",
        "bg-green-500",
        "bg-pink-500",
        "bg-red-500",
        "bg-violet-500",
        "bg-green-500",
        "bg-pink-500",
        "bg-red-500",
        "bg-violet-500",
        "bg-green-500",
        "bg-pink-500",
        "bg-red-500",
        "bg-violet-500",
        "bg-green-500",
        "bg-pink-500",
        "bg-red-500",
        "bg-violet-500",
        "bg-green-500",
        "bg-pink-500",
        "bg-red-500",
        "bg-violet-500",
        "bg-green-500",
        "bg-pink-500",
        "bg-red-500",
        "bg-violet-500",
        "bg-green-500",
        "bg-pink-500",
        "bg-red-500",
        "bg-violet-500",
        "bg-green-500",
        "bg-pink-500",
        "bg-red-500",
        "bg-violet-500",
        "bg-green-500",
        "bg-pink-500",
        "bg-red-500",
        "bg-violet-500",
        "bg-green-500",
        "bg-pink-500",
        "bg-red-500",
        "bg-violet-500",
        "bg-green-500",
        "bg-pink-500",
        "bg-red-500",
        "bg-violet-500",
        "bg-green-500",
        "bg-pink-500",
        "bg-red-500",
        "bg-violet-500",
        "bg-green-500",
        "bg-pink-500",
        "bg-red-500",
        "bg-violet-500",
        "bg-green-500",
        "bg-pink-500",
        "bg-red-500",
        "bg-violet-500",
        "bg-green-500",
        "bg-pink-500",
        "bg-red-500",
        "bg-violet-500",
        "bg-green-500",
        "bg-pink-500",
        "bg-red-500",
        "bg-violet-500",
        "bg-green-500",
        "bg-pink-500",
        "bg-red-500",
        "bg-violet-500",
        "bg-green-500",
        "bg-pink-500",
        "bg-red-500",
        "bg-violet-500",
        "bg-green-500",
        "bg-pink-500",
        "bg-red-500",
        "bg-violet-500",
        "bg-green-500",
        "bg-pink-500",
        "bg-red-500",
        "bg-violet-500",
        "bg-green-500",
        "bg-pink-500",
        "bg-red-500",
        "bg-violet-500",
        "bg-green-500",
        "bg-pink-500",
        "bg-red-500",
        "bg-violet-500",
        "bg-green-500",
        "bg-pink-500",
        "bg-red-500",
        "bg-violet-500",
        "bg-green-500",
        "bg-pink-500",
        "bg-red-500",
        "bg-violet-500",
        "bg-green-500",
        "bg-pink-500",
        "bg-red-500",
        "bg-violet-500",

      ],
    };
  },
  computed: mapGetters(["allCategories"]),
  // inject: ["veirfy"],
};
</script>

<style></style>
