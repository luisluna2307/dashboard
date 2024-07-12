import { Chart } from "react-google-charts";
import Paper from "@mui/material/Paper";
import { useState, useEffect } from "react";

export default function WeatherChart() {
  const [weatherData, setWeatherData] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const API_KEY = "d25ba91f8dfdffbc7af99e1b3f7d5e80";
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?q=Guayaquil&mode=json&appid=${API_KEY}`
        );
        const data = await response.json();
        // Aquí parseas y procesas los datos según la estructura de la respuesta JSON
        const formattedData = formatData(data); // Función que formatea los datos según necesites
        setWeatherData(formattedData);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

    fetchData();
  }, []);

  const formatData = (data: any) => {
    // Aquí puedes procesar los datos como lo necesites para el gráfico
    // Por ejemplo, extraer la temperatura, humedad, etc.
    const formatted = data.list.map((item: any) => {
      return [item.dt_txt, item.main.temp, item.main.humidity];
    });
    return formatted;
  };

  return (
    <Paper
      sx={{
        p: 2,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Chart
        chartType="LineChart"
        data={[["Time", "Temperature", "Humidity"], ...weatherData]}
        width="100%"
        height="400px"
        options={{
          title: "Weather Forecast",
          curveType: "function",
          legend: { position: "bottom" },
        }}
      />
    </Paper>
  );
}
