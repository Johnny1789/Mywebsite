<script setup lang="ts">
import manage_table from './manage_table'
</script>
<template>
     <a-space
    :size="8"
    class="flex px-10 flex-col w-full sm:items-start sm: items-start md:items-center md:flex-row"
  >
    <a-select
      style="width: 160px"
      :dropdown-match-select-width="false"
      placeholder="ປະເພດໂຕະ"
      size="large"
      allow-clear
    >
      <a-select-option value="all">ເບຍ</a-select-option>
      <a-select-option value="reading">ນ້ຳອັດລົມ</a-select-option>
      <a-select-option value="paid">ນ້ຳດື່ມ</a-select-option>
    </a-select>
    <a-select
      style="width: 160px"
      :dropdown-match-select-width="false"
      placeholder="ໂຊນໂຕະ"
      size="large"
      allow-clear
    >
      <a-select-option value="all">ເບຍ</a-select-option>
      <a-select-option value="reading">ນ້ຳອັດລົມ</a-select-option>
      <a-select-option value="paid">ນ້ຳດື່ມ</a-select-option>
    </a-select>
    <a-input-search placeholder="ຄົ້ນຫາ..." class="" size="large" />
    <a-divider type="vertical" />
    <a-button class="text-black" size="large">
      ລີໂຫຼດ</a-button
    >
    <a-button class="text-black" size="large">
      ເພີ່ມໂຕະ</a-button
    >
  </a-space>
  <div class="overflow-x-auto px-10">
    <a-table :columns="manage_table" class="lg:w-full whitespace-nowrap" />
  </div>
</template>