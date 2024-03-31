import Link from 'next/link';
import React from 'react';
import logo from '../public/sushi1.jpg';
const MyHero = () => {
  return (
    <div
      className='relative h-[calc(100vh-8rem)] max-w-[1440px] md:h-[calc(100vh-9rem)] pt-20 bg-cover bg-center bg-fixed'
      style={{ backgroundImage: `url('/sushi1.jpg')`}}>
      <div className='absolute inset-0 bg-black opacity-40 z-0' />
      <div className='flex flex-col  items-center justify-center absolute  w-full'>
     
    {/* heroContent-title*/}
         <h1 className='text-5xl md:text-6xl font-bold text-white leading-10 tracking-widest font-serif'>
        <span className='text-green-400'>Maki</span> 
         <span className='text-yellow-300'>-Mania</span>
          </h1>
        <h3 className='text-[24px] md:text-[30px] font-medium text-white mt-4 mb-8 flex text-center justify-center md:text-center w-full'>
          {/* heroContent-subtitle*/}
          Delightful Sushi Gastronomy
        </h3>

        <p className='text-[16px] md:text-[20px]font-medium  mt-4 mb-8 text-white tracking-widest max-w-2xl  flex text-center justify-center items-center capitalize mx-auto md:text-center'>
          {/* heroContent-title*/}
          we celebrate the timeless beauty of traditional sushi while embracing
          modern culinary innovation
        </p>
        <div className='flex text-center justify-center'>
          <Link href='/menu'>
            <button
              className='bg-indigo-600 text-white font-[Poppins] py-4 px-6 rounded-lg md:ml-8 hover:bg-blue-400 
    duration-500'>
              Explore Menu
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MyHero;
