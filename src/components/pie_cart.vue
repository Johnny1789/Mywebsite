<script setup lang="ts">
import {Pie} from 'vue-chartjs'
import {Chart as ChartJS, ArcElement, Tooltip, Legend} from 'chart.js'

ChartJS.register(ArcElement, Tooltip, Legend)

const users = [
  {month: 'Jan', allUser: 100},
  {month: 'Feb', allUser: 130},
  {month: 'Apr', allUser: 228 },
]
const colors = {
  allUser: '#2a89e5',
  newUser: '#84e52a',
 
  Jan: '#2a89e5',
  Feb: '#84e52a',

  Apr: '#fa8383',
}

const extrackData = (data: any[]) => {
  const dataToShow = []
  const labels = Object.keys(data[0]).splice(1, 3)

  for (let i of labels) {
    dataToShow.push({
      label: i,
      backgroundColor: data.map((x: any) => colors[x.month]),
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
  <Pie :data="chartData"
       :options="chartOptions"/>
</template>

<style scoped>

</style>