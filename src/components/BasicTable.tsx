import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useState, useEffect } from "react";

interface Row {
  rangeHours: string;
  temperature: string;
  windDirection: string;
  windSpeed: string;
  windGust: string;
  pressure: string;
  humidity: string;
}

interface Config {
  rows: Row[];
}

export default function BasicTable({ rows: initialRows }: Config) {
  const [rows, setRows] = useState<Row[]>([]);

  useEffect(() => {
    setRows(initialRows);
  }, [initialRows]);

  return (
    <TableContainer component={Paper} style={{ maxHeight: 400 }}>
      <Table stickyHeader sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>
              <strong>Rango de horas</strong>
            </TableCell>
            <TableCell align="right">
              <strong>Temperatura</strong>
            </TableCell>
            <TableCell align="right">
              <strong>Dirección del viento</strong>
            </TableCell>
            <TableCell align="right">
              <strong>Velocidad del viento</strong>
            </TableCell>
            <TableCell align="right">
              <strong>Ráfagas de viento</strong>
            </TableCell>
            <TableCell align="right">
              <strong>Presión</strong>
            </TableCell>
            <TableCell align="right">
              <strong>Humedad</strong>
            </TableCell>
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
              <TableCell align="right">{row.temperature}</TableCell>
              <TableCell align="right">{row.windDirection}</TableCell>
              <TableCell align="right">{row.windSpeed}</TableCell>
              <TableCell align="right">{row.windGust}</TableCell>
              <TableCell align="right">{row.pressure}</TableCell>
              <TableCell align="right">{row.humidity}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
