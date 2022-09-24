<template>
  <div class="px-2">
    <!-- reg altert -->

    <div class="relative w-full py-2">
      <div class="relative px-4 sm:rounded-3xl">
        <div class="w-full">
          <div class="">
            <div
              class="text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7"
            >
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
                  for="email"
                  class="absolute top-0 right-0 px-3 py-5 h-full pointer-events-none transform origin-left transition-all duration-100 ease-in-out"
                  >كلمه السر الحاليه</label
                >
              </div>
              <div class="floating-input mb-5 relative">
                <input
                  type="password"
                  v-model="newPassword"
                  id="newPassword"
                  class="border border-gray-200 focus:outline-none rounded-md focus:border-gray-500 focus:shadow-sm w-full p-3 h-16"
                  placeholder=" "
                  autocomplete="off"
                />
                <label
                  for="email"
                  class="absolute top-0 right-0 px-3 py-5 h-full pointer-events-none transform origin-left transition-all duration-100 ease-in-out"
                >
                  كلمه السر الجديدة</label
                >
              </div>
              <div class="floating-input mb-5 relative">
                <input
                  type="password"
                  v-model="reNewPassword"
                  id="reNewPassword"
                  class="border border-gray-200 focus:outline-none rounded-md focus:border-gray-500 focus:shadow-sm w-full p-3 h-16"
                  placeholder=" "
                  autocomplete="off"
                />
                <label
                  for="email"
                  class="absolute top-0 right-0 px-3 py-5 h-full pointer-events-none transform origin-left transition-all duration-100 ease-in-out"
                >
                  اعد كتابه كلمه السر الجديدة</label
                >
              </div>
              <div class="relative">
                <button
                  class="bg-violet-600 px-4 p-2 text-white rounded text-xl"
                  @click="ChangePassword"
                >
                  تغيير كلمه المرور
                </button>
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
import axios from "axios";
export default {
  data() {
    return {
      empty: false,
      newPassword: "",
      reNewPassword: "",
      password: "",
      log: {
        email: "user41@gmail.com",
        password: "2",
      },
    };
  },
  computed: mapGetters(["user"]),
  created() {
    this.veirfy();
    this.$store.dispatch("getUser");
  },
  methods: {
    async ChangePassword() {
      let loader = this.$loading.show({
        // Optional parameters
        container: this.fullPage ? null : this.$refs.formContainer,
        canCancel: false,
        color: "#836aee",
        blur: "2px",
      });
      if (
        this.password == "" ||
        this.newPassword == "" ||
        this.reNewPassword == ""
      ) {
        loader.hide();
        this.failed();
      } else {
        try {
          const userData = {
            email: this.user.email,
            oldPassword: this.password,
            newPassword: this.newPassword,
            confirmPassword: this.reNewPassword,
          };
          const token = localStorage.getItem("gift_user_token");
          const config = {
            headers: { Authorization: `Bearer ${token}` },
          };
          const res = await axios.put(
            "http://localhost:5000/api/v1/auth/updatepassword",
            userData,
            config
          );
          console.log(res.data);

          if (res.data.success) {
            loader.hide();

            this.$swal.fire({
              position: "top",
              icon: "success",
              title: "تم تعديل كلمة المرور بنجاح",
              showConfirmButton: false,
              timer: 2000,
            });

            this.clearFields();
          } else {
            loader.hide();

            this.wrong();
          }
        } catch (error) {
          loader.hide();

          console.error(error);
          this.wrong();
          // expected output: ReferenceError: nonExistentFunction is not defined
          // Note - error messages will vary depending on browser
        }
      }
    },
    async failed() {
      await this.$swal.fire({
        icon: "error",
        title: "حدث خطأ ...",
        text: "الرجاء ملئ حميع الحقول",
        confirmButtonText: "حسنا",
      });
      console.log("role");
    },
    async wrong() {
      await this.$swal.fire({
        icon: "error",
        title: "حدث خطأ ...",
        text: " كلمه المرور خاطئه  ",
        confirmButtonText: "حسنا",
      });
      console.log("role");
    },

    clearFields() {
      this.password = "";
      this.newPassword = "";
      this.reNewPassword = "";
    },
  },
  inject: ["veirfy"],
};
</script>

<style></style>
