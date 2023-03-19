<script setup>
defineProps(['data']);

const getStatus = (status) => {
  switch (true) {
    case status.includes('Закрыт'):
      return 'bg-green-300';
    case status.includes('Удалена') || status.includes('Тест'):
      return 'bg-red-300';
    default:
      return 'bg-yellow-300';
  }
};
</script>

<template>
  <div
    class="shadow-md flex gap-2 px-2 py-4 bg-rtk-grey text-rtk-black rounded-lg"
  >
    <div class="date">Дата: {{ data.date }}</div>
    <div class="date">Номер заявки: {{ data['Номер заявки'] }}</div>
    <div class="date">Клиент: {{ data['Клиент*'] }}</div>
    <div class="date">ИНН: {{ data['ИНН'] }}</div>
    <div :class="getStatus(data['Статус'])">Статус: {{ data['Статус'] }}</div>
  </div>
</template>
