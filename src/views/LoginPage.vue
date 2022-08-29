<template>
  <div class="p-4">
    <div
      class="
        min-h-screen
        flex
        items-center
        justify-center
        py-12
        px-4
        sm:px-6
        lg:px-8
      "
    >
      <div class="max-w-md w-full space-y-8">
        <form class="mt-8 space-y-6" method="POST" @submit.prevent="login()">
          <input type="hidden" name="remember" value="true" />
          <div class="rounded-md shadow-sm -space-y-px">
            <div class="floating-input mb-5 relative">
              <input
                type="email"
                id="EmailLogin"
                v-model="email"
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
              />
              <label
                for="EmailLogin"
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
                >البريد الالكتروني</label
              >
            </div>
            <div class="floating-input mb-5 relative">
              <input
                type="password"
                id="PasswordLogin"
                v-model="password"
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
              />
              <label
                for="PasswordLogin"
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
                >كلمة المرور</label
              >
            </div>
          </div>

          <div class="text-center">
            <button
              type="submit"
              class="
                py-2
                px-4
                border border-transparent
                text-sm
                font-medium
                rounded-md
                text-white
                bg-violet-600
                hover:bg-violet-700
                focus:outline-none
                focus:ring-2
                focus:ring-offset-2
                focus:ring-violet-500
              "
            >
              تسجيل الخول
            </button>
            <p class="text-center py-2">
              ليس لديك حساب ؟
              <router-link
                class="font-semibold text-violet-600"
                to="/RegisterPage"
              >
                يمكنك تسجيل حساب جديد</router-link
              >
            </p>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "LoginPage",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  created() {
    if (localStorage.getItem("gift_user_token") !== null) {
      this.$router.push("/");
    }
  },
  methods: {
    async login() {
      let loader = this.$loading.show({
        // Optional parameters
        container: this.fullPage ? null : this.$refs.formContainer,
        canCancel: false,
        color: "#836aee",
        blur: "2px",
      });

      if (this.email == "" || this.password == "") {
        loader.hide();
        this.$swal.fire({
          icon: "error",
          title: "حدث خطأ ...",
          text: "الرجاء ملئ جميع الحقول",
          confirmButtonText: "حسنا",
        });
      } else {
        let user = {
          email: this.email,
          password: this.password,
        };
        await this.$store.dispatch("login", user);

        if (localStorage.getItem("gift_user_token") !== null) {
          loader.hide();
          this.$swal.fire({
            position: "top-start",
            icon: "success",
            title: "تم تسجيل الدخول بنجاح",
            showConfirmButton: false,
            timer: 2000,
          });
          await this.$router.push("/");
          location.reload();
        } else {
          loader.hide();
          this.$swal.fire({
            icon: "error",
            title: "حدث خطأ ...",
            text: "البريد الاكتروني او كلمة المرور غير صحيحات .",
            confirmButtonText: "حسنا",
          });
        }
      }
    },
  },
  inject: ["veirfy"],
};
</script>

<style></style>
