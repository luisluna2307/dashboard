import Grid from '@mui/material/Grid';
import Indicator from './components/Indicator';
import CityIndicator from './components/CityIndicator';
import Summary from './components/Summary';
import BasicTable from './components/BasicTable';
import WeatherChart from './components/WeatherChart';
import ControlPanel from './components/ControlPanel';
import { useEffect, useState } from 'react';

import './App.css';

function App() {
  const [rowsTable, setRowsTable] = useState<{ rangeHours: string; windDirection: string; }[]>([]);
  const [indicators, setIndicators] = useState<JSX.Element[]>([]);

  useEffect(() => {
    (async () => {
      let savedTextXML = localStorage.getItem("openWeatherMap");
      let expiringTime = localStorage.getItem("expiringTime");
      let nowTime = new Date().getTime();

      if (expiringTime === null || nowTime > parseInt(expiringTime)) {
        let API_KEY = "d25ba91f8dfdffbc7af99e1b3f7d5e80";
        let response = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?q=Guayaquil&mode=xml&appid=${API_KEY}`
        );
        savedTextXML = await response.text();

        let hours = 1;
        let delay = hours * 3600000;

        localStorage.setItem("openWeatherMap", savedTextXML);
        localStorage.setItem("expiringTime", (nowTime + delay).toString());
      }

      const parser = new DOMParser();
      const xml = parser.parseFromString(savedTextXML || "", "application/xml");

      let dataToIndicators = Array.from(
        xml.getElementsByTagName("location")[1].attributes
      ).map((attr) => {
        return [attr.nodeName, attr.nodeValue || ''];
      });

      let indicatorsElements = dataToIndicators.map((element, index) => (
        <Indicator key={index} title={element[0]} value={element[1]} />
      ));

      setIndicators(indicatorsElements);

      let arrayObjects = Array.from(xml.getElementsByTagName("time"))
        .map((timeElement) => {
          let from = timeElement.getAttribute("from");
          let to = timeElement.getAttribute("to");
          if (from && to) {
            let rangeHours = from.split("T")[1] + " - " + to.split("T")[1];
            let windDirection =
              timeElement
                .getElementsByTagName("windDirection")[0]
                ?.getAttribute("deg") +
              " " +
              timeElement
                .getElementsByTagName("windDirection")[0]
                ?.getAttribute("code");
            return { rangeHours, windDirection };
          }
          return { rangeHours: "", windDirection: "" };
        })
        .slice(0, 8);

      setRowsTable(arrayObjects);
    })();
  }, []);

  return (
    <Grid container spacing={5}>
      <Grid item xs={12} md={12} lg={12}>
        <nav className="nav">
          <h1>Dashboard</h1>
          <ul>
            <li><a href="#general-info">Información General</a></li>
            <li><a href="#weather-forecast">Pronóstico de la semana</a></li>
            <li><a href="#climate-trends">Tendencias Climáticas</a></li>
            <li><a href="#detailed-forecast">Pronósticos Detallados</a></li>
            <li><a href="#weather-summary">Resumen del Clima</a></li>
          </ul>
        </nav>
      </Grid>
      <Grid item xs={12} md={12} lg={12} id="general-info">
        <h2 style={{ color: 'black', textAlign: 'left' }}> Información general</h2>
      </Grid>
      <Grid item xs={6} md={4} lg={2}>
        <CityIndicator
          cityName='Guayaquil'
          country='Ecuador'
          timezone={-18000}
          latitude={-2.1667}
          longitude={-79.9}
        />
      </Grid>
      {indicators.slice(0, 3).map((indicator, index) => (
        <Grid key={index} item xs={6} lg={2}>
          {indicator}
        </Grid>
      ))}
      <Grid item xs={12} md={12} lg={12} id="weather-forecast">
        <h2 style={{ color: 'black', textAlign: 'left' }}> Pronóstico de la semana</h2>
      </Grid>
      <Grid item xs={6} sm={4} md={3} lg={2}>
        <Summary
          day='Lunes'
          temperature='30°C'
          date='17 Junio, 2024'
        />
      </Grid>
      <Grid item xs={6} sm={4} md={3} lg={2}>
        <Summary
          day='Martes'
          temperature='30°C'
          date='17 Junio, 2024'
        />
      </Grid>
      <Grid item xs={6} sm={4} md={3} lg={2}>
        <Summary
          day='Miércoles'
          temperature='30°C'
          date='17 Junio, 2024'
        />
      </Grid>
      <Grid item xs={6} sm={4} md={3} lg={2}>
        <Summary
          day='Jueves'
          temperature='30°C'
          date='17 Junio, 2024'
        />
      </Grid>
      <Grid item xs={6} sm={4} md={3} lg={2}>
        <Summary
          day='Viernes'
          temperature='30°C'
          date='17 Junio, 2024'
        />
      </Grid>
      <Grid item xs={6} sm={4} md={3} lg={2}>
        <Summary
          day='Sábado'
          temperature='30°C'
          date='17 Junio, 2024'
        />
      </Grid>
      <Grid item xs={12} md={12} lg={12} id="climate-trends">
        <h2 style={{ color: 'black', textAlign: 'left' }}> Tendencias climáticas</h2>
      </Grid>
      <Grid item xs={12} lg={2}>
        <ControlPanel />
      </Grid>
      <Grid item xs={12} lg={10}>
        <WeatherChart />
      </Grid>
      <Grid item xs={12} md={12} lg={12} id="detailed-forecast">
        <h2 style={{ color: 'black', textAlign: 'left' }}> Pronósticos detallados</h2>
      </Grid>
      <Grid item xs={12} lg={8}>
        <BasicTable rows={rowsTable} />
      </Grid>
    </Grid>
  );
}

export default App;
