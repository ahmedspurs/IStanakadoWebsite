<template>
  <div>
    <div class="md:flex justify-around items-center pb-16">
      <div class="overflow-hidden block md:hidden">
        <img
          :src="'https://admin.istanakado.com/uploads/' + product[0].image"
          class="p-4 img overflow-hidden h-80 w-full"
        />
      </div>
      <div class="space-y-4 p-4 w-full">
        <h2 class="tracking-wider  text-2xl font-semibold">
          {{ product[0].name }}
        </h2>
        <h2 class="text-gray-600">هدايا</h2>
        <p class="text-gray-800 md:text-xl py-4">
          {{ product[0].discr }}
        </p>
        <h2 class="text-xl font-semibold">
          {{
            parseFloat(product[0].buyPrice) +
            parseFloat(product[0].collectionPrice)
          }}
          <span class="text-sm mt-2">
            ج.س
          </span>
        </h2>
        <div class="flex justify-between items-center w-full space-x-4">
          <div class="cart">
            <button
              class="bg-violet-600 text-white px-4 py-2"
              @click="addToCart(product[0])"
            >
              اضف الي السله
            </button>
          </div>
        </div>
      </div>
      <div class="overflow-hidden md:block hidden w-full">
        <img
          :src="'https://admin.istanakado.com/uploads/' + product[0].image"
          class="p-4 img overflow-hidden h-80 w-full"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      product: [],
      cart: [],
    };
  },
  computed: mapGetters(["allProducts"]),

  created() {
    const key = this.$route.params.id;
    this.$store.dispatch("fetchCategories");
    this.$store.dispatch("fetchProducts");
    this.product = this.allProducts.filter((word) => word.id == key);
    this.filtered = this.allProducts.filter(
      (word) => word.category == this.product[0].category
    );
    console.log(this.filtered);
    console.log(this.product);
  },

  methods: {
    addToCart(product) {
      this.cart = {
        id: product.id,
        name: product.name,
        buyPrice:
          parseFloat(product.buyPrice) + parseFloat(product.collectionPrice),
        image: product.image,
        qty: 1,
      };
      this.$store.dispatch("addToCart", this.cart);

      this.$swal.fire({
        position: "top",
        icon: "success",
        title: "تم الاضافة في السلة",
        showConfirmButton: false,
        timer: 2000,
      });
      console.log(this.$store.state.products.cart);
    },
  },
};
</script>

<style></style>
