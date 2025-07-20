const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React", "TypeScript", "Next.js", "Vue.js", "Tailwind CSS", "Framer Motion"]
    },
    {
      title: "Backend", 
      skills: ["Node.js", "Python", "Express", "Django", "PostgreSQL", "MongoDB"]
    },
    {
      title: "Tools & Design",
      skills: ["Git", "Docker", "Figma", "Adobe Creative Suite", "Webflow", "Vercel"]
    },
    {
      title: "Mobile",
      skills: ["React Native", "Flutter", "Expo", "iOS", "Android", "Firebase"]
    }
  ]

  return (
    <section id="skills" className="min-h-screen flex flex-col items-center justify-center py-24 px-16 bg-white">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold text-black mb-8">Skills</h1>
      </div>
      
      <div className="max-w-6xl w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category) => (
            <div key={category.title} className="space-y-6">
              <h2 className="text-2xl font-semibold text-black text-center">{category.title}</h2>
              
              <div className="space-y-3">
                {category.skills.map((skill) => (
                  <div 
                    key={skill}
                    className="bg-gray-50 border border-gray-200 rounded-lg p-3 hover:border-gray-400 transition-colors"
                  >
                    <p className="text-gray-700 text-center">{skill}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Section */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-semibold text-black mb-8">Other Technologies</h2>
          
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {[
              "GraphQL", "REST APIs", "AWS", "Google Cloud", "Stripe", "Auth0", 
              "Jest", "Cypress", "Webpack", "Vite", "Prisma", "Supabase",
              "Shopify", "WordPress", "Contentful", "Sanity"
            ].map((tech) => (
              <div 
                key={tech}
                className="bg-gray-50 border border-gray-200 rounded-full px-4 py-2 hover:border-gray-400 transition-colors"
              >
                <p className="text-gray-700 text-sm">{tech}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-semibold text-black mb-8">Certifications & Achievements</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <h3 className="text-black font-semibold mb-2">AWS Certified Developer</h3>
              <p className="text-gray-700 text-sm">Amazon Web Services • 2023</p>
            </div>
            
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <h3 className="text-black font-semibold mb-2">Google UX Design Certificate</h3>
              <p className="text-gray-700 text-sm">Google • 2022</p>
            </div>
            
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <h3 className="text-black font-semibold mb-2">Meta Frontend Developer</h3>
              <p className="text-gray-700 text-sm">Meta • 2022</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills 