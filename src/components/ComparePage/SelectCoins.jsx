import React, { useState, useEffect } from 'react'
import { get100Coins } from '../../functions/get100Coins'
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

const SelectCoins = ({crypto, handleCryptoChange, cryptoNo}) => {

    const [coins,setCoins]=useState([]);

    const getData= async ()=>{
        const getCoins= await get100Coins();
        if(getCoins){
            setCoins(getCoins);
        }
    }

    useEffect(() => {
      getData();
    }, [])
    

  return (
    <div sx={{ minWidth: 120 }} className='flex justify-start items-center my-8 mx-8 gap-2 px-6'>
        <p className='text-sm sm:text-base'>{cryptoNo}</p>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={crypto}
          label="Crypto"
          onChange={handleCryptoChange}
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
          
          {coins.map(coin=>(
            <MenuItem value={coin.id} key={coin.id}>{coin.name}</MenuItem>
          ))}
        </Select>
    </div>
  )
}

export default SelectCoins