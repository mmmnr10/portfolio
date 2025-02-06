export default function TechSkills() {
  const skills = ["JavaScript", "React", "Node.js", "Tailwind CSS", "Next.js"];

  return (
    <section className="py-10 bg-base-200">
      <h2 className="text-2xl font-bold text-center">Tech Skills</h2>
      <div className="flex justify-center mt-4 space-x-4">
        {skills.map((skill, index) => (
          <button
            key={index}
            className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600"
          >
            {skill}
          </button>
        ))}
      </div>
    </section>
  );
}
