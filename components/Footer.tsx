import { ImFacebook2 } from 'react-icons/im';
import { RiInstagramFill } from 'react-icons/ri';
import { BsLinkedin } from 'react-icons/bs';
import { SiYoutube } from 'react-icons/si';


const Footer = () => {
  return (
    <footer className='h-[22.5rem] w-full bg-[#0f072c]'>
        <div className="w-full xl:w-[1150px] h-full mx-auto flex flex-col justify-between pt-[4rem]">
            <div className='flex items-start space-x-20' >
                <div>
                  <h2 className='tracking-wider text-[1.1rem] text-[#9f9cab] font-bold mb-4' >CAPABILITIES</h2>
                  <p className='text-[1.1rem] mb-2 cursor-pointer text-white'>Product</p>
                  <p className='text-[1.1rem] mb-2 text-white'>Growth</p>
                </div>

                <div>
                  <h2 className='tracking-wider text-[1.1rem] text-[#9f9cab] font-bold mb-4' >COMPANY</h2>
                  <p className='text-[1.1rem] mb-2 cursor-pointer text-white'>Clients</p>
                  <p className='text-[1.1rem] mb-2 cursor-pointer text-white'>About us</p>
                  <p className='text-[1.1rem] mb-2 cursor-pointer text-white'>Pricing</p>
                  <p className='text-[1.1rem] mb-2 cursor-pointer text-white'>Affiliates</p>
                </div>

                <div>
                  <h2 className='tracking-wider text-[1.1rem] text-[#9f9cab] font-bold mb-4' >CAREERS</h2>
                  <p className='text-[1.1rem] mb-2 cursor-pointer text-white'>Careers</p>
                  <p className='text-[1.1rem] mb-2 cursor-pointer text-white'>Internships</p>
                </div>

                <div>
                  <h2 className='tracking-wider text-[1.1rem] text-[#9f9cab] font-bold mb-4' >RESOURCES</h2>
                  <p className='text-[1.1rem] mb-2 cursor-pointer text-white'>Blog</p>
                  <p className='text-[1.1rem] mb-2 cursor-pointer text-white'>Academy</p>
                  <p className='text-[1.1rem] mb-2 cursor-pointer text-white'>Benchmarks guide</p>
                </div>

                <div>
                  <h2 className='tracking-wider text-[1.1rem] text-[#9f9cab] font-bold mb-4' >CONTACT</h2>
                  <p className='mb-2 text-[1.1rem] cursor-pointer text-white'>Schedule a call</p>
                </div>

                <div>
                  <h2 className='tracking-wider text-[1.1rem] text-[#9f9cab] font-bold mb-4' >LEGAL</h2>
                  <p className='mb-2 text-[1.1rem] cursor-pointer text-white'>Privacy Policy</p>
                </div>
            </div>

            <div className='h-[4rem] border-t border-[#6f6a80] flex items-center justify-between'>
                <p className='text-[#6f6a80] font-medium'>&copy; Copyright 2022 Surge Global</p>
                <div className='flex items-center space-x-4 text-[#6f6a80]'>
                    <ImFacebook2 size={20} className="cursor-pointer"/>
                    <RiInstagramFill size={25} className="cursor-pointer"/>
                    <BsLinkedin size={20} className="cursor-pointer"/>
                    <SiYoutube size={25} className="cursor-pointer"/>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer