import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Hero from './components/Extra/Hero';
import About from './components/Extra/About';
import Initiatives from './components/Extra/Initiatives';
import OurInitiatives from './components/OurInitiatives';
import Aboutus from './components/Aboutus';
import Blog from './components/Extra/Blog';
import Contact from './components/Extra/Contact';
import Footer from './components/Footer';
import OurTeam from './components/OurTeam';
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Blogs from './components/Blogs';
import Membership from './components/Membership';
import ScrollToTop from "./components/Scroll/ScrollToTop";



function App() {
  const router = createBrowserRouter(
    [
      {
        path:'/',
        element:
        <div>
           <Navbar />
           <ScrollToTop></ScrollToTop>
           <Home></Home>
           <Footer />
        </div>
      },
      {
        path:'/ourinitiatives',
        element:
        <div>
          <Navbar></Navbar>
          <ScrollToTop></ScrollToTop>
          <OurInitiatives></OurInitiatives>
          <Footer></Footer>
        </div>
      },
      {
        path:'/ourteam',
        element:
        <div>
          <Navbar></Navbar>
          <ScrollToTop></ScrollToTop>
          <OurTeam></OurTeam>
          <Footer></Footer>
        </div>
      },
      {
        path:'/aboutus',
        element:
        <div>
          <Navbar></Navbar>
          <ScrollToTop></ScrollToTop>
          <Aboutus></Aboutus>
          <Footer></Footer>
        </div>
      },
      {
        path:'/blogs',
        element:
        <div>
          <Navbar></Navbar>
          <ScrollToTop></ScrollToTop>
          <Blogs></Blogs>
          <Footer></Footer>
        </div>
      },
      {
        path:'/membership',
        element:
        <div>
          <Navbar></Navbar>
          <ScrollToTop></ScrollToTop>
          <Membership></Membership>
          <Footer></Footer>
        </div>
      }
    ]
  )

  return (
    <>
      <div>
        <RouterProvider router = {router}></RouterProvider>
      </div>
    </>
  );
}

export default App;