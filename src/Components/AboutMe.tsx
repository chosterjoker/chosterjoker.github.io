const AboutMe = () => {
  return (
    <section id="about" className="min-h-screen flex flex-col items-center justify-center py-24 px-16 bg-white">
      <div className="max-w-6xl w-full space-y-16">
        {/* Education & Leadership Timeline */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-black mb-16">education</h1>
          
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Princeton University */}
            <div className="border-l-2 border-gray-400 pl-8 relative">
              <div className="absolute w-4 h-4 bg-black rounded-full -left-2 top-2"></div>
              <div className="text-left">
                <h2 className="text-2xl font-semibold text-black mb-2">Princeton University</h2>
                <p className="text-gray-600 mb-2">B.S.E Computer Science • Minor in Statistics & Machine Learning • Minor in Finance</p>
                <p className="text-gray-600 mb-4">Class of 2027</p>
              </div>
            </div>

            {/* Leadership Experience */}
            <div className="border-l-2 border-gray-400 pl-8 relative">
              <div className="absolute w-4 h-4 bg-black rounded-full -left-2 top-2"></div>
              <div className="text-left">
                <h2 className="text-2xl font-semibold text-black mb-2">HackPrinceton Director</h2>
                <p className="text-gray-600 mb-4">Princeton University • February 2024 - Present</p>
                <p className="text-gray-700 leading-relaxed">
                  Organizing Princeton's flagship hackathon. Apply here!
                </p>
              </div>
            </div>

            <div className="border-l-2 border-gray-400 pl-8 relative">
              <div className="absolute w-4 h-4 bg-black rounded-full -left-2 top-2"></div>
              <div className="text-left">
                <h2 className="text-2xl font-semibold text-black mb-2">Undergraduate Teaching Assistant</h2>
                <p className="text-gray-600 mb-4">Computer Science Department • Fall 2024</p>
                <p className="text-gray-700 leading-relaxed">
                  Mentored 18 students in Java Programming, OOP, Data Structures, and Theory in COS 126.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Coursework & Interests Grid */}
        <div className="grid md:grid-cols-2 gap-16">
          {/* Relevant Coursework */}
          <div>
            <h2 className="text-3xl font-semibold text-black mb-8 text-center">Relevant Coursework</h2>
            <div className="grid grid-cols-2 gap-3">
              {[
                "Intro to Computer Science",
                "Data Structures & Algorithms",
                "Systems Programming",
                "Machine Learning",
                "Advanced Programming Techniques",
                "Statistics & Probability",
                "Linear Algebra",
                "Computational Reasoning"
              ].map((course) => (
                <div key={course} className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-center">
                  <p className="text-gray-700 text-sm font-medium">{course}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Interests */}
          <div>
            <h2 className="text-3xl font-semibold text-black mb-8 text-center">Interests</h2>
            <div className="grid grid-cols-1 gap-4">
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 text-center">
                <h3 className="text-lg font-semibold text-black mb-2">📸 Photography</h3>
                <p className="text-gray-700 text-sm">iPhone photography and capturing moments around campus and beyond.</p>
              </div>
              
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 text-center">
                <h3 className="text-lg font-semibold text-black mb-2">🎬 Film & Cinema</h3>
                <p className="text-gray-700 text-sm">Passionate about film analysis and discovering new directors and genres.</p>
              </div>
              
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 text-center">
                <h3 className="text-lg font-semibold text-black mb-2">🎵 Music & DJing</h3>
                <p className="text-gray-700 text-sm">Creating playlists and exploring different music genres and artists.</p>
              </div>
              
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 text-center">
                <h3 className="text-lg font-semibold text-black mb-2">📊 Data Science</h3>
                <p className="text-gray-700 text-sm">Exploring data patterns and building predictive models for real-world applications.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMe 