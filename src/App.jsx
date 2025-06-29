import Navbar from './navbar.jsx'
import Hero from './Hero.jsx'
import Footer from './footer.jsx'
import MiddleNav from './Navbar2.jsx'
import Services from './Services.jsx'
import TheFooter from './LastFooter.jsx'

function App() {

  return (

     <div className='bg-gray-100 md:w-full p-5 mb-12 min-w-[600px] w-full '>
         <Navbar/>
        <Hero/>
        <Footer/>
        <MiddleNav/>
        <Services/>
        <TheFooter/>
     </div>
  
  );
}

export default App
