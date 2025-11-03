import { motion } from "framer-motion";

export default function Resume() {
  return (
    <div className="bg-gray-50 min-h-screen py-12 px-6">
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-xl p-8">
        {/*Download button*/}
        <div className="text-center mb-8">
          <motion.a
            href="/Nicole-Davidov-CV.pdf"
            download
            className="bg-blue-600 text-white px-6 py-2 rounded-lg font-bold text-base sm:px-8 sm:py-3 sm:text-lg shadow-lg hover:bg-blue-700 transition"
          >
            Download Resume
          </motion.a>
        </div>

        {/* Name and title */}
        <h1 className="text-4xl font-extrabold text-gray-900 text-center mb-2">
          Nicole Davidov
        </h1>
        <p className="text-center text-gray-600 text-lg mb-6">
          Computer Science Graduate  | Full-Stack & Software Development
        </p>

        {/* Contact details */}
        <div className="flex flex-wrap justify-center gap-4 text-gray-700 mb-10 text-md">
          <a href="mailto:nicoledavidov.dev@gmail.com" className="hover:text-blue-600">
            nicoledavidov.dev@gmail.com
          </a>
          <span>|</span>
          <span>+972 53-332-6352</span>
          <span>|</span>
          <a href="https://linkedin.com/in/nicoledavidov" target="_blank" className="hover:text-blue-600">
            LinkedIn
          </a>
          <span>|</span>
          <a href="https://github.com/NicoleDavidov" target="_blank" className="hover:text-blue-600">
            GitHub
          </a>
        </div>

        {/* SUMMARY */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-3 text-gray-800">SUMMARY</h2>
          <p className="text-gray-700 leading-relaxed">
            Computer Science B.Sc. graduate with hands-on experience in software development, deployment, and team
            collaboration. Fast learner, passionate about clean code and scalable solutions. Seeking a full stack position to grow and
            contribute in a dynamic environment.
          </p>
        </section>

        {/* EDUCATION */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-3 text-gray-800">EDUCATION</h2>
          <p className="text-gray-800">
            <strong>B.Sc. Computer Science</strong> HIT – Holon Institute of Technology | GPA: 90
          </p>
        </section>

        {/* PROJECTS */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-3 text-gray-800">PROJECTS</h2>
          <ul className="list-disc pl-6 text-gray-700 leading-relaxed">
            <li>
              <strong>Profit Analyzer – Java Client/Server Project</strong> <br/>
                Built a layered financial analysis system using JavaFX, TCP, and algorithmic modules (Kadane, Prefix Sum). Developed a
                multi-threaded server and modular JAR. Used JSON communication and design patterns (Strategy, Factory). 
                <a
                    href="https://github.com/NicoleDavidov/Profit-Analyzer-Advanced-Java-Project"
                    target="_blank"
                    className="text-blue-500 hover:underline ml-2"
                >
                    GitHub Repo
                </a>
            </li>
            <li>
              <strong>Cost Manager – Full-Stack Expense Tracker</strong> <br/>
                Developed a complete personal expense tracker. <br/>
                •Frontend: React, Material-UI, Chart.js, IndexedDB <br/>
                •Backend: Node.js, Express, MongoDB Atlas Implemented dashboards, filters, CRUD, and error handling with a RESTful
                API.
                <a
                    href="https://github.com/NicoleDavidov/CostManagerClient"
                    target="_blank"
                    className="text-blue-500 hover:underline ml-2"
                >
                    Client Repo
                </a>{" | "}
                <a
                    href="https://github.com/NicoleDavidov/CostManagerServer"
                    target="_blank"
                    className="text-blue-500 hover:underline ml-2"
                >
                    Server Repo
                </a>
            </li>
            <li>
              <strong>Study Buddy – AI Academic Assistant (Internal AWS Hackathon)</strong> 
                Designed the concept for an AI-driven academic assistant capable of analyzing student performance data using AWS
                services (S3, Lambda, Bedrock – simulated).Built a React-based chatbot prototype to demonstrate the planned product
                workflow.Collaborated on defining data flows, potential analysis methods, and user interaction design.
                <a
                    href="https://github.com/NicoleDavidov/study-buddy-hackathon"
                    target="_blank"
                    className="text-blue-500 hover:underline ml-2"
                >
                    GitHub Repo
                </a>
            </li>
          </ul>
        </section>

        {/* WORK EXPERIENCE */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-3 text-gray-800">WORK EXPERIENCE</h2>
          <p className="text-gray-700 mb-4">
            <strong>Technical Support Representative – Rimon Internet (2025 – Present):</strong> <br/> 
            Provide tier-1 technical support for network and internet issues. Troubleshoot router and software setups via phone and
            remote tools while ensuring top-tier customer service.
          </p>
        </section>

        {/* TECHNICAL SKILLS */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-3 text-gray-800">TECHNICAL SKILLS</h2>
          <ul className="list-disc pl-6 text-gray-700 leading-relaxed">
            <li><strong>Data & Databases:</strong> SQL, MongoDB, IndexedDB, Pandas, NumPy, EDA, Data Cleaning, Data Transformation, Visualization(Matplotlib, Chart.js)</li>
            <li><strong>Programming Languages:</strong> Python, Java, C++, C, JavaScript</li>
            <li><strong>Backend:</strong> Node.js, Express.js, MongoDB, Java (TCP, Threads)</li>
            <li><strong>Frontend:</strong> React, HTML, CSS, Tailwind, Material-UI, JavaFX</li>
            <li><strong>Tools:</strong> Git, JUnit, AWS (S3, Lambda, Bedrock – simulated)</li>
            <li><strong>Architecture: </strong> OOP, MVC, Design Patterns (Factory, Strategy), Software Engineering Principles, UML</li>
          </ul>
        </section>

        {/* ARMY */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-3 text-gray-800">ARMY SERVICE</h2>
          <p className="text-gray-700">
            <strong>Observer on the Northern Border (2019-2021)</strong><br/>
            Operated advanced surveillance systems (radar, video, command software). Managed real-time threat detection and
            trained new observers during high-pressure scenarios.
          </p>
        </section>

        {/* VOLUNTEER EXPERIENCE */}
        <section>
          <h2 className="text-2xl font-bold mb-3 text-gray-800">VOLUNTEER EXPERIENCE</h2>
          <p className="text-gray-700">
            <strong>Israeli Connection Scholarship Program (2025):</strong> Tutored students in Algorithms, Algebra, and Data Science using tailored learning strategies. <br />
            <strong>Lazarus Community Center – Holon (2023):</strong> Provided math tutoring to 20+ students from various levels as part of a scholarship program. 
          </p>
        </section>
      </div>
    </div>
  );
}
