"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const Navbar = () => {
  // State to trigger the slide-in animation upon mounting
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Small delay to ensure smooth entrance after the HTML renders
    const timer = setTimeout(() => setIsMounted(true), 50);
    return () => clearTimeout(timer);
  }, []);

  // Base styles for the links
  const linkStyle = "cursor-pointer hover:opacity-70 transition-opacity no-underline";

  return (
    <nav className="container relative" style={{ paddingLeft: '16em', paddingRight: '16em' }}>
                         <div className="slidein"></div>
      {/* Main Flex Container */}
      <div className="flex items-center justify-between">



        
        {/* LEFT: Name (uses your serif font) */}
        {/* Internal Links use Next/Link */}
          <Link 
  href="/" 
  style={{ 
    fontFamily: 'var(--font-sf-mono)', // Force the variable directly
    fontSize: '12px',
    textDecoration: 'none',
    color: 'inherit',
    opacity: 0.7,
  }}
>
  smp
</Link>

        {/* RIGHT: Links (uses your sans-serif font) */}
        {/* Using 'p secondary' classes to match your body font style */}
        <div className={`flex items-center gap-6 p secondary text-sm` } style={{color: 'inherit', textDecoration: 'none'}}>
          
          {/* Internal Links use Next/Link */}

          
          <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className={linkStyle} style={{ 
    fontFamily: 'var(--font-sf-mono)', // Force the variable directly
    fontSize: '12px',
    textDecoration: 'none',
    color: 'inherit',
    opacity: 0.7, padding: '12px',
  }}>
            LinkedIn
          </a>
        </div>
      </div>

      {/* THE SLIDE-IN DIVIDER */}
      {/* - absolute bottom-0: Places it at the bottom edge of the nav
          - h-[1px] bg-current: Makes it a thin line using the current text color
          - transition-all duration-700: Handles the smooth animation
          - ease-out: Starts fast, ends slow
          - The width switches from 'w-0' to 'w-full' based on state
      */}

    </nav>
  );
};

export default Navbar;