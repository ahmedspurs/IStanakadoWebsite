<template>
  <div class="bg-images rounded">
    <div
      class="
        
        py-40
        flex flex-col
        items-center
        bg-overlay
        rounded
      "
    >
      <div class="w-11/12 sm:w-2/3 mb-5 sm:mb-10">
        <h1
          class="
            text-2xl
            sm:text-2xl
            md:text-3xl
            lg:text-4xl
            xl:text-4xl
            text-center text-white
            font-extrabold
            leading-tight
          "
        >
          متجر
          <span class="text-violet-700"> استاناكادو</span>
          يوفر لك افضل المنتجات مع اافضل الاسعار
        </h1>
        <p
          class="
            mt-5
            sm:mt-10
            text-white
            font-normal
            text-center text-lg
            sm:text-lg
          "
        >
          استاناكادو هو محل هدايا يجعل العميل يطلب هديته و هو في المنزل.. و يجعل
          عمليه الشراء و الدفع بسيطه و مريحه للعميل .. و يمكن للعميل تشكيل هديته
          بنفسه مع خدمه التوصيل
        </p>
      </div>
      <div class="flex justify-center items-center">
        <router-link to="/ProductsPage">
          <button
            class="
              focus:outline-none
              bg-indigo-700
              transition
              duration-150
              ease-in-out
              hover:bg-indigo-600
              rounded
              text-white
              px-4
              sm:px-10
              py-2
              sm:py-4
              text-sm
            "
          >
            يمكنك التسوق الان
          </button>
        </router-link>

        <button
          class="
            mr-4
            focus:outline-none
            bg-white
            transition
            duration-150
            ease-in-out
            hover:border-indigo-600 hover:text-violet-600
            rounded
            border border-indigo-700
            text-violet-700
            px-4
            sm:px-10
            py-2
            sm:py-4
            text-sm
          "
        >
          احصل علي التطبيق
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeDetails",
};
</script>

<style>
</style>