import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 h-[60px] bg-background border-b-2 border-foreground z-50">
      <div className="max-w-[1200px] mx-auto px-5 h-full flex items-center justify-between">
        <Link to="/" className="text-base font-normal border-0">RUTVIK BABAR</Link>
        <div className="flex gap-8 text-sm">
          <Link to="/about" className="border-0 bg-transparent text-foreground cursor-pointer hover:text-[hsl(var(--accent))] transition-colors duration-100">
            ABOUT
          </Link>
          <Link to="/projects" className="border-0 bg-transparent text-foreground cursor-pointer hover:text-[hsl(var(--accent))] transition-colors duration-100">
            PROJECTS
          </Link>
          <Link to="/experience" className="border-0 bg-transparent text-foreground cursor-pointer hover:text-[hsl(var(--accent))] transition-colors duration-100">
            EXPERIENCE
          </Link>
          <Link to="/contact" className="border-0 bg-transparent text-foreground cursor-pointer hover:text-[hsl(var(--accent))] transition-colors duration-100">
            CONTACT
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
