interface Project {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  demo?: string;
}

const Projects = () => {
  const projects: Project[] = [
    {
      title: "WINTER HFT",
      description: "C++ trading framework. 2μs latency, 1.4% ROI.",
      tech: ["C++20", "SIMD", "Lock-Free"],
      github: "https://github.com/RutvikBabar",
    },
    {
      title: "SHIFT Platform",
      description: "Real-time MACD trading.",
      tech: ["C++", "SHIFT API"],
      github: "https://github.com/RutvikBabar",
    },
    {
      title: "Message Broker",
      description: "Defense networks thesis. 100 bytes saved per message.",
      tech: ["C++", "Ring Buffers"],
      github: "https://github.com/RutvikBabar",
    },
    {
      title: "UBS Systems",
      description: "Reconciliation + PnL. 2 years production.",
      tech: ["Python", "SQL"],
    },
    {
      title: "ML Pipeline",
      description: "XGBoost with CUDA.",
      tech: ["Python", "PyTorch", "XGBoost"],
      github: "https://github.com/RutvikBabar",
    },
  ];

  return (
    <section id="projects" className="min-h-screen py-20">
      <div className="max-w-[1200px] mx-auto px-5">
        <h2 className="mb-10">PROJECTS</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {projects.map((project, index) => (
            <div key={index} className="border-2 border-foreground p-5">
              <h3 className="mb-2">{project.title}</h3>
              <p className="mb-3 text-sm">{project.description}</p>
              <p className="mb-3 text-sm">Tech: {project.tech.join(", ")}</p>
              <div className="flex gap-4">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    [GitHub]
                  </a>
                )}
                {project.demo && (
                  <a href={project.demo} target="_blank" rel="noopener noreferrer">
                    [Demo]
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
