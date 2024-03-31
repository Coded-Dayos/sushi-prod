'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaCartPlus,FaHome } from "react-icons/fa";
import { IoMdContacts } from "react-icons/io";
import { MdRestaurantMenu } from "react-icons/md";
import { FaBasketShopping } from "react-icons/fa6"


const links = [
  { id: 1, title: 'Homepage', url: '/',icon:<FaHome/> },
  { id: 2, title: 'Menu', url: '/menu',icon:<MdRestaurantMenu/> },
  { id: 3, title: 'Working Hours', url: '/',icon:<FaBasketShopping/> },
  { id: 4, title: 'Contact', url: '/' ,icon:<IoMdContacts/>},
];

const Menu = () => {
  const [open, setOpen] = useState(false);

  // TEMPORARY
  const user = false;
  return (
    <div>
      <Image
        src={open ? '/close.svg' : '/hamburger.svg'}
        alt=''
        width={40}
        height={40}
        onClick={() => setOpen(!open)}
        className='cursor-pointer block md:hidden'
      />
      {open && (<>
                <div className='bg-blue-800 text-white absolute left-0 top-24 w-full h-[calc(100vh-6rem)] flex flex-col gap-8 items-center justify-center text-3xl z-10 font-serif'>
                  <div className='w-full mx-auto flex flex-col mb-8'>
                    <h1 className='flex items-center justify-center text-3xl font-semibold font-serif'> 
                    <span className='text-green-400'>Maki</span> 
                    <span className='text-yellow-300'>-Mania</span>
                    </h1>
                    <p className='text-sm flex items-center justify-center font-serif'>Sushi Bliss Guaranteed</p>
                    </div>
          {links.map((item) => (
            <Link href={item.url} key={item.id} onClick={() => setOpen(false)}>
              {item.title}
            </Link>
          ))}
          <Link
            href={user ? '/orders' : 'login'}
            onClick={() => setOpen(false)}>
            {user ? 'Orders' : 'Login'}
          </Link>
          <Link href='/cart' onClick={() => setOpen(false)}>
           <FaCartPlus/>
          </Link>
          
        </div>
        </>
      )}
    </div>
  );
};

export default Menu;
