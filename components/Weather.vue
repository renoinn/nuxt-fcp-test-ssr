<script setup lang="ts">
const result = await useRequestWeather();
console.log(result);
const weather = result.weather[0];
const temp = result.main;
const wind = result.wind;
</script>

<template>
  <div>
    <WIcon :code="weather.icon" />
    <h2>{{ weather.description }}</h2>
    <p>気温:{{ temp.temp }}&#8451;</p>
    <p>気圧:{{ temp.pressure }}hPa</p>
    <p>風速:{{ wind.speed }}m/s</p>
  </div>
</template>
