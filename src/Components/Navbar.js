import React from 'react'

import MyBackgroundImage from '../img/logo1.jpg'



function Navbar() {
    
    let val=50

  return (


    <nav className="navbar  row justify-content-center m-lg-0" style={{
        height:"100px",
        backgroundColor:"#121212"     
    }}>

        <div className='container mx-0' style={{
        backgroundImage: `url(${MyBackgroundImage})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize:'cover',
        height: '12vh',
        width:"40vw",
        
      }}> 

      </div>
</nav>



  )
}

export default Navbar