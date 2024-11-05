import React from 'react'
import Navbar from '../Navbar';
import Carousel from '../carousel';
import BmiCalculator from '../bmi';
import Footer from '../footer';


const Homepage = () => {
  return (
    <>
    <Navbar/>
    <Carousel/>
    <BmiCalculator/>
    <Footer/>
    </>
  )
}

export default Homepage;