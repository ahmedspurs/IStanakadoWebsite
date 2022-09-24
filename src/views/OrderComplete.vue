<template>
  <div class="p-4" v-if="show">
    <!-- toast -->
    <div
      id="toast-success"
      class="
        flex
        items-center
        justify-between
        w-full
        p-4
        mb-4
        text-gray-500
        bg-white
        rounded-lg
        shadow
        dark:text-gray-400 dark:bg-gray-800
      "
      role="alert"
    >
      <div class="success flex items-center">
        <div
          class="
            inline-flex
            items-center
            justify-center
            flex-shrink-0
            text-green-500
            bg-green-100
            rounded-lg
            dark:bg-green-800 dark:text-green-200
          "
        >
          <svg
            class="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </div>
        <div class="mr-2 text-sm font-normal">تم استلام طلبك بنجاح.</div>
      </div>

      <button
        type="button"
        class="
          -mx-1.5
          -my-1.5
          bg-white
          text-gray-400
          hover:text-gray-900
          rounded-lg
          focus:ring-2 focus:ring-gray-300
          p-1.5
          hover:bg-gray-100
          inline-flex
          h-8
          w-8
          dark:text-gray-500
          dark:hover:text-white
          dark:bg-gray-800
          dark:hover:bg-gray-700
        "
        data-dismiss-target="#toast-success"
        aria-label="Close"
      >
       
      </button>
    </div>

    <h2 class="text-center py-2">تفاصيل الطلب</h2>
    <oreder-details />
  </div>
</template>

<script>
import OrederDetails from "@/components/CheckoutPage/OrederDetails.vue";
export default {
  components: { OrederDetails },
  data() {
    return {
      show: false,
    };
  },
  created() {
    this.veirfy();
    this.$store.state.products.cart = [];

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