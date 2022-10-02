<template>
  <div class="w-full" v-show="show">
    <HomeDetails />

    <!-- ctaerory section -->
    
     <!-- marketing section-->
    <div class="pb-8 px-4" v-if="ads.length != 0">
      <maeketing-section />
    </div>
    <div class="p-4 border-b border-gray-300 ">
    </div>
    <div
      class="flex  items-center pb-8 px-4 mt-12 justify-center"
      v-if="allCategories.length != 0"
    >
      <span class="text-xl font text-gray-600 "> الاقسام </span>
    </div>
    <home-category v-if="allCategories.length != 0" />

   
  </div>
</template>

<script>
import HomeDetails from "@/components/HomePage/HomeDetails.vue";
import HomeCategory from "@/components/HomePage/HomeCategory.vue";
import MaeketingSection from "@/components/HomePage/MaeketingSection.vue";
import { mapGetters } from "vuex";
// @ is an alias to /src
export default {
  components: { HomeDetails, HomeCategory, MaeketingSection },
  data() {
    return {
      show: false,
    };
  },

  computed: {
    ...mapGetters(["allCategories", "allAds"]),
    ads() {
      return this.allAds.filter((ad) => ad.status == true);
    },
  },
  created() {
    // this.veirfy();
    this.$store.dispatch("fetchAds");

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
  },
  // inject: ["veirfy"],

  name: "HomeView",
};
</script>
