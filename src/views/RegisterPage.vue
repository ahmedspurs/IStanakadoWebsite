<template>
  <div class="min-h-screen">
    <div class="relative sm:max-w-xl sm:mx-auto">
      <div class="relative px-4 sm:rounded-3xl py-4">
        <div class="max-w-md mx-auto">
          <div>
            <h1 class="text-2xl font-semibold text-center">تسجيل حساب جديد</h1>
          </div>
          <div class="">
            <div
              class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7"
            >
              <div class="floating-input mb-5 relative">
                <input
                  type="email"
                  id="email"
                  v-model="email"
                  class="border border-gray-200 focus:outline-none rounded-md focus:border-gray-500 focus:shadow-sm w-full p-3 h-16"
                  placeholder=" "
                  autocomplete="off"
                />
                <label
                  for="email"
                  class="absolute top-0 right-0 px-3 py-5 h-full pointer-events-none transform origin-left transition-all duration-100 ease-in-out"
                  >الايميل</label
                >
              </div>
              <div class="floating-input mb-5 relative">
                <input
                  type="text"
                  id="name"
                  v-model="userName"
                  class="border border-gray-200 focus:outline-none rounded-md focus:border-gray-500 focus:shadow-sm w-full p-3 h-16"
                  placeholder=" "
                  autocomplete="off"
                />
                <label
                  for="name"
                  class="absolute top-0 right-0 px-3 py-5 h-full pointer-events-none transform origin-left transition-all duration-100 ease-in-out"
                  >الاسم</label
                >
              </div>
              <div class="floating-input mb-5 relative">
                <input
                  type="number"
                  id="tel"
                  v-model="tel"
                  class="border border-gray-200 focus:outline-none rounded-md focus:border-gray-500 focus:shadow-sm w-full p-3 h-16"
                  placeholder=" "
                  autocomplete="off"
                />
                <label
                  for="tel"
                  class="absolute top-0 right-0 px-3 py-5 h-full pointer-events-none transform origin-left transition-all duration-100 ease-in-out"
                >
                  رقم الهاتف</label
                >
              </div>
              <div class="floating-input mb-5 relative">
                <input
                  type="text"
                  id="city"
                  v-model="city"
                  class="border border-gray-200 focus:outline-none rounded-md focus:border-gray-500 focus:shadow-sm w-full p-3 h-16"
                  placeholder=" "
                  autocomplete="off"
                />
                <label
                  for="city"
                  class="absolute top-0 right-0 px-3 py-5 h-full pointer-events-none transform origin-left transition-all duration-100 ease-in-out"
                  >المدينه</label
                >
              </div>
              <div class="floating-input mb-5 relative">
                <input
                  type="text"
                  id="address"
                  v-model="address"
                  class="border border-gray-200 focus:outline-none rounded-md focus:border-gray-500 focus:shadow-sm w-full p-3 h-16"
                  placeholder=" "
                  autocomplete="off"
                />
                <label
                  for="address"
                  class="absolute top-0 right-0 px-3 py-5 h-full pointer-events-none transform origin-left transition-all duration-100 ease-in-out"
                  >العنوان</label
                >
              </div>
              <div class="floating-input mb-5 relative">
                <input
                  type="password"
                  v-model="password"
                  id="password"
                  class="border border-gray-200 focus:outline-none rounded-md focus:border-gray-500 focus:shadow-sm w-full p-3 h-16"
                  placeholder=" "
                  autocomplete="off"
                />
                <label
                  for="password"
                  class="absolute top-0 right-0 px-3 py-5 h-full pointer-events-none transform origin-left transition-all duration-100 ease-in-out"
                  >كلمه السر</label
                >
              </div>
              <div class="relative text-center">
                <button
                  @click="login()"
                  v-if="regLoad"
                  class="bg-violet-600 py-2 px-4 text-white rounded text-xl"
                >
                  تسجيل حساب جديد
                </button>
                <button
                  v-if="!regLoad"
                  class="bg-violet-400 py-2 text-white rounded text-xl flex justify-center items-center"
                >
                  <span class="ml-8"> ...جاري تسجيل حساب جديد </span>
                  <span class="loader -mt-3"></span>
                </button>
                <p class="text-center py-2">
                  لديك حساب بالفعل ؟
                  <router-link
                    to="/LoginPage"
                    class="text-violet-600 font-semibold"
                  >
                    تسجيل الدخول
                  </router-link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import useVuelidate from "@vuelidate/core";
import { required, email } from "@vuelidate/validators";

import axios from "axios";
export default {
  data() {
    return {
      userName: "",
      email: "",
      password: "",
      city: "",
      address: "",
      tel: "",
      role: "user",
      regLoad: true,
    };
  },
  setup() {
    return { v$: useVuelidate() };
  },
  validations() {
    return {
      email: { required, email }, // Matches this.contact.email
    };
  },

  methods: {
    async login() {
      this.regLoad = false;
      const log = {
        userName: this.userName,
        email: this.email,
        password: this.password,
        city: this.city,
        address: this.address,
        tel: this.tel,
        role: "user",
      };
      const result = await this.v$.$validate();
      if (
        this.userName == "" ||
        this.email == "" ||
        this.password == "" ||
        this.city == "" ||
        this.address == "" ||
        this.tel == ""
      ) {
        this.failed();
        this.regLoad = true;
      } else {
        if (!result) {
          // notify user form is invalid
          this.wrong("الايميل غير صالح");
          this.regLoad = true;
        } else {
          if (this.tel.length < 9) {
            this.wrong("رقم الهاتف يجب ان يكون اكثر من 9 ارقام");
            this.regLoad = true;
          } else {
            try {
              const res = await axios.post(
                "https://admin.istanakado.com/api/v1/auth/register",
                log
              );
              if (res.data.success) {
                this.userName = "";
                this.email = "";
                this.password = "";
                this.city = "";
                this.address = "";
                this.tel = "";
                this.$store.state.reg = true;
                this.regLoad = true;
                this.$swal.fire({
                  position: "top-start",
                  icon: "success",
                  title: "تم تسجيل الحساب بنجاح",
                  showConfirmButton: false,
                  timer: 2000,
                });
                this.$router.push("/LoginPage");
              }
            } catch (error) {
              this.wrong("  حدث خطاء ما الرجاء التحقق من الاتصال بالانترنت");
              this.regLoad = true;
            }
          }
        }
      }

      // perform async actions
    },
    async failed() {
      this.$swal.fire({
        icon: "error",
        title: "حدث خطأ ...",
        text: "الرجاء ملء كل الحقول",
        confirmButtonText: "حسنا",
      });
    },
    async success() {
      this.$swal.fire({
        icon: "success",
        title: " تم تسجيل الحساب",
        text: " يمكنك تسجيل الدخول",
        confirmButtonText: "حسنا",
      });
    },
    async wrong(msg) {
      this.$swal.fire({
        icon: "error",
        title: "حدث خطأ ...",
        text: msg,
        confirmButtonText: "حسنا",
      });
    },
  },
};
</script>

<style></style>
