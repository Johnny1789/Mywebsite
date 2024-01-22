<script setup lang="ts">
import {  defineProps } from "vue";

const props = defineProps({
  open: false,
});
const emit = defineEmits(["cancel"]);
const onCancel = () => {
  emit("cancel", [{}]);
};
</script>
<template>
  <a-drawer
    :open="open"
    @close="onCancel"
    title="ເພີ່ມໝວດໝູ່"
    cancel-text="ຍົກເລີກ"
    ok-text="ບັນທຶກ"
  >
    <template #extra>
      <a-button style="margin-right: 8px" @click="onCancel">Cancel</a-button>
      <a-button class="bg-blue-500" @click="save()">Save</a-button>
    </template>
    <a-form layout="vertical">
      <a-form-item name="type" label="ປະເພດໝວດໝູ່">
        <a-select
            :dropdown-match-select-width="false"
            placeholder="ເລືອກປະເພດໝວດໝູ່"
          >
            <a-select-option value="all">ອາຫານ</a-select-option>
            
          </a-select>
      </a-form-item>
      <a-form-item name="name" label="ຊື່ໝວດໝູ່">
        <a-input type="text" autocomplete="off" />
      </a-form-item>
      <a-form-item name="detail" label="ເປີດໃຊ້">
        <a-switch class="bg-blue-500" />
      </a-form-item>
      
    
    </a-form>
  </a-drawer>
</template>
