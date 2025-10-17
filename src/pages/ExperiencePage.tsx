import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

interface ExperienceItem {
  year: string;
  company: string;
  role: string;
  details: string[];
}

const ExperiencePage = () => {
  const experiences: ExperienceItem[] = [
    {
      year: "2022-2024",
      company: "UBS",
      role: "Technology Analyst",
      details: [
        "Built reconciliation systems",
        "PnL calculation engine",
        "Production systems for 2 years",
      ],
    },
    {
      year: "2025",
      company: "Stevens Institute of Technology",
      role: "Graduate Research Assistant",
      details: [
        "SHIFT trading platform development",
        "Real-time MACD strategy implementation",
        "HFT framework research",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Nav />
      <main className="flex-1 pt-[60px]">
        <section className="py-20">
          <div className="max-w-[1200px] mx-auto px-5">
            <h2 className="mb-10">EXPERIENCE</h2>
            <div className="space-y-10">
              {experiences.map((exp, index) => (
                <div key={index} className="flex gap-8">
                  <div className="w-[100px] flex-shrink-0 text-sm">{exp.year}</div>
                  <div className="flex-1 border-l-2 border-foreground pl-8">
                    <h3 className="mb-1">{exp.company}</h3>
                    <p className="mb-3 text-base">{exp.role}</p>
                    <ul className="space-y-1">
                      {exp.details.map((detail, idx) => (
                        <li key={idx} className="text-sm">- {detail}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ExperiencePage;
