const Contact = () => {
  return (
    <section id="contact" className="min-h-screen flex flex-col items-center justify-center py-24 px-16 bg-white">
      <div className="w-full max-w-4xl">
        <div className="flex flex-col md:flex-row font-medium items-start text-black h-full py-16 space-y-8 md:space-y-0 md:space-x-16 text-lg md:text-xl lg:text-2xl">
          <div className="text-3xl font-bold">contact</div>
          
          <div className="flex flex-col space-y-12">
            {/* Social Links */}
            <ul className="flex flex-col space-y-3">
              <li>
                <a 
                  href="#" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group relative inline-block"
                >
                  <span className="group-hover:text-indigo-600 transition-colors duration-300">
                    BELI
                  </span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-600 transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
              
              <li>
                <a 
                  href="https://github.com/chosterjoker" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group relative inline-block"
                >
                  <span className="group-hover:text-gray-600 transition-colors duration-300">
                    GITHUB
                  </span>
                  <span className="absolute bottom-0 right-0 w-0 h-0.5 bg-gray-600 transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
              
              <li>
                <a 
                  href="https://linkedin.com/in/andrew-cho-princeton" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group relative inline-block"
                >
                  <span className="group-hover:text-blue-700 transition-colors duration-300">
                    LINKEDIN
                  </span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-700 transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            </ul>

            {/* Email */}
            <div>
              <ul className="flex flex-col space-y-3">
                <li>
                  <a 
                    href="mailto:andrewcho@princeton.edu" 
                    className="group relative inline-block"
                  >
                    <span className="group-hover:text-orange-600 transition-colors duration-300">
                      CHO.ANDREW@PRINCETON.EDU
                    </span>
                    <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-orange-600 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                  </a>
                </li>
                
                <li>
                  <a 
                    href="mailto:acho@hackprinceton.com" 
                    className="group relative inline-block"
                  >
                    <span className="group-hover:text-purple-600 transition-colors duration-300">
                      CHO.S.ANDY03@GMAIL.COM
                    </span>
                    <span className="absolute bottom-0 right-1/2 w-0 h-0.5 bg-purple-600 transition-all duration-300 group-hover:w-full group-hover:right-0"></span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact 