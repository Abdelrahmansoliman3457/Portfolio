import React from 'react'
import cv from '../assets/solia1.pdf' 

const Cta = () => {
  return (
    <div className='cta'>
      <a href={cv} className="btn" download>Download CV</a>
      <a className='btn btn-primary' href='#contact'>Let's Talk</a>
    </div>
  )
}

export default Cta
