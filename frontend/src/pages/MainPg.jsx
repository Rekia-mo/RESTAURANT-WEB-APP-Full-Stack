import React from 'react'
import {
  Hero,
  Categories,
  Servises,
  CustomerRev,
  Footer
} from '../sections/index.js'

function MainPg() {
  return (
    <>
      <main className='relative overflow-auto scrollbar-hide scroll-smooth h-screen'>
        <section className='xl:padding-l wide:padding-r '>
          <Hero/>
        </section>
        <section className='padding' id='Menu'>
          <Categories/>
        </section>
        <section id='Servises' className='bg-bg-gray padding'>
          <Servises/>
        </section>
        <section className='padding'>
          <CustomerRev/>
        </section>
        <section>
          <Footer/>
        </section>
      </main>
    </>
  )
}

export default MainPg;