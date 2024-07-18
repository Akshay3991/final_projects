import { Link } from 'react-router-dom';
import { IoSearchCircle } from "react-icons/io5";
import { useState } from 'react';
const Header = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [displaymenu, setMenuDisplay] = useState(false);

    const handleInputChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        // Perform search logic here with the searchQuery value
        console.log('Searching for:', searchQuery);
        // Reset the search query
        setSearchQuery('');
    };
    return (
        <header className=" bg-blue-500 sm:h-[14vh] h-[12vh] w-[100vw]  text-white">
            <div className="w-[90%] sm:w-[95vw] mx-auto sm:px-6 px-4 py-3 sm:py-4 flex justify-between">
                <div className="sm:flex  sm:pt-[15px] pt-[10px]">
                    <img src="/logo.png" alt="" className="h-8 mr-3 w-8 border-[2px] border-[whitesmoke]" />
                    <h1 className="sm:text-2xl hidden sm:font-black">CS-Center</h1>
                </div>
                <nav className="sm:flex hidden sm:space-x-6">
                    <ul className='flex pt-[13px] pl-[300px] gap-[20px] text-[24px]'>
                        <Link to='/home'>
                            <li className='text-white hover:text-blue-200 '>Home</li>
                        </Link>
                        <Link to='/about'>
                            <li className='text-white hover:text-blue-200'>About</li>
                        </Link>
                        <Link to='/services'>
                            <li className='text-white hover:text-blue-200'>Services</li>
                        </Link>
                        <Link to='/contact'>
                            <li className='text-white hover:text-blue-200'>Contact</li>
                        </Link>
                    </ul>
                </nav>

                <div className="flex  sm:space-x-3">
                    <form onSubmit={handleFormSubmit} className="flex items-center">
                        <input
                            type="text"
                            placeholder="Search..."
                            value={searchQuery}
                            onChange={handleInputChange}
                            className="px-3 py-1 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <button
                            type="submit"
                            className="px-3 py-1 bg-blue-500 text-white rounded-r-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        ><IoSearchCircle className='h-8 mr-3 w-8' />
                        </button>
                    </form>
                </div>
                <button className='sm:hidden' onClick={() => { setMenuDisplay(!displaymenu) }}>
                    {/* <MdMenuOpen className='h-10 sm:hidden mr-3 w-10' /> */}
                    {displaymenu ? <span>&times;</span> : <span>&#9776;</span>}
                </button>

            </div>


            <ul className={` pt-[13px]  pl-[300px] gap-[20px] text-[24px] sm:hidden menu relative ${displaymenu ? 'activeMenu' : ''} `}>
                <Link to='/home'>
                    <li className='text-white hover:text-blue-200 '>Home</li>
                </Link>
                <Link to='/about'>
                    <li className='text-white hover:text-blue-200'>About</li>
                </Link>
                <Link to='/services'>
                    <li className='text-white hover:text-blue-200'>Services</li>
                </Link>
                <Link to='/contact'>
                    <li className='text-white hover:text-blue-200'>Contact</li>
                </Link>
            </ul>

            <hr />
        </header >
    )
}


export default Header