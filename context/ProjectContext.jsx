import { createContext, useContext, useState, useEffect } from 'react';

const ProjectContext = createContext();

export const ProjectProvider = ({ children }) => {
  const [projects, setProjects] = useState([]);
  const [techSkills, setTechSkills] = useState(['React', 'Next.js', 'Tailwind CSS', 'JavaScript']);


  useEffect(() => {
    const storedProjects = JSON.parse(localStorage.getItem('projects')) || [];
    const storedTechSkills = JSON.parse(localStorage.getItem('techSkills')) || [];
    setProjects(storedProjects);
    setTechSkills(storedTechSkills);
  }, []);


  useEffect(() => {
    localStorage.setItem('projects', JSON.stringify(projects));
  }, [projects]);

  useEffect(() => {
    localStorage.setItem('techSkills', JSON.stringify(techSkills));
  }, [techSkills]);

  const addProject = (project) => {
    setProjects([...projects, project]);
  };

  const editProject = (id, updatedProject) => {
    setProjects(projects.map((project) => (project.id === id ? updatedProject : project)));
  };

  const deleteProject = (id) => {
    setProjects(projects.filter((project) => project.id !== id));
  };

  const addTechSkill = (skill) => {
    setTechSkills([...techSkills, skill]);
  };

  const deleteTechSkill = (skill) => {
    setTechSkills(techSkills.filter((s) => s !== skill));
  };

  return (
    <ProjectContext.Provider
      value={{
        projects,
        techSkills,
        addProject,
        editProject,
        deleteProject,
        addTechSkill,
        deleteTechSkill,
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
};

export const useProjects = () => useContext(ProjectContext);