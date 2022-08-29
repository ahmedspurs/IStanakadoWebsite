<template>
  <div class="md:px-8 py-2 h-full relative">
    <div class="relative min-h-screen">
      <app-header v-if="show"></app-header>
      <router-view class="pt-4" />
      <footer-copy class="pt-2"></footer-copy>
    </div>
  </div>
</template>
<script>
import AppHeader from "./components/AppHeader.vue";
import FooterCopy from "./components/FooterCopy.vue";

export default {
  components: {
    AppHeader,
    FooterCopy,
  },
  data() {
    return {
      show: false,
    };
  },
  created() {
    this.$store.dispatch("fetchCategories");
    this.$store.dispatch("fetchProducts");
    this.$store.dispatch("fetchUsers");
    this.$store.dispatch("fetchDeliveries");
    this.$store.dispatch("fetchOrders");
    this.$store.dispatch("fetchAds");
    this.veirfy();
  },
  methods: {
    veirfy() {
      if (localStorage.getItem("gift_user_token")) {
        console.log("loggend in");
        this.show = true;
      } else if (localStorage.getItem("gift_user_token") == null) {
        this.$router.push("/LoginPage");
        this.show = false;
      }
    },
  },
  provide() {
    return {
      veirfy: this.veirfy,
    };
  },
};
</script>

<style></style>
