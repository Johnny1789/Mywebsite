<script setup lang="ts">
import { ref } from "vue";
import food_table from "./food_table";
import create_food from "./create_food.vue"
const isShowModalForm = ref(false);

const Add = () => {
  isShowModalForm.value = true;
};

const onCancel = () => {
  /*  console.log(data); */
  isShowModalForm.value = false;
};

const reloadPage = ()=>{
  location.reload()
}
</script>
<template>
  <a-space
    :size="8"
    class="flex text-black px-10 flex-col  w-full sm:items-start items-start md:items-center md:justify-between md:flex-row"
  >
    <div
      class="flex flex-col gap-4 sm:items-start sm: items-start md:items-center md:justify-between md:flex-row my10"
    >
      <a-select
        style="width: 160px"
        :dropdown-match-select-width="false"
        placeholder="ປະເພດເມນູ"
        size="large"
        allow-clear
      >
        <a-select-option value="all">ເຂົ້າ</a-select-option>
        <a-select-option value="reading">ລາບ</a-select-option>
        <a-select-option value="paid">ແກງ</a-select-option>
        <a-select-option value="cancelled">ຕຳ</a-select-option>
      </a-select>
      <a-input-search placeholder="ຄົ້ນຫາ..." class="" size="large" />
    </div>
    <div class="flex gap-4">
      <a-button class="text-black" size="large" @click="reloadPage()"> ລີໂຫຼດ</a-button>
      <a-button class="text-black" size="large" @click="Add()"> ເພີ່ມເມນູ</a-button>
    </div>
  </a-space>
  <div class="overflow-x-auto px-10">
    <a-table :columns="food_table" class="lg:w-full whitespace-nowrap" />
  </div>
  <create_food :open="isShowModalForm" @cancel="onCancel" />
</template>
