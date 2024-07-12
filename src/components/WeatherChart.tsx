import { Chart } from "react-google-charts";
import Paper from "@mui/material/Paper";
import { useState } from "react";

export default function WeatherChart() {
  // Datos de las variables meteorológicas
  const data = [
    ["Hora", "Precipitación", "Humedad", "Nubosidad"],
    ["03:00", 13, 78, 75],
    ["06:00", 4, 81, 79],
    ["09:00", 7, 82, 69],
    ["12:00", 3, 73, 62],
    ["15:00", 4, 66, 75],
    ["18:00", 6, 64, 84],
    ["21:00", 5, 77, 99],
  ];

  // Estado para mantener la hora seleccionada
  const [selectedHour, setSelectedHour] = useState<string | null>(null);

  // Función para manejar el cambio de selección de hora
  const handleHourSelection = (hour: string) => {
    setSelectedHour(hour);
  };

  // Configuración de opciones para el gráfico
  const options = {
    title: "Precipitación, Humedad y Nubosidad vs Hora",
    curveType: "function",
    legend: { position: "right" },
  };

  // Filtrar datos basados en la hora seleccionada
  const filteredData = selectedHour
    ? data.filter((row) => row[0] === selectedHour)
    : data;

  return (
    <Paper
      sx={{
        p: 2,
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Dropdown para seleccionar la hora */}
      <select
        onChange={(e) => handleHourSelection(e.target.value)}
        value={selectedHour || ""}
        style={{ marginBottom: "1rem", maxWidth: "200px" }}
      >
        <option value="">Selecciona una hora</option>
        {data.slice(1).map((row) => (
          <option key={row[0]} value={row[0]}>
            {row[0]}
          </option>
        ))}
      </select>

      {/* Chart component */}
      <Chart
        chartType="LineChart"
        data={filteredData}
        width="100%"
        height="400px"
        options={options}
      />
    </Paper>
  );
}
