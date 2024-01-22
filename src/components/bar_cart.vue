<script setup lang="ts">
import {Bar} from 'vue-chartjs'
import {Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale} from 'chart.js'
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

const users = [
  {month: 'Jan', ລູກຄ້າ: 100, ອໍເດີ: 30, ລາຍຮັບ: 5},
  {month: 'Feb', ລູກຄ້າ: 130, ອໍເດີ: 50, ລາຍຮັບ: 7},
  {month: 'Mar', ລູກຄ້າ: 180, ອໍເດີ: 48, ລາຍຮັບ: 0},
  {month: 'Apr', ລູກຄ້າ: 228, ອໍເດີ: 23, ລາຍຮັບ: 15},
]
const colors = {
    ລູກຄ້າ: '#2a89e5',
    ອໍເດີ: '#84e52a',
    ລາຍຮັບ: '#b2b2b2',
}

const extrackData = (data: any[]) => {
  const dataToShow = []
  const labels = Object.keys(data[0]).splice(1, 3)

  for (let i of labels) {
    dataToShow.push({
      label: i,
      backgroundColor: colors[i],
      data: data.map((x: any) => x[i]),
    })
  }

  return dataToShow
}

const chartData = {
  labels: users.map((u: any) => u.month),
  datasets: extrackData(users)
}

const chartOptions = {
  responsive: true
}
</script>

<template>
  <Bar :data="chartData"
       :options="chartOptions"/>
</template>

<style scoped>

</style>