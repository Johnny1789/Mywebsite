<script setup lang="ts">
import { reactive, ref, defineProps } from "vue";
const FormData = reactive({
  email: "",
  password: "",
  user: "",
  fullname: "",
  status: "active",
  role: "admin",
  open: "open",
});
const props = defineProps({
  open: false,
});
const emit = defineEmits(["cancel"]);
const onCancel = () => {
  emit("cancel", [{}]);
};

const save = () => {
  userStore.addUser(FormData);
  router.push("/userlist");
};

const clearForm = () => {
  Object.assign(formState, {
    fullname: "",
    email: "",
    password: "",
    role: undefined,
    status: undefined,
    open: undefined,
  });
  emit("cancel");
};
</script>
<template>
  <a-drawer
    :open="open"
    @close="onCancel"
    title="ຂໍເງີນແຮ"
    cancel-text="ຍົກເລີກ"
    ok-text="ບັນທຶກ"
  >
    <template #extra>
      <a-button style="margin-right: 8px" @click="onCancel">Cancel</a-button>
      <a-button class="bg-blue-500" @click="save()">Save</a-button>
    </template>
    <a-form layout="vertical">
      <a-form-item name="type" label="ປະເພດເງີນແຮ">
        <a-select
            :dropdown-match-select-width="false"
            placeholder="ເລືອກປະເພດເງີນແຮ"
          >
            <a-select-option value="all">ເງີນແຮ</a-select-option>
            
          </a-select>
      </a-form-item>
      <a-form-item name="title" label="ຫົວຂໍ້">
        <a-input type="text" autocomplete="off" />
      </a-form-item>
      <a-form-item name="detail" label="ລາຍລະອຽດ">
        <a-textarea />
      </a-form-item>
      <a-form-item name="quality" label="ຈຳນວນເງີນ">
        <a-input type="text" autocomplete="off" placeholder="0"  />
      </a-form-item>
    
    </a-form>
  </a-drawer>
</template>
