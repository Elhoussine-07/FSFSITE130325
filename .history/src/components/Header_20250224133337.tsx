import { Link } from 'react-router-dom';
import Logofsf from "../Logofsf.jpeg";
import logoFSF from "/logo.png"

export function Header() {
  return (
    <header className="fixed w-full z-50 bg-black/30 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-4">
            <img src={logoFSF} alt="FSF Logo" className="h-10 w-10" />
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              FSF ENSA Agadir
            </h1>
          </Link>
          <nav className="hidden md:flex space-x-8">
            <Link to="/ap1" className="text-gray-300 hover:text-white transition">AP1</Link>
            <Link to="/ap2" className="text-gray-300 hover:text-white transition">AP2</Link>
            <Link to="/engineering" className="text-gray-300 hover:text-white transition">CI1</Link>
            <a href="#contact" className="text-gray-300 hover:text-white transition">Contact</a>
          </nav>
        </div>
      </div>
    </header>
  );
}