import { Grid } from "@mui/material";
import * as S from "./style";

interface IChart {
  data: {
    chart: string;
    title: string;
    description: string;
  }[];
}

const Chart: React.FC<IChart> = ({ data }) => {
  return (
    <S.Container container direction="column">
      {data?.map((element, index) => (
        <Grid item key={index}>
          <S.BoxChart>
            <S.Image src={element.chart} />
            <h1 style={{ color: "#000" }}>
              {element.title}
              {element.description}
            </h1>
          </S.BoxChart>
        </Grid>
      ))}
    </S.Container>
  );
};
export default Chart;
