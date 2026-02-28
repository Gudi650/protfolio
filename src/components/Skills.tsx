import React, { useRef, Children } from 'react';
import { motion, useInView } from 'framer-motion';
import { Code2Icon, ServerIcon, CloudIcon } from 'lucide-react';
interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: {
    name: string;
    level: number;
  }[];
}
const skillCategories: SkillCategory[] = [
{
  title: 'Frontend',
  icon: <Code2Icon size={24} />,
  skills: [
  {
    name: 'React',
    level: 95
  },
  {
    name: 'Next.js',
    level: 90
  },
  {
    name: 'TypeScript',
    level: 88
  },
  {
    name: 'Tailwind CSS',
    level: 92
  }]

},
{
  title: 'Backend',
  icon: <ServerIcon size={24} />,
  skills: [
  {
    name: 'Laravel',
    level: 93
  },
  {
    name: 'Node.js',
    level: 85
  },
  {
    name: 'PostgreSQL/Mysql',
    level: 88
  },
  {
    name: 'Next.js',
    level: 82
  }]

},
{
  title: 'DevOps',
  icon: <CloudIcon size={24} />,
  skills: [
  {
    name: 'Docker',
    level: 85
  },
  {
    name: 'AWS',
    level: 80
  },
  {
    name: 'CI/CD',
    level: 82
  },
  {
    name: 'Git',
    level: 95
  }]

}];

const containerVariants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};
const itemVariants = {
  hidden: {
    opacity: 0,
    y: 30
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1]
    }
  }
};
export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: '-100px'
  });
  return (
    <section id="skills" className="py-24 md:py-32 bg-white/[0.01]" ref={ref}>
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
            03
          </span>
          <div className="w-12 h-px bg-white/20" />
          <span className="text-zinc-500 font-mono text-sm uppercase tracking-wider">
            Skills
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

          Technologies I <span className="text-[#00d4ff]">work</span> with
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-3 gap-8">

          {skillCategories.map((category) =>
          <motion.div
            key={category.title}
            variants={itemVariants}
            className="p-8 bg-white/[0.02] border border-white/10 rounded-2xl">

              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-[#00d4ff]/10 rounded-xl text-[#00d4ff]">
                  {category.icon}
                </div>
                <h3 className="font-heading text-xl font-bold">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-6">
                {category.skills.map((skill, index) =>
              <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-mono text-zinc-300">
                        {skill.name}
                      </span>
                      <span className="text-sm font-mono text-zinc-500">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                    initial={{
                      width: 0
                    }}
                    animate={
                    isInView ?
                    {
                      width: `${skill.level}%`
                    } :
                    {
                      width: 0
                    }
                    }
                    transition={{
                      duration: 1,
                      delay: 0.5 + index * 0.1,
                      ease: [0.25, 0.1, 0.25, 1]
                    }}
                    className="h-full bg-gradient-to-r from-[#00d4ff] to-[#0090b0] rounded-full" />

                    </div>
                  </div>
              )}
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>);

}