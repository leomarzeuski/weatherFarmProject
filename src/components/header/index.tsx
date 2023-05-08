import "./style.css";
import weather_icon from "../../assets/weather_icon.svg";
import { useEffect, useState } from "react";
import BasicSelect from "../select";
import * as S from "./styles";
import { Grid } from "@mui/material";

const Header: React.FC = () => {
  const [item, setItem] = useState("");
  useEffect(() => {
    console.log(item);
  }, [item]);
  return (
    <S.NavBar container alignItems="center" justifyContent="space-between">
      <Grid item>
        <img src={weather_icon} alt="" />
        <h1>WeatherFarm</h1>
      </Grid>
      <Grid item>
        <h5>Quais dados estou vendo </h5>
        <BasicSelect />
      </Grid>
    </S.NavBar>
  );
};

export default Header;
