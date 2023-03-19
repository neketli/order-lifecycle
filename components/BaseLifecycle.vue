<script setup>
defineProps(['data']);
</script>

<template>
  <div
    class="shadow-md flex gap-2 px-2 py-4 bg-rtk-grey text-rtk-black rounded-lg"
  >
    <div class="date">Дата: {{ data.date }}</div>
    <div class="date">Номер заявки: {{ data['Номер заявки'] }}</div>
    <div class="date">Клиент: {{ data['Клиент*'] }}</div>
    <div class="date">ИНН: {{ data['ИНН'] }}</div>
    <div :class="{ 'bg-yellow-300': data['Статус'] === 'В работе' }">
      Статус: {{ data['Статус'] }}
    </div>
  </div>
</template>
