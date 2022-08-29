<template>
  <div class="w-full mt-6" v-if="show">
    <h2 class="text-center text-2xl font-bold">الاقسام</h2>
    <category-grid />
  </div>
</template>

<script>
import CategoryGrid from "@/components/CategoryPage/CategoryGrid.vue";
export default {
  components: { CategoryGrid },
  data() {
    return {
      show: false,
    };
  },
  created() {
    this.veirfy();
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
  inject: ["veirfy"],
};
</script>

<style>
</style>