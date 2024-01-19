<template>
  <RouterView @language-changed="handleLanguageChanged" :spanish="es" :english="en"/>
</template>

<script setup>
import { ref } from 'vue';

const es = ref(true);
const en = ref(false);

const handleLanguageChanged = ({ es: newEs, en: newEn }) => {
  // Actualiza el estado según sea necesario
  es.value = newEs;
  en.value = newEn;
};
</script>
