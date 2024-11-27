import { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/Button';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { Link } from 'react-router-dom';


export default function AnchorTemporaryDrawer() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <IconButton onClick={() => { setOpen(true) }}><MenuRoundedIcon className='text-gray' /></IconButton>
      <Drawer
        anchor={"right"}
        open={open}
        onClose={() => setOpen(false)}
      >
        <div className="links text-gray font-medium text-base w-[40vw] p-6 h-screen bg-black">
          <Link to='/'><p className=''>Home</p></Link>
          <Link to='/watchlist'><p className=''>Watchlist</p></Link>
          <Link to='/compare'><p className=''>Compare</p></Link>
          <Link to='/dashboard'><p className=''>Dashboard</p></Link>
        </div>
      </Drawer>
    </div>
  );
}
