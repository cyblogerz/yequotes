import {BsGithub,BsTwitter} from 'react-icons/bs'
import {BiSolidQuoteLeft} from 'react-icons/bi'

const NavBar = () => {
  return (
    <nav className='flex flex-row justify-between mx-10'>
    <div className='flex items-center'>
    <BiSolidQuoteLeft className='text-white text-2xl mr-2'/>
    <h1 className="text-2xl font-bold text-white"> YeQuotes</h1>
    </div>
    <div className="flex  items-center">
        <div className='mr-4' ><a href="https://github.com/cyblogerz" target="_blank" rel="noopener noreferrer">
          <BsGithub className='text-white text-2xl'/>
        </a></div>
        <div ><a href="#">
          <BsTwitter className='text-white text-2xl'/>
        </a></div>
    </div>
    </nav>
  )
}

export default NavBar