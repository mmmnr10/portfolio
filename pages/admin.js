import { useState } from "react";
import { useProjects } from "../context/ProjectContext";

export default function Admin() {
  const {
    projects,
    techSkills,
    addProject,
    editProject,
    deleteProject,
    addTechSkill,
    deleteTechSkill,
  } = useProjects();
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    tech: "",
    link: "",
  });
  const [newSkill, setNewSkill] = useState("");

  function handleLogin() {
    if (username === "Mustaf1" && password === "Banan123") {
      setLoggedIn(true);
    } else {
      alert("Invalid login");
    }
  }

  const handleProjectSubmit = (e) => {
    e.preventDefault();
    const newProject = { ...formData, id: Date.now().toString() };
    addProject(newProject);
    setFormData({ title: "", description: "", tech: "", link: "" });
  };

  const handleSkillSubmit = (e) => {
    e.preventDefault();
    if (newSkill && !techSkills.includes(newSkill)) {
      addTechSkill(newSkill);
      setNewSkill("");
    }
  };

  if (!loggedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-800">
        <div className="bg-gray-900 p-8 rounded-lg shadow-lg w-96">
          <h1 className="text-3xl font-semibold mb-6 text-center text-white">
            Admin Login
          </h1>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="input input-bordered w-full mb-4 p-3 rounded-lg text-black"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input input-bordered w-full mb-4 p-3 rounded-lg text-black"
          />
          <button
            onClick={handleLogin}
            className="w-full btn btn-primary py-3 rounded-lg mt-4 text-white"
          >
            Login
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="p-8 bg-gray-900 min-h-screen">
      <h1 className="text-3xl font-semibold mb-6 text-center text-white">
        Admin Dashboard
      </h1>

      
      <div className="bg-gray-800 p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-white">Add Project</h2>
        <form onSubmit={handleProjectSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Title"
            value={formData.title}
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
            className="input input-bordered w-full p-3 rounded-lg text-black"
          />
          <input
            type="text"
            placeholder="Description"
            value={formData.description}
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
            className="input input-bordered w-full p-3 rounded-lg text-black"
          />
          <input
            type="text"
            placeholder="Tech"
            value={formData.tech}
            onChange={(e) => setFormData({ ...formData, tech: e.target.value })}
            className="input input-bordered w-full p-3 rounded-lg text-black"
          />
          <input
            type="text"
            placeholder="Link"
            value={formData.link}
            onChange={(e) => setFormData({ ...formData, link: e.target.value })}
            className="input input-bordered w-full p-3 rounded-lg text-black"
          />
          <button
            type="submit"
            className="w-full btn btn-primary py-3 rounded-lg text-white"
          >
            Add Project
          </button>
        </form>
      </div>

      
      <div className="bg-gray-800 p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-white">
          Add Tech Skill
        </h2>
        <form onSubmit={handleSkillSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="New Skill"
            value={newSkill}
            onChange={(e) => setNewSkill(e.target.value)}
            className="input input-bordered w-full p-3 rounded-lg text-black"
          />
          <button
            type="submit"
            className="w-full btn btn-secondary py-3 rounded-lg text-white"
          >
            Add Skill
          </button>
        </form>
      </div>

      
      <div className="bg-gray-800 p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-white">Projects</h2>
        {projects.map((project) => (
          <div
            key={project.id}
            className="mb-6 p-4 bg-gray-700 rounded-lg shadow-sm"
          >
            <h3 className="text-xl font-semibold text-white">
              {project.title}
            </h3>
            <p className="text-gray-300">{project.description}</p>
            <p className="font-semibold mt-2 text-gray-400">{project.tech}</p>
            <a
              href={project.link}
              className="text-blue-400 underline mt-2 block"
            >
              View Project
            </a>
            <div className="flex space-x-4 mt-4">
              <button
                onClick={() => editProject(project.id)}
                className="btn btn-warning py-2 px-4 text-white rounded-lg"
              >
                Edit
              </button>
              <button
                onClick={() => deleteProject(project.id)}
                className="btn btn-error py-2 px-4 text-white rounded-lg"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      
      <div className="bg-gray-800 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4 text-white">Tech Skills</h2>
        {techSkills.map((skill, index) => (
          <div
            key={index}
            className="mb-2 p-3 bg-gray-700 rounded-lg shadow-sm flex justify-between"
          >
            <span className="text-gray-300">{skill}</span>
            <button
              onClick={() => deleteTechSkill(skill)}
              className="btn btn-error py-1 px-2 text-white rounded-lg"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
