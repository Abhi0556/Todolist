import React from 'react'

const Navbar = () => {
  return (
    <>
    <div className='logo h-20 w-screen flex border-b-2 border-[#4EFFD8]'>
        <div className='left'>
            <img src="images/logo.jpg" alt="logo" className='h-[90%] ml-10 mt-1 rounded-2xl'/>
        </div>
        <div className='right flex gap-10 mr-10 items-center text-2xl'>
        </div>
    </div>
    </>
  )
}

export default Navbar