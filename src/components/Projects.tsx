import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ExternalLinkIcon, GithubIcon } from 'lucide-react';
interface Project {
  name: string;
  description: string;
  tech: string[];
  liveUrl: string;
  githubUrl: string;
}
const projects: Project[] = [
{
  name: 'HeavLink',
  description:
  'A church management SaaS with real-time collaboration, Financial tracking, and team analytics.',
  tech: ['Next.js', 'Laravel API', 'Mysql', 'Redis', 'WebSockets'],
  liveUrl: '#',
  githubUrl: '#'
},
{
  name: 'SgclCustomers',
  description:
  'Inventory management system, order processing, and customer relationship management for small businesses.',
  tech: ['React', 'Laravel', 'Stripe', 'MySQL', 'Tailwind CSS'],
  liveUrl: '#',
  githubUrl: '#'
},
{
  name: 'Dops Website',
  description:
  'Offcial website for Dops, a leading software development company specializing in php , laravel and nextjs development services.',
  tech: ['React','Tailwind CSS'],
  liveUrl: '#',
  githubUrl: '#'
},
{
  name: 'Shooli',
  description:
  'School Managament System with features like attendance tracking, grade management, and parent-teacher communication.',
  tech: ['React', 'Laravel', 'Chart.js','Mysql'],
  liveUrl: '#',
  githubUrl: '#'
}
  ];

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 50
  },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1]
    }
  })
};
export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: '-100px'
  });
  return (
    <section id="projects" className="py-24 md:py-32" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">
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
            02
          </span>
          <div className="w-12 h-px bg-white/20" />
          <span className="text-zinc-500 font-mono text-sm uppercase tracking-wider">
            Projects
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
          className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-16 leading-tight max-w-3xl">

          Selected <span className="text-[#00d4ff]">work</span> that I'm proud
          of
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) =>
          <motion.article
            key={project.name}
            variants={cardVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            custom={index}
            className="group relative p-8 bg-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl hover:border-[#00d4ff]/50 transition-all duration-500">

              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#00d4ff]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="font-heading text-2xl font-bold text-white group-hover:text-[#00d4ff] transition-colors">
                    {project.name}
                  </h3>
                  <div className="flex gap-3">
                    <motion.a
                    href={project.githubUrl}
                    className="p-2 text-zinc-500 hover:text-white transition-colors"
                    whileHover={{
                      scale: 1.1
                    }}
                    whileTap={{
                      scale: 0.95
                    }}
                    aria-label={`View ${project.name} on GitHub`}>

                      <GithubIcon size={20} />
                    </motion.a>
                    <motion.a
                    href={project.liveUrl}
                    className="p-2 text-zinc-500 hover:text-white transition-colors"
                    whileHover={{
                      scale: 1.1
                    }}
                    whileTap={{
                      scale: 0.95
                    }}
                    aria-label={`View ${project.name} live demo`}>

                      <ExternalLinkIcon size={20} />
                    </motion.a>
                  </div>
                </div>

                <p className="text-zinc-400 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) =>
                <span
                  key={tech}
                  className="px-3 py-1 text-xs font-mono text-zinc-400 bg-white/5 rounded-full">

                      {tech}
                    </span>
                )}
                </div>
              </div>
            </motion.article>
          )}
        </div>
      </div>
    </section>);

}