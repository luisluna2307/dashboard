import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useState, useEffect } from "react";

interface WeatherData {
  rangeHours: string;
  windDirection: string;
  windSpeed: number;
  windGusts: number;
}

interface Config {
  rows: WeatherData[];
}

export default function BasicTable(data: Config) {
  const [rows, setRows] = useState<WeatherData[]>([]);

  useEffect(() => {
    setRows(data.rows);
  }, [data]);

  // Función para calcular la suma de la velocidad del viento
  const calculateTotalWindSpeed = () => {
    let totalSpeed = rows.reduce((acc, curr) => acc + curr.windSpeed, 0);
    return totalSpeed.toFixed(2); // Redondeamos a 2 decimales
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Rango de horas</TableCell>
            <TableCell align="right">Dirección del viento</TableCell>
            <TableCell align="right">Velocidad del viento</TableCell>
            <TableCell align="right">Rafagas de viento</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow
              key={index}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.rangeHours}
              </TableCell>
              <TableCell align="right">{row.windDirection}</TableCell>
              <TableCell align="right">{row.windSpeed}</TableCell>
              <TableCell align="right">{row.windGusts}</TableCell>
            </TableRow>
          ))}
          {/* Mostrar el total de la velocidad del viento */}
          <TableRow>
            <TableCell colSpan={2} align="right">
              Total Velocidad del Viento:
            </TableCell>
            <TableCell align="right">{calculateTotalWindSpeed()}</TableCell>
            <TableCell />
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
