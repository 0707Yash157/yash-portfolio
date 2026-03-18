import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Download, ExternalLink } from "lucide-react";
import profile from "./assets/profile.jpg";

function App() {
  const [darkMode, setDarkMode] = useState(true);

// Load saved theme
useEffect(() => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "light") {
    setDarkMode(false);
  }
}, []);

// Apply theme
useEffect(() => {
  if (darkMode) {
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
  } else {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
  }
}, [darkMode]);
  return (
    <div className="bg-white dark:bg-gradient-to-br dark:from-black dark:via-gray-900 dark:to-black text-black dark:text-white min-h-screen font-sans px-6 transition">

      {/* Navbar */}
<nav className="flex justify-between items-center py-6">
  <h1 className="text-xl font-bold tracking-wide">Yash Porwal</h1>

  <div className="space-x-6 flex items-center">
    <a href="#projects" className="hover:text-gray-600 dark:text-gray-400">Projects</a>
    <a href="#skills" className="hover:text-gray-600 dark:text-gray-400">Skills</a>
    <a href="#contact" className="hover:text-gray-600 dark:text-gray-400">Contact</a>

    {/* 🌙 Toggle Button */}
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="ml-4 px-3 py-1 border rounded-lg hover:bg-gray-300 dark:hover:bg-gray-700 transition"
    >
      {darkMode ? "☀️" : "🌙"}
    </button>

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

        <p className="text-gray-600 dark:text-gray-400 mb-6">
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

          <motion.div whileHover={{ scale: 1.03 }} className="bg-gray-200 dark:bg-gray-900 p-6 rounded-xl shadow-xl">
            <h4 className="text-lg font-semibold">Book Rating Prediction</h4>
            <p className="text-gray-400">Nov’25 – Dec’25</p>
            <p className="mt-2">Built ML pipeline for predicting book ratings using regression, classification & clustering.</p>
            <p className="text-green-400 text-sm mt-2">Impact: Improved model performance using F1-score comparison</p>
            <p className="text-sm mt-2">Tech: Python, Pandas, NumPy, Sklearn, Matplotlib</p>
            <a href="https://github.com/0707Yash157" target="_blank" className="text-blue-400 flex items-center gap-1 mt-2">
              View Repo <ExternalLink size={14} />
            </a>
          </motion.div>

          <motion.div whileHover={{ scale: 1.03 }} className="bg-gray-200 dark:bg-gray-900 p-6 rounded-xl shadow-xl">
            <h4 className="text-lg font-semibold">Bank Management System</h4>
            <p className="text-gray-600 dark:text-gray-400">June’25 – July’25</p>
            <p className="mt-2">Developed console-based banking system with authentication and transactions.</p>
            <p className="text-gray-600 dark:text-gray-400 text-sm mt-2">Impact: Efficient transaction handling using DSA</p>
            <p className="text-sm mt-2">Tech: C++, OOP, DSA</p>
            <a href="https://github.com/0707Yash157" target="_blank" className="text-blue-400 flex items-center gap-1 mt-2">
              View Repo <ExternalLink size={14} />
            </a>
          </motion.div>

          <motion.div whileHover={{ scale: 1.03 }} className="bg-gray-200 dark:bg-gray-900 p-6 rounded-xl shadow-xl">
            <h4 className="text-lg font-semibold">Global University Analysis</h4>
            <p className="text-gray-600 dark:text-gray-400">Oct’25 – Dec’25</p>
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

        <motion.div whileHover={{ scale: 1.02 }} className="bg-gray-200 dark:bg-gray-900 p-6 rounded-xl shadow-lg">
          <h4 className="font-semibold">Data Management Intern</h4>
          <p className="text-gray-600 dark:text-gray-400">June’24 – July’24</p>

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
  <h3 className="text-2xl font-semibold mb-6 text-center">Certificates</h3>

  <div className="grid md:grid-cols-2 gap-6">

    {[
      "Privacy & Security – NPTEL",
      "Computational Theory – Infosys",
      "Wireless Tech for IoT – NASSCOM",
      "Mastering C – CSE Pathshala",
      "Code-A-Hunt – CodingBlocks"
    ].map((cert, i) => (
      <motion.div
        key={i}
        whileHover={{ scale: 1.05 }}
        className="bg-gray-200 dark:bg-gray-900 p-6 rounded-xl shadow-xl"
      >
        <h4 className="font-semibold">{cert}</h4>

        <a
          href="https://drive.google.com/drive/folders/1FJZfb6q-d0grdJLXsE89vwlZqgcU0NYm"
          target="_blank"
          className="text-blue-400 text-sm mt-2 inline-flex items-center gap-1"
        >
          View Certificate
        </a>
      </motion.div>
    ))}

  </div>
</section>

      {/* Achievements */}
      <section className="py-10">
  <h3 className="text-2xl font-semibold mb-6 text-center">Achievements</h3>

  <div className="grid md:grid-cols-2 gap-6">

    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-gray-200 dark:bg-gray-900 p-6 rounded-xl shadow-xl"
    >
      <h4 className="font-semibold">
        Advanced Data Structures Course
      </h4>
      <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
        Lovely Professional University
      </p>
      <p className="text-sm mt-2">
        Earned <span className="text-green-500 font-medium">A Grade</span>
      </p>
    </motion.div>

    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-gray-200 dark:bg-gray-900 p-6 rounded-xl shadow-xl"
    >
      <h4 className="font-semibold">
        Inter-District T20 Cricket Tournament
      </h4>
      <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
        Sports Achievement
      </p>
      <p className="text-sm mt-2">
        Awarded <span className="text-green-500 font-medium">Man of the Series</span>
      </p>
    </motion.div>

  </div>
</section>

      {/* Education */}
      <section className="py-10">
  <h3 className="text-2xl font-semibold mb-6 text-center">Education</h3>

  <div className="grid md:grid-cols-3 gap-6">

    <motion.div whileHover={{ scale: 1.05 }} className="bg-gray-900 p-6 rounded-xl shadow-xl">
      <h4 className="font-semibold">Lovely Professional University</h4>
      <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">B.Tech CSE</p>
      <p className="text-sm mt-2">CGPA: 6.53</p>
    </motion.div>

    <motion.div whileHover={{ scale: 1.05 }} className="bg-gray-900 p-6 rounded-xl shadow-xl">
      <h4 className="font-semibold">ST. Francis Academy</h4>
      <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">Intermediate</p>
      <p className="text-sm mt-2">70%</p>
    </motion.div>

    <motion.div whileHover={{ scale: 1.05 }} className="bg-gray-900 p-6 rounded-xl shadow-xl">
      <h4 className="font-semibold">ST. Francis Academy</h4>
      <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">Matriculation</p>
      <p className="text-sm mt-2">71%</p>
    </motion.div>

  </div>
</section>

      {/* Contact */}
      <section id="contact" className="py-20 text-center">
        <h3 className="text-3xl font-semibold mb-6">Let’s Connect</h3>

        <p className="text-gray-600 dark:text-gray-400 mb-6">
          yashporwal494@gmail.com
        </p>

        <div className="flex justify-center gap-6">
          <a href="https://github.com/0707Yash157">
            <Github />
          </a>

          <a href="https://www.linkedin.com/in/yashporwal157/">
            <Linkedin />
          </a>

          <a href="mailto:yashporwal494@gmail.com">
            <Mail />
          </a>
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
