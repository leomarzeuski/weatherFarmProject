import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import * as React from "react";
import { LIST_OPTIONS } from "../../constants/list.options.select";

interface IBasicSelect {
  selected: string;
  setSelected: (data: string) => void;
}

const BasicSelect: React.FC<IBasicSelect> = ({
  selected = "",
  setSelected,
}) => {
  const handleChange = (event: SelectChangeEvent) => {
    setSelected(event.target.value as string);
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
