
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-primary">CIVIL LAB EQUIPMENT</Link>
        
        <div className="flex items-center space-x-8">
          <Link to="/lab/structural" className="nav-link">Structural Lab</Link>
          <Link to="/lab/geotechnical" className="nav-link">Geotechnical Lab</Link>
          <Link to="/lab/hydraulics" className="nav-link">Hydraulics Lab</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
