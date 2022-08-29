<template>
  <div class="last-order p-4">
    <!-- <router-link to="/tabs/LastOrder"> -->
    <div
      class="bg-gray-200 p-4 rounded-xl mt-2"
      :key="item.id"
      v-for="item in user.orders"
    >
      <div class="flex items-center justify-between bg-gray-200 rounded-xl">
        <h2 class="text-gray-700">طلب رقم</h2>
        <h2 class="text-violet-600">#{{ item.id }}</h2>
      </div>
      <div class="flex items-center justify-between bg-gray-200 rounded-xl">
        <h2 class="text-gray-700">السعر الكلي</h2>
        <h2 class="text-violet-600">{{ item.totalPrice }}$</h2>
      </div>

      <div class="flex items-center justify-between bg-gray-200 rounded-xl">
        <h2 class="text-gray-700">الحاله</h2>
        <span class="text-violet-600" v-if="item.status == 'wait'">
          قيد الانتظار</span
        >
        <span class="text-violet-600" v-if="item.status == 'process'">
          قيد التنفيذ</span
        >
        <span class="text-violet-600" v-if="item.status == 'complete'">
          مكتمل
        </span>
        <span class="text-violet-600" v-if="item.status == 'canceled'">
          ملغي
        </span>
      </div>
    </div>
    <!-- </router-link> -->
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "LastOrders",

  created() {
    this.veirfy();
    this.$store.dispatch("getUser");
  },
  computed: mapGetters(["user"]),
  inject: ["veirfy"],
};
</script>

<style>
</style>