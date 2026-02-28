import React, { Children } from 'react';
import { motion } from 'framer-motion';
import { ArrowDownIcon } from 'lucide-react';
const letterVariants = {
  hidden: {
    opacity: 0,
    y: 50
  },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.03,
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1]
    }
  })
};
const containerVariants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.03,
      delayChildren: 0.3
    }
  }
};
export function Hero() {
  const firstName = 'Godluck';
  const lastName = 'Msangi';
  const title = 'Fullstack Developer';
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Abstract decorative element */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-full pointer-events-none hidden lg:block">
        <div className="absolute right-20 top-1/4 w-96 h-96 rounded-full bg-gradient-to-br from-[#00d4ff]/10 to-transparent blur-3xl" />
        <div className="absolute right-40 bottom-1/4 w-64 h-64 rounded-full bg-gradient-to-tl from-[#00d4ff]/5 to-transparent blur-2xl" />
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.8,
            rotate: -10
          }}
          animate={{
            opacity: 1,
            scale: 1,
            rotate: 0
          }}
          transition={{
            duration: 1,
            delay: 0.8,
            ease: [0.25, 0.1, 0.25, 1]
          }}
          className="absolute right-32 top-1/3 w-px h-48 bg-gradient-to-b from-transparent via-[#00d4ff]/30 to-transparent" />

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.8
          }}
          animate={{
            opacity: 1,
            scale: 1
          }}
          transition={{
            duration: 1,
            delay: 1,
            ease: [0.25, 0.1, 0.25, 1]
          }}
          className="absolute right-48 top-1/2 w-32 h-px bg-gradient-to-r from-transparent via-[#00d4ff]/30 to-transparent" />

      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full pt-32 pb-20">
        <div className="max-w-4xl">
          {/* Overline */}
          <motion.div
            initial={{
              opacity: 0,
              x: -20
            }}
            animate={{
              opacity: 1,
              x: 0
            }}
            transition={{
              duration: 0.6,
              delay: 0.1
            }}
            className="flex items-center gap-3 mb-8">

            <div className="w-12 h-px bg-[#00d4ff]" />
            <span className="text-[#00d4ff] font-mono text-sm tracking-wider uppercase">
              Available for work
            </span>
          </motion.div>

          {/* Name - always stacked */}
          <motion.h1
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="font-heading text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight leading-none mb-6">

            {/* First name */}
            <span className="block">
              {firstName.split('').map((char, i) =>
              <motion.span
                key={`first-${i}`}
                variants={letterVariants}
                custom={i}
                className="inline-block">

                  {char}
                </motion.span>
              )}
            </span>
            {/* Last name */}
            <span className="block">
              {lastName.split('').map((char, i) =>
              <motion.span
                key={`last-${i}`}
                variants={letterVariants}
                custom={firstName.length + 1 + i}
                className="inline-block">

                  {char}
                </motion.span>
              )}
            </span>
          </motion.h1>

          {/* Title */}
          <motion.div
            initial={{
              opacity: 0,
              y: 30
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.6,
              delay: 0.6
            }}
            className="mb-8">

            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-semibold text-zinc-400">
              {title}
            </h2>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{
              opacity: 0,
              y: 30
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.6,
              delay: 0.8
            }}
            className="text-lg md:text-xl text-zinc-500 max-w-2xl leading-relaxed mb-12">

            I craft exceptional digital experiences with{' '}
            <span className="text-white font-medium">Laravel</span>,{' '}
            <span className="text-white font-medium">Next.js</span>, and{' '}
            <span className="text-white font-medium">React</span>. Building
            scalable applications that blend beautiful interfaces with robust
            architecture.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{
              opacity: 0,
              y: 30
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.6,
              delay: 1
            }}
            className="flex flex-wrap gap-4">

            <motion.a
              href="#projects"
              className="px-8 py-4 bg-[#00d4ff] text-black font-semibold rounded-full hover:bg-[#00bfe0] transition-colors"
              whileHover={{
                scale: 1.02
              }}
              whileTap={{
                scale: 0.98
              }}>

              View My Work
            </motion.a>
            <motion.a
              href="#contact"
              className="px-8 py-4 border border-white/20 text-white font-semibold rounded-full hover:bg-white/5 transition-colors"
              whileHover={{
                scale: 1.02
              }}
              whileTap={{
                scale: 0.98
              }}>

              Get in Touch
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      
    </section>);

}