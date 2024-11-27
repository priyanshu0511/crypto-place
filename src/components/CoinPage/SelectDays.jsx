import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

export default function SelectDays({days,handleDaysChange,noPtag}) {

  return (
    <div sx={{ minWidth: 120 }} className='flex justify-start items-center my-8 mx-8 gap-2 px-6'>
        {!noPtag && <p className='text-sm sm:text-base'>Price Change in </p>}
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={days}
          label="Days"
          onChange={handleDaysChange}
          sx={{
            height: "2.5rem",
            color: "#f3f3f3",
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "#f3f3f3",
            },
            "& .MuiSvgIcon-root": {
              color: "#f3f3f3",
            },
            "&:hover": {
              "&& fieldset": {
                borderColor: "#3a80e9",
              },
            },
          }}
        >
          <MenuItem value={7}>7 Days</MenuItem>
          <MenuItem value={30}>30 Days</MenuItem>
          <MenuItem value={60}>60 Days</MenuItem>
          <MenuItem value={90}>90 Days</MenuItem>
        </Select>
    </div>
  );
}
