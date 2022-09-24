

<template>
    <!-- 
    welcome to bankak checkout page
    in this page there are one main method :
    1- checkout method for send data to bankak api
    i used form data to send data to api , becuase there is image i need to send
    i fetch users and dilevery data becuase i need to sent it to cod api
    
   -->
    
      <div class="checkout p-4">
        <form class="w-full" ref="form" @submit.prevent="checkout()">
          <!-- phone nunber input -->
          <div class="floating-input mb-5 relative">
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
              name="phone"
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
              <span class=""> توصيل الي مدينه </span>
              <span v-if="city == 'khartoum'">الخرطوم</span>
              <span v-if="city == 'bahri'">بحري</span>
              <span v-if="city == 'omdurman'">امدرمان</span>
              <!-- up svg -->
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
                  name="city"
                  value="khartoum"
                  v-model="city"
                  id="khartoum1"
                />
                <label
                  class="
                    flex
                    p-1
                    text-sm
                    bg-white
                    
                    rounded-lg
                    cursor-pointer
                    focus:outline-none
                    hover:bg-gray-50
                    peer-checked:ring-green-500
                    peer-checked:ring-2
                    peer-checked:border-transparent
                  "
                  for="khartoum1"
                  >الخرطوم</label
                >
              </li>

              <li class="relative my-2">
                <input
                  @click="showCity = !showCity"
                  class="sr-only peer"
                  type="radio"
                  value="bahri"
                  name="city"
                  v-model="city"
                  id="bahri1"
                />
                <label
                  class="
                    flex
                    p-1
                    text-sm
                    bg-white
                    
                    rounded-lg
                    cursor-pointer
                    focus:outline-none
                    hover:bg-gray-50
                    peer-checked:ring-green-500
                    peer-checked:ring-2
                    peer-checked:border-transparent
                  "
                  for="bahri1"
                  >بحري</label
                >
              </li>

              <li class="relative my-2">
                <input
                  @click="showCity = !showCity"
                  class="sr-only peer"
                  type="radio"
                  value="omdurman"
                  name="city"
                  v-model="city"
                  id="omdurman1"
                />
                <label
                  class="
                    flex
                    p-1
                    text-sm
                    bg-white
                    
                    rounded-lg
                    cursor-pointer
                    focus:outline-none
                    hover:bg-gray-50
                    peer-checked:ring-green-500
                    peer-checked:ring-2
                    peer-checked:border-transparent
                  "
                  for="omdurman1"
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
              <span class=""> المنطقه </span>
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
                  class="sr-only peer"
                  @click="showAddr = !showAddr"
                  type="radio"
                  :value="item.addr"
                  v-model="address"
                  :id="item.id"
                />
                <label
                  class="
                    flex
                    p-1
                    text-sm
                    bg-white
                    
                    rounded-lg
                    cursor-pointer
                    focus:outline-none
                    hover:bg-gray-50
                    peer-checked:ring-green-500
                    peer-checked:ring-2
                    peer-checked:border-transparent
                  "
                  :for="item.id"
                  >{{ item.addr }} / {{ item.deliveryTax }} جنيه</label
                >
              </li>
            </div>
          </div>

          <!-- addres details input feild-->
          <div class="floating-input mb-5 relative">
            <input
              id="addressDetails"
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
              name="addrDetails"
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

          <!-- 
                  payments  section for screenshot of bill & payment number 
                  this section hove two input field : 
                  1- input for payments number
                  2- file input for bill screenshot
                 -->

          <!-- bankak payments account number -->
          <div class="bankakk">
                 <div class="shadow p-4">
                <span class="font-bold text-black block py-2"> حول هنا </span>
                <div class="products grid grid-cols-2">
                  <div color="dark">
                    <span> رقم الحساب</span>
                  </div>
                  <div color="dark">
                    <b>3198384 </b>
                  </div>
                </div>

                <div class="products grid grid-cols-2">
                  <div color="dark">
                    <span> الحساب باسم</span>
                  </div>
                  <div color="dark">
                    <b> فيبر للذكاء الاصطناعي المحدودة </b>
                  </div>
                </div>

                <div color="dark my-2">
                  <span class="py-2">
                    الرجاء ادخال صورة من اشعار التحويله في القسم التالي</span
                  >
                </div>
            </div>

            <!-- payments input section -->
            <div class="py-4 justify-center flex-col items-center">
              <!-- payments number input -->

              <div class="floating-input mb-5 relative w-full hidden">
                <input
                  type="number"
                  id="payment"
                  class="
                    border border-gray-200
                    focus:outline-none
                    rounded-md
                    focus:border-gray-500 focus:shadow-sm
                    w-full
                    p-3
                    h-16
                    hidden
                  "
                  placeholder="  "
                  autocomplete="off"
                  name="paymentNumber"
                  v-model="paymentNumber"
                />
                <label
                  for="payment"
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
                  >رقم العمليه</label
                >
              </div>

              <!-- bill screenshot input -->
              <div class="flex justify-center items-center w-full">
                <label
                  for="dropzone-file"
                  class="
                    flex flex-col
                    justify-center
                    items-center
                    w-full
                    h-32
                    bg-gray-50
                    rounded-lg
                    border-2 border-gray-300 border-dashed
                    cursor-pointer
                    dark:hover:bg-bray-800 dark:bg-gray-700
                    hover:bg-gray-100
                    dark:border-gray-600
                    dark:hover:border-gray-500
                    dark:hover:bg-gray-600
                  "
                >
                  <div
                    class="flex flex-col justify-center items-center pt-5 pb-6"
                  >
                    <svg
                      class="mb-3 w-10 h-10 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                      ></path>
                    </svg>
                    <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                      رفع صورة من الاشعار
                    </p>
                  </div>
                  <input
                        id="dropzone-file"
                    name="photos"
                    ref="fileInput"
                    type="file"
                    class="hidden"
                    @input="pickFile"
                  />
                </label>
              </div>
            </div>
          </div>
             <div class="prev p-4">
            <img class="w-full " :src="previewImage" alt="" />
          </div>
 <!-- total price section -->
          <div class="total-price">
            <div class="shadow p-4">
              
                <div color="dark">
                  <span class="text-[13px] font-semibold">ملخص الطلبيه</span>
                </div>
                <div class="products grid grid-cols-2 pt-2">
                  <div color="dark">
                    <span> عدد المنتجات</span>
                  </div>
                  <div color="dark ml-8   ">
                    <span class="font-semibold"
                      >{{ $store.state.products.cart.length }} منتج</span
                    >
                  </div>
                </div>
                <div class="products grid grid-cols-2">
                  <div color="dark">
                    <span> تكلفه المنتجات</span>
                  </div>
                  <div color="dark" class="">
                    <span class="font-semibold"
                      >{{
                        totalCart
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                      }}
                      <span class="text-[12px]"> ج.س </span>
                    </span>
                  </div>
                </div>
                <div class="products grid grid-cols-2">
                  <div color="dark">
                    <span>رسوم التوصيل</span>
                  </div>
                  <div color="dark" class="">
                    <span class="font-semibold ml-8"
                      >{{
                        delPrice
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                      }}

                      <span class="text-[12px]"> ج.س </span>
                    </span>
                  </div>
                </div>
                <div class="products grid grid-cols-2">
                  <div color="dark">
                    <span style="font-size: 17px">المجموع الكلي</span>
                  </div>
                  <div color="dark" class="">
                    <span class="font-semibold" style="font-size: 17px"
                      >{{
                        (totalCart + delPrice)
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                      }}
                      <span class="text-[12px]"> ج.س </span>
                    </span>
                  </div>
                </div>
            </div>
          </div>
          <!-- checkout section -->
          <div class="checkout p-2 text-center">
            <button type="submit"
          class="px-4 py-2 rounded my-2 bg-violet-600 text-white"
            
            >اتمام الطلب</button>
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
      payment: "true",
      city: "",
      phone: "",
      address: "",
      addrDetails: "",
      paymentNumber: "00000000",
      image: "",
      showCity: true,
      showAddr: true,      previewImage: "",

      delPrice: 0,
      cartId: [],
      totalCart: 0,
      addrId: "",
    };
  },
  computed: {
    ...mapGetters(["user", "allDeliveries"]),
    filteredAddress() {
      return this.allDeliveries.filter((item) => {
        return item.city.includes(this.city);
      });
    },
    taxPrice() {
      return this.allDeliveries.filter((word) => word.id == this.addrId);
    },
  },
  created() {
    console.log(this.allDeliveries);
    if( this.$store.state.products.cart.length==0){
      this.$router.push("/ProductsPage")
    }
    this.$store.state.products.cart.forEach((el) => {
      let item = {
        productName: el.name,
        price: el.buyPrice,
        productId: el.id,
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
  mounted() {
    this.veirfy();
  },
  methods: {
    change(id) {
      this.addrId = id;
    },
    async checkout() {
      const checkoutCart = {
        userId: this.user.id,
        cart: this.cartId,
        payment: "true",
        city: this.city,
        phone: this.phone,
        address: this.address,
        photos: this.image,
        addrDetails: this.addrDetails,
        paymentNumber: this.paymentNumber,
        totalPrice: this.totalCart,
      };
       let loader = this.$loading.show({
      // Optional parameters
      container: this.fullPage ? null : this.$refs.formContainer,
      canCancel: false,
      color: "#836aee",
      blur: "2px",
    });
      if (
        this.payment == "" ||
        this.city == "" ||
        this.phone == "" ||
        this.address == "" ||
        this.addresDetails == ""
      ) {
 this.$swal.fire({
              position: "top-start",

              icon: "error",
              title: "حدث خطأ ...",
              text: "الرجاء ملء كل الحقول",              showConfirmButton: false,

            });   
            loader.hide()
            
            } else {
        try {
          const formData = new FormData(this.$refs.form);
          formData.append("userId", this.user.id);
          formData.append("cart", JSON.stringify(this.cartId));
          formData.append("transferNumber", this.paymentNumber);
          formData.append("address", this.address);
          formData.append("totalPrice", this.totalCart);
          formData.append("deliveryPrice", this.delPrice);
          for (const value of formData.values()) {
            console.log(value);
          }
          console.log(checkoutCart);
          const token = localStorage.getItem("userToken");
          const config = {
            headers: { Authorization: `Bearer ${token}` },
          };
          const res = await axios.post(
            "https://admin.istanakado.com/api/v1/orders/mbok",
            formData,
            config
          );
          if (res.data.success) {
            loader.hide()

            this.$store.state.checkoutComplete.cart =
              this.$store.state.products.cart;
            this.$store.state.checkoutComplete.details = checkoutCart;
            this.$router.push("/OrderComplete");
            console.log(res.data.message);
          this.$store.state.products.cart = [];
            localStorage.setItem(
              "cart",
              JSON.stringify(this.$store.state.products.cart)
            );

          } else {
 this.$swal.fire({
              position: "top-start",

              icon: "error",
              title: "حدث خطأ ...",
              text: " الرجاء التحقق من الاتصال بالانترنت  ",              showConfirmButton: false,

            });      
            loader.hide()
                   console.log(res.data.message);
          }
        } catch (err) {
 this.$swal.fire({
              position: "top-start",

              icon: "error",
              title: "حدث خطأ ...",
              text: " الرجاء التحقق من الاتصال بالانترنت  ",              showConfirmButton: false,

            });   
            loader.hide()
          console.log(err);
        }
      }
      console.log(checkoutCart);
    },
    onFileChange(e) {
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      this.createImage(files[0]);
    },
    createImage(file) {
      this.image = new Image();
      var reader = new FileReader();
      var vm = this;
      reader.onload = (e) => {
        vm.image = e.target.result;
      };
      reader.readAsDataURL(file);
    },
 
    pickFile() {
      let input = this.$refs.fileInput;
      let file = input.files;
      if (file && file[0]) {
        let reader = new FileReader();
        reader.onload = (e) => {
          this.previewImage = e.target.result;
        };
        reader.readAsDataURL(file[0]);
        this.$emit("input", file[0]);
      }
    },
  },
  inject: ["veirfy"],

};
</script>

<style></style>