import FooterImg from './assets/footImg.jpeg'

function secFooter({aboutRef}) {


    return(
        <div ref={aboutRef} className='md:flex mt-15 mb-15'>
            <div className='md:flex md:items-center md:gap-7 md:w-full'>
                <div className='md:w-[1200px] '>
                    <img className='mx-auto md:h-[600px]  md:w-[1000px] w-[900px] ' src={FooterImg} alt="" />
                </div>
                <div>
                    <div className='mx-auto m-4'>
                        <h2 className='text-center font-extrabold mb-6 tracking-wider text-4xl leading-relaxed'>Our Unique Approach</h2>
                        <p className='mb-10 font-serif'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos esse tempore sit amet! Animi officiis.</p>
                    </div>
                    <div className='mb-8'>
                        <h2> 1. <span className='mx-auto text-xl font-bold '>Offer The Global standard Services to businesses</span> </h2>
                        <p className='mx-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta dolorem quae est. Facere, expedita nam libero velit reprehenderit distinctio! Distinctio ducimus ullam totam praesentium, officia culpa vero soluta quas laboriosam!</p>
                    </div>
                    <div className='mb-8'>
                        <h2> 2. <span className='mx-auto text-xl font-bold'>Unbiased Services to any country or Region</span> </h2>
                        <p className='mx-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta dolorem quae est. Facere, expedita nam libero velit reprehenderit distinctio! Distinctio ducimus ullam totam praesentium, officia culpa vero soluta quas laboriosam!</p>
                    </div>
                    <div className=''>
                        <h2> 3. <span className='mx-auto text-xl font-bold'>Economic and Social Networking Policy through Businesses</span> </h2>
                        <p className='mx-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta dolorem quae est. Facere, expedita nam libero velit reprehenderit distinctio! Distinctio ducimus ullam totam praesentium, officia culpa vero soluta quas laboriosam!</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default secFooter