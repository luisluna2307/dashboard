import { useState, useCallback } from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

interface ControlPanelProps {
  onChange: (value: string) => void;
}

export default function ControlPanel({ onChange }: ControlPanelProps) {
  const [selected, setSelected] = useState("all");

  const items = [
    { name: "Precipitación", value: "precipitation" },
    { name: "Humedad", value: "humidity" },
    { name: "Nubosidad", value: "clouds" },
    { name: "General", value: "all" },
  ];

  const handleChange = useCallback(
    (event: SelectChangeEvent) => {
      const value = event.target.value as string;
      setSelected(value);
      onChange(value);
    },
    [onChange]
  );

  return (
    <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
      <Typography mb={2} component="h3" variant="h6" color="primary">
        Variables Meteorológicas
      </Typography>
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="select-label">Variables</InputLabel>
          <Select
            labelId="select-label"
            id="simple-select"
            value={selected}
            label="Variables"
            onChange={handleChange}
          >
            {items.map((item, index) => (
              <MenuItem key={index} value={item.value}>
                {item.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
    </Paper>
  );
}
