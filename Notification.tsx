'use client'

import Link from "next/link";
import {FaTwitterSquare  } from "react-icons/fa";
import { FaSquareGithub,FaLinkedin,FaSquareInstagram} from "react-icons/fa6";



const socials = [
    
    { name: 'Twitter', link: 'https://www.twitter.com',icon:<FaTwitterSquare  className='w-[30px] h-[30px] text-white'/> },
    { name: 'Instagram', link: 'https://www.instagram.com',icon:<FaSquareInstagram  className='w-[30px] h-[30px] text-white'/> },
    { name: 'LinkedIn', link: 'https://www.linkedin.com',icon:<FaLinkedin  className='w-[30px] h-[30px] text-white'/> },
    { name: 'Github', link: 'https://www.github.com',icon:<FaSquareGithub  className='w-[30px] h-[30px] text-white'/> }
];

const Notification = () => {
    return (
        <div className=' max-w-[1440px] mx-auto hidden md:flex text-sm h-12 md:h-[54px] bg-blue-600 ring-4 ring-slate-200 text-white px-4  py-10 items-center justify-between'>
            <p className=' text-center text-sm md:text-base cursor-pointer'>
                23 Glory Rd,Hill,London,NW6 6TY.
                <br /> Tel:0207 675876
            </p>
            <div className='flex items-center justify-center space-x-4'>
                {socials.map((social,index) => (
                    <Link key={index} href={social.link}>
                        {social.icon}
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Notification;
