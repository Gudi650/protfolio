import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MenuIcon, XIcon } from 'lucide-react';
const navLinks = [
{
  name: 'About',
  href: '#about'
},
{
  name: 'Projects',
  href: '#projects'
},
{
  name: 'Skills',
  href: '#skills'
},
{
  name: 'Contact',
  href: '#contact'
}];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return (
    <>
      <motion.nav
        initial={{
          y: -100
        }}
        animate={{
          y: 0
        }}
        transition={{
          duration: 0.6,
          ease: [0.25, 0.1, 0.25, 1]
        }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[#0a0a0a]/80 backdrop-blur-lg border-b border-white/5' : ''}`}>

        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex items-center justify-between h-20">
            <motion.a
              href="#"
              className="font-heading text-xl font-bold tracking-tight"
              whileHover={{
                scale: 1.02
              }}>

              godluck<span className="text-[#00d4ff]">.</span>msangi
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) =>
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className="text-sm text-zinc-400 hover:text-white transition-colors duration-200 font-medium">

                  {link.name}
                </button>
              )}
              <motion.button
                onClick={() => handleNavClick('#contact')}
                className="px-5 py-2.5 bg-[#00d4ff] text-black text-sm font-semibold rounded-full hover:bg-[#00bfe0] transition-colors"
                whileHover={{
                  scale: 1.02
                }}
                whileTap={{
                  scale: 0.98
                }}>

                Let's Talk
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-white"
              aria-label="Toggle menu">

              {isMobileMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen &&
        <motion.div
          initial={{
            opacity: 0
          }}
          animate={{
            opacity: 1
          }}
          exit={{
            opacity: 0
          }}
          transition={{
            duration: 0.3
          }}
          className="fixed inset-0 z-40 bg-[#0a0a0a]/95 backdrop-blur-xl md:hidden">

            <motion.div
            initial={{
              opacity: 0,
              y: 20
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            exit={{
              opacity: 0,
              y: 20
            }}
            transition={{
              duration: 0.3,
              delay: 0.1
            }}
            className="flex flex-col items-center justify-center h-full gap-8">

              {navLinks.map((link, index) =>
            <motion.button
              key={link.name}
              initial={{
                opacity: 0,
                y: 20
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              transition={{
                duration: 0.3,
                delay: 0.1 + index * 0.05
              }}
              onClick={() => handleNavClick(link.href)}
              className="text-3xl font-heading font-bold text-white hover:text-[#00d4ff] transition-colors">

                  {link.name}
                </motion.button>
            )}
              <motion.a
              initial={{
                opacity: 0,
                y: 20
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              transition={{
                duration: 0.3,
                delay: 0.3
              }}
              href="mailto:godluckmsangi3@gmail.com"
              className="mt-4 px-8 py-3 bg-[#00d4ff] text-black text-lg font-semibold rounded-full">

                Let's Talk
              </motion.a>
            </motion.div>
          </motion.div>
        }
      </AnimatePresence>
    </>);

}