<script lang="ts" setup>
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';
import axios from 'axios';
import { toast } from 'vue3-toastify';

const searchInput = ref('');
const dateInput = ref([]);

const radioOptopns = [
  {
    id: 1,
    value: 'order',
    label: 'Поиск по заявке',
  },
  {
    id: 2,
    value: 'INN',
    label: 'Поиск по ИНН',
  },
];

const radioInput = ref(radioOptopns[0]);

const formatDate = (date: string) =>
  date.split('T')[0].split('-').reverse().join('.');

const find = async () => {
  try {
    const { data } = await axios.post(
      `${import.meta.env.VITE_API_URL}/search`,
      {
        value: searchInput.value,
        type: radioInput.value.value,
        start_date: formatDate(dateInput.value[0].toISOString()),
        end_date: formatDate(dateInput.value[1].toISOString()),
      },
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
    );
  } catch (error) {
    toast.error('Произошла ошибка на сервере...');
  }
};
</script>

<template>
  <section class="w-full py-8 flex flex-col gap-8">
    <BaseRadio v-model="radioInput" :options="radioOptopns" />

    <VueDatePicker v-model="dateInput" range :enableTimePicker="false" />

    <BaseInput v-model="searchInput" @keyup.enter="find">
      <template #label> Поиск: </template>
    </BaseInput>
    <BaseButton class="max-w-sm" @click="find"> Найти </BaseButton>
  </section>
</template>
