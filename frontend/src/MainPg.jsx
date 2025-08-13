import React from 'react'
import {
  Hero,
  Categories,
  Servises,
  CustomerRev,
  Footer
} from "./sections/index"

function MainPg() {
  return (
    <>
      <main className='relative overflow-auto scrollbar-hide'>
        <section className='xl:padding-l wide:padding-r '>
          <Hero/>
        </section>
        <section className='padding'>
          <Categories/>
        </section>
        <section className='bg-bg-gray padding'>
          <Servises/>
        </section>
        <section className='padding'>
          <CustomerRev/>
        </section>
        <section className='bg-[#474747] padding-x padding-y pb-8'>
          <Footer/>
        </section>
      </main>
    </>
  )
}

export default MainPg;