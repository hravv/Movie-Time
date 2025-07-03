import React from 'react'

const HomePage = () => {
  return (
    <section className='movie-list bg-black/70 text-center md:min-h-280 mb-30 pb-1 mx-8'>
      <div className='heading-text pt-24'>
        <h1 className='text-4xl'>Welcome to MovieTime!</h1>      
        <p className='text-xl mt-15'>Find out which movies are highly rated or popular right now, or search for any movie.</p>
      </div>
      <div className='home-content mx-15 lg:mx-50 my-20'>
        <p className='mb-15 text-lg lg:text-xl'>This is an app I have developed to demonstrate my understanding of React, Javascript, and CSS. It's also my first attempt at creating a single-page, React component-based website that doesn't need to be refreshed once to be interacted with. Try it out!</p>
        <p className='text-lg lg:text-xl'>You can connect with me via socials or email below, if you like.</p>
      </div>
    </section>
  )
}

export default HomePage
