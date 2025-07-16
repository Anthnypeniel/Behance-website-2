import heroImg from './assets/Copy.jpg'

function heroFunc() {

    return(
    <main className="font-sans overflow-x-hidden w-full max-w-max md:flex md:justify-between md:items-center  mt-8 p-2 m-2">
        <div className='w-60%'>
          {/* <div className="">
            <p className="text-4xl md:text-6xl font-bold">12 <span className="text-2xl font-light ">years Experienced <br /> Automation</span></p>
          </div> */}
          <p className='flex gap-2 items-center'>
            <p className='text-8xl font-bold md:text-6xl'>12</p>
            <p className='font-serif font-light text-2xl'>Years Experienced <br /> automation</p>
          </p>
            <p className="font-extrabold xl:text-7xl md:max-xl:text-7xl text-4xl mt-8">
            Best Experience <br />
            Management <br />
            Automation
            </p>
           <p className="mt-5 lg:mt-6 lg:text-xl ">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt illum <br /> molestiae aspernatur deserunt inventore incidunt optio.
           </p>
           <div className='flex gap-2 mt-9'>
                <button className='pt-2 lg:px-10 lg:rounded-r-full lg:rounded-l-full lg:py-5 pb-2 pl-5 pr-5 rounded-2xl bg-black text-white cursor-pointer hover:bg-blue-950 '>Get Started</button>
                <a href="https://tailwindcss.com/docs/installation/using-vite">
                  <button className='border-none hover:underline cursor-pointer  rounded-2xl lg:px-10 lg:text-xl p-2 '>How it Works</button>
                </a>
           </div>
        </div>
        <div className='mt-8 w-40%'>
            {/* <div className='bg-gray-50 relative top-50 left-40 w-[200px] font-semibold p-10'>
                hi
            </div> */}
            <img className='w-full md:max-xl:w-[800px] 2xl:flex 2xl:justify-between 2xl:ml-45 2xl:h-[500px] 2xl:w-[600px] xl:max-2xl:w-[700px] ' src={heroImg} alt="Hero-Img" />
        </div>
      
    </main>
        
    )
}

export default heroFunc