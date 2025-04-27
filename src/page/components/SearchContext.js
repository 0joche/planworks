import React, { createContext, useState, useContext } from 'react';

const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  // Dummy data for search (replace with your actual data or fetch from an API)
  const dummyData = [
    {
      id: 1,
      title: 'Home',
      link: '/',
      description: 'Welcome to PlanWorks, your partner in construction and project management.',
    },
    {
      id: 2,
      title: 'About',
      link: '/about',
      description: 'Learn more about our mission, vision, and values at PlanWorks.',
    },
    {
      id: 3,
      title: 'Services',
      link: '/services',
      description: 'We offer end-to-end services including project planning, scheduling, and resource management.',
    },
    {
      id: 4,
      title: 'Team',
      link: '/team',
      description: 'Meet our team of experts dedicated to delivering excellence in every project.',
    },
    {
      id: 5,
      title: 'Projects',
      link: '/projects',
      description: 'Explore our portfolio of successful projects in construction and oil & gas industries.',
    },
    {
      id: 6,
      title: 'Blog',
      link: '/blog',
      description: 'Stay updated with the latest trends and insights in the construction industry.',
    },
    {
      id: 7,
      title: 'CSR',
      link: '/csr',
      description: 'Our commitment to corporate social responsibility and community development.',
    },
    {
      id: 8,
      title: 'Careers',
      link: '/careers',
      description: 'Join our team and build a rewarding career with PlanWorks.',
    },
    {
      id: 9,
      title: 'Contact',
      link: '/contact',
      description: 'Get in touch with us for inquiries, partnerships, or support.',
    },
  ];

  const togglePopup = () => {
    setIsPopupVisible(!isPopupVisible);
    setSearchQuery('');
    setSearchResults([]);
  };

  const handleSearchInputChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (query.trim() === '') {
      setSearchResults([]);
    } else {
      const results = dummyData.filter((item) => {
        return (
          item.title.toLowerCase().includes(query.toLowerCase()) ||
          item.description.toLowerCase().includes(query.toLowerCase())
        );
      });
      setSearchResults(results);
    }
  };

  const highlightText = (text, query) => {
    if (!query) return text;

    const regex = new RegExp(`(${query})`, 'gi');
    return text.split(regex).map((part, index) =>
      part.toLowerCase() === query.toLowerCase() ? (
        <span key={index} className="bg-yellow-200">{part}</span>
      ) : (
        part
      )
    );
  };

  return (
    <SearchContext.Provider
      value={{
        searchQuery,
        searchResults,
        isPopupVisible,
        togglePopup,
        handleSearchInputChange,
        highlightText,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => useContext(SearchContext);