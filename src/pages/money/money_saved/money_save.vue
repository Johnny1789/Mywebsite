<script setup lang="ts">
import money_savetable from "./money_savetable";
import { ref } from "vue";
import create_moneysave from "./create_moneysave.vue";
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
    <a-input-search placeholder="ຄົ້ນຫາ..." class="" size="large" />
    <a-divider type="vertical" />
    <a-button class="text-black" size="large" @click="reloadPage()">
      ລີໂຫຼດ</a-button
    >
    <a-button class="text-black" size="large" @click="Add()" >
      ຂໍເງີນແຮ</a-button 
    >
  </a-space>
  <div class="overflow-x-auto px-10">
    <a-table :columns="money_savetable" class="lg:w-full whitespace-nowrap" />
  </div>
  <create_moneysave :open="isShowModalForm" @cancel="onCancel" />
</template>