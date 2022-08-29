<template>
  <div class="">
    <swiper :breakpoints="swiperOptions.breakpoints">
      <swiper-slide :key="item.id" v-for="item in allCategories">
        <div
          class="
            max-w-sm
            bg-white
            rounded-lg
            shadow-md
            dark:bg-gray-800 dark:border-gray-700
          "
        >
          <router-link :to="'/ProductsPage/' + item.id">
            <div class="flex justify-center image">
              <img
                class="pb-2 rounded-t-lg h-16 w-16"
                :src="'https://admin.istanakado.com/uploads/' + item.image"
                alt="product image"
              />
            </div>

            <div class="py-2">
              <h5
                class="
                  text-xl text-center
                  font-semibold
                  tracking-tight
                  text-gray-900
                  dark:text-white
                  mb-4
                "
              >
                {{ item.name }}
              </h5>
            </div>
          </router-link>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
import { mapGetters } from "vuex";

// Import Swiper styles
import "swiper/css";
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      swiperOptions: {
        breakpoints: {
          320: {
            slidesPerView: 2.3,
            spaceBetween: 10,
          },
          770: {
            slidesPerView: 6,
            spaceBetween: 10,
          },

          771: {
            slidesPerView: 6,
            spaceBetween: 10,
          },
        },
      },
    };
  },
  created() {
    this.$store.dispatch("fetchCategories");
  },
  computed: mapGetters(["allCategories"]),
};
</script>

<style>
</style>