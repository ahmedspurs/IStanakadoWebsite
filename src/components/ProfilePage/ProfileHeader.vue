<template>
  <div class="header w-full md:w-1/2">
   

    <div
      class="
        mt-2
        flex
        justify-center
        items-center
        p-4
        bg-gray-200
        w-full
        rounded-xl
        cursor-pointer
      "
      @click="logout()"
    >
      <span class="text-xl"> تسجيل الخروج </span>
    
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { mapGetters } from "vuex";
export default {
  name: "ProfileHeader",
  created() {
    this.$store.dispatch("getUser");
  },
  computed: mapGetters(["user"]),

  methods: {
    async logout() {
      const token = localStorage.getItem("gift_user_token");
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };
      const res = await axios.get(
        "https://admin.istanakado.com/api/v1/auth/logout",
        config
      );
      console.log(res);
      localStorage.clear();
      location.reload();
      this.$router.push("/LoginPage");
      this.success();
    },
  },
};
</script>

<style>
</style>