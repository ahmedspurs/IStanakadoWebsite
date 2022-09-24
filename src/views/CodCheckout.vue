<template>
  <!--
      this page  for cash oon dileverry checkout
      there is one main method
      checkout is simple method that send data from inputs to cod api

      i fetch users and dilevery data becuase i need to sent it to cod api
    
     -->

  <div class="checkout p-4" v-if="show">
    <form class="w-full">
      <!-- phone nunber input -->
      <div class="floating-input relative">
        <input
          type="number"
          id="phone"
          class="
            border border-gray-200
            focus:outline-none
            rounded-md
            focus:border-gray-500 focus:shadow-sm
            w-full
            p-3
            h-16
          "
          placeholder=" "
          autocomplete="off"
          v-model="phone"
        />
        <label
          for="phone"
          class="
            absolute
            top-0
            right-0
            px-3
            py-5
            h-full
            pointer-events-none
            transform
            origin-left
            transition-all
            duration-100
            ease-in-out
          "
          >رقم هاتف المستلم</label
        >
      </div>

      <!-- 
                   city  input : 
                   i used cutom design to set value of city
                   notice : 
                   cities is static values
                
                 -->
     <div class="city py-2">
            <div
              @click="showCity = !showCity"
              class="
                delevery
                flex
                items-center
                justify-between
                border
                p-4
                rounded-xl
                border-gray-200
              "
            >
              <span> توصيل الي مدينه</span>
              <!-- up svg -->
              <span v-if="city == 'khartoum'">الخرطوم</span>
              <span v-if="city == 'bahri'">بحري</span>
              <span v-if="city == 'omdurman'">امدرمان</span>
              <svg
                v-if="!showCity"
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M5 15l7-7 7 7"
                />
              </svg>
              <!-- down svg -->
              <svg
                v-if="showCity"
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
            <div v-show="!showCity" class="items">
              <li class="relative my-2">
                <input
                  @click="showCity = !showCity"
                  class="sr-only peer"
                  type="radio"
                  name="addr"
                  value="khartoum"
                  v-model="city"
                  id="khartoum"
                />
                <label
                  style="font-size: 12px"
                  class="
                    flex
                    p-1
                    text-sm
                    bg-white
                    cursor-pointer
                    focus:outline-none
                    hover:bg-gray-50
                    peer-checked:ring-green-500
                    peer-checked:ring-2
                    peer-checked:border-transparent
                  "
                  for="khartoum"
                  >الخرطوم</label
                >
              </li>

              <li class="relative my-2">
                <input
                  @click="showCity = !showCity"
                  class="sr-only peer"
                  type="radio"
                  value="bahri"
                  name="addr"
                  v-model="city"
                  id="bahri"
                />
                <label
                  style="font-size: 12px"
                  class="
                    flex
                    p-1
                    text-sm
                    bg-white
                    cursor-pointer
                    focus:outline-none
                    hover:bg-gray-50
                    peer-checked:ring-green-500
                    peer-checked:ring-2
                    peer-checked:border-transparent
                  "
                  for="bahri"
                  >بحري</label
                >
              </li>

              <li class="relative my-2">
                <input
                  @click="showCity = !showCity"
                  class="sr-only peer"
                  type="radio"
                  value="omdurman"
                  name="addr"
                  v-model="city"
                  id="omdurman"
                />
                <label
                  style="font-size: 12px"
                  class="
                    flex
                    p-1
                    text-sm
                    bg-white
                    cursor-pointer
                    focus:outline-none
                    hover:bg-gray-50
                    peer-checked:ring-violet-500
                    peer-checked:ring-2
                    peer-checked:border-transparent
                  "
                  for="omdurman"
                  >امدرمان</label
                >
              </li>
            </div>
          </div>

          <!-- 
                   address input : 
                   i used cutom design to set value of adresses
                   notice : 
                   addresses is filtered by value of city
                
                 -->
          <div class="address py-2">
            <div
              @click="showAddr = !showAddr"
              class="
                delevery
                flex
                items-center
                justify-between
                border
                p-4
                rounded-xl
                border-gray-200
              "
            >
              <span> المنطقه </span>
              <span>
                {{ address }}
              </span>
              <!-- up svg -->
              <svg
                v-if="!showAddr"
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M5 15l7-7 7 7"
                />
              </svg>
              <!-- down svg -->
              <svg
                v-if="showAddr"
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
            <div v-show="!showAddr" class="items">
              <p class="text-center py-2" v-show="city == ''">
                الرجاء اختيار المدينه اولاً
              </p>
              <li
                class="relative my-2"
                @click="delPrice = item.deliveryTax"
                v-show="city != ''"
                v-for="item in filteredAddress"
                :key="item.id"
              >
                <input
                  @click="showAddr = !showAddr"
                  class="sr-only peer"
                  type="radio"
                  name="address"
                  :value="item.addr"
                  v-model="address"
                  :id="item.addr"
                />
                <label
                  class="
                    flex
                    p-1
                    bg-white
                    rounded-lg
                    cursor-pointer
                    focus:outline-none
                    hover:bg-gray-50
                    peer-checked:ring-violet-500
                    peer-checked:ring-2
                    peer-checked:border-transparent
                    text-sm
                  "
                  :for="item.addr"
                  >{{ item.addr }} / {{ item.deliveryTax }} جنيه</label
                >
              </li>
            </div>
          </div>

      <!-- addres details input -->
      <div class="floating-input mb-5 relative">
        <input
          id="address"
          class="
            border border-gray-200
            focus:outline-none
            rounded-md
            focus:border-gray-500 focus:shadow-sm
            w-full
            p-3
            h-16
          "
          placeholder=" "
          autocomplete="off"
          v-model="addrDetails"
        >
        <label
          for="message"
          class="
            absolute
            top-0
            right-0
            px-3
            py-5
            h-full
            pointer-events-none
            transform
            origin-left
            transition-all
            duration-100
            ease-in-out
          "
          >العنوان بالتفصيل</label
        >
      </div>

      <!-- total price section -->
      <div class="total-price shadow p-4">
        <b>ملخص الطبيه</b>

        <div class="products flex justify-between">
          <span> عدد المنتجات </span>
          <b>{{ $store.state.products.cart.length }} منتجات</b>
        </div>
        <div class="products flex justify-between">
          <span> تكلفه المنتجات</span>
          <span
            >{{
              totalCart.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
            }}
            ج.س</span
          >
        </div>
        <div class="products flex justify-between">
          <span>تكلفه التوصيل التوصيل</span>
          <b
            >{{
              delPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
            }}
            ج.س</b
          >
        </div>
        <div class="products flex justify-between">
          <span>المجموع الكلي</span>
          <span
            >{{
              (totalCart + delPrice)
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
            }}
            ج.س</span
          >
        </div>
      </div>
      <!-- checkout section -->
      <div class="checkout p-2">
        <button
          class="px-4 py-2 rounded my-2 bg-violet-600 text-white"
          @click.prevent="checkout()"
        >
          اتمام الطلب
        </button>
      </div>
    </form>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import axios from "axios";
