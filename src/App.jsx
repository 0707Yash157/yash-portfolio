import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Download, ExternalLink } from "lucide-react";
import profile from "./assets/profile.jpg";

function App() {
  return (
    <div className="bg-gradient-to-br from-black via-gray-900 to-black text-white min-h-screen font-sans px-6">

      {/* Navbar */}
      <nav className="flex justify-between items-center py-6">
        <h1 className="text-xl font-bold tracking-wide">Yash Porwal</h1>
        <div className="space-x-6">
          <a href="#projects" className="hover:text-gray-400">Projects</a>
          <a href="#skills" className="hover:text-gray-400">Skills</a>
          <a href="#contact" className="hover:text-gray-400">Contact</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="text-center py-16 flex flex-col items-center">
        <img
          src={profile}
          alt="profile"
          className="w-32 h-32 rounded-full mb-4 border-4 border-white shadow-lg object-cover"
        />

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold mb-4"
        >
          Computer Science Student 🚀
        </motion.h2>

        <p className="text-gray-400 mb-6">
          Data Science • Machine Learning • Software Development
        </p>

        <a
          href="/Yash_Porwal_Resume.pdf"
          download
          className="bg-white text-black px-6 py-2 rounded-xl inline-flex gap-2 hover:scale-105 transition shadow-lg"
        >
          <Download size={16} /> Download Resume
        </a>
      </section>

      {/* Skills */}
      <section id="skills" className="py-10">
        <h3 className="text-2xl font-semibold mb-6 text-center">Skills</h3>

        <div className="grid md:grid-cols-2 gap-6 text-gray-300">
          {[
            "Languages: Python, C/C++, JavaScript, SQL, Java",
            "Frameworks: Express, NodeJS, HTML, CSS",
            "Tools: Excel, Power BI, Matplotlib, Seaborn, Sklearn, Git, Pandas, Jupyter",
            "Soft Skills: Problem-Solving, Adaptability, Leadership, Teamwork"
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="p-4 bg-white/5 rounded-xl shadow-md"
            >
              {item}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-10">
        <h3 className="text-2xl font-semibold mb-6 text-center">Projects</h3>

        <div className="space-y-8">

          <motion.div whileHover={{ scale: 1.03 }} className="bg-gray-900 p-6 rounded-xl shadow-xl">
            <h4 className="text-lg font-semibold">Book Rating Prediction</h4>
            <p className="text-gray-400">Nov’25 – Dec’25</p>
            <p className="mt-2">Built ML pipeline for predicting book ratings using regression, classification & clustering.</p>
            <p className="text-green-400 text-sm mt-2">Impact: Improved model performance using F1-score comparison</p>
            <p className="text-sm mt-2">Tech: Python, Pandas, NumPy, Sklearn, Matplotlib</p>
            <a href="https://github.com/0707Yash157" target="_blank" className="text-blue-400 flex items-center gap-1 mt-2">
              View Repo <ExternalLink size={14} />
            </a>
          </motion.div>

          <motion.div whileHover={{ scale: 1.03 }} className="bg-gray-900 p-6 rounded-xl shadow-xl">
            <h4 className="text-lg font-semibold">Bank Management System</h4>
            <p className="text-gray-400">June’25 – July’25</p>
            <p className="mt-2">Developed console-based banking system with authentication and transactions.</p>
            <p className="text-green-400 text-sm mt-2">Impact: Efficient transaction handling using DSA</p>
            <p className="text-sm mt-2">Tech: C++, OOP, DSA</p>
            <a href="https://github.com/0707Yash157" target="_blank" className="text-blue-400 flex items-center gap-1 mt-2">
              View Repo <ExternalLink size={14} />
            </a>
          </motion.div>

          <motion.div whileHover={{ scale: 1.03 }} className="bg-gray-900 p-6 rounded-xl shadow-xl">
            <h4 className="text-lg font-semibold">Global University Analysis</h4>
            <p className="text-gray-400">Oct’25 – Dec’25</p>
            <p className="mt-2">Analyzed global rankings using SQL and Power BI dashboards.</p>
            <p className="text-green-400 text-sm mt-2">Impact: Identified ranking trends and insights</p>
            <p className="text-sm mt-2">Tech: SQL, Excel, Power BI</p>
            <a href="https://github.com/0707Yash157" target="_blank" className="text-blue-400 flex items-center gap-1 mt-2">
              View Repo <ExternalLink size={14} />
            </a>
          </motion.div>

        </div>
      </section>

      {/* Training */}
      <section className="py-10">
        <h3 className="text-2xl font-semibold mb-4">Training</h3>

        <motion.div whileHover={{ scale: 1.02 }} className="bg-gray-900 p-6 rounded-xl shadow-lg">
          <h4 className="font-semibold">Data Management Intern</h4>
          <p className="text-gray-400">June’24 – July’24</p>

          <ul className="list-disc ml-5 mt-2 text-gray-300">
            <li>Managed and maintained databases</li>
            <li>Performed data validation and cleaning</li>
            <li>Improved data accessibility</li>
          </ul>

          <p className="text-sm mt-2">Tech: SQL, Excel</p>
        </motion.div>
      </section>

      {/* Certificates (UPDATED WITH DRIVE LINK) */}
      <section className="py-10">
        <h3 className="text-2xl font-semibold mb-4">Certificates</h3>

        <ul className="list-disc ml-5 text-gray-300 space-y-2">
          {[
            "Privacy & Security – NPTEL",
            "Computational Theory – Infosys",
            "Wireless Tech for IoT – NASSCOM",
            "Mastering C – CSE Pathshala",
            "Code-A-Hunt – CodingBlocks"
          ].map((cert, i) => (
            <li key={i}>
              <a
                href="https://drive.google.com/drive/folders/1FJZfb6q-d0grdJLXsE89vwlZqgcU0NYm"
                target="_blank"
                className="hover:text-blue-400 transition"
              >
                {cert}
              </a>
            </li>
          ))}
        </ul>
      </section>

      {/* Achievements */}
      <section className="py-10">
        <h3 className="text-2xl font-semibold mb-4">Achievements</h3>

        <ul className="list-disc ml-5 text-gray-300 space-y-2">
          <li>A Grade in Advanced Data Structures</li>
          <li>Man of the Series – Inter-District T20</li>
        </ul>
      </section>

      {/* Education */}
      <section className="py-10">
        <h3 className="text-2xl font-semibold mb-4">Education</h3>

        <div className="text-gray-300 space-y-3">
          <p><b>Lovely Professional University</b><br/>B.Tech CSE | CGPA: 6.53</p>
          <p><b>ST. Francis Academy</b><br/>Intermediate: 70%</p>
          <p><b>ST. Francis Academy</b><br/>Matriculation: 71%</p>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-10 text-center">
        <h3 className="text-2xl font-semibold mb-4">Contact</h3>

        <p className="text-gray-400 mb-4">yashporwal494@gmail.com</p>

        <div className="flex justify-center gap-6">
          <Github className="hover:scale-110 transition" />
          <Linkedin className="hover:scale-110 transition" />
          <Mail className="hover:scale-110 transition" />
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 text-gray-500 text-sm">
        © 2026 Yash Porwal • Premium Portfolio 🚀
      </footer>
    </div>
  );
}

export default App;