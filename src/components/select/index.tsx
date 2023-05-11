import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import * as React from "react";
import { LIST_OPTIONS } from "../../constants/list.options.select";

interface IBasicSelect {
  selected: number;
  setSelected: (data: number) => void;
}

const BasicSelect: React.FC<IBasicSelect> = ({ selected = 0, setSelected }) => {
  const handleChange = (event: SelectChangeEvent) => {
    setSelected(+event.target.value);
  };

  return (
    <Box sx={{ minWidth: 200 }} style={{ zIndex: 999 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Gráficos</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selected}
          label="weather"
          onChange={handleChange}
        >
          {LIST_OPTIONS.map(({ value, label }) => (
            <MenuItem key={value} value={value}>
              {label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default BasicSelect;
