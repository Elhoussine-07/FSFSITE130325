
import { ChevronRight, Book, Users, GraduationCap, Github, Linkedin, Mail, ArrowRight } from 'lucide-react';
import Logofsf from "../Logofsf.jpeg";
import backgroundfsf from "/backgroundfsf.png";
import { Link } from 'react-router-dom';
import bookImage from "/book.png"; // Ajoute une image de livre fermé
import { motion } from "framer-motion";
import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";
export function Home() {
  return (
    <div className="min-h-screen bg-[#020817] text-white">
      {/* Header */}
      <header className="fixed w-full z-50 bg-black/30 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <img src={Logofsf} alt="FSF Logo" className="h-10 w-10" />
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                FSF ENSA Agadir
              </h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-300 hover:text-white transition">À propos</a>
              <a href="#courses" className="text-gray-300 hover:text-white transition">Cours+TDs</a>
              <a href="#contact" className="text-gray-300 hover:text-white transition">Contact</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 text-center">
        {/* Fond animé */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-black"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />

        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${backgroundfsf})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat"
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ duration: 1.5 }}
        />

        {/* Livre animé */}
        <motion.img 
          src={bookImage} 
          alt="Livre ouvert" 
          className="w-32 mb-4"
          initial={{ rotateX: 90, scale: 0.5, opacity: 0 }}
          animate={{ rotateX: 0, scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        />

        {/* Texte animé */}
        <motion.h1 
          className="text-6xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Formation Sans Frontières
        </motion.h1>

        <motion.p 
          className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Votre passerelle vers l'excellence académique à l'ENSA d'Agadir
        </motion.p>

        {/* Bouton animé */}
        <motion.a 
          href="#courses" 
          className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-full text-lg font-semibold transition-all transform hover:scale-105"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          Découvrir nos cours <ArrowRight className="ml-2 h-5 w-5" />
        </motion.a>
      </section>

      {/* Stats Section */}
      <div className="bg-black/20 backdrop-blur-sm py-16 border-b border-white/10">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Carte des Modules de cours */}
      <div className="stats-card">
        <div className="flex flex-col items-center justify-center text-center space-y-4">
          <Book className="h-12 w-12 text-blue-400" />
          <div>
            <h3 className="stats-number">{28}</h3>
            <p className="text-lg text-gray-300 mt-2">Modules Total</p>
          </div>
        </div>
      </div>

      {/* Carte des Étudiants Actifs */}
      <div className="stats-card">
        <div className="flex flex-col items-center justify-center text-center space-y-4">
          <Users className="h-12 w-12 text-blue-400" />
          <div>
            <h3 className="stats-number">500+</h3>
            <p className="text-lg text-gray-300 mt-2">Étudiants Actifs</p>
          </div>
        </div>
      </div>

      {/* Carte des Semestres */}
      <div className="stats-card">
        <div className="flex flex-col items-center justify-center text-center space-y-4">
          <GraduationCap className="h-12 w-12 text-blue-400" />
          <div>
            <h3 className="stats-number">4</h3>
            <p className="text-lg text-gray-300 mt-2">Semestres</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


      {/* Courses Section */}
      <section id="courses" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="relative text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent glow-title">
        Nos Cours
</h2>


          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* AP1 Card */}
            <div className="group relative overflow-hidden rounded-2xl">
              <div 
                className="absolute inset-0 bg-gradient-to-br from-blue-900 to-black transition-transform duration-500 group-hover:scale-110"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&q=80')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundBlendMode: 'overlay'
                }}
              ></div>
              <div className="relative p-8 min-h-[300px] flex flex-col justify-end bg-gradient-to-t from-black/80 to-transparent">
                <h3 className="text-3xl font-bold mb-4">Première Année (AP1)</h3>
                <p className="text-gray-300 mb-6">
                  Découvrez les fondamentaux des sciences de l'ingénieur à travers nos modules de première année.
                </p>
                <Link 
                  to="/ap1" 
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                >
                  Explorer les cours <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>

            {/* AP2 Card */}
            <div className="group relative overflow-hidden rounded-2xl">
              <div 
                className="absolute inset-0 bg-gradient-to-br from-blue-900 to-black transition-transform duration-500 group-hover:scale-110"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1517134191118-9d595e4c8c2b?auto=format&fit=crop&q=80')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundBlendMode: 'overlay'
                }}
              ></div>
              <div className="relative p-8 min-h-[300px] flex flex-col justify-end bg-gradient-to-t from-black/80 to-transparent">
                <h3 className="text-3xl font-bold mb-4">Deuxième Année (AP2)</h3>
                <p className="text-gray-300 mb-6">
                  Approfondissez vos connaissances avec nos modules avancés de deuxième année.
                </p>
                <Link 
                  to="/ap2" 
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                >
                  Explorer les cours <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-black/30 backdrop-blur-sm border-t border-white/10 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">À propos de FSF</h3>
              <p className="text-gray-400">
                FSF est le club des étudiants passionnés de l'ENSA d'Agadir, dédié au partage des connaissances et à l'excellence académique.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact</h3>
              <div className="space-y-2">
                <a href="mailto:contact@ensa-agadir.ac.ma" className="flex items-center text-gray-400 hover:text-white transition">
                  <Mail className="h-5 w-5 mr-2" />
                  fsf.ensa@uiz.ac.ma
                </a>
                <p className="text-gray-400">BP 1136, Agadir, Maroc</p>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Suivez-nous</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <Github className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <Linkedin className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-white/10 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} FSF ENSA Agadir. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}