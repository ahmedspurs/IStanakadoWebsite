<template>
  <div class="content w-full md:w-1/2 pt-2">
    <div class="imag  rounded w-full mb-8">
      <div class="flex justify-center flex-col items-center p-4 my-2">
        <div class="text-center py-2 mt-2">
          <h2 class="font-bold ">{{ user.userName }}</h2>
       
        </div>
      </div>
    </div>
    <div
      @click="showModal(1)"
      class="flex items center p-4 shadow rounded-xl cursor-pointer w-full"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6 text-violet-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
        />
      </svg>
      <span class="font-  mx-4"> تعديل الملف الشخصي </span>
    </div>
    <div v-show="showModal1">
      <form class="w-full p-4" @submit.prevent="updateUser(user.id)">
        <div class="floating-input mb-5 relative">
          <input
            type="text"
            id="name"
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
            v-model="user.userName"
          />
          <label
            for="email"
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
            >الاسم</label
          >
        </div>
        <div class="floating-input mb-5 relative">
          <input
            type="email"
            id="email"
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
            v-model="user.email"
          />
          <label
            for="email"
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
            >الايميل</label
          >
        </div>

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
            v-model="user.tel"
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
            >رقم الهاتف</label
          >
        </div>

        <div class="floating-input mb-5 relative">
          <input
            type="text"
            id="city"
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
            v-model="user.city"
          />
          <label
            for="city"
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
            >المدينه</label
          >
        </div>

        <div class="floating-input mb-5 relative">
          <input
            type="text"
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
            v-model="user.address"
          />
          <label
            for="address"
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
            >العنوان</label
          >
        </div>

        <div class="checkout">
          <button
            class="bg-violet-600 px-4 py-2 text-white rounded font- "
            expand="block"
            @click="updateUser()"
          >
            تعديل الملف الشخصي
          </button>
        </div>
      </form>
    </div>

    <div
      class="flex items-center p-4 shadow rounded-xl cursor-pointer w-full"
      @click="showModal(2)"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6 text-violet-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"
        />
      </svg>
      <span class="font-  mx-4"> تعديل كلمه المرور </span>
    </div>

     <router-link to="/LastOrders">
      <div class="mt-2 flex items-center p-4 shadow rounded-xl cursor-pointer w-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 text-violet-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
          />
        </svg>
        <span class="font-   mx-4"> الطلبات السابقه </span>
      </div>
    </router-link>
    <div v-show="showModal2">
      <change-password />
    </div>
  </div>
</template>

<script>
import ChangePassword from "@/views/ChangePassword.vue";
import { mapGetters } from "vuex";
export default {
  name: "EditProfile",
  components: { ChangePassword },
  data() {
    return {
      err: false,
      alert: false,
      showModal1: false,
      showModal2: false,
    };
  },
  created() {
    this.$store.dispatch("getUser");
  },
  computed: mapGetters(["user", "updateMessage"]),
  inject: ["veirfy"],
  methods: {
    async updateUser(id) {
      //  (alert and loading )ارميها محل ما داير يا فنان خخخ دا كود ال
      let loader = this.$loading.show({
        // Optional parameters
        container: this.fullPage ? null : this.$refs.formContainer,
        canCancel: false,
        color: "#836aee",
        blur: "2px",
      });
      const user = {
        userName: this.user.userName,
        tel: this.user.tel,
        address: this.user.address,
        city: this.user.city,
        email: this.user.email,
      };
      const updateData = {
        id: id,
        user: user,
      };
      try {
        console.log(this.updateMessage);
        await this.$store.dispatch("updateUser", updateData);
        if (this.updateMessage) {
          loader.hide();
          await this.closeModal();

          this.$swal.fire({
            position: "top-start",
            icon: "success",
            title: "تم تعديل الملف الشخصي بنجاح",
            showConfirmButton: false,
            timer: 2000,
          });

          console.log("SUCCESS !");
        } else {
          loader.hide();
          this.$swal.fire({
            icon: "error",
            title: "حدث خطأ ...",
            text: "لم يتم تحديث الملف الشخصي !",
            confirmButtonText: "حسنا",
          });

          console.log("ERROR !");
        }
      } catch (err) {
        loader.hide();
        this.$swal.fire({
          icon: "error",
          title: "حدث خطأ ...",
          text: "لم يتم تحديث الملف الشخصي",
          confirmButtonText: "حسنا",
        });
        console.log("WARNING !");
      }
    },
    showModal(x) {
      if (x == 1) {
        this.showModal1 = !this.showModal1;
        this.showModal2 = false;
      } else if (x == 2) {
        this.showModal2 = !this.showModal2;
        this.showModal1 = false;
      }
    },
    closeModal() {
      this.showModal1 = false;
    },
  },
};
</script>
<style></style>
