import { useState, useEffect } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-gray-900 shadow-lg" : "bg-transparent"
      } animate-fade-up`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center">
              <span className="text-xl font-bold text-white">
                Subhadeep Maity
              </span>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-4">
            {["Home", "About", "Projects", "Contact"].map((item, index) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(" ", "")}`}
                className="text-gray-300 hover:bg-purple-700 hover:text-white px-4 py-2 rounded-md font-medium transition"
              >
                {item}
              </a>
            ))}
            <a
              href="/src/assets/Subhadeep%20Maity%20CV.pdf"
              download="Subhadeep_Maity_Resume.pdf"
              className="inline-block"
            >
              <button className="bg-purple-500 hover:bg-purple-700 cursor-pointer text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:-translate-y-1">
                Download CV
              </button>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-white hover:bg-purple-700 focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isOpen ? (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden bg-gray-900 transition-all duration-300 ${
          isOpen ? "h-auto opacity-100 visible" : "h-0 opacity-0 invisible"
        } animate-fade-up`}
      >
        <div className="px-4 pt-2 pb-3 space-y-1">
          {["Home", "About", "Projects", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(" ", "")}`}
              className="block text-gray-300 px-4 py-2 rounded-md text-base font-medium hover:bg-purple-700 hover:text-white transition"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </a>
          ))}
          <a
            href="/Subhadeep Maity CV.pdf"
            download="Subhadeep_Maity_Resume.pdf"
            className="inline-block w-full"
            onClick={() => setIsOpen(false)}
          >
            <button className="w-full bg-purple-500 hover:bg-purple-700 cursor-pointer text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:-translate-y-1">
              Download CV
            </button>
          </a>
        </div>
      </div>

      {/* HR Line */}
      <hr
        className={`border-t border-purple-400 w-full transition-opacity duration-300 ${
          isScrolled ? "opacity-100" : "opacity-30"
        }`}
      />
    </nav>
  );
};

export default Navbar;
