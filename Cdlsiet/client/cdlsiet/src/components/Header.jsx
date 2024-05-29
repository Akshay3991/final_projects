import React from 'react';
import { Link } from 'react-router-dom';
// import logo from '../images/' // Replace with your logo image

const Header = () => {
    let [menuStatus, setMenuStatus] = React.useState(false);
    const [searchQuery, setSearchQuery] = React.useState('');

    const handleSearch = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Implement your search functionality here
        // console.log('Search:', searchQuery);
    };

    return (
        <header className=" bg-[black]  top-0 fixed h-[10vh] w-[100vw] border-b-4 border-b-[green] text-white">
            <nav className="mx-auto w-[95vw]  flex flex-row  pt-[20px]">
                <button className="menu-btn outline-none text-[green] font-black text-[32px]   " onClick={() => { setMenuStatus(!menuStatus) }}>{menuStatus ? <span>&times;</span> : <span>&#9776;</span>}</button>
                <div className={` menu relative ${menuStatus ? 'activeMenu' : ''} `}>
                    <ul className=''>
                        <Link to='/pyq'>
                            <li className='hover:bg-[green] font-serif font-bold '>PYQ</li>
                        </Link>
                        <Link to='/syllabus'>
                            <li className='hover:bg-[green] font-serif font-bold'>Syllabus</li>
                        </Link>
                        <Link to='/notes'>
                            <li className='hover:bg-[green] font-serif font-bold'>Notes</li>
                        </Link>
                        <Link to='/post'>
                            <li className='hover:bg-[green] font-serif font-bold'>Post</li>
                        </Link>
                        <Link to='/create-post'>
                            <li className='hover:bg-[green] font-serif font-bold'>Create Post</li>
                        </Link>
                    </ul>
                </div>
                <Link to="/" className=" absolute ml-[80px] pt-[12px]">
                    {/* <img src={logo} alt="Logo" className=" h-[25px] w-[122px]  " /> */}
                    {/* <span className=" font-bold"></span> */}
                </Link>
                <ul className='flex pt-[13px] pl-[300px] gap-[20px] text-[24px]'>
                    <Link to='/home'>
                        <li className='hover:underline  font-sans font-black '>Home</li>
                    </Link>

                    <Link to='/about'>
                        <li className='hover:underline font-sans font-black'>About</li>
                    </Link>
                </ul>
                <form onSubmit={handleSubmit}>
                    <div className="absolute right-[100px]">
                        <input
                            type="text"
                            placeholder="Search..."
                            value={searchQuery}
                            onChange={handleSearch}
                            className="px-4 py-2 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-[#F42B43]"
                        />
                        <button
                            type="submit"
                            className="bg-[green] text-white px-4 py-2 hover:font-bold font-serif rounded-r-lg hover:bg-[red] focus:outline-none focus:bg-indigo-700"
                        >
                            Search
                        </button>
                    </div>
                </form>
                {/* <div className="relative">



                </div> */}
            </nav>
        </header>
    );
};

export default Header;