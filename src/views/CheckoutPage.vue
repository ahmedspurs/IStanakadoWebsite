<template>
  <div class="w-full" v-if="show">
    <h2 class="text-center text-2xl font-bold py-4">اتمام الطلب</h2>
    <ul class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 p-2 gap-4">
     

      <router-link to="/BankakCheckout">
        <li class="relative my-2">
          <input class="sr-only peer" type="radio" value="bankak" id="bankak" />
          <label
            class="flex p-5 bg-white text-black border border-gray-300 rounded-lg cursor-pointer focus:outline-none hover:bg-gray-50 peer-checked:ring-green-500 peer-checked:ring-2 peer-checked:border-transparent"
            for="bankak"
            >الدفع عبر بنكك</label
          >
        </li>
      </router-link>

       <router-link to="/CodCheckout">
        <li class="relative my-2">
          <input class="sr-only peer" type="radio" value="cod" id="cod" />
          <label
            class="flex p-5 bg-white text-black border border-gray-300 rounded-lg cursor-pointer focus:outline-none hover:bg-gray-50 peer-checked:ring-green-500 peer-checked:ring-2 peer-checked:border-transparent"
            for="cod"
            >الدفع عند الاستلام</label
          >
        </li>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  components: {},
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
    }, 1000);
  },
  inject: ["veirfy"],
};
</script>

<style></style>
