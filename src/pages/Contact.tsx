import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Nav />
      <main className="flex-1 pt-[60px]">
        <section className="min-h-[calc(100vh-120px)] flex items-center">
          <div className="max-w-[1200px] mx-auto px-5 w-full">
            <h2 className="mb-10">CONTACT</h2>
            <div className="max-w-[600px] border-2 border-foreground p-8">
              <p className="mb-4 text-base">Email: <a href="mailto:rbabar@stevens.edu">rbabar@stevens.edu</a></p>
              <p className="mb-4 text-base">GitHub: <a href="https://github.com/RutvikBabar" target="_blank" rel="noopener noreferrer">github.com/RutvikBabar</a></p>
              <p className="text-base">LinkedIn: <a href="https://linkedin.com/in/rutvikbabar" target="_blank" rel="noopener noreferrer">linkedin.com/in/rutvikbabar</a></p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
