import { Grid } from "@mui/material";
import * as S from "./style";

const Chart: React.FC<{ data: string[] }> = ({ data }) => {
  return (
    <S.Container container direction="column">
      {data?.map((element, index) => (
        <Grid item key={index}>
          <S.Image src={element} />
        </Grid>
      ))}
    </S.Container>
  );
};
export default Chart;
