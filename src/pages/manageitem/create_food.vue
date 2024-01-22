<script setup lang="ts">
import { reactive, ref, defineProps } from "vue";
import { PlusOutlined } from "@ant-design/icons-vue";
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
    title="ເພີ່ມຜູ້ໃຊ້"
    cancel-text="ຍົກເລີກ"
    ok-text="ບັນທຶກ"
  >
    <template #extra>
      <a-button style="margin-right: 8px" @click="onCancel">Cancel</a-button>
      <a-button class="bg-blue-500" @click="save()">Save</a-button>
    </template>
    <a-form layout="vertical">
      <a-form-item name="type" label="ໝວດໝູ່">
        <a-select :dropdown-match-select-width="false" placeholder="ປະເພດເມນູ">
          <a-select-option value="all">ເຂົ້າ</a-select-option>
          <a-select-option value="reading">ລາບ</a-select-option>
          <a-select-option value="paid">ແກງ</a-select-option>
          <a-select-option value="cancelled">ຕຳ</a-select-option>
        </a-select>
      </a-form-item>
      <a-form-item name="name" label="ຊື່">
        <a-input type="text" autocomplete="off" />
      </a-form-item>
      <div class="flex flex-1 gap-3">
        <a-form-item name="price_buy" label="ລາຄາຊື້">
          <a-input type="text" />
        </a-form-item>
        <a-form-item name="price_sale" label="ລາຂາຂາຍ">
          <a-input type="text" />
        </a-form-item>
      </div>
      <div class="flex flex-1 gap-3">
        <a-form-item name="unit_buy" label="ຫົວໜ່ວຍຊື້">
          <a-select
            :dropdown-match-select-width="false"
            placeholder="ເລືອກຫົວໜ່ວຍຊື້"
          >
            <a-select-option value="all">ຈານ</a-select-option>
            <a-select-option value="reading">ຖ້ວຍ</a-select-option>
            <a-select-option value="paid">ໂຕ</a-select-option>
            <a-select-option value="cancelled">ຖົງ</a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item name="unit_sale" label="ຫົວໜ່ວຍຂາຍ">
          <a-select
            :dropdown-match-select-width="false"
            placeholder="ເລືອກຫົວໜ່ວຍຊື້"
          >
            <a-select-option value="all">ຈານ</a-select-option>
            <a-select-option value="reading">ຖ້ວຍ</a-select-option>
            <a-select-option value="paid">ໂຕ</a-select-option>
            <a-select-option value="cancelled">ຖົງ</a-select-option>
          </a-select>
        </a-form-item>
      </div>
      <div class="flex flex-1 gap-3">
        <a-form-item name="quality/unitbuy" label="ຈຳນວນ/ຫົວໜ່ວຍຊື້">
          <a-input type="text" autocomplete="off" />
        </a-form-item>
        <a-form-item label="ຮູບພາບເມນູ">
          <a-upload action="/upload.do" list-type="picture-card">
            <div>
              <PlusOutlined />
              <div style="margin-top: 8px">Upload</div>
            </div>
          </a-upload>
        </a-form-item>
      </div>
      <div class="flex flex-1  gap-10">
        <a-form-item label="ສີນຄ້າແນະນຳ" name="is_enable">
          <a-switch
            checked-children="ປິດ"
            un-checked-children="ເປີດ"
            class="bg-blue-500"
          />
        </a-form-item>
        <a-form-item label="ສີນຄ້າຂາຍດີ" name="is_enable">
          <a-switch
            checked-children="ປິດ"
            un-checked-children="ເປີດ"
            class="bg-blue-500"
          />
        </a-form-item>
      </div>
      <div class="flex flex-1 gap-3">
        <a-form-item label="ເປີດນໍາໃຊ້" name="is_enable">
          <a-switch
            checked-children="ປິດ"
            un-checked-children="ເປີດ"
            class="bg-blue-500"
          />
        </a-form-item>
        <a-form-item name="product" label="ສີນຄ້າ">
         <a-select :dropdown-match-select-width="false" placeholder="ສີນຄ້າ" style="width: 160px;">
            <a-select-option value="all">ມີສີນຄ້າ</a-select-option>
            <a-select-option value="reading">ບໍມີສີນຄ້າ</a-select-option>
            <a-select-option option value="paid">ຂາດ</a-select-option>
          </a-select>
        </a-form-item>
      </div>
    </a-form>
  </a-drawer>
</template>
