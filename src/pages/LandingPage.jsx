import React from 'react'
import Button from '../components/Common/Button'
import iphone from '../assets/iphone.png'
import gradient from '../assets/gradient.png' 
import { motion } from 'framer-motion' 
import { Link } from 'react-router-dom'

const LandingPage = () => {
  return (
    <div className='md:flex md:justify-between md:items-start md:flex-row md:py-12 md:px-12 bg-black md:min-h-screen
    flex flex-col items-center text-5xl px-5 py-12 min-h-[150vh]
'>
        <div>
        <motion.h1 className='md:text-8xl font-medium text-white hover:text-shadow-white-outline hover:text-black transition-all duration-100 my-0'
        initial={{opacity:0, y:50}} 
        animate={{opacity:1, y:0}} 
        transition={{duration:0.75}}>
            Track Crypto
        </motion.h1>
        <motion.h1 className='md:text-8xl font-medium text-blue my-0 py-0'
        initial={{opacity:0, y:50}} 
        animate={{opacity:1, y:0}} 
        transition={{duration:0.5,delay:0.5}}
        >
            Real Time.
        </motion.h1>
        <motion.p className='text-[1rem] md:text-xl text-gray mt-4'
        initial={{opacity:0, y:50}} 
        animate={{opacity:1, y:0}} 
        transition={{duration:0.5,delay:0.75}}
        >
            Track crypto through a public API in real time. Visit the dashboard to do so!
        </motion.p>
            <motion.div className='flex mt-6 md:gap-6 text-[1rem] justify-center gap-2 md:justify-normal'
            initial={{opacity:0, x:50}} 
            animate={{opacity:1, x:0}} 
            transition={{duration:0.5,delay:1.25}}
            >
                <Link to='/dashboard'><Button text={"Dashboard"} outlined={false}/></Link>
                <Button text={"Share App"} outlined={true}/>
            </motion.div>
        </div>
        
        <div className='relative w-1/2 ml-40 md:mt-0 mt-8'>
            <motion.img src={iphone} alt="Iphone" className='absolute z-30 md:min-w-[250px] min-w-[200px] md:right-0  right-1/4 w-1/2'
            initial={{y:-10}}
            animate={{y:10}}
            transition={{
                type: 'smooth',
                repeatType: 'mirror',
                duration:2,
                repeat: Infinity
            }}
            />
            <img src={gradient} alt="Iphone gradient" className='absolute md:min-w-[200px] min-w-[165px] md:right-4 w-5/12 md:top-16 right-12 top-12' />
        </div>
    </div>
  )
}

export default LandingPage