<script setup lang="ts">
import { ref } from "vue";
import Home from "../Pages/Home.vue";
import manage_food from "../Pages/manageitem/manage_food.vue";
const isOpen = ref(false);
</script>
<template>
  <div class="relative min-h-screen lg:flex">
    <header class="text-red-500 bg-gray-600 lg:hidden">
      <div class="container flex items-center justify-between p-4 mx-auto">
        <a href="#" class="text-white">
          <img
            src="https://png.pngtree.com/png-clipart/20220903/ourmid/pngtree-chef-restaurant-logo-png-image_6136204.png"
            alt=""
            class="w-16 h-16"
          />
        </a>

        <button
          @click="isOpen = !isOpen"
          class="p-2 text-white rounded-lg focus:outline-none hover:bg-gray-300"
        >
          <svg
            v-show="!isOpen"
            xmlns="http://www.w3.org/2000/svg"
            class="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>

          <svg
            v-show="isOpen"
            class="w-6 h-6 transition duration-200 ease-in-out"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </header>

    <div
      v-cloak
      :class="isOpen ? 'block' : 'hidden'"
      @click="isOpen = false"
      class="fixed inset-0 z-20 transition-opacity bg-black opacity-30 lg:hidden"
    ></div>

    <aside
      id="sidebar"
      :class="isOpen ? 'translate-x-0 ease-in' : '-translate-x-full ease-out'"
      class="fixed inset-y-0 left-0 z-30 flex flex-col w-60 min-h-screen space-y-6 overflow-y-auto text-gray-100 transition duration-200 transform bg-gray-600 lg:translate-x-0 lg:relative lg:inset-0"
    >
      <div class="flex flex-col items-start flex-1">
        <a
          href="#"
          class="flex items-center justify-center w-full p-5 lg:p-0 lg:h-20 font-bold text-white truncate whitespace-nowrap mt-5"
        >
          <img
            src="https://png.pngtree.com/png-clipart/20220903/ourmid/pngtree-chef-restaurant-logo-png-image_6136204.png"
            alt=""
            class="w-20 h-20"
          />
        </a>

        <nav class="flex flex-col items-start">
          <Router-Link
            to="/"
            class="p-3 px-8 transition-colors duration-300 group w-72 hover:bg-blue-600 flex gap-2"
          >
            <svg
              width="25"
              height="23"
              viewBox="0 0 576 512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="currentColor"
                d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0M571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93"
              />
            </svg>
            <span class="pt-1">ໜ້າຫຼັກ</span>
          </Router-Link>
          <Router-Link
            to="/sale"
            href="/extention"
            class="p-3 px-8 transition-colors duration-300 w-72 group hover:bg-blue-600 flex gap-2"
          >
            <svg
              width="26"
              height="24"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#ffff"
                d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l.5 2H5V5zM6 5v2h2V5zm3 0v2h2V5zm3 0v2h1.36l.5-2zm1.11 3H12v2h.61zM11 8H9v2h2zM8 8H6v2h2zM5 8H3.89l.5 2H5zm0 5a1 1 0 1 0 0 2a1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0a2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2a1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0a2 2 0 0 1-4 0"
              />
            </svg>
            <span class="mt-1">ຂາຍ</span>
          </Router-Link>
          <details class="group [&_summary::-webkit-details-marker]:hidden">
            <summary
              class="flex gap-2 cursor-pointer items-center w-72 px-8 p-2 text-white hover:bg-blue-600"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="#ffff"
                  d="M18.06 23h1.66c.84 0 1.53-.65 1.63-1.47L23 5.05h-5V1h-1.97v4.05h-4.97l.3 2.34c1.71.47 3.31 1.32 4.27 2.26c1.44 1.42 2.43 2.89 2.43 5.29zM1 22v-1h15.03v1c0 .54-.45 1-1.03 1H2c-.55 0-1-.46-1-1m15.03-7C16.03 7 1 7 1 15zM1 17h15v2H1z"
                />
              </svg>
              <span class="text-lg text-white font-medium"> ເມນູ </span>

              <span
                class="shrink-0 transition duration-300 group-open:-rotate-180"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
              </span>
            </summary>

            <ul class="space-y-1 px-6">
              <li>
                <router-link
                  to="/manage_food"
                  href=""
                  class="block px-4 py-3 text-md font-medium text-white hover:bg-blue-500 w-full"
                >
                  ຈັດການອາຫານ
                </router-link>
              </li>

              <li>
                <router-link
                  to="/manage_drink"
                  href=""
                  class="block px-4 py-3 text-md font-medium text-white hover:bg-blue-500"
                >
                  ຈັດການເຄື່ອງດື່ມ
                </router-link>
              </li>
            </ul>
          </details>
          <details class="group [&_summary::-webkit-details-marker]:hidden">
            <summary
              class="flex gap-2 cursor-pointer items-center w-72 px-8 p-2 text-white hover:bg-blue-600"
            >
              <svg
                width="27"
                height="25"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="#ffff"
                  d="M3 18.385V8.773q0-.51.28-.913q.28-.404.74-.59l7.384-2.95q.292-.132.596-.132t.596.131l7.385 2.95q.46.187.74.59q.279.404.279.914v9.612q0 .67-.472 1.143q-.472.472-1.143.472H16v-7.385q0-.269-.173-.442T15.385 12h-6.77q-.269 0-.442.173T8 12.615V20H4.615q-.67 0-1.143-.472Q3 19.056 3 18.385M9.558 20v-1.538h1.538V20zm1.673-3v-1.538h1.538V17zm1.673 3v-1.538h1.538V20z"
                />
              </svg>
              <span class="text-lg text-white font-medium"> ສະຕ໋ອກ </span>

              <span
                class="shrink-0 transition duration-300 group-open:-rotate-180"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
              </span>
            </summary>

            <ul class="space-y-1 px-4">
              <li>
                <Router-Link
                  to="/stock_remain"
                  href=""
                  class="block px-4 py-3 text-md font-medium text-white hover:bg-blue-500 w-full"
                >
                  ສະຕ໋ອກຄົງເຫຼືອ
                </Router-Link>
              </li>

              <li>
                <Router-Link
                  to="/product_boken"
                  href=""
                  class="block px-4 py-3 text-md font-medium text-white hover:bg-blue-500 w-full"
                >
                  ຈັດການສີນຄ້າເສຍຫາຍ
                </Router-Link>
              </li>
            </ul>
          </details>
          <details class="group [&_summary::-webkit-details-marker]:hidden">
            <summary
              class="flex gap-2 cursor-pointer items-center w-72 px-8 p-2 text-white hover:bg-blue-600"
            >
              <svg
                width="25"
                height="24"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="#ffff"
                  d="M12 12.5a3.5 3.5 0 1 0 0 7a3.5 3.5 0 0 0 0-7M10.5 16a1.5 1.5 0 1 1 3 0a1.5 1.5 0 0 1-3 0"
                />
                <path
                  fill="#ffff"
                  d="M17.526 5.116L14.347.659L2.658 9.997L2.01 9.99V10H1.5v12h21V10h-.962l-1.914-5.599zM19.425 10H9.397l7.469-2.546l1.522-.487zM15.55 5.79L7.84 8.418l6.106-4.878zM3.5 18.169v-4.34A3.008 3.008 0 0 0 5.33 12h13.34a3.009 3.009 0 0 0 1.83 1.83v4.34A3.009 3.009 0 0 0 18.67 20H5.332A3.01 3.01 0 0 0 3.5 18.169"
                />
              </svg>
              <span class="text-lg text-white font-medium"> ເງີນແຮ </span>

              <span
                class="shrink-0 transition duration-300 group-open:-rotate-180"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
              </span>
            </summary>

            <ul class="space-y-1 px-4">
              <li>
                <Router-Link
                  to="/money_save"
                  href=""
                  class="block px-4 py-3 text-md font-medium text-white hover:bg-blue-500 w-full"
                >
                  ຈັດການເງີນແຮ
                </Router-Link>
              </li>

              <li>
                <Router-Link
                  to="/type_money"
                  href=""
                  class="block px-4 py-3 text-md font-medium text-white hover:bg-blue-500 w-full"
                >
                  ປະເພດເງີນແຮ
                </Router-Link>
              </li>
            </ul>
          </details>
          <details class="group [&_summary::-webkit-details-marker]:hidden">
            <summary
              class="flex gap-2 cursor-pointer items-center w-72 px-8 p-2 text-white hover:bg-blue-600"
            >
              <svg
                width="25"
                height="24"
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fill="#ffff" d="M8 14h11v2H8Zm0 5h13v2H8Z" />
                <path
                  fill="#ffff"
                  d="M28 4H4a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2m0 2v2H4V6ZM4 26V10h24v16Z"
                />
              </svg>
              <span class="text-lg text-white font-medium"> ລົງບັນຊີ </span>

              <span
                class="shrink-0 transition duration-300 group-open:-rotate-180"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
              </span>
            </summary>

            <ul class="space-y-1 px-4">
              <li>
                <Router-Link
                  to="/daily_account"
                  href=""
                  class="block px-4 py-3 text-md font-medium text-white hover:bg-blue-500 w-full"
                >
                  ບັນຊີປະຈຳວັນ
                </Router-Link>
              </li>

              <li>
                <Router-Link
                  to="/pattern_recive"
                  href=""
                  class="block px-4 py-3 text-md font-medium text-white hover:bg-blue-500 w-full"
                >
                  ລາຍອອກລາຍຈ່າຍ
                </Router-Link>
              </li>
            </ul>
          </details>
          <details class="group [&_summary::-webkit-details-marker]:hidden">
            <summary
              class="flex gap-2 cursor-pointer items-center w-72 px-8 p-2 text-white hover:bg-blue-600"
            >
              <svg
                width="27"
                height="24"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g
                  fill="none"
                  stroke="#ffff"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                >
                  <path
                    d="M8 5H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h5.697M18 14v4h4m-4-7V7a2 2 0 0 0-2-2h-2"
                  />
                  <path
                    d="M8 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v0a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2m6 13a4 4 0 1 0 8 0a4 4 0 1 0-8 0m-6-7h4m-4 4h3"
                  />
                </g>
              </svg>
              <span class="text-lg text-white font-medium"> ລາຍງານ </span>

              <span
                class="shrink-0 transition duration-300 group-open:-rotate-180"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
              </span>
            </summary>

            <ul class="space-y-1 px-4">
              <li>
                <Router-Link
                  to="/report/sale"
                  class="block px-4 py-3 text-md font-medium text-white hover:bg-blue-500 w-full"
                >
                  ລາຍງານຍອດຂາຍ
                </Router-Link>
              </li>

              <li>
                <Router-Link
                  to="/report/stock"
                  href=""
                  class="block px-4 py-3 text-md font-medium text-white hover:bg-blue-500 w-full"
                >
                  ລາຍງານສະຕ໋ອກສີນຄ້າ
                </Router-Link>
              </li>
            </ul>
          </details>
          <details class="group [&_summary::-webkit-details-marker]:hidden">
            <summary
              class="flex gap-2 cursor-pointer items-center w-72 px-8 p-2 text-white hover:bg-blue-600"
            >
              <svg
                width="25"
                height="24"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="#ffff"
                  d="M1 1v10h22V1Zm12 6H4V5h9Zm3 0a1 1 0 1 1 1-1a1 1 0 0 1-1 1m3 0a1 1 0 1 1 1-1a1 1 0 0 1-1 1m3.69 11.37l1.14-1l-1-1.73l-1.45.49a3.647 3.647 0 0 0-1.08-.63L20 14h-2l-.3 1.49a3.646 3.646 0 0 0-1.08.63l-1.45-.49l-1 1.73l1.14 1a3.337 3.337 0 0 0 0 1.26l-1.14 1l1 1.73l1.45-.49a3.645 3.645 0 0 0 1.08.63L18 24h2l.3-1.49a3.646 3.646 0 0 0 1.08-.63l1.45.49l1-1.73l-1.14-1a3.39 3.39 0 0 0 0-1.27M19 21a2 2 0 1 1 2-2a2.006 2.006 0 0 1-2 2"
                />
                <path
                  fill="#ffff"
                  d="M12 19H4v-2h8.294a7.008 7.008 0 0 1 3.114-4H1v10h12.26A6.962 6.962 0 0 1 12 19"
                />
              </svg>
              <span class="text-lg text-white font-medium"> ຈັດການຂໍ້ມູນ </span>

              <span
                class="shrink-0 transition duration-300 group-open:-rotate-180"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
              </span>
            </summary>

            <ul class="space-y-1 px-4">
              <li>
                <Router-Link
                  to="/manage_type"
                  href=""
                  class="block px-4 py-3 text-md font-medium text-white hover:bg-blue-500 w-full"
                >
                  ຈັດການໝວດໝູ່
                </Router-Link>
              </li>

              <li>
                <Router-Link
                  to="/manage_unit"
              
                  class="block px-4 py-3 text-md font-medium text-white hover:bg-blue-500 w-full"
                >
                  ຈັດການຫົວໜວ່ຍ
                </Router-Link>
              </li>

              <li>
                <Router-Link
                  to="/manage_table"
                  href=""
                  class="block px-4 py-3 text-md font-medium text-white hover:bg-blue-500 w-full"
                >
                  ຈັດການໂຕະ
                </Router-Link>
              </li>
            </ul>
          </details>
          <details class="group [&_summary::-webkit-details-marker]:hidden">
            <summary
              class="flex gap-2 cursor-pointer items-center w-72 px-8 p-2 text-white hover:bg-blue-600"
            >
              <svg
                width="25"
                height="24"
                viewBox="0 0 48 48"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <mask id="ipTFileStaffOne0">
                    <g
                      fill="none"
                      stroke="#fff"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="4"
                    >
                      <path
                        d="M40 23v-9L31 4H10a2 2 0 0 0-2 2v36a2 2 0 0 0 2 2h10"
                      />
                      <circle cx="34" cy="32" r="4" fill="#555" />
                      <path d="M42 44a8 8 0 1 0-16 0m4-40v10h10" />
                    </g>
                  </mask>
                </defs>
                <path
                  fill="#ffff"
                  d="M0 0h48v48H0z"
                  mask="url(#ipTFileStaffOne0)"
                />
              </svg>
              <span class="text-lg text-white font-medium">ພະນັກງານ </span>

              <span
                class="shrink-0 transition duration-300 group-open:-rotate-180"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
              </span>
            </summary>

            <ul class="mt-2 space-y-1 px-4">
              <li>
                <Router-Link
                  to="/manage_staff"
                  href=""
                  class="block px-4 py-3 text-md font-medium text-white hover:bg-blue-500 w-full"
                >
                  ຈັດການພະນັກງານ
                </Router-Link>
              </li>

              <li>
                <Router-Link
                  to="/type_staff"
                  href=""
                  class="block px-4 py-3 text-md font-medium text-white hover:bg-blue-500 w-full"
                >
                  ປະເພດພະນັກງານ
                </Router-Link>
              </li>

              <li>
                <Router-Link
                  to="/position_staff"
                  href=""
                  class="block px-4 py-3 text-md font-medium text-white hover:bg-blue-500 w-full"
                >
                  ຕຳແໜ່ງພະນັກງານ
                </Router-Link>
              </li>
            </ul>
          </details>
          <details class="group [&_summary::-webkit-details-marker]:hidden">
            <summary
              class="flex gap-2 cursor-pointer items-center w-72 px-8 p-2 text-white hover:bg-blue-600"
            >
              <svg
                width="23"
                height="23"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="#ffff"
                  d="M9.467 0c3.184 0 5.765 2.566 5.765 5.732a5.706 5.706 0 0 1-2.02 4.358c.27.134.516.268.738.403c.478.29.974.65 1.49 1.079a.685.685 0 0 1 .086.969a.694.694 0 0 1-.975.086a11.05 11.05 0 0 0-1.322-.96a11.403 11.403 0 0 0-1.405-.703a5.76 5.76 0 0 1-2.357.5a5.767 5.767 0 0 1-2.58-.605l-.042.02c-1.95.756-3.373 1.874-4.292 3.358c-.922 1.489-1.299 3.153-1.13 5.014a.689.689 0 0 1-.628.746a.69.69 0 0 1-.75-.623c-.195-2.152.249-4.113 1.33-5.858c.95-1.536 2.347-2.73 4.174-3.582a5.694 5.694 0 0 1-1.846-4.202C3.703 2.566 6.283 0 9.467 0m7.401 12.693c.38 0 .688.31.688.691v1.752h1.752a.69.69 0 0 1 .692.689a.69.69 0 0 1-.692.687h-1.752v1.753a.69.69 0 0 1-.688.691a.69.69 0 0 1-.688-.691v-1.753h-1.752a.69.69 0 0 1-.692-.687c0-.38.31-.688.692-.688l1.752-.001v-1.752a.69.69 0 0 1 .688-.691m-7.4-11.317c-2.42 0-4.382 1.95-4.382 4.356c0 2.406 1.962 4.357 4.381 4.357c2.42 0 4.381-1.95 4.381-4.357c0-2.406-1.961-4.356-4.38-4.356"
                />
              </svg>
              <span class="text-lg text-white font-medium"> ຜູ້ໃຊ້ </span>

              <span
                class="shrink-0 transition duration-300 group-open:-rotate-180"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
              </span>
            </summary>

            <ul class="mt-2 space-y-1 px-4">
              <li>
                <Router-Link
                  to="/user"
                  href=""
                  class="block px-4 py-3 text-md font-medium text-white hover:bg-blue-500 w-full"
                >
                  ຜູ້ໃຊ້ງານລະບົບ
                </Router-Link>
              </li>

              <li>
                <Router-Link
                  to="/role"
                  href=""
                  class="block px-4 py-3 text-md font-medium text-white hover:bg-blue-500 w-full"
                >
                  ສິດນຳໃຊ້ລະບົບ
                </Router-Link>
              </li>
            </ul>
          </details>
          <a
            href="/extention"
            class="p-3 px-8 transition-colors duration-300 w-72 group hover:bg-blue-600 flex gap-2"
          >
            <svg
              class="w-5 h-5 opacity-100 group-hover:stroke-blue-700"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                class="group-hover:stroke-blue-700"
                d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
                stroke="#ffff"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                class="group-hover:stroke-blue-700"
                d="M19.4 15C19.2669 15.3016 19.2272 15.6362 19.286 15.9606C19.3448 16.285 19.4995 16.5843 19.73 16.82L19.79 16.88C19.976 17.0657 20.1235 17.2863 20.2241 17.5291C20.3248 17.7719 20.3766 18.0322 20.3766 18.295C20.3766 18.5578 20.3248 18.8181 20.2241 19.0609C20.1235 19.3037 19.976 19.5243 19.79 19.71C19.6043 19.896 19.3837 20.0435 19.1409 20.1441C18.8981 20.2448 18.6378 20.2966 18.375 20.2966C18.1122 20.2966 17.8519 20.2448 17.6091 20.1441C17.3663 20.0435 17.1457 19.896 16.96 19.71L16.9 19.65C16.6643 19.4195 16.365 19.2648 16.0406 19.206C15.7162 19.1472 15.3816 19.1869 15.08 19.32C14.7842 19.4468 14.532 19.6572 14.3543 19.9255C14.1766 20.1938 14.0813 20.5082 14.08 20.83V21C14.08 21.5304 13.8693 22.0391 13.4942 22.4142C13.1191 22.7893 12.6104 23 12.08 23C11.5496 23 11.0409 22.7893 10.6658 22.4142C10.2907 22.0391 10.08 21.5304 10.08 21V20.91C10.0723 20.579 9.96512 20.258 9.77251 19.9887C9.5799 19.7194 9.31074 19.5143 9 19.4C8.69838 19.2669 8.36381 19.2272 8.03941 19.286C7.71502 19.3448 7.41568 19.4995 7.18 19.73L7.12 19.79C6.93425 19.976 6.71368 20.1235 6.47088 20.2241C6.22808 20.3248 5.96783 20.3766 5.705 20.3766C5.44217 20.3766 5.18192 20.3248 4.93912 20.2241C4.69632 20.1235 4.47575 19.976 4.29 19.79C4.10405 19.6043 3.95653 19.3837 3.85588 19.1409C3.75523 18.8981 3.70343 18.6378 3.70343 18.375C3.70343 18.1122 3.75523 17.8519 3.85588 17.6091C3.95653 17.3663 4.10405 17.1457 4.29 16.96L4.35 16.9C4.58054 16.6643 4.73519 16.365 4.794 16.0406C4.85282 15.7162 4.81312 15.3816 4.68 15.08C4.55324 14.7842 4.34276 14.532 4.07447 14.3543C3.80618 14.1766 3.49179 14.0813 3.17 14.08H3C2.46957 14.08 1.96086 13.8693 1.58579 13.4942C1.21071 13.1191 1 12.6104 1 12.08C1 11.5496 1.21071 11.0409 1.58579 10.6658C1.96086 10.2907 2.46957 10.08 3 10.08H3.09C3.42099 10.0723 3.742 9.96512 4.0113 9.77251C4.28059 9.5799 4.48572 9.31074 4.6 9C4.73312 8.69838 4.77282 8.36381 4.714 8.03941C4.65519 7.71502 4.50054 7.41568 4.27 7.18L4.21 7.12C4.02405 6.93425 3.87653 6.71368 3.77588 6.47088C3.67523 6.22808 3.62343 5.96783 3.62343 5.705C3.62343 5.44217 3.67523 5.18192 3.77588 4.93912C3.87653 4.69632 4.02405 4.47575 4.21 4.29C4.39575 4.10405 4.61632 3.95653 4.85912 3.85588C5.10192 3.75523 5.36217 3.70343 5.625 3.70343C5.88783 3.70343 6.14808 3.75523 6.39088 3.85588C6.63368 3.95653 6.85425 4.10405 7.04 4.29L7.1 4.35C7.33568 4.58054 7.63502 4.73519 7.95941 4.794C8.28381 4.85282 8.61838 4.81312 8.92 4.68H9C9.29577 4.55324 9.54802 4.34276 9.72569 4.07447C9.90337 3.80618 9.99872 3.49179 10 3.17V3C10 2.46957 10.2107 1.96086 10.5858 1.58579C10.9609 1.21071 11.4696 1 12 1C12.5304 1 13.0391 1.21071 13.4142 1.58579C13.7893 1.96086 14 2.46957 14 3V3.09C14.0013 3.41179 14.0966 3.72618 14.2743 3.99447C14.452 4.26276 14.7042 4.47324 15 4.6C15.3016 4.73312 15.6362 4.77282 15.9606 4.714C16.285 4.65519 16.5843 4.50054 16.82 4.27L16.88 4.21C17.0657 4.02405 17.2863 3.87653 17.5291 3.77588C17.7719 3.67523 18.0322 3.62343 18.295 3.62343C18.5578 3.62343 18.8181 3.67523 19.0609 3.77588C19.3037 3.87653 19.5243 4.02405 19.71 4.21C19.896 4.39575 20.0435 4.61632 20.1441 4.85912C20.2448 5.10192 20.2966 5.36217 20.2966 5.625C20.2966 5.88783 20.2448 6.14808 20.1441 6.39088C20.0435 6.63368 19.896 6.85425 19.71 7.04L19.65 7.1C19.4195 7.33568 19.2648 7.63502 19.206 7.95941C19.1472 8.28381 19.1869 8.61838 19.32 8.92V9C19.4468 9.29577 19.6572 9.54802 19.9255 9.72569C20.1938 9.90337 20.5082 9.99872 20.83 10H21C21.5304 10 22.0391 10.2107 22.4142 10.5858C22.7893 10.9609 23 11.4696 23 12C23 12.5304 22.7893 13.0391 22.4142 13.4142C22.0391 13.7893 21.5304 14 21 14H20.91C20.5882 14.0013 20.2738 14.0966 20.0055 14.2743C19.7372 14.452 19.5268 14.7042 19.4 15V15Z"
                fill="#ffff"
                fill-opacity="0.2"
                stroke="#ffff"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <span class="mt-1">ຕັ້ງຄ່າ</span>
          </a>
        </nav>
      </div>
    </aside>

    <main
      id="content"
      class="flex-1 pb-12 space-y-6 overflow-y-auto bg-gray-100 lg:h-screen md:space-y-6"
    >
      <header
        class="flex items-center justify-between h-20 px-6 bg-white border-b"
      >
        <div class="relative flex items-center">
          <span class="absolute inset-y-0 left-0 flex items-center pl-3">
            <svg class="w-5 h-5 text-gray-400" viewBox="0 0 24 24" fill="none">
              <path
                d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </span>

          <input
            type="text"
            class="py-2.5 pl-10 pr-4 text-gray-700 placeholder-gray-400 bg-white border border-transparent border-gray-200 rounded-lg sm:w-auto w-36 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
            placeholder="Search"
          />
        </div>

        <div class="flex items-center">
          <div class="relative">
            <button
              class="transition-colors duration-300 rounded-lg sm:px-4 sm:py-2 focus:outline-none hover:bg-gray-100"
              @click="dropdownOpen = !dropdownOpen"
            >
              <span class="sr-only">User Menu</span>
              <div class="flex items-center md:-mx-2">
                <div
                  class="hidden md:mx-2 md:flex md:flex-col md:items-end md:leading-tight"
                >
                  <span class="font-semibold text-sm text-gray-800"
                    >Johnny</span
                  >
                  <span class="text-sm text-gray-600">Adminstator</span>
                </div>

                <img
                  class="flex-shrink-0 w-10 h-10 overflow-hidden bg-gray-100 rounded-full md:mx-2"
                  src="https://scontent.fvte5-1.fna.fbcdn.net/v/t39.30808-6/276316195_646723696558304_6629353620202279010_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=9c7eae&_nc_eui2=AeEO2ohsKojn8EO2CVLLrZi8KO5vDRQ_BT8o7m8NFD8FP10i1JDhpODpRprtlzpZOIzNHbc9cQDZQ-ZJ4KhMy4Nz&_nc_ohc=2qTyLHVjVmQAX8nch_F&_nc_ht=scontent.fvte5-1.fna&oh=00_AfANVrXA7sfwR8o_QcNUq9wsvr2SBaRb4UcEu73Gv_FEPQ&oe=65ABBAE9"
                  alt="user profile photo"
                />
              </div>
            </button>

            <transition
              enter-active-class="transition duration-200 ease-out"
              enter-from-class="transform scale-95 opacity-0"
              enter-to-class="transform scale-100 opacity-100"
              leave-active-class="transition duration-75 ease-in"
              leave-from-class="transform scale-100 opacity-100"
              leave-to-class="transform scale-95 opacity-0"
            >
              <div
                class="absolute right-0 z-50 w-56 p-2 bg-white border rounded-lg top-16 lg:top-20"
                v-show="dropdownOpen"
              >
                <div
                  class="px-4 py-2 text-gray-800 transition-colors duration-300 rounded-lg cursor-pointer hover:bg-gray-100"
                >
                  Profile
                </div>
                <div
                  class="px-4 py-2 text-gray-800 transition-colors duration-300 rounded-lg cursor-pointer hover:bg-gray-100"
                >
                  Messages
                </div>
                <div
                  class="px-4 py-2 text-gray-800 transition-colors duration-300 rounded-lg cursor-pointer hover:bg-gray-100"
                >
                  To-Do's
                </div>
              </div>
            </transition>
          </div>

          <div
            v-show="dropdownOpen"
            class="fixed inset-0 z-30"
            @click="dropdownOpen = false"
          ></div>

          <button
            class="relative p-2 mx-3 text-gray-400 transition-colors duration-300 rounded-full hover:bg-gray-100 hover:text-gray-600 focus:bg-gray-100"
          >
            <span class="sr-only">Notifications</span>
            <span
              class="absolute top-0 right-0 w-2 h-2 mt-1 mr-2 bg-blue-700 rounded-full"
            ></span>
            <span
              class="absolute top-0 right-0 w-2 h-2 mt-1 mr-2 bg-blue-700 rounded-full animate-ping"
            ></span>

            <svg
              aria-hidden="true"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
          </button>

          <button
            class="p-2 text-gray-400 transition-colors duration-300 rounded-full focus:outline-none hover:bg-gray-100 hover:text-gray-600 focus:bg-gray-100"
          >
            <span class="sr-only">Log out</span>

            <svg
              aria-hidden="true"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
              />
            </svg>
          </button>
        </div>
      </header>
      <slot>
        <Home />
        <manage-food></manage-food>
      </slot>
    </main>
  </div>
</template>
