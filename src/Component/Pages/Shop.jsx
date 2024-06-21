import React from 'react'
import Hero from '../Hero/Hero'
import Popular from '../Popular/Popular'
import Offer from '../Offer/Offer'
import NewCollction from '../Newcollection/NewCollction'
import NewsLetter from '../NewsLetter/NewsLetter'
import Footer from '../Footer/Footer'

export default function Shop() {
  return (
    <div>
      <Hero/>
      <Popular/>
      <Offer/>
      <NewCollction/>
      <NewsLetter/>
      <Footer/>
    </div>
  )
}
