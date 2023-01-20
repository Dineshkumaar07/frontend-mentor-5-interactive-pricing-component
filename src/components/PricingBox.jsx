import React from 'react'

const PricingBox = (props) => {
    const contanierStyle = `px-5 rounded-lg ${props.color} ${props.paddingy} text-${props.text} font-bold`;
    const buttonStyle = `${props.button}`
    const priceStyle = `font-bold text-5xl inline-block text-${props.pricecolor}`
  return (
    <div className='w-60  md:w-72 text-center font-montserrat shadow-2xl'>
        <div className={contanierStyle}>
        <p className='mb-4'>{props.plan}</p>
        <div className='flex items-center justify-center gap-1 mb-4'>
            <span className='font-bold text-3xl '>$</span>
            <p className={priceStyle}>{props.price}</p>
        </div>
        <hr />
        <div className='mb-6 '>
            <ul className='text-xs '>
                <li  className=' my-3 '>{props.storage} Storage</li>
                <hr />
                <li className='my-3'>{props.users} Users Allowed</li>
                <hr />
                <li className='my-3'>Send up to {props.send} GB</li>
                <hr />
            </ul>
        </div>
        <div className=' rounded-md mb-4 '>
            <button className={buttonStyle}>LEARN MORE</button>
        </div>
        </div>
    </div>
  )
}

export default PricingBox