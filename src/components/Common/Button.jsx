import React from 'react'

const Button = ({text, outlined}) => {
  return (
    <div className={outlined?'bg-black border-2 border-blue cursor-pointer text-white px-6 py-2 min-w-24 rounded-3xl font-semibold hover:bg-blue transition-all duration-300':'bg-blue text-white cursor-pointer min-w-24 px-6 py-2 rounded-3xl font-semibold hover:shadow-[5px_5px_10px_rgba(58,128,233,0.5)] transition-all duration-300'}>
        {text}
    </div>
  )
}

export default Button