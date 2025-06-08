import React from 'react';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header/Navigation */}
      <header className="bg-white shadow-sm fixed w-full top-0 z-50">
        <nav className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold text-gray-800">Shikhar Soni</h1>
            <div className="hidden md:flex space-x-6">
              <a href="#about" className="text-gray-600 hover:text-blue-600 transition-colors">About</a>
              <a href="#experience" className="text-gray-600 hover:text-blue-600 transition-colors">Experience</a>
              <a href="#skills" className="text-gray-600 hover:text-blue-600 transition-colors">Skills</a>
              <a href="#education" className="text-gray-600 hover:text-blue-600 transition-colors">Education</a>
              <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">Contact</a>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white pt-20">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/8062287/pexels-photo-8062287.jpeg')`
          }}
        ></div>
        <div className="relative max-w-6xl mx-auto px-4 py-20">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Shikhar Soni</h1>
            <h2 className="text-2xl md:text-3xl mb-6 text-blue-200">Business Analyst</h2>
            <p className="text-xl mb-8 text-gray-200 leading-relaxed">
              A detail-oriented and driven business enthusiast currently pursuing PGDM at IMI Kolkata. 
              Experienced in marketing, social media, and business analysis with demonstrated ability to 
              manage projects, develop partnerships, and drive results through strategic initiatives.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="#contact" 
                className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Get In Touch
              </a>
              <a 
                href="https://linkedin.com/in/shikhar-soni-77a7b1216" 
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white hover:bg-white hover:text-blue-900 px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                LinkedIn Profile
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">About Me</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Professional Journey</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Currently pursuing my PGDM at International Management Institute, Kolkata, I bring a unique blend 
                of analytical thinking and practical business experience. My journey spans across various domains 
                including marketing, business analysis, and stakeholder management.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                I've successfully managed projects that generated significant revenue, built strategic partnerships, 
                and led teams to achieve measurable results. My approach combines data-driven insights with 
                creative problem-solving to deliver value.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">₹7L+</div>
                  <div className="text-sm text-gray-600">Revenue Generated</div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">100+</div>
                  <div className="text-sm text-gray-600">Strategic Partners</div>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg" 
                alt="Business Analysis"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Professional Experience</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>
          <div className="space-y-8">
            {/* BYJU'S */}
            <div className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">Marketing Project</h3>
                  <h4 className="text-lg text-blue-600 font-medium">BYJU'S</h4>
                </div>
                <span className="text-gray-500 text-sm">Project Duration</span>
              </div>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Added ~100 schools as strategic partners, generating ₹700,000+ in revenue
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Used software tools for data management and relationship building
                </li>
              </ul>
            </div>

            {/* HCL Technologies */}
            <div className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">Marketing & HR Project</h3>
                  <h4 className="text-lg text-blue-600 font-medium">HCL Technologies</h4>
                </div>
                <span className="text-gray-500 text-sm">Project Duration</span>
              </div>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Led college placement drives and sold training courses to selected candidates
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Built relationships with academic stakeholders
                </li>
              </ul>
            </div>

            {/* Aquaria Solutions */}
            <div className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">Marketing Project</h3>
                  <h4 className="text-lg text-blue-600 font-medium">Aquaria Solutions</h4>
                </div>
                <span className="text-gray-500 text-sm">Project Duration</span>
              </div>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Managed LinkedIn marketing and client outreach
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Promoted and sold software solutions like CRM, LMS, SMS, HMS
                </li>
              </ul>
            </div>

            {/* Watts Group */}
            <div className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">Live Project – Social Media Marketing</h3>
                  <h4 className="text-lg text-blue-600 font-medium">Watts Group</h4>
                </div>
                <span className="text-gray-500 text-sm">Project Duration</span>
              </div>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Scaled community size from 100 to 2600 members (2500% growth)
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Handled content creation and social media communication
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Skills & Expertise</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">Technical Skills</h3>
              <div className="space-y-4">
                {[
                  { skill: 'MS Excel', level: 90 },
                  { skill: 'Tableau', level: 85 },
                  { skill: 'SPSS', level: 80 },
                  { skill: 'SQL', level: 75 },
                  { skill: 'MS PowerPoint', level: 95 },
                  { skill: 'Canva', level: 85 }
                ].map((item, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-700 font-medium">{item.skill}</span>
                      <span className="text-gray-500">{item.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-blue-600 h-2 rounded-full" 
                        style={{ width: `${item.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">Core Competencies</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  'Problem-Solving',
                  'Analytical Thinking', 
                  'Time Management',
                  'Team Management',
                  'Stakeholder Coordination',
                  'Business Analysis',
                  'Requirement Gathering',
                  'Project Management'
                ].map((skill, index) => (
                  <div key={index} className="bg-blue-50 rounded-lg p-4 text-center">
                    <span className="text-blue-800 font-medium">{skill}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <h4 className="text-lg font-semibold text-gray-800 mb-4">Certifications</h4>
                <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-6">
                  <h5 className="font-semibold text-blue-800">Business Analysis Fundamentals</h5>
                  <p className="text-blue-600 text-sm mt-2">
                    Stakeholder Coordination • Reporting • Requirement Gathering • Business Analysis
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Education</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>
          <div className="space-y-6">
            {[
              {
                degree: 'PGDM',
                institution: 'International Management Institute, Kolkata',
                year: 'Pursuing (2024–2026)',
                grade: '',
                highlight: true
              },
              {
                degree: 'M.Com',
                institution: 'University of Lucknow',
                year: '2021–2023',
                grade: '68.08%'
              },
              {
                degree: 'B.Com',
                institution: 'National P.G. College',
                year: '2018–2021',
                grade: '68.28%'
              },
              {
                degree: 'Class XII',
                institution: 'Lucknow Public School',
                year: '2018',
                grade: '79.20%'
              },
              {
                degree: 'Class X',
                institution: 'Lucknow Public School',
                year: '2016',
                grade: '85.50%'
              }
            ].map((edu, index) => (
              <div key={index} className={`rounded-lg shadow-md p-6 ${edu.highlight ? 'bg-blue-600 text-white' : 'bg-white'}`}>
                <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                  <div>
                    <h3 className={`text-xl font-semibold ${edu.highlight ? 'text-white' : 'text-gray-800'}`}>
                      {edu.degree}
                    </h3>
                    <p className={`text-lg ${edu.highlight ? 'text-blue-100' : 'text-blue-600'}`}>
                      {edu.institution}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className={`font-medium ${edu.highlight ? 'text-blue-100' : 'text-gray-600'}`}>
                      {edu.year}
                    </p>
                    {edu.grade && (
                      <p className={`font-semibold ${edu.highlight ? 'text-white' : 'text-gray-800'}`}>
                        {edu.grade}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Get In Touch</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Ready to discuss opportunities or collaborate on exciting projects? I'd love to hear from you.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-blue-50 rounded-lg">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Email</h3>
              <a href="mailto:shikhar.soni@imi-k.edu.in" className="text-blue-600 hover:text-blue-800">
                shikhar.soni@imi-k.edu.in
              </a>
            </div>
            <div className="text-center p-8 bg-green-50 rounded-lg">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Phone</h3>
              <a href="tel:+918765670080" className="text-green-600 hover:text-green-800">
                +91 8765670080
              </a>
            </div>
            <div className="text-center p-8 bg-purple-50 rounded-lg">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Location</h3>
              <p className="text-purple-600">Lucknow, India</p>
            </div>
          </div>
          <div className="text-center mt-12">
            <a 
              href="https://linkedin.com/in/shikhar-soni-77a7b1216" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
              </svg>
              <span>Connect on LinkedIn</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p>&copy; 2025 Shikhar Soni. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
