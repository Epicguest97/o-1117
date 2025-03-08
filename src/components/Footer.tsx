
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white py-16 px-4 border-t">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <h2 className="text-2xl font-bold mb-6">CIVIL LAB EQUIPMENT</h2>
            <nav className="space-y-4">
              <h3 className="font-semibold mb-4">Labs</h3>
              <ul className="space-y-2 text-accent">
                <li><Link to="/marketplace">All Equipment</Link></li>
                <li><Link to="/">Lab Directory</Link></li>
              </ul>
            </nav>
          </div>

          <div className="col-span-1">
            <nav className="space-y-4">
              <h3 className="font-semibold mb-4">Department</h3>
              <ul className="space-y-2 text-accent">
                <li><Link to="/">About the Department</Link></li>
                <li><Link to="/">Contact</Link></li>
              </ul>
            </nav>
          </div>

          <div className="col-span-1">
            <nav className="space-y-4">
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-accent">
                <li><Link to="/">Equipment Manuals</Link></li>
                <li><Link to="/">Safety Guidelines</Link></li>
              </ul>
            </nav>
          </div>

          <div className="col-span-1">
            <div className="space-y-4">
              <h3 className="font-semibold mb-4">Contact Department</h3>
              <p className="text-accent mb-4">
                For assistance with equipment or lab access
                <a href="mailto:civil.labs@college.edu" className="text-primary block mt-2">
                  civil.labs@college.edu
                </a>
              </p>
              <div className="flex gap-4">
                <Link to="/" className="text-accent hover:text-primary">
                  <Facebook className="w-5 h-5" />
                </Link>
                <Link to="/" className="text-accent hover:text-primary">
                  <Twitter className="w-5 h-5" />
                </Link>
                <Link to="/" className="text-accent hover:text-primary">
                  <Instagram className="w-5 h-5" />
                </Link>
                <Link to="/" className="text-accent hover:text-primary">
                  <Linkedin className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
