import React, { useState, useEffect, useRef } from 'react';
import { Menu, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top when route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { 
      name: 'Papers', 
      href: '#papers', 
      hasDropdown: true,
      dropdownItems: [
        { name: 'Call for Papers', href: '/call-for-papers#paper-submission' },
        { name: "Conference Tracks", href: "/call-for-papers#conference-tracks" },
        { name: "Guidelines", href: "/call-for-papers#guidelines" }, 
        { name: "Important Dates", href: "/call-for-papers#important-dates" },
      ]
    },
    { name: 'Committee', href: '/committee' },
    { name: 'Registration', href: '/registration' },
    { name: 'Publications', href: '/publication' },
    { name: 'Conference Venue', href: '/venue' },
    { name: 'Downloads', href: '/downloads' },
    { name: 'Privacy Policy', href: '/policy' }
  ];

  return (
    <nav 
      className={`sticky top-0 w-full z-50 transition-all duration-300 border-b border-gray-200 ${
        isScrolled ? 'shadow-md' : ''
      }`}
      style={{ backgroundColor: '#fff' }}
    >
      <div className="container mx-auto px-4 flex justify-between items-center h-16">
        <Link to="/" className="text-xl font-bold font-druk text-black">DASGRI 2026</Link>
        
        <div className="hidden lg:flex space-x-2">
          {navLinks.map((link) => (
            <div
              key={link.name}
              className="relative"
            >
              {link.href.startsWith('/') ? (
                <Link 
                  to={link.href} 
                  className="font-graphik font-medium hover:bg-blue-500 hover:text-white transition-colors text-black flex items-center px-3 py-2 text-sm rounded"
                  onClick={(e) => {
                    if (link.hasDropdown) {
                      e.preventDefault();
                      toggleDropdown(link.name);
                    }
                  }}
                >
                  {link.name}
                  {link.hasDropdown && <ChevronDown className="ml-1 h-4 w-4" />}
                </Link>
              ) : (
                <a 
                  href={link.href} 
                  className="font-graphik font-medium hover:bg-blue-500 hover:text-white transition-colors text-black flex items-center px-3 py-2 text-sm rounded"
                  onClick={(e) => {
                    if (link.hasDropdown) {
                      e.preventDefault();
                      toggleDropdown(link.name);
                    }
                  }}
                >
                  {link.name}
                  {link.hasDropdown && <ChevronDown className="ml-1 h-4 w-4" />}
                </a>
              )}
              
              {link.hasDropdown && activeDropdown === link.name && link.dropdownItems && (
                <div 
                  ref={dropdownRef}
                  className="absolute top-full left-0 bg-white border border-gray-200 rounded-md shadow-lg mt-1 w-52 py-2 z-50"
                >
                  {link.dropdownItems.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="block px-4 py-2 text-sm hover:bg-blue-500 text-black hover:text-white"
                      onClick={() => setActiveDropdown(null)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
        
        <button 
          className="lg:hidden text-2xl"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <Menu className="text-black" />
        </button>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white text-black border-t border-gray-200">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-2">
            {navLinks.map((link) => (
              <div key={link.name}>
                {link.href.startsWith('/') ? (
                  <Link 
                    to={link.href} 
                    className="font-graphik font-medium hover:bg-blue-500 hover:text-white transition-colors flex items-center py-2 px-2 rounded"
                    onClick={(e) => {
                      if (link.hasDropdown) {
                        e.preventDefault();
                        toggleDropdown(link.name);
                      } else {
                        setMobileMenuOpen(false);
                        setActiveDropdown(null);
                      }
                    }}
                  >
                    {link.name}
                    {link.hasDropdown && (
                      <ChevronDown 
                        className={`ml-1 h-4 w-4 transition-transform ${activeDropdown === link.name ? 'transform rotate-180' : ''}`}
                      />
                    )}
                  </Link>
                ) : (
                  <a 
                    href={link.href} 
                    className="font-graphik font-medium hover:bg-blue-500 hover:text-white transition-colors flex items-center py-2 px-2 rounded"
                    onClick={(e) => {

                      if (link.hasDropdown) {
                        e.preventDefault();
                        toggleDropdown(link.name);
                      } else {
                        setMobileMenuOpen(false);
                        setActiveDropdown(null);
                      }
                    }}
                  >
                    {link.name}
                    {link.hasDropdown && (
                      <ChevronDown 
                        className={`ml-1 h-4 w-4 transition-transform ${activeDropdown === link.name ? 'transform rotate-180' : ''}`}
                      />
                    )}
                  </a>
                )}
                
                {link.hasDropdown && link.dropdownItems && (
                  <div className="pl-4 mt-1 border-l-2 border-gray-200 space-y-2">
                    {link.dropdownItems.map((item) => {
                      console.log(item)
                      return(
                      <Link
                        key={item.name}
                        to={item.href}
                        className="block py-1 px-2 text-sm hover:bg-blue-500 hover:text-white rounded"
                        onClick={() => {
                          console.log("ERror")
                          setTimeout(() => {
                            setMobileMenuOpen(false);
                            setActiveDropdown(null);
                          }, 100)}}
                      >
                        {item.name}
                      </Link>
                      )})}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
