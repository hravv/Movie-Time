import React, { useState } from 'react'
import './footer.css'

const socials = [
  { href: 'https://github.com/hravv', icon: 'fa-brands fa-github' },
  { href: 'mailto:harveyoliverburman@outlook.com', icon: 'fa-solid fa-envelope' },
  { href: 'https://www.linkedin.com/in/harvey-burman-3b5704360/', icon: 'fa-brands fa-linkedin' },
  { href: 'https://www.instagram.com/hravv_/', icon: 'fa-brands fa-instagram' },
]

const Footer = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <footer className='bg-black w-full flex flex-col justify-between items-center min-h-32 sm:min-h-40 lg:min-h-60 py-4 mt-auto'>
      <div className='footer-socials flex gap-x-2 sm:gap-x-6 md:gap-x-24 my-auto'>
        {socials.map((s, i) => (
          <a
            key={s.icon}
            href={s.href}
            target='blank'
            rel='noopener noreferrer'
            className='p-5'
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
          >
            <i
              className={`${s.icon} text-3xl lg:text-5xl cursor-pointer text-neonblue${hovered === i ? ' spinYScale' : ''}`}
            ></i>
          </a>
        ))}
      </div>
      <div className='flex flex-col items-center'>
        <h4>This app uses data from TMDB API</h4>
        <h3>MovieTime 2025 &copy; | Created by Harvey Burman</h3>
      </div>
    </footer>
  )
}

export default Footer
