<script lang="ts" setup>
import axios from 'axios';
import { toast } from 'vue3-toastify';

let isLoading = false;
let file: File;

const fileUpload = async (value: any) => {
  file = value;
};

const uploadOnServer = async () => {
  isLoading = true;
  let formData = new FormData();
  formData.append('file', file);
  console.log(formData);

  let code;
  try {
    const data = await axios.post(
      `${import.meta.env.VITE_API_URL}/files-upload`,
      formData
    );
    code = data.status;
  } catch (error: any) {
    code = error.request.status;
  }

  switch (code) {
    case 500:
      toast.error('Произошла внутренняя ошибка...', {
        autoClose: 3000,
      });
      break;
    case 415:
      toast.error('Неверный тип файла!', {
        autoClose: 3000,
      });
      break;
    default:
      toast.success('Файл успешно загружен на сервер', {
        autoClose: 3000,
      });
      break;
  }

  isLoading = false;
};
</script>

<template>
  <section>
    <h1 class="text-2xl">File upload</h1>

    <BaseFileInput @fileUpload="fileUpload">
      <template #description>
        <div class="mb-2 text-sm text-gray-500">
          Перенесите файлы с данными в эту область или
          <span class="font-bold">нажмите</span> чтобы загрузить
        </div>
        <div class="mb-2 text-xs text-gray-500">
          Файлы должен быть в формате .xlsx
        </div>
      </template>
    </BaseFileInput>
    <BaseButton @click="uploadOnServer">123</BaseButton>
  </section>
</template>
