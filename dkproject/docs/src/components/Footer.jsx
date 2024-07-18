import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-gray-800 w-[100vw] text-white py-10">
            <div className="container mx-auto px-6">
                <div className="flex flex-wrap justify-between">
                    <div className="w-full md:w-1/3 mb-6 md:mb-0">
                        <h2 className="text-2xl font-bold">CS-Center</h2>
                        <p className="mt-2 text-gray-400">
                            Providing excellent customer service across India.
                        </p>
                    </div>
                    <div className="w-full md:w-1/3 mb-6 md:mb-0">
                        <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
                        <ul>
                            <Link to='/home'>
                                <li className='text-white  '>Home</li>
                            </Link>
                            <Link to='/about'>
                                <li className='text-white '>About</li>
                            </Link>
                            <Link to='/services'>
                                <li className='text-white '>Services</li>
                            </Link>
                            <Link to='/contact'>
                                <li className='text-white'>Contact</li>
                            </Link>
                        </ul>
                    </div>
                    <div className="w-full md:w-1/3">
                        <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
                        <p className="text-gray-400">123 Customer Lane, Tech City, India</p>
                        <p className="text-gray-400">Email: support@cs-center.in</p>
                        <p className="text-gray-400">Phone: +91 12345 67890</p>
                    </div>
                </div>
                <div className="mt-8 border-t border-gray-700 pt-4 text-center text-gray-400">
                    &copy; 2024 CS-Center. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
