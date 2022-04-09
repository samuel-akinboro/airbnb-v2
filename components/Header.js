import Image from 'next/image';
import {SearchIcon, GlobeAltIcon, UserCircleIcon, MenuIcon} from '@heroicons/react/solid'

function Header() {
  return (
    <header className='py-4 px-5 shadow-md bg-white z-50 sticky top-0 md:px-10 lg:px-20'>
      <div className='container grid grid-cols-3 mx-auto'>
        {/* left */}
        <div className='flex items-center h-8 sm:h-10 relative cursor-pointer my-auto'>
          <Image 
            src="https://links.papareact.com/qd3" 
            layout="fill"
            objectFit='contain'
            objectPosition='left' 
          />
        </div>
        {/* middle */}
        <div className='flex sm:border-[1px] border-[#DDDDDD] rounded-full p-2 min-w-min cursor-pointer transition duration-200 ease-out sm:hover:shadow-lg'>
          <input type="text" placeholder='Start your search' className="flex-1 outline-none mr-2 pl-2" />
          <div className="hidden sm:inline-flex h-8 w-8 bg-[#E41D59] rounded-full p-2 flex justify-center items-center cursor-pointer">
            <SearchIcon className="h-8 text-white" />
          </div>
        </div>
        {/* right */}
        <div className="flex space-x-4 items-center justify-end min-w-max ml-2">
          <p className="hidden md:inline-flex md:ml-4 lg:ml-0">Become a host</p>
          <GlobeAltIcon className="h-5" />
          <div className="flex space-x-1 items-center border-[1px] border-[#DFD8D8] rounded-full py-[2px] px-[3px] lg:hover:shadow-md cursor-pointer transition duration-300 ease-in-out">
            <MenuIcon className="h-5 ml-2 text-[#595959]" />
            <UserCircleIcon className="h-8 text-[#717171]" />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header