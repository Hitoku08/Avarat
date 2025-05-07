import React from "react";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-400 to-red-400 text-gray-800 font-sans">
      {/* Hero Section */}
      <header className="text-white py-6">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-6xl font-extrabold drop-shadow-md ">Avarat</h1>
          <p className="text-lg mt-2">
            Control a shape-shifting mouse and conquer the elemental world!
          </p>
          <p className="text-sm text-gray-200 leading-relaxed mt-2"></p>
          <button className="bg-white text-blue-600 hover:text-red-600 px-4 py-2 rounded-full text-lg shadow-lg transition mt-4">
            Play Now!!!
          </button>
        </div>
      </header>
      {/* Game Features Section */}
      <section className="py-6">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4 text-white">
            Game Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className="text-center p-3 bg-gray-100 rounded-lg shadow-md">
              <h3 className="text-md font-semibold mb-2 text-blue-600">
                Precision Platforming
              </h3>
              <p className="text-sm text-gray-700">
                Master precise movements and timings to overcome challenging
                levels.
              </p>
            </div>
            <div className="text-center p-3 bg-gray-100 rounded-lg shadow-md">
              <h3 className="text-md font-semibold mb-2 text-red-600">
                Elemental States
              </h3>
              <p className="text-sm text-gray-700">
                Switch between ice and fire forms to interact with the
                environment in unique ways.
              </p>
            </div>
            <div className="text-center p-3 bg-gray-100 rounded-lg shadow-md">
              <h3 className="text-md font-semibold mb-2 text-yellow-500">
                Speed and Momentum
              </h3>
              <p className="text-sm text-gray-700">
                Speed through linear levels designed around momentum and
                precision.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ice and Fire Forms Section */}
      <section className="py-4">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-center items-center gap-8">
          <div className="text-center">
            <img
              src="/ice_mouse.png"
              alt="Ice Mouse"
              className="w-80 mx-auto drop-shadow-md hover:scale-105 transition"
            />
            <h3 className="text-lg font-semibold mt-2 text-blue-600">
              Ice Form
            </h3>
            <p className="text-sm text-gray-600">
              Freeze water, slide across surfaces, and cross fire zones.
            </p>
          </div>
          <div className="text-center">
            <img
              src="/fire_mouse.png"
              alt="Fire Mouse"
              className="w-80 mx-auto drop-shadow-md hover:scale-105 transition"
            />
            <h3 className="text-lg font-semibold mt-2 text-red-600">
              Fire Form
            </h3>
            <p className="text-sm text-gray-600">
              Melt obstacles, dash through icy paths, and burn barriers.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      {/* <footer className="py-3 bg-gray-800 text-white text-center">
        <p className="text-xs">
          © 2025 DH2650-Avarat Team. All rights reserved.
        </p>
      </footer> */}
    </div>
  );
}

export default App;
