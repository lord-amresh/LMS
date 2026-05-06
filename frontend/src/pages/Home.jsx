import React from 'react'
import Banner from '../components/Banner'
import Navbar from '../components/Navbar'
import HomeCourses from '../components/HomeCourses'

const Home = () => {
  return (
    <div>
        <Navbar />
        <Banner />
        <HomeCourses/>
    </div>
  )
}

export default Home
