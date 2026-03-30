import About from '@/components/About'
import Cinfo from '@/components/Team'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Projects from '@/components/Projects'
import React from 'react'
import Cta from '@/components/Cta'

const page = () => {
  return (
    <main>
      <Hero />
      <Cinfo/>
      <Services/>
      <About/>
      <Projects/>
      <Cta/>
    </main>
  )
}

export default page
