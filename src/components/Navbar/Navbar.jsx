import React from 'react'
import TemporaryDrawer from './Drawer'
import Button from '../Common/Button'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar z-50 flex justify-between items-center px-6 py-3 md:px-12 md:py-6 bg-[#000] md:sticky top-0 left-0 text-xl'>
      <h1>CryptoPlace<span className='text-blue'>.</span></h1>
      <div className="links hidden md:flex md:justify-end md:items-center md:gap-6 text-gray font-medium text-base">
        <Link to='/'><p className='hover:text-white transition-all duration-300'>Home</p></Link>
        <Link to='/watchlist'><p className='hover:text-white transition-all duration-300'>Watchlist</p></Link>
        <Link to='compare'><p className='hover:text-white transition-all duration-300'>Compare</p></Link>
        <Link to='/dashboard'><p className='hover:text-white transition-all duration-300'><Button text="Dashboard" outlined={false}/></p></Link>
      </div>
      <div className='md:hidden'>
        <TemporaryDrawer />
      </div>
    </div>
  )
}

export default Navbar