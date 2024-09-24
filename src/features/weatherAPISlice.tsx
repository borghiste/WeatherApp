import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { addCity } from './citiesSlice';


// Define a service using a base URL and expected endpoints
export const weatherApi = createApi({
  reducerPath: 'weatherApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.openweathermap.org/' }),
  // refetchOnMountOrArgChange: 5,
  endpoints: (builder) => ({
    getCoordinatesByCityName: builder.query({
      async queryFn(arg, _queryApi, _extraOptions, fetchWithBQ) {
        
        const coordsResult = await fetchWithBQ(`geo/1.0/direct?q=${arg.name}&limit=1&appid=679ca9bd2c532d3f3daff35ae0f4c4ff`);
        if(coordsResult.error) return {error: coordsResult.error}
        else{
        const city = {
          id: arg.id,
          name: coordsResult.data[0].name,
          coords: {
            lat: coordsResult.data[0].lat,
            lon: coordsResult.data[0].lon
          }
        }
       
      }
        _queryApi.dispatch(addCity(city));
        return coordsResult.data ? city : {error: coordsResult.error}
      },
    }),
    getCityNameByCoordinates: builder.query({
      async queryFn(_arg, _queryApi, _extraOptions, fetchWithBQ) {
        // console.log(_arg)
        let cityResult = await fetchWithBQ(`geo/1.0/reverse?lat=${_arg.coords.lat}&lon=${_arg.coords.lon}&limit=1&appid=${process.env.REACT_APP_OPENWEATHER_API}`);
        if(cityResult.error) return {error: cityResult.error}
        else{ const city = {
          id: _arg.id,
          name: cityResult.data[0].name,
          coords: {
            lat: cityResult.data[0].lat,
            lon: cityResult.data[0].lon
          }
        }
      }
        _queryApi.dispatch(addCity(city));
        return cityResult.data ? city : {error: cityResult.error}
      }
    }),
    getWeatherByCoords: builder.query({
      query: (coords) => `data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=679ca9bd2c532d3f3daff35ae0f4c4ff&units=metric`,
    }),
    getForecastByCoords: builder.query({
      query: (coords) => `data/2.5/forecast?lat=${coords.lat}&lon=${coords.lon}&appid=${process.env.REACT_APP_OPENWEATHER_API}&units=metric`,
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetCityNameByCoordinatesQuery, useGetCoordinatesByCityName, useGetWeatherByCityNameQuery, useGetWeatherByCoordsQuery, useGetForecastByCoordsQuery } = weatherApi
// export const selectWeatherApiResult = (state) => {
//   console.log(state.weatherApi.queries);
//   Object.values(state.weatherApi.queries).forEach(query => console.log(query))
//   return state.weatherApi.queries
// };



