import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <footer className='bg-black sm:h-30 lg:h-60 flex justify-center items-center'>
      <div className='footer-content flex items-center flex-col'>
        <div className='footer-socials flex gap-x-6 md:gap-x-24 mb-10'>
          <a href='https://github.com/hravv' target='blank'><i className="fa-brands fa-github text-3xl lg:text-5xl cursor-pointer p-5 text-neonblue"></i></a>
          <a href='mailto:harveyoliverburman@outlook.com'><i className="fa-solid fa-envelope text-3xl lg:text-5xl cursor-pointer p-5 text-neonblue"></i></a>
          <a href='' target='blank'><i className="fa-brands fa-linkedin text-3xl lg:text-5xl cursor-pointer p-5 text-neonblue"></i></a>
          <a href='' target='blank'><i className="fa-brands fa-instagram text-3xl lg:text-5xl cursor-pointer p-5 text-neonblue"></i></a>
        </div>
        <div className='flex flex-col items-center justify-end absolute bottom-2'>
          <h4>This app uses data from TMDB API</h4>
          <h3>MovieTime 2025 &copy; | Created by Harvey Burman</h3>
        </div>
      </div>
    </footer>
  )
}

export default Footer
