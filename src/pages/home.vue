<script setup lang="ts">
import BarChart from "../components/bar_cart.vue" 
import PieChart from "../components/pie_cart.vue" 
</script>
<template>
  <!---===================== FIRST ROW CONTAINING THE  STATS CARD STARTS HERE =============================-->
  <div
    class="grid grid-cols sx:grid-cols-2 sm:grid-cols-2 md:grid-cols-4 justify-center items-center px-5 bg-gray-100"
  >
    <!---== First Stats Container ====--->
    <div class="container pb-11">
      <div
        class="w-96 md:w-60 bg-white max-w-xs mx-auto rounded-sm overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 transform hover:scale-100 cursor-pointer"
      >
        <div class="h-12 bg-red-400 flex items-center justify-center pt-5">
          <p class="text-white text-lg font-medium">ຍອດຂາຍທັງໝົດ</p>
        </div>
        <div class="flex text-sm font-medium text-gray-600">
          <p class="text-center px-10 pt-5 font-bold ">ທັງໝົດ</p>
        </div>
        <p class="py-4 text-xl font-bold ml-5 mb-5">10.000.000 kip</p>
        <!-- <hr > -->
      </div>
    </div>
    <!---== First Stats Container ====--->

    <!---== Second Stats Container ====--->
    <div class="container pb-11">
      <div
        class="w-96 md:w-60 bg-white max-w-xs mx-auto rounded-sm overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 transform hover:scale-100 cursor-pointer"
      >
        <div class="h-12 bg-blue-600 flex items-center justify-center pt-5">
          <p class="text-white text-lg font-medium">ອໍເດີທັງໝົດ</p>
        </div>
        <div class="flex text-sm font-medium text-gray-600">
          <p class="text-center px-10 pt-5 font-bold">ທັງໝົດ</p>
        </div>
        <p class="py-4 text-xl font-bold ml-5 mb-5">20,456 ອໍເດີ</p>
        <!-- <hr > -->
      </div>
    </div>
    <!---== Second Stats Container ====--->

    <!---== Third Stats Container ====--->
    <div class="container pb-11">
      <div
        class="w-96 md:w-60 bg-white max-w-xs mx-auto rounded-sm overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 transform hover:scale-100 cursor-pointer"
      >
        <div class="h-12 bg-orange-500 flex items-center justify-center pt-5">
          <p class="text-white text-lg font-medium">ຍອດຂາຍປະຈຳວັນ</p>
        </div>
        <div class="flex text-sm font-medium text-gray-600">
          <p class="text-center px-10 pt-5 font-bold">ທັງໝົດ</p>
        </div>
        <p class="py-4 text-xl font-bold ml-5 mb-5">2.000.000 kip</p>
        <!-- <hr > -->
      </div>
    </div>
    <!---== Third Stats Container ====--->

    <!---== Fourth Stats Container ====--->
    <div class="container pb-11">
      <div
        class="w-96 md:w-60 bg-white max-w-xs mx-auto rounded-sm overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 transform hover:scale-100 cursor-pointer"
      >
        <div class="h-12 bg-green-500 flex items-center justify-center pt-5">
          <p class="text-white text-lg font-medium">ອໍເດີປະຈຳວັນ</p>
        </div>
        <div class="flex text-sm font-medium text-gray-600">
          <p class="text-center px-10 pt-5 font-bold">ທັງໝົດ</p>
        </div>
        <p class="py-4 text-xl font-bold ml-5 mb-5">100 ອໍເດີ</p>
        <!-- <hr > -->
      </div>
    </div>
    <!---== Fourth Stats Container ====--->
  </div>

  <div class="flex flex-col sm:flex-col  md:flex-row px-5 ">
   <div class="flex-auto h-72 px-5"><BarChart/></div>
    <div class="flex-auto w-56"><PieChart/></div>
   </div>
 
  <!---===================== FIRST ROW CONTAINING THE  STATS CARD ENDS HERE =============================-->
</template>
