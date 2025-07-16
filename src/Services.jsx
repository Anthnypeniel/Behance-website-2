import { FaBezierCurve } from "react-icons/fa"
import { FaTachometerAlt } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa';
import {FaHeadset} from 'react-icons/fa';
import { FaArrowRight } from 'react-icons/fa';



function heroServices({serviceRef}){

    return(
        <section ref={serviceRef} className="">
            <div className="mb-4 md:text-center">
                <h2 className="text-2xl font-lighter ">Our <span className="font-bold">Included </span> <br />
                    <span >Services</span>
                </h2>
            </div>
            <div className="lg:grid md:grid md:grid-cols-2 lg:gap-4 lg:grid-cols-4">
                <div className="border-0 bg-gray-50 border-none outline-0  rounded-2xl mb-6 text-center">
                    <FaBezierCurve className="mx-auto m-2"/>
                    <h2 className="font-bold text-xl">ui/ux Designs</h2>
                    <p className="w-1/2 mx-auto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur delectus incidunt alias nobis maxime quis explicabo 
                    </p>
                    <button type="button" className="mt-4 mb-4 font-bold">Learn More  <FaArrowRight className="inline"/>
                    </button>
                </div>
                <div className="border-0 bg-gray-50 border-none outline-0  rounded-2xl mb-6 text-center">
                    <FaTachometerAlt className="mx-auto m-2"/>
                    <h2 className="font-bold text-xl">Web Development</h2>
                    <p className="w-1/2 mx-auto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur delectus incidunt alias nobis maxime quis explicabo 
                    </p>
                    <button  className="mt-4 mb-4 font-bold" type="button"> Learn More <FaArrowRight className="inline"/></button>
                </div>
                <div className="border-0 bg-gray-50 border-none outline-0  rounded-2xl mb-6 text-center">
                    <FaPhone  className="mx-auto m-2"/>
                    <h2 className="font-bold text-xl">App Development</h2>
                    <p className="w-1/2 mx-auto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur delectus incidunt alias nobis maxime quis explicabo 
                    </p>
                    <button  className="mt-4 mb-4 font-bold" type="button"> Learn More <FaArrowRight className="inline"/></button>
                </div>
                <div className="border-0 bg-gray-50 border-none outline-0  rounded-2xl mb-6 text-center">
                    <FaHeadset className="mx-auto m-2"/>
                    <h2 className="font-bold text-xl">Web Development</h2>
                    <p className="w-1/2 mx-auto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur delectus incidunt alias nobis maxime quis explicabo 
                    </p>
                    <button  className="mt-4 mb-4 font-bold" type="button"> Learn More <FaArrowRight className="inline"/></button>
                </div>
            </div>
        </section>
       
    )
}


export default heroServices