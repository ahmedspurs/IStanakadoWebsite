<template>
  <div class="w-full " v-if="show">
    <div class="flex flex-col justify-around items-center min-h-screen  px-4 -mt-8">
      <profule-content class="md:mx-2 w-full" />
      <profile-header class=""/>
    </div>
  </div>
</template>

<script>
import ProfileHeader from "@/components/ProfilePage/ProfileHeader.vue";
import ProfuleContent from "@/components/ProfilePage/ProfuleContent.vue";

export default {
  name: "ProfilePage",
  data() {
    return {
      show: false,
    };
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
  },
  components: {
    ProfileHeader,
    ProfuleContent,
  },
  inject: ["veirfy"],
};
</script>

<style>
.floating-input > input::placeholder,
.floating-input > textarea::placeholder {
  color: transparent;
}

.floating-input > input:focus,
.floating-input > textarea:focus,
.floating-input > input:not(:placeholder-shown) {
  @apply pt-8;
}

.floating-input > input:focus ~ label,
.floating-input > textarea:focus ~ label,
.floating-input > input:not(:placeholder-shown) ~ label {
  @apply opacity-75 scale-75 -translate-y-3 translate-x-1;
}
</style>