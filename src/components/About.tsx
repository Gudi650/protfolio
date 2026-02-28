import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
const techStack = [
'Laravel/PHP',
'Next.js',
'React',
'TypeScript',
'Mysql',
'PostgreSQL',
'Git',
'Docker',
'Node.js',
'Tailwind CSS'];

const tools = [
'Figma',
'Postman',
'VS Code',
'GitHub',
'Adobe XD',
];

const pillVariants = {
  hidden: {
    opacity: 0,
    scale: 0.8
  },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: i * 0.05,
      duration: 0.4,
      ease: [0.25, 0.1, 0.25, 1]
    }
  })
};
export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: '-100px'
  });
  return (
    <section id="about" className="py-24 md:py-32" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* Left column - wider */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{
                opacity: 0,
                x: -30
              }}
              animate={
              isInView ?
              {
                opacity: 1,
                x: 0
              } :
              {}
              }
              transition={{
                duration: 0.6,
                ease: [0.25, 0.1, 0.25, 1]
              }}
              className="flex items-center gap-3 mb-8">

              <span className="text-[#00d4ff] font-mono text-sm tracking-wider">
                01
              </span>
              <div className="w-12 h-px bg-white/20" />
              <span className="text-zinc-500 font-mono text-sm uppercase tracking-wider">
                About
              </span>
            </motion.div>

            <motion.h2
              initial={{
                opacity: 0,
                y: 30
              }}
              animate={
              isInView ?
              {
                opacity: 1,
                y: 0
              } :
              {}
              }
              transition={{
                duration: 0.6,
                delay: 0.1,
                ease: [0.25, 0.1, 0.25, 1]
              }}
              className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">

              Building digital products with{' '}
              <span className="text-[#00d4ff]">precision</span> and{' '}
              <span className="text-[#00d4ff]">purpose</span>
            </motion.h2>

            <motion.p
              initial={{
                opacity: 0,
                y: 30
              }}
              animate={
              isInView ?
              {
                opacity: 1,
                y: 0
              } :
              {}
              }
              transition={{
                duration: 0.6,
                delay: 0.2,
                ease: [0.25, 0.1, 0.25, 1]
              }}
              className="text-lg text-zinc-400 leading-relaxed mb-8">

              I'm a fullstack developer with a passion for creating seamless
              digital experiences. With expertise spanning from pixel-perfect
              frontends to scalable backend architectures, I bring ideas to life
              through clean code and thoughtful design. I believe in building
              products that not only look great but perform exceptionally under
              any conditions.
            </motion.p>

            <motion.p
              initial={{
                opacity: 0,
                y: 30
              }}
              animate={
              isInView ?
              {
                opacity: 1,
                y: 0
              } :
              {}
              }
              transition={{
                duration: 0.6,
                delay: 0.3,
                ease: [0.25, 0.1, 0.25, 1]
              }}
              className="text-lg text-zinc-400 leading-relaxed">

              When I'm not coding, you'll find me exploring new technologies,
              contributing to open-source projects, or sharing knowledge with
              the developer community.
            </motion.p>
          </div>

          {/* Right column - narrower, offset */}
          <div className="lg:col-span-5 lg:pt-24">
            <motion.div
              initial={{
                opacity: 0,
                y: 30
              }}
              animate={
              isInView ?
              {
                opacity: 1,
                y: 0
              } :
              {}
              }
              transition={{
                duration: 0.6,
                delay: 0.4,
                ease: [0.25, 0.1, 0.25, 1]
              }}
              className="mb-12">

              <div className="flex items-baseline gap-2 mb-2">
                <span className="font-heading text-6xl md:text-7xl font-bold text-[#00d4ff]">
                  2+
                </span>
                <span className="text-zinc-500 text-lg">years</span>
              </div>
              <p className="text-zinc-500">of professional experience</p>
            </motion.div>

            <motion.div
              initial={{
                opacity: 0,
                y: 30
              }}
              animate={
              isInView ?
              {
                opacity: 1,
                y: 0
              } :
              {}
              }
              transition={{
                duration: 0.6,
                delay: 0.5,
                ease: [0.25, 0.1, 0.25, 1]
              }}>

              <h3 className="text-sm font-mono text-zinc-500 uppercase tracking-wider mb-4">
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech, index) =>
                <motion.span
                  key={tech}
                  variants={pillVariants}
                  initial="hidden"
                  animate={isInView ? 'visible' : 'hidden'}
                  custom={index}
                  className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm font-mono text-zinc-300 hover:border-[#00d4ff]/50 hover:text-white transition-colors cursor-default">

                    {tech}
                  </motion.span>
                )}
              </div>
            </motion.div>

            <motion.div
              initial={{
                opacity: 0,
                y: 30
              }}
              animate={
              isInView ?
              {
                opacity: 1,
                y: 0
              } :
              {}
              }
              transition={{
                duration: 0.6,
                delay: 0.6,
                ease: [0.25, 0.1, 0.25, 1]
              }}
              className="mt-8">

              <h3 className="text-sm font-mono text-zinc-500 uppercase tracking-wider mb-4">
                Tools I Use
              </h3>
              <div className="flex flex-wrap gap-2">
                {tools.map((tool, index) =>
                <motion.span
                  key={tool}
                  variants={pillVariants}
                  initial="hidden"
                  animate={isInView ? 'visible' : 'hidden'}
                  custom={index + techStack.length}
                  className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm font-mono text-zinc-300 hover:border-[#00d4ff]/50 hover:text-white transition-colors cursor-default">

                    {tool}
                  </motion.span>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>);

}