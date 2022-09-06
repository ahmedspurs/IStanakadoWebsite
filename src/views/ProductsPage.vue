<template>
  <div class="w-full p-4" v-if="show">
    <!-- end form search -->

    <products-grid />
  </div>
</template>

<script>
import ProductsGrid from "@/components/ProductsPage/ProductsGrid.vue";
import { mapGetters } from "vuex";
export default {
  components: { ProductsGrid },
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
