<template>
  <div class="p-4">
    <swiper :breakpoints="swiperOptions.breakpoints">
      <swiper-slide :key="item" v-for="item in filtered">
        <div
          class="max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 py-2"
        >
          <router-link :to="'/ProductPage/' + item.id" @click="reload(item.id)">
            <img
              class="pb-2 rounded-t-lg w-full h-56"
              :src="'https://admin.istanakado.com/uploads/' + item.image"
              alt="product image"
            />
            <div class="px-5 pb-5">
              <a href="#">
                <h5
                  class="pt-2 tracking-tight text-gray-900 dark:text-white mb-1"
                >
                  {{ item.name }}
                </h5>
              </a>

              <div class="flex">
                <span
                  class="text-xl text-gray-900 font-semibold dark:text-white"
                  >{{
                    (parseFloat(item.buyPrice) + parseFloat(item.collectionPrice)).toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                  }}</span
                >
                <span class="text-sm mx-1 mt-2"> ج.س </span>
              </div>
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
  computed: mapGetters(["allProducts"]),

  created() {
    this.product = this.allProducts.filter(
      (word) => word.id == this.$route.params.id
    );
    this.filtered = this.allProducts.filter(
      (word) => word.category == this.product[0].category
    );
    console.log(this.filtered);
    console.log(this.product);
  },
  data() {
    return {
      swiperOptions: {
        breakpoints: {
          320: {
            slidesPerView: 1.5,
            spaceBetween: 10,
          },
          770: {
            slidesPerView: 2.5,
            spaceBetween: 10,
          },

          771: {
            slidesPerView: 4.5,
            spaceBetween: 10,
          },
        },
      },
    };
  },
  methods:{
    async reload(id){
        await this.$router.push(`/ProductPage/${id}`)
        location.reload()
      }
  }
};
</script>

<style></style>
