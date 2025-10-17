const Nav = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 h-[60px] bg-background border-b-2 border-foreground z-50">
      <div className="max-w-[1200px] mx-auto px-5 h-full flex items-center justify-between">
        <div className="text-base font-normal">RUTVIK BABAR</div>
        <div className="flex gap-8 text-sm">
          <button onClick={() => scrollToSection('about')} className="border-0 bg-transparent text-foreground cursor-pointer p-0 hover:text-[hsl(var(--accent))] transition-colors duration-100">
            ABOUT
          </button>
          <button onClick={() => scrollToSection('projects')} className="border-0 bg-transparent text-foreground cursor-pointer p-0 hover:text-[hsl(var(--accent))] transition-colors duration-100">
            PROJECTS
          </button>
          <button onClick={() => scrollToSection('experience')} className="border-0 bg-transparent text-foreground cursor-pointer p-0 hover:text-[hsl(var(--accent))] transition-colors duration-100">
            EXPERIENCE
          </button>
          <button onClick={() => scrollToSection('contact')} className="border-0 bg-transparent text-foreground cursor-pointer p-0 hover:text-[hsl(var(--accent))] transition-colors duration-100">
            CONTACT
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
