import weather_icon from "../../assets/weather_icon.svg";
import { useEffect, useState } from "react";
import BasicSelect from "../select";
import * as S from "./styles";
import { Grid } from "@mui/material";
import Chart from "../chart";
import { CHART } from "../../constants/chart";

const Header: React.FC = () => {
  const [item, setItem] = useState("");

  return (
    <>
      <S.NavBar container alignItems="center" justifyContent="space-between">
        <Grid item>
          <Grid container alignItems="center" spacing={3}>
            <Grid item>
              <img src={weather_icon} alt="" />
            </Grid>
            <Grid item>
              <h1>WeatherFarm</h1>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container alignItems="center" spacing={3}>
            <Grid item>
              <h5>Quais dados estou vendo </h5>
            </Grid>
            <Grid item>
              <BasicSelect selected={item} setSelected={setItem} />
            </Grid>
          </Grid>
        </Grid>
      </S.NavBar>
      <Chart data={CHART[item.toString()]} />
    </>
  );
};

export default Header;
