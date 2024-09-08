import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-cyan-800 text-white px-8 md:px-16 lg:px-24 sticky'>
        <div className='container py-2 flex justify-center md:justify-between items-center'>
            <div className='text-2xl font-bold hidden md:inline'>Sanders</div>
            <div className='space-x-6'>
                <a href="#home" className='hover:text-gray-400'>Home</a>
                <a href="#about" className='hover:text-gray-400'>About Me</a>
                <a href="#experience" className='hover:text-gray-400'>Experience</a>
                <a href="#skill" className='hover:text-gray-400'>Skills</a>
                <a href="#project" className='hover:text-gray-400'>Projects</a>
                <a href="#contact" className='hover:text-gray-400'>Contact</a>
                <a href="#education" className='hover:text-gray-400'>Education</a>
                <a href="#resume" className='hover:text-gray-400'>Resume</a>
            </div>
            <button href='#contact' className='bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline
            transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'
             >Contact Me</button>
        </div>
    </nav>
  )
}

export default Navbar