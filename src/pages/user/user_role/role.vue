<script setup lang="ts">
import role_table from './role_table';
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
  </a-space>
  <div class="overflow-x-auto px-10">
    <a-table :columns="role_table" class="lg:w-full whitespace-nowrap" />
  </div>
</template>