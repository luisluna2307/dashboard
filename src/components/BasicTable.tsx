import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useState, useEffect } from "react";

interface RowData {
  rangeHours: string;
  windDirection: string;
}

interface BasicTableProps {
  rows: RowData[];
}

const BasicTable: React.FC<BasicTableProps> = ({ rows }) => {
  // Utilizamos useState para manejar las filas de la tabla
  const [tableRows, setTableRows] = useState<RowData[]>([]);

  // useEffect para actualizar las filas cuando cambia la prop 'rows'
  useEffect(() => {
    setTableRows(rows);
  }, [rows]);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Rango de horas</TableCell>
            <TableCell align="right">Dirección del viento</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableRows.map((row, index) => (
            <TableRow key={index}>
              <TableCell component="th" scope="row">
                {row.rangeHours}
              </TableCell>
              <TableCell align="right">{row.windDirection}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default BasicTable;
