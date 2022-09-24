<template>
  <div class="flex justify-center py-8">
    <div
      class="rounded h-full flex justify-betweent items-center md:w-3/4 border border-gray-300 rounded-xl p-4"
    >
      <div class="text w-full px-4 order-2 md:order-1 md">
        <h2 class="md:text-4xl text-xl font-semibold text-violet-600">
          {{ ads[0].label }}
        </h2>
        <p class="text-gray-500 py-2">
          {{ ads[0].discr }}
        </p>
        <a :href="ads[0].productLink" v-if="ads[0].type == 'external'">
          <button class="bg-violet-600 text-white p-4 rounded">
            {{ ads[0].content }}
          </button>
        </a>
        <router-link
          :to="'/ProductPage/' + ads[0].productId"
          v-if="ads[0].type == 'product'"
        >
          <button class="bg-violet-600 text-white p-4 rounded">
            {{ ads[0].content }}
          </button>
        </router-link>
      </div>
      <div class="img w-full order-1 md:order-2">
        <img
          class="w-full h-60 rounded"
          :src="'https://admin.istanakado.com/uploads/' + ads[0].image"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["allAds"]),
    ads() {
      return this.allAds.filter((ad) => ad.status == true);
    },
  },
};
</script>

<style></style>
