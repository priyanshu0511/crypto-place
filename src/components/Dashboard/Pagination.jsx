import * as React from 'react';
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';

export default function PaginationComponent({page, handlePageChange}) {
  
  return (
    <div className='flex justify-center items-center flex-col gap-2 mb-10'>
      <Typography className='hidden md:inline'>Page: {page}</Typography>
      <Pagination className='text-nowrap' sx={{
          "& .MuiPaginationItem-text": {
            color: "#fff !important",
            border: "1px solid #888",
          },
          "& .MuiPaginationItem-text:hover": {
            backgroundColor: "transparent !important",
          },
          "& .Mui-selected": {
            backgroundColor: "#3a80ee",
            borderColor: "#3a80e9",
          },
          "& .MuiPaginationItem-ellipsis": {
            border: "none",
          },
        }}
        count={9} page={page} onChange={handlePageChange} size='small'/>
    </div>
  );
}
