export default function Hero() {
  return (
    <section className="hero p-24 bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
      <div className="hero-content text-center">
        <div className="max-w-lg mx-auto">
          <h1 className="text-5xl font-extrabold leading-tight mb-6">
            Hi, I'm Mustaf
          </h1>
          <p className="text-xl mb-8">
            A beginner developer learning and growing by building fun projects.
          </p>
          <a
            href="https://github.com/mmmnr10?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-blue-500 font-semibold py-3 px-6 rounded-full shadow-lg transform hover:scale-105 transition duration-300"
          >
            See My Work
          </a>
        </div>
      </div>
    </section>
  );
}
