export const useRequestWeather = async (): Promise<WeatherData | null> => {
  const config = useRuntimeConfig();
  const apiKey = config.public.owmApiKey;
  const params = {
    appid: apiKey,
    lat: 35.658397,
    lon: 139.7112221,
    units: 'metric',
    lang: 'ja',
  };
  const { data, pending, error, refresh } = await useAsyncData(
    'weather',
    () => $fetch<WeatherData>(`https://api.openweathermap.org/data/2.5/weather`, { params: params })
  );
  console.log(error);
  return data.value;
}

type WeatherData = {
  weather: {
    id: number;
    main: string;
    description: string;
    icon: string;
  };
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };
  wind: {
    speed: number;
    deg: number;
  };
  sys: {
    country: string;
    sunrise: number;
    sunset: number;
  };
  name: string;
}
