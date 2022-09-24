<template>
  <div class="p-4 h-screen" v-if="show">
    <div
      class="hideCart h-3/4 flex flex-col justify-center items-center"
      v-if="allCart.length == 0"
    >
      <p>عفوا السله فارغه , الرجاء اضافه منتجات اولا</p>
      <router-link to="/ProductsPage">
        <button class="bg-violet-600 py-2 px-4 text-white rounded">
          الذهاب الي المتجر
        </button>
      </router-link>
    </div>
    <div class="cartShow" v-if="!allCart.length == 0">
      <h2 class="text-center text-xl">سله التسوق</h2>
      <!-- component -->
      <div class="my-6">
        <div
          class="flex flex-col w-full p-8 text-gray-800 bg-white shadow-lg pin-r pin-y"
        >
          <div class="flex-1">
            <table
              class="w-full text-sm lg:text-base text-center"
              cellspacing="0"
            >
              <thead class="border-b border-gray-300 py-2">
                <tr class="h-12 uppercase">
                  <th class="hidden md:table-cell"></th>
                  <th class="">المنتج</th>
                  <th class="">
                    <span class="lg:hidden text-right" title="Quantity"
                      >الكميه</span
                    >
                    <span class="hidden lg:inline text-right">الكميه</span>
                  </th>
                  <th class="hidden md:table-cell">سعر المنتج</th>
                  <th class="">السعر الكلي</th>
                </tr>
              </thead>
              <tbody class="pt-2">
                <tr
                  class="py-2"
                  :key="product.id"
                  v-for="(product, index) in allCart"
                >
                  <td class="hidden text-center pb-4 md:table-cell">
                    <a href="#">
                      <img
                        :src="'http://localhost:5000/uploads/' + product.image"
                        class="w-20 rounded mx-auto mt-4"
                        alt="Thumbnail"
                      />
                    </a>
                  </td>
                  <td>
                    <a href="#">
                      <p class="mb-2 md:ml-4">{{ product.name }}</p>
                      <button
                        @click="removeFromCart(index)"
                        type="submit"
                        class="text-red-700 md:ml-4"
                      >
                        <small>حذف المنتج</small>
                      </button>
                    </a>
                  </td>
                  <td class="text-center">
                    <div
                      class="relative justify-center items-center flex flex-col w-full h-8"
                    >
                      <input
                        type="number"
                        min="1"
                        v-model="product.qty"
                        class="w-20 font-semibold text-center text-gray-700 outline-none focus:outline-none hover:text-black focus:text-black"
                      />
                    </div>
                  </td>
                  <td class="hidden md:table-cell">
                    <span class="text-sm font-medium">
                      {{ product.buyPrice }}
                    </span>
                  </td>
                  <td class="">
                    <span class="text-sm font-medium">
                      {{ product.buyPrice * product.qty }}
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
            <hr class="pb-6 mt-6" />
            <div class="my-4 mt-6 -mx-2 flex justify-center">
              <div class="lg:px-2 lg:w-1/2">
                <div class="p-4">
                  <h1 class="ml-2 text-xl">تفاصيل الطلب</h1>
                </div>
                <div class="p-4">
                  <div class="flex justify-between border-b">
                    <div
                      class="lg:px-4 lg:py-2 m-2 text-sm font-bold text-center text-gray-800"
                    >
                      سعر المنتجات بدون رسوم التوصيل
                    </div>
                    <div
                      class="lg:px-4 lg:py-2 m-2 text-xl font-bold text-center text-gray-900"
                    >
                      {{ totalPrice }} ج.س
                    </div>
                  </div>

                  <router-link to="/CheckoutPage" @click="updateCart()">
                    <button
                      class="flex justify-center p-3 mt-6 font-medium text-white bg-violet-600 rounded-xl shadow items-center hover:bg-violet-500 focus:shadow-outline focus:outline-none"
                    >
                      <span class="ml-2 mt-5px"> اتمام الطلب </span>
                    </button>
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
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
  },
  // inject: ["veirfy"],

  methods: {
    updateCart() {
      localStorage.setItem(
        "cart",
        JSON.stringify(this.$store.state.products.cart)
      );
    },
    /* Application Methods in case you want to make your custom buttons
		 rather than use <input type="number" />*/
    add(item) {
      item.qty++;
    },
    min(item) {
      if (item.qty == 1) {
        console.log("equal 1");
      } else {
        item.qty--;
      }
    },
    removeFromCart(index) {
      this.$store.state.products.cart.splice(index, 1);
      localStorage.setItem(
        "cart",
        JSON.stringify(this.$store.state.products.cart)
      );
    },
  },

  computed: mapGetters(["totalPrice", "allCart"]),
};
</script>

<style></style>
