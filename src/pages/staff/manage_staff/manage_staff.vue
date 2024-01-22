<script setup lang="ts">
import staff_table from './staff_table';
</script>
<template>
     <a-space
    :size="8"
    class="flex px-10 flex-col w-full sm:items-start sm: items-start md:items-center md:flex-row"
  >
    <a-input-search placeholder="ຄົ້ນຫາ..." class="" size="large" />
    <a-divider type="vertical" />
    <a-button class="text-black" size="large">
      ລີໂຫຼດ</a-button
    >
    <a-button class="text-black" size="large" >
      ເພີ່ມພະນັກງານ</a-button 
    >
  </a-space>
  <div class="overflow-x-auto px-10">
    <a-table :columns="staff_table" class="lg:w-full whitespace-nowrap" />
  </div>
</template>