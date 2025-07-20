const Experience = () => {
  return (
    <section id="experience" className="min-h-screen flex flex-col items-center justify-center py-24 px-16 bg-white">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold text-black mb-8">Experience</h1>
      </div>
      
      <div className="max-w-4xl w-full space-y-12">
        {/* Experience Item 1 */}
        <div className="border-l-2 border-gray-400 pl-8 relative">
          <div className="absolute w-4 h-4 bg-black rounded-full -left-2 top-2"></div>
          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-black mb-2">Software Engineering Intern</h2>
            <p className="text-gray-600 mb-4">Five Elms Capital • Summer 2025</p>
            <p className="text-gray-700 leading-relaxed">
              Developed and maintained React applications serving 100k+ users. Improved application performance by 40% through code optimization and implemented responsive design systems.
            </p>
          </div>
        </div>
        <div className="border-l-2 border-gray-400 pl-8 relative">
          <div className="absolute w-4 h-4 bg-black rounded-full -left-2 top-2"></div>
          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-black mb-2">Data Science Research Intern</h2>
            <p className="text-gray-600 mb-4">Princeton University • Fall 2024</p>
            <p className="text-gray-700 leading-relaxed">
              Conducted research on human-computer interaction and developed prototypes for accessibility tools. Published findings in academic conferences.
            </p>
          </div>
        </div>
        <div className="border-l-2 border-gray-400 pl-8 relative">
          <div className="absolute w-4 h-4 bg-black rounded-full -left-2 top-2"></div>
          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-black mb-2">Undergraduate Teaching Assistant</h2>
            <p className="text-gray-600 mb-4">Princeton University • Fal 2024</p>
            <p className="text-gray-700 leading-relaxed">
              Assisted in teaching the course "Introduction to Computer Science" and "Data Structures and Algorithms".
            </p>
          </div>
        </div>
        {/* Experience Item 2 */}
        <div className="border-l-2 border-gray-400 pl-8 relative">
          <div className="absolute w-4 h-4 bg-black rounded-full -left-2 top-2"></div>
          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-black mb-2">Data Science Intern</h2>
            <p className="text-gray-600 mb-4">Instituto CPE • Summer 2024</p>
            <p className="text-gray-700 leading-relaxed">
              Built interactive web components using React and TypeScript. Collaborated with design team to implement pixel-perfect UI interfaces and improved user experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience 