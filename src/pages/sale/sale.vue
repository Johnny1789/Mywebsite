<script lang="ts" setup></script>

<template>
  <div class="flex flex-col gap-1 md:flex-row px-2 ">
    <div class="flex-auto md:w-96 sm:w-fll bg-gray-300 rounded-md mb-4">
      <div class="mt-8">
        <ul class="flex justify-center items-center">
          <li class="py-2 px-4 bg-gray-300 font-bold rounded-md">
            <RouterLink to="/drink" class="bg-orange-400 px-4 py-1 rounded-md"
              >ເມນູທັງໝົດ</RouterLink
            >
          </li>
          <li class="py-2 px-4 bg-gray-300 font-bold rounded-md">
            <RouterLink to="/drink" class="bg-orange-400 px-4 py-1 rounded-md"
              >ອາຫານ</RouterLink
            >
          </li>
          <li class="py-2 px-4 bg-gray-300 font-bold rounded-md">
            <RouterLink to="/drink" class="bg-orange-400 px-4 py-1 rounded-md"
              >ເຄື່ອງດື່ມ</RouterLink
            >
          </li>
          <li class="py-2 px-4 bg-gray-300 font-bold rounded-md">
            <RouterLink to="/drink" class="bg-orange-400 px-2 py-1 rounded-md"
              >ຂອງຫວານ</RouterLink
            >
          </li>
        </ul>
      </div>
      <section class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-2 px-2 ml-1.5">
        <div class="card w-52 h-52 bg-white shadow-xl mt-2">
          <figure>
            <img
              class="w-full h-24"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDlg5HTvNXIwe4vP79vHHkSp4zOUuCRnuHSg&usqp=CAU"
            />
          </figure>
          <div class="card-body mx-4">
            <h2 class="card-title">ຍຳສະລັດ</h2>

            <h2 class="font-bold">Price:20000 ກີບ</h2>
            <div class="card-actions justify-end">
              <a-button class="bg-green-500" @click="onAddToCart(food)">
                ສັ່ງອາຫານ
              </a-button>
            </div>
          </div>
        </div>
        <div class="card w-52 h-52 bg-white shadow-xl mt-2">
          <figure>
            <img
              class="w-full h-24"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDlg5HTvNXIwe4vP79vHHkSp4zOUuCRnuHSg&usqp=CAU"
            />
          </figure>
          <div class="card-body mx-4">
            <h2 class="card-title">ຍຳສະລັດ</h2>

            <h2 class="font-bold">Price:20000 ກີບ</h2>
            <div class="card-actions justify-end">
              <a-button class="bg-green-500" @click="onAddToCart(food)">
                ສັ່ງອາຫານ
              </a-button>
            </div>
          </div>
        </div>
        <div
            class="card w-52 h-52 bg-white shadow-xl mt-2"
          >
            <figure>
              <img class="w-full h-24" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDlg5HTvNXIwe4vP79vHHkSp4zOUuCRnuHSg&usqp=CAU" />
            </figure>
            <div class="card-body mx-4">
              <h2 class="card-title">ຍຳສະລັດ</h2>
              
              <h2 class="font-bold">Price:20000 ກີບ</h2>
              <div class="card-actions justify-end">
                <a-button class="bg-green-500" @click="onAddToCart(food)">
                  ສັ່ງອາຫານ
                </a-button>
              </div>
            </div>
          </div>
      </section>
    </div>
    <div class="flex-auto md:w-28 bg-gray-200 rounded-md h-screen">
      <div class="text-center font-bold mt-3 text-xl">ລາຍການອາຫານທີສັ່ງ</div>
      <div
        style="height: calc(75vh - 160px); overflow-y: auto"
        class="no-scrollbar"
      >
        <div class="flex justify-between m-1 bg-base-200 p-3 py-1">
          <div class="flex gap-3">
            <div>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDlg5HTvNXIwe4vP79vHHkSp4zOUuCRnuHSg&usqp=CAU"
                alt=""
                class="w-32 h-16"
              />
            </div>
            <div class="flex flex-col justify-between">
              <div>ຍຳສະລັດ</div>
              <div>20000kip <span>X 1 </span></div>
            </div>
          </div>
          <div class="flex flex-col justify-between">
            <div>20000kip kip</div>
            <div @click="removedrink(index)"><TrashIcon /></div>
          </div>
        </div>
      </div>
      <div class="mx-5"><a-divider style="height: 2px" class="bg-red-600" /></div>
      <div class="flex justify-between mx-10 font-bold">
        <div>ລວມ</div>
        <div>20000 kip</div>
      </div>

      <div class="flex justify-between mx-10 my-2 font-bold">
        <div>vat 10%</div>
        <div>23000 kip</div>
      </div>

      <div class="flex justify-between mx-10 font-bold">
        <div>ສ່ວນຫຼຸດ</div>
        <div>23000 kip</div>
      </div>

      <div class="flex justify-between mx-10 my-2 font-bold">
        <div class="text-xl">ລວມທັງໝົດ</div>
        <div>23000 kip</div>
      </div>
      <div class="mx-5"><a-divider style="height: 2px" class="bg-red-600" /></div>
      <div class="flex items-center justify-center gap-6">
        <div><a-button class="bg-green-500 w-44 h-10 ">ຊຳລະເງີນ</a-button></div>
        <div>
          <a-button class="bg-red-500 w-44 h-10">Clear</a-button>
        </div>
      </div>
    </div>
  </div>
</template>
