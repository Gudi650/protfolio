import React from 'react';
import { motion } from 'framer-motion';
export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <motion.p
            initial={{
              opacity: 0
            }}
            animate={{
              opacity: 1
            }}
            transition={{
              duration: 0.6
            }}
            className="text-zinc-500 text-sm">

            © {currentYear} Godluck Msangi. All rights reserved.
          </motion.p>

          <motion.p
            initial={{
              opacity: 0
            }}
            animate={{
              opacity: 1
            }}
            transition={{
              duration: 0.6,
              delay: 0.1
            }}
            className="text-zinc-600 text-sm font-mono">

            Built with <span className="text-[#00d4ff]">React</span> &{' '}
            <span className="text-[#00d4ff]">TypeScript</span>
          </motion.p>
        </div>
      </div>
    </footer>);

}