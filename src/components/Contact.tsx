import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  MailIcon,
  GithubIcon,
  LinkedinIcon,
  TwitterIcon,
  SendIcon,
  CheckCircleIcon } from
'lucide-react';
const socialLinks = [
{
  name: 'GitHub',
  icon: <GithubIcon size={24} />,
  href: 'https://github.com'
},
{
  name: 'LinkedIn',
  icon: <LinkedinIcon size={24} />,
  href: 'https://linkedin.com'
},
{
  name: 'Twitter',
  icon: <TwitterIcon size={24} />,
  href: 'https://twitter.com'
}];

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: '-100px'
  });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleChange = (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
  {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };
  return (
    <section id="contact" className="py-24 md:py-32" ref={ref}>
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
            04
          </span>
          <div className="w-12 h-px bg-white/20" />
          <span className="text-zinc-500 font-mono text-sm uppercase tracking-wider">
            Contact
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
          className="font-heading text-4xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight max-w-3xl">

          Let's build something <span className="text-[#00d4ff]">great</span>{' '}
          together
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
          className="text-lg md:text-xl text-zinc-400 mb-16 leading-relaxed max-w-2xl">

          I'm always interested in hearing about new projects and opportunities.
          Drop me a message and I'll get back to you as soon as possible.
        </motion.p>

        <div className="grid lg:grid-cols-5 gap-16">
          {/* Contact Form */}
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
              delay: 0.3,
              ease: [0.25, 0.1, 0.25, 1]
            }}
            className="lg:col-span-3">

            {isSubmitted ?
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.95
              }}
              animate={{
                opacity: 1,
                scale: 1
              }}
              className="flex flex-col items-center justify-center py-16 px-8 bg-white/[0.02] border border-[#00d4ff]/20 rounded-2xl text-center">

                <CheckCircleIcon size={48} className="text-[#00d4ff] mb-4" />
                <h3 className="font-heading text-2xl font-bold mb-2">
                  Message Sent!
                </h3>
                <p className="text-zinc-400">
                  Thanks for reaching out. I'll get back to you soon.
                </p>
              </motion.div> :

            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label
                    htmlFor="name"
                    className="block text-sm font-mono text-zinc-400 uppercase tracking-wider mb-2">

                      Name
                    </label>
                    <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                    className="w-full px-5 py-4 bg-white/[0.03] border border-white/10 rounded-xl text-white placeholder-zinc-600 focus:outline-none focus:border-[#00d4ff]/50 focus:bg-white/[0.05] transition-all duration-300 font-medium" />

                  </div>
                  <div>
                    <label
                    htmlFor="email"
                    className="block text-sm font-mono text-zinc-400 uppercase tracking-wider mb-2">

                      Email
                    </label>
                    <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                    className="w-full px-5 py-4 bg-white/[0.03] border border-white/10 rounded-xl text-white placeholder-zinc-600 focus:outline-none focus:border-[#00d4ff]/50 focus:bg-white/[0.05] transition-all duration-300 font-medium" />

                  </div>
                </div>

                <div>
                  <label
                  htmlFor="subject"
                  className="block text-sm font-mono text-zinc-400 uppercase tracking-wider mb-2">

                    Subject
                  </label>
                  <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="What's this about?"
                  className="w-full px-5 py-4 bg-white/[0.03] border border-white/10 rounded-xl text-white placeholder-zinc-600 focus:outline-none focus:border-[#00d4ff]/50 focus:bg-white/[0.05] transition-all duration-300 font-medium" />

                </div>

                <div>
                  <label
                  htmlFor="message"
                  className="block text-sm font-mono text-zinc-400 uppercase tracking-wider mb-2">

                    Message
                  </label>
                  <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  placeholder="Tell me about your project..."
                  className="w-full px-5 py-4 bg-white/[0.03] border border-white/10 rounded-xl text-white placeholder-zinc-600 focus:outline-none focus:border-[#00d4ff]/50 focus:bg-white/[0.05] transition-all duration-300 font-medium resize-none" />

                </div>

                <motion.button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center gap-3 px-8 py-4 bg-[#00d4ff] text-black font-semibold rounded-full hover:bg-[#00bfe0] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                whileHover={
                !isSubmitting ?
                {
                  scale: 1.02
                } :
                {}
                }
                whileTap={
                !isSubmitting ?
                {
                  scale: 0.98
                } :
                {}
                }>

                  {isSubmitting ?
                <>
                      <motion.div
                    animate={{
                      rotate: 360
                    }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      ease: 'linear'
                    }}
                    className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full" />

                      Sending...
                    </> :

                <>
                      <SendIcon size={20} />
                      Send Message
                    </>
                }
                </motion.button>
              </form>
            }
          </motion.div>

          {/* Sidebar - Email & Socials */}
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
            className="lg:col-span-2">

            <div className="mb-10">
              <p className="text-sm font-mono text-zinc-500 uppercase tracking-wider mb-4">
                Email me directly
              </p>
              <a
                href="mailto:godluckmsangi3@gmail.com"
                className="text-lg text-white hover:text-[#00d4ff] transition-colors font-medium break-all">

                godluckmsangi3@gmail.com
              </a>
            </div>

            <div>
              <p className="text-sm font-mono text-zinc-500 uppercase tracking-wider mb-4">
                Find me on
              </p>
              <div className="flex gap-4">
                {socialLinks.map((link) =>
                <motion.a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-white/5 border border-white/10 rounded-xl text-zinc-400 hover:text-white hover:border-[#00d4ff]/50 transition-all"
                  whileHover={{
                    scale: 1.05,
                    y: -2
                  }}
                  whileTap={{
                    scale: 0.95
                  }}
                  aria-label={link.name}>

                    {link.icon}
                  </motion.a>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>);

}