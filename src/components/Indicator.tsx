import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";

interface Config {
  title: string;
  min?: number;
  max?: number;
  avg?: number;
  value?: number;
  unit?: string;
  probability?: number;
}

const convertKelvinToCelsius = (kelvin: number): string =>
  (kelvin - 273.15).toFixed(2);

export default function Indicator({
  title,
  min,
  max,
  avg,
  value,
  unit,
  probability,
}: Config) {
  const formatTemperature = (temp?: number) =>
    title === "Temperatura" && temp !== undefined
      ? convertKelvinToCelsius(temp)
      : temp;

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
        {title}
      </Typography>
      {min !== undefined && max !== undefined && (
        <div>
          <Typography variant="body1">
            <strong>Min:</strong> {formatTemperature(min)} {unit}
          </Typography>
          <Typography variant="body1">
            <strong>Max:</strong> {formatTemperature(max)} {unit}
          </Typography>
          {avg !== undefined && (
            <Typography variant="body1">
              <strong>Prom:</strong> {formatTemperature(avg)} {unit}
            </Typography>
          )}
        </div>
      )}
      {value !== undefined && (
        <div>
          <Typography variant="body1">
            <strong>Valor:</strong> {value} {unit}
          </Typography>
        </div>
      )}
      {probability !== undefined && (
        <div>
          <Typography variant="body1">
            <strong>Probabilidad:</strong> {probability}%
          </Typography>
        </div>
      )}
    </Paper>
  );
}
