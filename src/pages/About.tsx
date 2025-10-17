import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Nav />
      <main className="flex-1 pt-[60px]">
        <section className="min-h-[calc(100vh-120px)] flex items-center">
          <div className="max-w-[1200px] mx-auto px-5 w-full">
            <h1 className="mb-4">RUTVIK BABAR</h1>
            <h2 className="mb-6">Quantitative Developer</h2>
            <div className="text-base leading-relaxed max-w-[800px]">
              <p className="mb-2">CS grad student at Stevens Institute of Technology.</p>
              <p className="mb-2">2 years at UBS building reconciliation systems.</p>
              <p>C++ HFT developer. 1.6 Sharpe ratio on stat arb.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
