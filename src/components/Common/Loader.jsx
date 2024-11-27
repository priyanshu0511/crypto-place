import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';

export default function Loader() {
  return (
    <div className='flex justify-center items-center h-[86vh] w-[99vw]'>
      <CircularProgress />
    </div>
  );
}
