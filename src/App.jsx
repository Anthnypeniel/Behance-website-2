import Navbar from './navbar.jsx'
import Hero from './Hero.jsx'
import Footer from './footer.jsx'
import MiddleNav from './Navbar2.jsx'
import Services from './Services.jsx'
import TheFooter from './LastFooter.jsx'
import { useRef } from 'react'

function App() {

   const serviceRef = useRef(null);
   const TheFooterRef = useRef(null)
  

  const scrollToSection = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (

     <div className='bg-gray-100 md:w-full p-5 mb-12 min-w-[600px] w-full '>
         <Navbar onServiceClick={() => scrollToSection(serviceRef)}
            onAboutClick={() => scrollToSection(TheFooterRef)}
            />
        <Hero/>
        <Footer/>
        <MiddleNav/>
        <Services serviceRef = {serviceRef} />
        <TheFooter aboutRef = {TheFooterRef} />
     </div>
  
  );
}

export default App
