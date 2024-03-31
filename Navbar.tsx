import Menu from './Menu';
import Link from 'next/link';
import { FaCartPlus } from "react-icons/fa";

const Navbar = () => {
  const user = false;
  return (
    <nav className='h-20 text-white bg-indigo-800 p-4 flex items-center justify-between border-b-2 border-b-red-500 capitalize max-w-[1440px] mx-auto md:h-24 lg:px-20 xl:px-40'>
      {/* LOGO */}
      <div className='font-bold flex-1 flex justify-start'>
        <Link href='/' className='flex flex-col items-center justify-center'>                   
        <h1 className='text-2xl font-semibold font-serif flex items-center justify-center leading-none'>
        <span className='text-green-400'>Maki</span> 
                    <span className='text-yellow-300'>-Mania</span>
          </h1>
          <p className='text-sm flex items-center justify-center font-serif'>Sushi Bliss Guaranteed</p>
          </Link>
      </div>
      {/*  LINKS */}
      <div className='hidden md:flex gap-4 flex-1 text-[0.9rem] hover:font-bold group'>
        <Link href='/'>Homepage</Link>
        <Link href='/menu'>Menu</Link>
        <Link href='/'>Contact</Link>
        {!user ? (
          <Link href='/login'>Login</Link>
        ) : (
          <Link href='/orders'>Orders</Link>
        )}
        <FaCartPlus className='w-[30px] h-[30px] text-white'/>
      </div>

      {/* MOBILE MENU */}
      <div className='flex bg-white text-yellow-300 rounded-full p-2md:hidden '>
        <Menu />
      </div>
    </nav>
  );
};

export default Navbar;




// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/Coded-Dayos/sushi-prod.git
// git push -u origin main