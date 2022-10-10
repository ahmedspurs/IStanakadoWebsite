<template>
  <div class="p-4" v-if="show">
    <single-product />

    <hr />
    <h2 class="text-2xl py-2">منتجات ذات صله</h2>

    <best-products />
  </div>
</template>

<script>
import SingleProduct from "@/components/ProductPage/SingleProduct.vue";
import BestProducts from "@/components/HomePage/BestProducts.vue";
import { mapGetters } from "vuex";

export default {
  components: { SingleProduct, BestProducts },
  data() {
    return {
      show: false,
    };
  },
  created() {
    // this.veirfy();

    let loader = this.$loading.show({
      // Optional parameters
      container: this.fullPage ? null : this.$refs.formContainer,
      canCancel: false,
      color: "#836aee",
      blur: "2px",
    });

    setTimeout(() => {
      loader.hide();

      this.show = true;
    }, 2000);
    this.$store.dispatch("fetchCategories");
    this.$store.dispatch("fetchProducts");
  },
  computed: mapGetters(["allProducts"]),
  // inject: ["veirfy"],
};
</script>

<style></style>
