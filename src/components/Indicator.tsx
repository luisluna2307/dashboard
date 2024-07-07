import React from "react";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";

interface Config {
  title: string;
  min?: number;
  max?: number;
  avg?: number;
  value?: string | number;
  probability?: number;
}

const Indicator: React.FC<Config> = (config) => {
  // Convertir config.value a número si es una cadena
  const numericValue =
    typeof config.value === "string" ? parseFloat(config.value) : config.value;

  return (
    <Paper
      sx={{
        p: 2,
        display: "flex",
        flexDirection: "column",
        mb: 2,
      }}
    >
      <Typography component="h2" variant="h6" color="primary" gutterBottom>
        {config.title}
      </Typography>
      {config.min !== undefined && config.max !== undefined && (
        <div>
          <Typography variant="body1">Min: {config.min}</Typography>
          <Typography variant="body1">Max: {config.max}</Typography>
          {config.avg !== undefined && (
            <Typography variant="body1">Prom: {config.avg}</Typography>
          )}
        </div>
      )}
      {numericValue !== undefined && (
        <div>
          <Typography variant="body1">Valor: {numericValue} mm</Typography>
          {config.probability !== undefined && (
            <Typography variant="body1">
              Probabilidad: {config.probability}
            </Typography>
          )}
        </div>
      )}
    </Paper>
  );
};

export default Indicator;
