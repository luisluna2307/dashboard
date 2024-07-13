import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";

interface SummaryProps {
  day: string;
  temperature: string;
  date: string;
  icon: string;
}

export default function Summary({
  day,
  temperature,
  date,
  icon,
}: SummaryProps) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={`http://openweathermap.org/img/wn/${icon}@2x.png`} // URL del icono del clima
          alt="weather icon"
        />
        <CardContent>
          <Typography gutterBottom component="h2" variant="h6" color="primary">
            {day}
          </Typography>
          <Typography component="p" variant="h4">
            {temperature}
          </Typography>
          <Typography color="text.secondary" sx={{ flex: 1 }}>
            {date}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}