<script setup lang="ts">
import report_saletable from './report_saletable';
</script>
<template>
    <a-space
    :size="8"
    class="flex px-10 flex-col w-full sm:items-start sm: items-start md:items-center md:flex-row"
  >
   
    
    <a-range-picker size="large" />
    <a-divider type="vertical" />
    <a-button class="text-black"  size="large">
      ລີໂຫຼດ</a-button
    >
    <a-button class="text-black" size="large">
      Export</a-button
    >
  </a-space>
  <div class="overflow-x-auto px-10">
    <a-table :columns="report_saletable" class="lg:w-full whitespace-nowrap" />
  </div>
</template>