import profilePic from './assets/beha.jpg';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

import { useState } from 'react';

function NavBar() {

     const [isOpen, setIsOpen] = useState(false);

    function toggleMenu() {
        setIsOpen(prevOpen => !prevOpen)
    }

    return(
        <main>
            <div className='flex sm:justify-between text-xl sm:max-w-full lg:max-lg:text-center lg:max-lg:mx-12 md:max-w-full gap-4 m-2 p-2 items-center'>
                <img className='cursor-pointer *:' src={profilePic} alt="logo" />
                <nav className='flex flex-row'>
                    <ul className='hidden md:flex gap-6 items-center md:justify-between '>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">About </a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                    <button onClick={toggleMenu}  className='md:hidden'>
                        <MenuIcon className='w-10 h-10 ml-100' fontSize='large' />
                    </button>
                  
                    <div className=' ml-40 md:gap-4 hidden w-[200px] md:flex justify-between'>
                        <button className='basis-[150px] p-2' type='button'>sign up</button>
                        <button className='bg-black p-2 rounded-2xl flex basis-[150px] text-white r' type='submit'>sign in</button>
                    </div>
                </nav>
            </div>
                
            <div
              className={`fixed top-0 left-0 h-full w-full bg-gray-100 shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
                isOpen ? 'translate-x-0' : 'translate-x-full'
              }`}
            >
              <div className="p-6 flex flex-col gap-6">
                
                <div className="flex">
                  <CloseIcon
                    onClick={toggleMenu}
                    className="w-6 h-6 text-gray-800 cursor-pointer"
                  />
                </div>
          
                
                <nav className="flex flex-col gap-4 text-lg font-medium text-gray-700">
                  <a href="#" onClick={toggleMenu} className="hover:text-black">About</a>
                  <a href="#" onClick={toggleMenu} className="hover:text-black">Services</a>
                  <a href="#" onClick={toggleMenu} className="hover:text-black">Projects</a>
                  <a href="#" onClick={toggleMenu} className="hover:text-black">Contact</a>
                  <hr />
                  <button className="px-4 py-2 border border-black rounded w-full">Sign up</button>
                  <button className="px-4 py-2 bg-black text-white rounded-2xl w-full">Sign in</button>
                </nav>
              </div>
            </div>
          
            
            {isOpen && (
              <div
                className="fixed inset-0 bg-black/40 z-40 backdrop-blur-sm"
                onClick={toggleMenu}
              />
            )}
        </main>
    )
}

export default NavBar