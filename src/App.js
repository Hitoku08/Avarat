import React from "react";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-400 via-white to-red-400 text-gray-800 font-sans">
      {/* Hero Section */}
      <section className="text-center py-10">
        <h1 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-red-600 drop-shadow-lg">
          Avarat
        </h1>
        <p className="text-xl mt-4 mb-8 font-medium">
          Control a shape-shifting mouse and conquer the elemental world!
        </p>
        <button className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-full text-lg shadow-lg transition">
          Try Now
        </button>
      </section>

      {/* Ice and Fire Mouse Images */}
      <section className="flex flex-col md:flex-row justify-center items-center gap-12 py-16">
        <div className="text-center">
          <img
            src="/ice_mouse.png"
            alt="Ice Mouse"
            className="w-60 mx-auto drop-shadow-md hover:scale-105 transition"
          />
          <h3 className="text-2xl font-semibold mt-4 text-blue-600">
            Ice Form
          </h3>
          <p className="mt-2 text-gray-600">
            Freeze water, slide across surfaces, and cross fire zones.
          </p>
        </div>
        <div className="text-center">
          <img
            src="/fire_mouse.png"
            alt="Fire Mouse"
            className="w-60 mx-auto drop-shadow-md hover:scale-105 transition"
          />
          <h3 className="text-2xl font-semibold mt-4 text-red-600">
            Fire Form
          </h3>
          <p className="mt-2 text-gray-600">
            Melt obstacles, dash through icy paths, and burn barriers.
          </p>
        </div>
      </section>

      {/* Game Description */}
      <section className="py-12 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-4 text-gray-800">
          Game Overview
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          In <strong>Avarat</strong>, switch between elemental forms to solve
          puzzles and survive deadly terrains. Timing and transformation are the
          keys to success!
        </p>
      </section>

      {/* Team Section
      <section className="py-12 max-w-3xl mx-auto text-center bg-gradient-to-r from-slate-100 via-white to-slate-100 mt-8">
        <h2 className="text-3xl font-semibold mb-4 text-gray-800">
          Development Team
        </h2>
        <p className="text-gray-600">
          Crafted by a passionate indie team, determined to bring magical,
          intense gameplay to life.
        </p>
      </section> */}

      {/* Footer */}
      <footer className="text-center py-6 text-sm text-gray-500">
        © 2025 Avarat Team. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
