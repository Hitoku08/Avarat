import React, { useState } from "react";
import {
  Play,
  Users,
  Code,
  Palette,
  Music,
  Clock,
  Target,
  Trophy,
  Flame,
  Snowflake,
  ArrowRight,
  Calendar,
  CheckCircle,
  Gamepad,
  Github,
  X,
} from "lucide-react";

function App() {
  const [currentPage, setCurrentPage] = useState("main");
  const [showVideo, setShowVideo] = useState(false);

  const teamMembers = [
    {
      name: "Louisa",
      role: "UI Design, Character Art & Target Group Analysis",
      icon: <Palette className="w-6 h-6" />,
      color: "text-pink-500",
    },
    {
      name: "Emil",
      role: "Character Controls & Movement",
      icon: <Gamepad className="w-6 h-6" />,
      color: "text-blue-500",
    },
    {
      name: "Anton",
      role: "Level Design & Business Plan",
      icon: <Target className="w-6 h-6" />,
      color: "text-green-500",
    },
    {
      name: "Bite",
      role: "Switching Mechanics & Environment Interactions",
      icon: <Code className="w-6 h-6" />,
      color: "text-purple-500",
    },
    {
      name: "Yuquan",
      role: "Visual Art & Audio",
      icon: <Music className="w-6 h-6" />,
      color: "text-orange-500",
    },
  ];

  const milestones = [
    {
      date: "March 25",
      title: "Project Kickoff",
      description: "Defined deliverables and initial concepts",
      completed: true,
    },
    {
      date: "March 31",
      title: "Concept Development",
      description: "Created moodboards and defined target audience",
      completed: true,
    },
    {
      date: "April 7",
      title: "First Demo Preparation",
      description: "Divided work and started core mechanics",
      completed: true,
    },
    {
      date: "April 10",
      title: "Initial Presentation",
      description: "Showcased concept and early prototypes",
      completed: true,
    },
    {
      date: "May 9",
      title: "Core Gameplay Loop",
      description: "Implemented switching mechanics and interactions",
      completed: true,
    },
    {
      date: "May 26",
      title: "Final Demo",
      description: "Complete gameplay experience with polished mechanics",
      completed: true,
    },
    {
      date: "May 30",
      title: "Project Delivery",
      description: "Final submission of all materials",
      completed: true,
    },
  ];

  const MainPage = () => (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-purple-600 to-red-600 text-white">
      {/* Navigation */}
      <nav className="p-6 flex justify-between items-center">
        <h1 className="text-3xl font-bold">Avarat</h1>
        <div className="space-x-4 flex items-center">
          <button
            onClick={() => setCurrentPage("main")}
            className={`px-4 py-2 rounded-full transition ${
              currentPage === "main"
                ? "bg-white text-purple-600"
                : "bg-white/20 hover:bg-white/30"
            }`}
          >
            Game
          </button>
          <button
            onClick={() => setCurrentPage("process")}
            className={`px-4 py-2 rounded-full transition ${
              currentPage === "process"
                ? "bg-white text-purple-600"
                : "bg-white/20 hover:bg-white/30"
            }`}
          >
            Process
          </button>
          <a
            href="https://gits-15.sys.kth.se/emhanse/DH2650-Avarat.git"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-full transition flex items-center space-x-2"
          >
            <Github className="w-4 h-4" />
            <span>GitHub</span>
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="text-center py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-7xl font-extrabold mb-6 bg-gradient-to-r from-blue-300 to-red-300 bg-clip-text text-transparent">
            Avarat
          </h1>
          <p className="text-2xl mb-4 text-gray-200">
            Master the Elements. Conquer the Challenge.
          </p>
          <p className="text-lg mb-8 text-gray-300 max-w-2xl mx-auto">
            Control a shape-shifting mouse through precision platforming
            challenges. Switch between fire and ice forms to interact with the
            environment and overcome obstacles.
          </p>
          <div className="flex justify-center space-x-4">
            <button
              onClick={() => setShowVideo(true)}
              className="bg-gradient-to-r from-blue-500 to-red-500 hover:from-blue-600 hover:to-red-600 px-8 py-4 rounded-full text-xl font-semibold shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              <Play className="inline w-6 h-6 mr-2" />
              Game Demo
            </button>
            <button
              onClick={() => setCurrentPage("process")}
              className="bg-white/20 hover:bg-white/30 backdrop-blur-sm px-8 py-4 rounded-full text-xl font-semibold border border-white/30 transition-all duration-300"
            >
              Learn More
              <ArrowRight className="inline w-6 h-6 ml-2" />
            </button>
          </div>
        </div>
      </header>

      {/* Key Features */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-white">
            Elemental Mastery
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-500 p-3 rounded-full">
                  <Snowflake className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-blue-300">
                    Ice Form
                  </h3>
                  <p className="text-gray-300">
                    Gains speed on ice surfaces and creates an ice layer when
                    encountering sludge.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-red-500 p-3 rounded-full">
                  <Flame className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-red-300">
                    Fire Form
                  </h3>
                  <p className="text-gray-300">
                    Melts ice surfaces, slows down on sludge, and gains speed
                    boosts from toxic gas.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-6 text-center">
                Core Mechanics
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>
                    Precision platforming with momentum-based movement
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Real-time elemental state switching</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Environmental puzzle solving</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Time-based scoring with star system</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Die-and-retry gameplay loop</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 bg-black/20">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4 text-white">Meet the Team</h2>
          <p className="text-xl text-gray-300 mb-12">
            DH2650 Game Development Course - KTH
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
              >
                <div className={`${member.color} mb-4 flex justify-center`}>
                  {member.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                <p className="text-sm text-gray-300 leading-relaxed">
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-400 border-t border-white/20">
        <p>© 2025 DH2650-Avarat Team. All rights reserved.</p>
      </footer>

      {/* Video Modal */}
      {showVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden">
            <div className="flex justify-between items-center p-4 border-b">
              <h3 className="text-xl font-bold text-gray-800">
                Avarat - Game Demo
              </h3>
              <button
                onClick={() => setShowVideo(false)}
                className="text-gray-500 hover:text-gray-700 p-1"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="p-4">
              <video
                controls
                autoPlay
                className="w-full h-auto max-h-[70vh]"
                poster="/public/VideoDemo/thumbnail.jpg"
              >
                <source src="/VideoDemo.mp4" type="video/mp4" />
                <source
                  src="/public/VideoDemo/game-demo.webm"
                  type="video/webm"
                />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      )}
    </div>
  );

  const ProcessPage = () => (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Navigation */}
      <nav className="p-6 flex justify-between items-center">
        <h1 className="text-3xl font-bold">Avarat</h1>
        <div className="space-x-4 flex items-center">
          <button
            onClick={() => setCurrentPage("main")}
            className={`px-4 py-2 rounded-full transition ${
              currentPage === "main"
                ? "bg-white text-purple-600"
                : "bg-white/20 hover:bg-white/30"
            }`}
          >
            Game
          </button>
          <button
            onClick={() => setCurrentPage("process")}
            className={`px-4 py-2 rounded-full transition ${
              currentPage === "process"
                ? "bg-white text-purple-600"
                : "bg-white/20 hover:bg-white/30"
            }`}
          >
            Process
          </button>
          <a
            href="https://gits-15.sys.kth.se/emhanse/DH2650-Avarat.git"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-full transition flex items-center space-x-2"
          >
            <Github className="w-4 h-4" />
            <span>GitHub</span>
          </a>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Process Hero */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">
            Development Journey
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From initial concept to final demo - explore how we created Avarat
            through collaborative design, iterative development, and continuous
            playtesting.
          </p>
        </div>

        {/* Project Overview */}
        <section className="mb-16">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
            <h2 className="text-3xl font-bold mb-6 text-center">
              Project Overview
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <Clock className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">10 Weeks</h3>
                <p className="text-gray-300">Development Timeline</p>
              </div>
              <div className="text-center">
                <Users className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">5 Developers</h3>
                <p className="text-gray-300">Multidisciplinary Team</p>
              </div>
              <div className="text-center">
                <Trophy className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Unity Engine</h3>
                <p className="text-gray-300">Game Development Platform</p>
              </div>
            </div>
          </div>
        </section>

        {/* Development Timeline */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">
            Development Timeline
          </h2>
          <div className="space-y-6">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-start space-x-6">
                <div className="flex flex-col items-center">
                  <div
                    className={`w-4 h-4 rounded-full ${
                      milestone.completed ? "bg-green-400" : "bg-gray-400"
                    }`}
                  ></div>
                  {index < milestones.length - 1 && (
                    <div className="w-0.5 h-16 bg-gray-600 mt-2"></div>
                  )}
                </div>
                <div className="flex-1 bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                  <div className="flex items-center space-x-4 mb-2">
                    <Calendar className="w-5 h-5 text-blue-400" />
                    <span className="text-blue-300 font-semibold">
                      {milestone.date}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
                  <p className="text-gray-300">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Technical Challenges */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">
            Technical Challenges & Solutions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <h3 className="text-xl font-bold mb-4 text-red-300">
                Character Movement System
              </h3>
              <p className="text-gray-300 mb-4">
                Implementing precise platforming controls with variable jump
                heights, coyote time, and smooth acceleration curves for
                different elemental states.
              </p>
              <div className="text-sm text-blue-300">
                <strong>Solution:</strong> Custom movement scripts with
                state-based modifiers
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <h3 className="text-xl font-bold mb-4 text-blue-300">
                Environmental Interactions
              </h3>
              <p className="text-gray-300 mb-4">
                Creating seamless interactions between fire/ice states and
                environmental objects like melting platforms and gas cloud
                physics.
              </p>
              <div className="text-sm text-blue-300">
                <strong>Solution:</strong> Event-driven interaction system with
                object pooling
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <h3 className="text-xl font-bold mb-4 text-purple-300">
                Camera System
              </h3>
              <p className="text-gray-300 mb-4">
                Developing a camera system that provides adequate field of view
                while maintaining visual clarity and preventing player
                frustration from blind jumps.
              </p>
              <div className="text-sm text-blue-300">
                <strong>Solution:</strong> Dynamic camera bounds with lookahead
                functionality
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <h3 className="text-xl font-bold mb-4 text-green-300">
                Level Reset System
              </h3>
              <p className="text-gray-300 mb-4">
                Ensuring all environmental changes (melted ice, consumed items)
                properly reset upon player death for consistent gameplay
                experience.
              </p>
              <div className="text-sm text-blue-300">
                <strong>Solution:</strong> Centralized GameManager with death
                event broadcasting
              </div>
            </div>
          </div>
        </section>

        {/* Team Contributions */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">
            Team Contributions
          </h2>
          <div className="space-y-6">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className={`${member.color}`}>{member.icon}</div>
                  <h3 className="text-2xl font-bold">{member.name}</h3>
                  <span className="text-gray-400">•</span>
                  <span className="text-gray-300">{member.role}</span>
                </div>
                <div className="text-gray-300">
                  {member.name === "Emil" &&
                    "Developed the core character movement system, implemented coyote time and variable jump mechanics, handled camera controls and bounds, and optimized player physics for responsive gameplay."}
                  {member.name === "Anton" &&
                    "Designed and implemented all game levels, conducted SWOT analysis for business planning, managed level design consistency, and handled competitive analysis for market positioning."}
                  {member.name === "Bite" &&
                    "Created the elemental switching system, developed environmental interaction mechanics (ice, sludge, gas), built the game website, and implemented object interaction scripts."}
                  {member.name === "Louisa" &&
                    "Designed and implemented the complete UI system, created character animations and art assets, developed the star-based scoring system, and managed level completion screens."}
                  {member.name === "Yuquan" &&
                    "Created visual art assets and background designs, implemented audio systems and sound effects, developed platform prefabs, and contributed to the Game Design Document."}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Lessons Learned */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Key Insights</h2>
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4 text-green-300">
                  What Worked Well
                </h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Regular team meetings and clear communication</li>
                  <li>• Iterative development with frequent playtesting</li>
                  <li>
                    • Clear role definitions and responsibility distribution
                  </li>
                  <li>• Focus on core mechanics before feature expansion</li>
                  <li>• Version control and collaborative development</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4 text-orange-300">
                  Challenges Overcome
                </h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Balancing difficulty for accessibility</li>
                  <li>• Coordinating art assets with programming</li>
                  <li>• Managing merge conflicts in Unity</li>
                  <li>• Optimizing performance for smooth gameplay</li>
                  <li>• Scope management within time constraints</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-400 border-t border-white/20">
        <p>© 2025 DH2650-Avarat Team. Development process documentation.</p>
      </footer>
    </div>
  );

  return currentPage === "main" ? <MainPage /> : <ProcessPage />;
}

export default App;
