<script setup lang="ts">
const props = defineProps<{
  code: string
}>();

const iconUrl = `https://openweathermap.org/img/wn/${props.code}@2x.png`;
</script>

<template>
  <img :src="iconUrl" />
</template>
