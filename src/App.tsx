import './styles.css'
import DecryptedText from './TextAnimations/DecryptedText/DecryptedText'

import EnhancedImageTrail from './Components/EnhancedImageTrail'
import { TextHighlighter } from './Components/TextHighlighter/text-highlighter'
import AboutMe from './Components/AboutMe'
import Experience from './Components/Experience'
import Projects from './Components/Projects'
import Skills from './Components/Skills'
import Contact from './Components/Contact'
import ScrambleHover from './Components/ScrambleHover/scramble-hover-text'
import { motion } from 'framer-motion'
import { useEffect } from 'react'

function App() {




  // Add smooth scrolling behavior
  useEffect(() => {
    const handleSmoothScroll = (e: Event) => {
      e.preventDefault()
      const target = e.target as HTMLAnchorElement
      const targetId = target.getAttribute('href')?.substring(1)
      if (targetId) {
        const targetElement = document.getElementById(targetId)
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          })
        }
      }
    }

    const navLinks = document.querySelectorAll('nav a[href^="#"]')
    navLinks.forEach(link => {
      link.addEventListener('click', handleSmoothScroll)
    })

    return () => {
      navLinks.forEach(link => {
        link.removeEventListener('click', handleSmoothScroll)
      })
    }
  }, [])

  // Animation variants for sections
  const sectionVariants = {
    hidden: { 
      opacity: 0, 
      y: 50 
    },
    visible: { 
      opacity: 1, 
      y: 0
    }
  }

  return (
    <div className="relative w-screen min-h-screen bg-white overflow-x-hidden">
      {/* Navigation Bar */}
      <motion.nav 
        className="fixed top-0 left-0 w-full flex justify-center gap-12 py-6 z-50 bg-white/70 backdrop-blur-md border-b border-gray-200/50"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <a href="#hero" className="text-black text-lg font-semibold hover:text-blue-600 transition-all duration-300 hover:scale-105">home</a>
        <a href="#about" className="text-black text-lg font-semibold hover:text-blue-600 transition-all duration-300 hover:scale-105">education</a>
        <a href="#experience" className="text-black text-lg font-semibold hover:text-blue-600 transition-all duration-300 hover:scale-105">experience</a>
        <a href="#projects" className="text-black text-lg font-semibold hover:text-blue-600 transition-all duration-300 hover:scale-105">projects</a>
        <a href="#skills" className="text-black text-lg font-semibold hover:text-blue-600 transition-all duration-300 hover:scale-105">skills</a>
        <a href="#contact" className="text-black text-lg font-semibold hover:text-blue-600 transition-all duration-300 hover:scale-105">contact</a>
      </motion.nav>

      {/* Main Content */}
      <main className="relative z-10">
        {/* Hero Section with Image Trail */}
        <motion.section 
          id="hero" 
          className="relative h-screen flex flex-col items-center justify-center overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Enhanced Image Trail - Only on Hero */}
          <EnhancedImageTrail />
          
          {/* Hero Content */}
          <div className="relative z-10 pointer-events-none">
            <div className="text-center mb-8">
              <DecryptedText
                text="Hi, I'm Andrew Cho"
                speed={60}
                animateOn="view"
                sequential={true}
                revealDirection="start"
                className="text-6xl font-bold text-black"
                encryptedClassName="text-6xl font-bold text-gray-600"
              />
            </div>
            <motion.div 
              className="max-w-3xl mx-auto text-left"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <p className="text-xl text-black/90 leading-relaxed">
                I'm a computer science student at Princeton passionate about using{" "}
            <ScrambleHover
                   text="data science"
                   scrambleSpeed={70}
                   characters="0123456789!@#$%^&*()"
                   className="text-xl text-black font-bold cursor-pointer pointer-events-auto"
                   scrambledClassName="text-lg text-black font-bold"
                 /> {" "}
                and software engineering to solve real-world problems. 
                In my free time, you'll find me snapping iPhone photos,{" "}
                <TextHighlighter
                   className="text-xl text-black/90 leading-relaxed rounded-[0.3em] px-2"
                   highlightColor="hsla(90, 100.00%, 50.00%, 0.76)"
                   triggerType="inView"
                   direction="ltr"
                   transition={{ duration: 0.8, delay: 0.3 }} 
                 >
                   <a 
                     href="https://letterboxd.com/chosterjoker/" 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="text-black hover:text-white transition-colors pointer-events-auto"
                   >
                     {"    "}letterboxing
                   </a>
                 </TextHighlighter>
                 {" "} the latest film, or DJing a new {"  "} 
                 <TextHighlighter
                   className="text-xl text-black/90 leading-relaxed rounded-[0.3em] px-2"
                   highlightColor="hsl(139, 59.10%, 53.90%)"
                   triggerType="inView"
                   direction="ltr"
                   transition={{ duration: 0.8, delay: 0.4 }} 
                 >
                   <a 
                     href="https://open.spotify.com/user/chostester_123?si=f82beb8faf8d4c6a" 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="text-black hover:text-white transition-colors pointer-events-auto"
                   >
                     playlist.
                   </a>
                 </TextHighlighter>
              </p>
            </motion.div>
          </div>
          
          {/* Instruction text */}
          <motion.p 
            className="absolute top-20 left-6 text-black/60 text-sm font-medium pointer-events-none z-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            move your cursor
          </motion.p>
        </motion.section>

        {/* Other Sections with entrance animations */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <AboutMe />
        </motion.div>

        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.1 }}
        >
          <Experience />
        </motion.div>

        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.2 }}
        >
          <Projects />
        </motion.div>

        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.3 }}
        >
          <Skills />
        </motion.div>

        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.4 }}
        >
          <Contact />
        </motion.div>
      </main>
    </div>
  )
}

export default App