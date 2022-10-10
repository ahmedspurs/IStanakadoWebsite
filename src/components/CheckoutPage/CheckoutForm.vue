<template>
  <div class="md:flex justify-between">
    <form class="w-full p-4" @submit.prevent="checkout()">
      <!-- {{user}} -->
      <div class="mb-6">
        <label
          for="email"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >رقم الهاتف
        </label>
        <input
          v-model="phone"
          type="tel"
          id="email"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="name@flowbite.com"
          required
        />
      </div>

      <div class="mb-6">
        <label
          for="countries"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
          >المدينه</label
        >
        <select
          id="countries"
          class="px-8 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option>الخرطوم</option>
          <option>بحري</option>
          <option>امدرمان</option>
        </select>
      </div>

      <div class="mb-6">
        <label
          for="countries"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
          >المنطقه</label
        >
        <select
          id="countries"
          class="px-8 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option>جبرة</option>
          <option>الطائف</option>
          <option>المعمورة</option>
        </select>
      </div>

      <div class="mb-6">
        <label
          for="message"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
          >الوصف كاملا
        </label>
        <textarea
          v-model="addrDetails"
          id="message"
          rows="4"
          class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Leave a comment..."
        ></textarea>
      </div>

      <button
        type="submit"
        class="text-white bg-violet-600 hover:bg-violet-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
      >
        اتمام الطلب
      </button>
    </form>
    <div class="payments w-full">
      <h2 class="text-center">ملخص الطلبيه</h2>
      <payments-card />
      <br />
      <br />

      <h2 class="text-center">طريقه الدفع</h2>
      <payment-methos />
      <br /><br />
    </div>
  </div>
</template>

<script>
import PaymentMethos from "./PaymentMethos.vue";
import PaymentsCard from "./PaymentsCard.vue";
import { mapGetters } from "vuex";
import axios from "axios";
export default {
  components: { PaymentsCard, PaymentMethos },
  data() {
    return {
      payment: "",
      city: "",
      phone: "",
      address: "",
      addrDetails: "",
      paymentNumber: "",
      cartId: [],

      totalCart: 0,
      tax: "",
    };
  },
  computed: {
    ...mapGetters(["user", "allDeliveries"]),
    filteredAddress() {
      return this.allDeliveries.filter((item) => {
        return item.city.includes(this.city);
      });
    },
  },
  created() {
    this.$store.state.products.cart.forEach((el) => {
      let item = { productId: el.id, qty: el.qty };
      this.cartId.push(item);
      let sum = el.buyPrice * el.qty;
      this.totalCart += sum;
    });
    this.totalCart += this.tax;
    this.$store.dispatch("getUser");
  },
  inject: ["veirfy", "loading"],
  methods: {
    async checkout() {
      const checkoutCart = {
        userId: this.user.id,
        cart: this.cartId,
        payment: "false",
        city: "test",
        phone: this.phone,
        address: "test",
        addrDetails: "test",
        paymentNumber: this.paymentNumber,
        totalPrice: this.totalCart,
      };
      if (
        // this.payment == "" ||
        // this.city == "" ||
        this.phone == "" ||
        // this.address == "" ||
        this.addresDetails == ""
      ) {
        console.log("error");
      } else {
        if (this.payment == "bankak") {
          if (this.paymentNumber == "") {
            this.failed();
          } else {
            this.$router.push("/tabs/OrderDetails");
            this.$store.state.products.cart = [];
          }
        } else {
          try {
            const res = await axios.post(
              "http://al-quran-mp3.com/app/api/v1/orders",
              checkoutCart
            );
            if (res.data.success) {
              this.$store.state.checkoutComplete.cart =
                this.$store.state.products.cart;
              this.$store.state.checkoutComplete.details = checkoutCart;
              this.$router.push("/tabs/OrderDetails");
              this.$store.state.products.cart = [];
            }
          } catch (err) {
            console.log(err);
          }
        }
      }
    },
  },
};
</script>

<style></style>
