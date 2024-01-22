<script setup lang="ts">
import { ref } from "vue";
import food_table from "./food_table";
import create_drink from "./create_drink.vue";

const isShowModalForm = ref(false);

const Add = () => {
  isShowModalForm.value = true;
};

const onCancel = () => {
  /*  console.log(data); */
  isShowModalForm.value = false;
};

const reloadPage = () => {
  location.reload();
};
</script>
<template>
  <a-space
    :size="8"
    class="flex px-10 flex-col w-full sm:items-start sm: items-start md:items-center md:flex-row"
  >
    <a-select
      style="width: 160px"
      :dropdown-match-select-width="false"
      placeholder="ປະເພດເຄື່ອງດື່ມ"
      size="large"
      allow-clear
    >
      <a-select-option value="all">ເບຍ</a-select-option>
      <a-select-option value="reading">ນ້ຳອັດລົມ</a-select-option>
      <a-select-option value="paid">ນ້ຳດື່ມ</a-select-option>
    </a-select>
    <a-input-search placeholder="ຄົ້ນຫາ..." class="" size="large" />
    <a-divider type="vertical" />
    <a-button class="text-black" @click="reloadPage()" size="large">
      ລີໂຫຼດ</a-button
    >
    <a-button class="text-black" size="large" @click="Add()">
      ເພີ່ມເຄື່ອງດື່ມ</a-button
    >
  </a-space>
  <div class="overflow-x-auto px-10">
    <a-table :columns="food_table" class="lg:w-full whitespace-nowrap" />
  </div>
  <create_drink :open="isShowModalForm" @cancel="onCancel" />
</template>