export default {
  name: "CodCheckout",
  data() {
    return {
      payment: "false",
      city: "",
      phone: "",
      address: "",
      addrDetails: "",
      paymentNumber: "",
      showCity: true,
      showAddr: true,
      delPrice: 0,
      cartId: [],
      totalCart: 0,
      addrId: "",
      show: false,
      cart: [],
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
    this.check();
    console.log(this.allDeliveries);
    this.cart = JSON.parse(localStorage.getItem("cart"));

    this.cart.forEach((el) => {
      let item = {
        productId: el.id,
        price: el.buyPrice,
        productName: el.name,
        qty: el.qty,
      };
      this.cartId.push(item);
      let sum = el.buyPrice * el.qty;
      this.totalCart += sum;
    });
    // this.totalCart += this.tax
    this.$store.dispatch("getUser");

    console.log(this.user.id);
  },
  methods: {
    check() {
      this.cart = JSON.parse(localStorage.getItem("cart"));
      if (this.cart == 0) {
        this.$router.push("/ProductsPage");
      }
    },
    async checkout() {
      const checkoutCart = {
        userId: this.user.id,
        cart: this.cartId,
        city: this.city,
        phone: this.phone,
        address: this.address,
        addrDetails: this.addrDetails,
        transferNumber: this.transferNumber,
        totalPrice: this.totalCart,
        deliveryPrice: this.delPrice,
      };
       let loader = this.$loading.show({
      // Optional parameters
      container: this.fullPage ? null : this.$refs.formContainer,
      canCancel: false,
      color: "#836aee",
      blur: "2px",
    });
      if (
        this.city == "" ||
        this.phone == "" ||
        this.address == "" ||
        this.delPrice == 0 ||
        this.addrDetails == ""
      ) {
 this.$swal.fire({
              position: "top-start",

              icon: "error",
              title: "حدث خطأ ...",
              text: "الرجاء ملء كل الحقول",              showConfirmButton: false,

            });    
            loader.hide()
              return
            } else {
        try {
          const token = localStorage.getItem("gift_user_token");
          const config = {
            headers: { Authorization: `Bearer ${token}` },
          };
          const res = await axios.post(
            "https://admin.istanakado.com/api/v1/orders/cod",
            checkoutCart,
            config
          );
          if (res.data.success) {
            this.$swal.fire({
              position: "top-start",
              icon: "success",
              title: "تم طلب المنتجات بنجاح   ",
              showConfirmButton: false,
              timer: 2000,
            });
            loader.hide()

            this.$store.state.checkoutComplete.cart =
              this.$store.state.products.cart;
            this.$store.state.checkoutComplete.details = checkoutCart;
            this.$store.state.products.cart = [];
            localStorage.setItem(
              "cart",
              JSON.stringify(this.$store.state.products.cart)
            );
            this.$router.push("/OrderComplete");
            console.log(res.data.message);
          } else {
            this.$swal.fire({
              icon: "error",
              title: "حدث خطأ ...",
              text: "حدث خطاء ما , الرجاء اعادة المحاوله",
              confirmButtonText: "حسنا",
            });
            loader.hide()

          }
        } catch (err) {
          console.log(err);
          this.$swal.fire({
            icon: "error",
            title: "حدث خطأ ...",
            text: "حدث خطاء ما , الرجاء اعادة المحاوله",
            confirmButtonText: "حسنا",
          });
            loader.hide()

        }
      }
      console.log(checkoutCart);
    },
  },
  inject: ["veirfy"],
};
</script>
<style></style>
