import React, { useState } from 'react';
import Logo from '../../images/logo.jpeg';
import Site from '../../images/data.jpg';
import { Link } from 'react-router-dom';
import { IoIosSearch, IoIosMenu, IoIosClose } from 'react-icons/io';
import Content from './components/Content';
import Value from './components/Value';
import Projects from './components/Projects';

const About = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const dummyData = [
    { id: 1, title: 'Home', link: '/', description: 'Welcome to PlanWorks, your partner in construction and project management.' },
    { id: 2, title: 'About', link: '/about', description: 'Learn more about our mission, vision, and values at PlanWorks.' },
    { id: 3, title: 'Services', link: '/services', description: 'We offer end-to-end services including project planning, scheduling, and resource management.' },
    { id: 4, title: 'Team', link: '/team', description: 'Meet our team of experts dedicated to delivering excellence in every project.' },
    { id: 5, title: 'Projects', link: '/projects', description: 'Explore our portfolio of successful projects in construction and oil & gas industries.' },
    { id: 6, title: 'Blog', link: '/blog', description: 'Stay updated with the latest trends and insights in the construction industry.' },
    { id: 7, title: 'CSR', link: '/csr', description: 'Our commitment to corporate social responsibility and community development.' },
    { id: 8, title: 'Careers', link: '/careers', description: 'Join our team and build a rewarding career with PlanWorks.' },
    { id: 9, title: 'Contact', link: '/contact', description: 'Get in touch with us for inquiries, partnerships, or support.' },
  ];

  const togglePopup = () => {
    setIsPopupVisible(!isPopupVisible);
    setSearchQuery('');
    setSearchResults([]);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSearchInputChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (query.trim() === '') {
      setSearchResults([]);
    } else {
      const results = dummyData.filter(item =>
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.description.toLowerCase().includes(query.toLowerCase())
      );
      setSearchResults(results);
    }
  };

  const highlightText = (text, query) => {
    if (!query) return text;
    const regex = new RegExp(`(${query})`, 'gi');
    return text.split(regex).map((part, index) =>
      part.toLowerCase() === query.toLowerCase()
        ? <span key={index} className="bg-yellow-200">{part}</span>
        : part
    );
  };

  return (
    <div className='text-white'>
      <div
        className="h-[400px] relative bg-cover bg-center text-white"
        style={{ backgroundImage: `linear-gradient(to bottom, rgba(141, 141, 231, 0.19), rgba(62, 62, 238, 0.6)), url(${Site})` }}
      >
        <div className="absolute inset-0 bg-opacity-50"></div>

        <main className="relative z-10">
          <ul className="ml-5 lg:ml-20 flex flex-row items-center justify-between">
            <li className="flex flex-row items-center">
              <Link to="/" className='flex flex-row'>
                <img src={Logo} alt='PlanWorks' className='w-[50px] h-[50px] mt-10 mr-5 rounded-3xl' />
                <span className='text-3xl text-white mt-10'>PlanWorks Consulting</span>
              </Link>
            </li>

            <li
              className="mt-[45px] mr-5 lg:hidden text-2xl text-white cursor-pointer"
              onClick={toggleMenu}
            >
              {isMenuOpen ? <IoIosClose className="text-3xl" /> : <IoIosMenu className="text-3xl" />}
            </li>

            <li
              className={`mt-[45px] ml-20 text-2xl flex flex-row gap-6 text-white lg:flex ${isMenuOpen ? 'flex bg-black' : 'hidden'} flex-col lg:flex-row absolute lg:static top-24 left-0 bg-opacity-90 w-full lg:w-auto p-5 lg:p-0`}
            >
              <Link to="/" className="hover:underline p-2 lg:p-0">Home</Link>
              <Link to="/about" className="hover:underline p-2 lg:p-0">About</Link>
              <Link to="/services" className="hover:underline p-2 lg:p-0">Services</Link>
              <Link to="/team" className="hover:underline p-2 lg:p-0">Team</Link>
              <Link to="/projects" className="hover:underline p-2 lg:p-0">Projects</Link>
              <Link to="/blog" className="hover:underline p-2 lg:p-0">Blog</Link>
              <Link to="/csr" className="hover:underline p-2 lg:p-0">CSR</Link>
              <Link to="/careers" className="hover:underline p-2 lg:p-0">Careers</Link>
              <Link to="/contact" className="hover:underline p-2 lg:p-0">Contact</Link>
            </li>

            <li
              className="ml-[150px] mt-[45px] text-white cursor-pointer lg:block hidden"
              onClick={togglePopup}
            >
              <IoIosSearch className="text-3xl ml-20" />
            </li>
          </ul>

          <div
            className={`fixed top-0 left-0 w-full bg-black bg-opacity-90 transition-transform duration-500 ease-in-out ${isPopupVisible ? 'translate-y-0' : '-translate-y-full'}`}
          >
            <div className="container mx-auto p-5 flex flex-col justify-center items-center h-[300px]">
              <input
                type="text"
                placeholder="Search..."
                className="w-1/2 p-3 rounded-lg bg-white text-black focus:outline-none"
                value={searchQuery}
                onChange={handleSearchInputChange}
              />
              {searchResults.length > 0 && (
                <div className="w-1/2 bg-white mt-5 rounded-lg shadow-lg max-h-[200px] overflow-y-auto">
                  {searchResults.map((result) => (
                    <Link
                      key={result.id}
                      to={result.link}
                      className="block p-3 hover:bg-gray-100 text-black"
                      onClick={togglePopup}
                    >
                      <div className="font-bold">{highlightText(result.title, searchQuery)}</div>
                      <div className="text-sm">{highlightText(result.description, searchQuery)}</div>
                    </Link>
                  ))}
                </div>
              )}
              <button
                className="ml-4 p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 mt-5"
                onClick={togglePopup}
              >
                Close
              </button>
            </div>
          </div>
        </main>

        <h1 className='text-3xl text-white mt-[200px] ml-[20px] lg:ml-[100px] font-bold'>About Us</h1>
      </div>

      <Content />
      <Value />
      <Projects />
    </div>
  );
};

export default About;
