const Projects = () => {
  return (
    <section id="projects" className="min-h-screen flex flex-col items-center justify-center py-24 px-16 bg-white">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold text-black mb-8">Projects</h1>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl">
        {/* Project 1 */}
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 hover:border-gray-400 transition-colors">
          <h2 className="text-2xl font-semibold text-black mb-4">Portfolio Website</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            A responsive portfolio website built with React, TypeScript, and Tailwind CSS. Features interactive animations and modern design.
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="px-3 py-1 bg-gray-200 text-gray-700 text-sm rounded">React</span>
            <span className="px-3 py-1 bg-gray-200 text-gray-700 text-sm rounded">TypeScript</span>
            <span className="px-3 py-1 bg-gray-200 text-gray-700 text-sm rounded">Tailwind</span>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-blue-600 hover:text-blue-700 transition-colors">GitHub →</a>
            <a href="#" className="text-blue-600 hover:text-blue-700 transition-colors">Live Demo →</a>
          </div>
        </div>

        {/* Project 2 */}
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 hover:border-gray-400 transition-colors">
          <h2 className="text-2xl font-semibold text-black mb-4">Task Management App</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            A full-stack task management application with real-time collaboration features and drag-and-drop functionality.
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="px-3 py-1 bg-gray-200 text-gray-700 text-sm rounded">React</span>
            <span className="px-3 py-1 bg-gray-200 text-gray-700 text-sm rounded">Node.js</span>
            <span className="px-3 py-1 bg-gray-200 text-gray-700 text-sm rounded">MongoDB</span>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-blue-600 hover:text-blue-700 transition-colors">GitHub →</a>
            <a href="#" className="text-blue-600 hover:text-blue-700 transition-colors">Live Demo →</a>
          </div>
        </div>

        {/* Project 3 */}
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 hover:border-gray-400 transition-colors">
          <h2 className="text-2xl font-semibold text-black mb-4">Weather Dashboard</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            A beautiful weather dashboard with location-based forecasts, interactive charts, and minimalist design.
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="px-3 py-1 bg-gray-200 text-gray-700 text-sm rounded">Vue.js</span>
            <span className="px-3 py-1 bg-gray-200 text-gray-700 text-sm rounded">D3.js</span>
            <span className="px-3 py-1 bg-gray-200 text-gray-700 text-sm rounded">API</span>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-blue-600 hover:text-blue-700 transition-colors">GitHub →</a>
            <a href="#" className="text-blue-600 hover:text-blue-700 transition-colors">Live Demo →</a>
          </div>
        </div>

        {/* Project 4 */}
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 hover:border-gray-400 transition-colors">
          <h2 className="text-2xl font-semibold text-black mb-4">E-commerce Platform</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            A modern e-commerce platform with payment integration, inventory management, and admin dashboard.
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="px-3 py-1 bg-gray-200 text-gray-700 text-sm rounded">Next.js</span>
            <span className="px-3 py-1 bg-gray-200 text-gray-700 text-sm rounded">Stripe</span>
            <span className="px-3 py-1 bg-gray-200 text-gray-700 text-sm rounded">PostgreSQL</span>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-blue-600 hover:text-blue-700 transition-colors">GitHub →</a>
            <a href="#" className="text-blue-600 hover:text-blue-700 transition-colors">Live Demo →</a>
          </div>
        </div>

        {/* Project 5 */}
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 hover:border-gray-400 transition-colors">
          <h2 className="text-2xl font-semibold text-black mb-4">Mobile Fitness App</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            A React Native fitness tracking app with workout plans, progress tracking, and social features.
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="px-3 py-1 bg-gray-200 text-gray-700 text-sm rounded">React Native</span>
            <span className="px-3 py-1 bg-gray-200 text-gray-700 text-sm rounded">Firebase</span>
            <span className="px-3 py-1 bg-gray-200 text-gray-700 text-sm rounded">Expo</span>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-blue-600 hover:text-blue-700 transition-colors">GitHub →</a>
            <a href="#" className="text-blue-600 hover:text-blue-700 transition-colors">App Store →</a>
          </div>
        </div>

        {/* Project 6 */}
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 hover:border-gray-400 transition-colors">
          <h2 className="text-2xl font-semibold text-black mb-4">Data Visualization Tool</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            An interactive data visualization tool for analyzing complex datasets with customizable charts and filters.
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="px-3 py-1 bg-gray-200 text-gray-700 text-sm rounded">Python</span>
            <span className="px-3 py-1 bg-gray-200 text-gray-700 text-sm rounded">Plotly</span>
            <span className="px-3 py-1 bg-gray-200 text-gray-700 text-sm rounded">Flask</span>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-blue-600 hover:text-blue-700 transition-colors">GitHub →</a>
            <a href="#" className="text-blue-600 hover:text-blue-700 transition-colors">Live Demo →</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects 