import React from 'react'
import HeroImage from '../assets/sandraheadshot.jpg'
import sandraresume from '../assets/sandraresume.pdf'

const Hero = () => {
  return (
    <div className='bg-cyan-800 text-white text-center py-16'>
        <img src={HeroImage} alt="" 
        className='mx-auto mb-8 w-48 h-48 rounded-full object-cover transform 
        transition-transform duration-300 hover:scale-105'/>
        <h1 className='text-4xl font-bold'>
            I'm {" "}
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>Sandra Sanders</span>
            , SAP Full-Stack Developer
        </h1>
        <p className='mt-4 text-lg text-gray-300'>
            I specialize in Developing SAP Backend solutions, custom application and interfaces, and fiori output.
        </p>
        <div className='mt-8 space-x-4'>
            <button href="#contact"
            className='bg-gradient-to-r from-green-400 to-blue-500 text-white
            transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>Contact Me</button>

            <button  download="sandraresume" target='_blank' href={sandraresume}
            type="button" className='bg-gradient-to-r from-pink-500 to-yellow-500 text-white
            transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>Download Resume</button>

          
        </div>

    </div>
  )
}

export default Hero