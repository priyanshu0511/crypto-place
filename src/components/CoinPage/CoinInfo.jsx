import React, { useState } from 'react'
import DOMPurify from 'dompurify'

const CoinInfo = ({heading, desc}) => {

    const shortDesc=desc.slice(0,350)+"<br><p style='color:#888;cursor:pointer'>Read More...</p>";
    const longDesc=desc+"<br><p style='color:#888;cursor:pointer'>Read Less...</p>";
    const sanitizedShortHTML=DOMPurify.sanitize(shortDesc);
    const sanitizedLongHTML=DOMPurify.sanitize(longDesc);

    const [flag,setFlag]=useState(false);

    const handleToggle=()=>{
        setFlag(flag=>!flag)
    }
    

  return (
    <div className='w-[93%] block ml-auto mr-auto bg-darkgray rounded-2xl p-6'>
        <p className='text-xl font-semibold mb-4'>{heading}</p>
        {desc.length>350?<p onClick={handleToggle}
         className='[&>a]:underline [&>a]:text-blue' dangerouslySetInnerHTML={{ __html:!flag? sanitizedShortHTML:sanitizedLongHTML }}></p>:
         <p onClick={handleToggle}
         className='[&>a]:underline [&>a]:text-blue' dangerouslySetInnerHTML={{ __html:sanitizedShortHTML }}></p>
        }
    </div>
  )
}

export default CoinInfo