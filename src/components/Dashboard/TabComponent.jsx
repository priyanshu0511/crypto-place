import * as React from 'react';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { Box } from '@mui/material';
import Grid from './Grid';
import List from './List';

export default function TabComponent({coins}) {
  const [value, setValue] = React.useState('grid');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const style={
    color: '#f3f3f3',
    width: '50vw',
    fonstSize: '1.2rem',
    fontWeight: '600',
    fontFamily: 'Inter'
  }

  return (
    <Box>
      <TabContext value={value}>
        <Box>
          <TabList onChange={handleChange} variant="fullWidth">
            <Tab label="Grid" value="grid" className='text-white' sx={style}/>
            <Tab label="List" value="list" className='text-white' sx={style}/>
          </TabList>
        </Box>
        <TabPanel value="grid">
            <div className='flex justify-center items-center flex-wrap gap-4 mx-8 my-6'>
                {coins.map((coin)=>(
                    <Grid coin={coin} key={coin.id}/>
                ))}
            </div>
        </TabPanel>
        <TabPanel value="list">
          <table className='w-[95%] block ml-auto mr-auto '>
            {coins.map((coin)=>(
                <List coin={coin} key={coin.id}/>
            ))}
          </table>
        </TabPanel>
      </TabContext>
    </Box>
  );
}
