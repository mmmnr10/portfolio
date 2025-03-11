export default function Hero() {
  return (
    <>
      <section className="hero p-24 bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
        <div className="hero-content text-center">
          <div className="max-w-lg mx-auto">
            <h1 className="text-5xl font-extrabold leading-tight mb-6">
              Hi, I'm Mustaf Abdulahi
            </h1>
            <p className="text-xl mb-8">
              A beginner developer learning and growing by building fun
              projects.
            </p>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-blue-500 font-semibold py-3 px-6 rounded-full shadow-lg transform hover:scale-105 transition duration-300"
            >
              See My Work
            </a>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 bg-gray-100">
        {/* See My Work rounded card */}
        <div className="flex justify-center mb-12">
          <div className="bg-blue-700 text-white px-8 py-4 rounded-xl shadow-xl">
            <h2 className="text-4xl font-bold text-center">See My Work</h2>
          </div>
        </div>

        <h2 className="text-3xl font-semibold text-center mb-12">
          My Projects
        </h2>
        <div className="flex justify-center gap-8">
          {/* Project Card 1 */}
          <div className="card bg-white shadow-lg rounded-lg w-80">
            <img
              src="ChasNewsWebPpage.jpg" // Replace with your image URL for Chas News
              alt="Chas News Project"
              className="rounded-t-lg"
            />
            <div className="card-body p-6">
              <h3 className="text-2xl font-semibold mb-4">Chas News</h3>
              <p className="text-blue-900 mb-4">
                Stay informed with the latest stories from around the globe,
                brought to you by Chas News. I built it with React and
                JavaScript.
              </p>
              <a
                href="https://github.com/mmmnr10/Chas-News" // Update with actual project link
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                View Project
              </a>
            </div>
          </div>

          {/* Project Card 2 */}
          <div className="card bg-white shadow-lg rounded-lg w-80">
            <img
              src="ChasQuizgame.jpg" // Replace with your image URL for Chas Quiz
              alt="Chas Quiz Game"
              className="rounded-t-lg"
            />
            <div className="card-body p-6">
              <h3 className="text-2xl font-semibold mb-4">Chas Quiz</h3>
              <p className="text-blue-900 mb-4">
                Play Chas Quiz: The Ultimate Test of Knowledge. Built with
                JavaScript and React. Test your knowledge and have fun!
              </p>
              <a
                href="https://github.com/mmmnr10/Chas-Quiz" // Update with actual project link
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                View Project
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
