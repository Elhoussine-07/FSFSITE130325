import { ChevronRight, Book, Users, GraduationCap, Github, Linkedin, Mail, ArrowRight } from 'lucide-react';
import Logofsf from "../Logofsf.jpeg";
import backgroundfsf from "/backgroundfsf.png";
import { FaLinkedin, FaGithub } from 'react-icons/fa'; // Pour LinkedIn et GitHub
import { IoMail } from 'react-icons/io5'; // Pour Gmail
import { useEffect,useState } from 'react';
import { useSpring, animated } from 'react-spring'; 
import backgroundImage from "/backgrounfsf.jfif"; 
import mobile_img from "/mobilebackground.jfif"
import logoFSF from "/logo.png"
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import developerImage from "/img3.jpg"; // Image du développeur
import designerImage from "/mohamed_img.jfif";


export function Home() {
const [activeStudents, setActiveStudents] = useState(Math.floor(Math.random() * (30 - 10 + 1) + 10));

// Animation avec react-spring
const props = useSpring<{ number: number }>({ number: activeStudents, from: { number: 10 }, reset: true, reverse: activeStudents < 10 });

const [backgroundImage, setBackgroundImage] = useState("/backgrounfsf.jfif");

  useEffect(() => {
    // Fonction pour vérifier la taille de l'écran
    const updateBackgroundImage = () => {
      if (window.innerWidth <= 768) { // Taille mobile ou tablette
        setBackgroundImage("/mobilebackground.jfif"); // Image pour mobile
      } else { // Taille PC
        setBackgroundImage("/backgrounfsf.jfif"); // Image pour PC
      }
    };

    // Appeler la fonction lors du premier rendu
    updateBackgroundImage();

    // Ajouter un événement pour mettre à jour l'image lors du redimensionnement de l'écran
    window.addEventListener("resize", updateBackgroundImage);

    // Nettoyage pour enlever l'événement lors du démontage du composant
    return () => {
      window.removeEventListener("resize", updateBackgroundImage);
    };
  }, []); // Se déclenche une seule fois lors du premier rendu



  return (
    <div className="min-h-screen bg-[#020817] text-white">
      {/* Header */}
      <header className="fixed w-full z-50 bg-black/30 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
            <Link to="/" className="flex items-center space-x-4">
            <img src={logoFSF} alt="FSF Logo" className="h-10 w-10" />
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              FSF ENSA Agadir
            </h1>
          </Link>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-300 hover:text-white transition">À propos</a>
              <a href="#courses" className="text-gray-300 hover:text-white transition">Cours+TDs</a>
              <a href="#contact" className="text-gray-300 hover:text-white transition">Contact</a>
            </nav>
          </div>
        </div>
      </header>

      <section 
      className="relative min-h-screen flex flex-col items-start justify-center pl-16 text-left"
      style={{
        backgroundImage: `url(${backgroundImage})`, // Utiliser l'état pour définir l'image
        backgroundSize: "cover",
        backgroundPosition: "center",
        paddingTop: "130px", // Espace entre le haut et la section
      }}
    >
      {/* Overlay pour lisibilité */}
      <div className="absolute inset-0 bg-black/40"></div>  

      {/* Contenu principal */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="z-10 max-w-xl"
      >
        <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
          Formation Sans Frontières
        </h1>
        <p className="text-lg md:text-2xl text-gray-300 mt-4">
          Votre passerelle vers l'excellence académique à l'ENSA d'Agadir
        </p>

        {/* Bouton animé */}
        <motion.a
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          href="#courses"
          className="mt-8 inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full text-lg font-semibold shadow-lg transform hover:scale-105 transition-all"
        >
          Découvrir nos cours <ArrowRight className="ml-2 h-5 w-5" />
        </motion.a>
      </motion.div>
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
                  <h3 className="stats-number">
                    <animated.span>
                    setActiveStudents
                    </animated.span>
                  </h3>
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


<section id="courses" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="relative text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent glow-title">
            Cours de Formation
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Cycle Préparatoire */}
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
                <h3 className="text-3xl font-bold mb-4">Cycle Préparatoire</h3>
                <p className="text-gray-300 mb-6">
                  Les fondamentaux des sciences de l'ingénieur (AP1 & AP2)
                </p>
                <div className="flex gap-4">
  <Link to="/AP1" className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors">
    AP1 <ChevronRight className="ml-2 h-5 w-5" />
  </Link>
  <Link to="/AP2" className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors">
    AP2 <ChevronRight className="ml-2 h-5 w-5" />
  </Link>
</div>
              </div>
            </div>

            {/* Cycle Ingénieur */}
            <div className="group relative overflow-hidden rounded-2xl">
              <div 
                className="absolute inset-0 bg-gradient-to-br from-blue-900 to-black transition-transform duration-500 group-hover:scale-110"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1581244277943-fe4a9c777189?auto=format&fit=crop&q=80')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundBlendMode: 'overlay'
                }}
              ></div>
              <div className="relative p-8 min-h-[300px] flex flex-col justify-end bg-gradient-to-t from-black/80 to-transparent">
                <h3 className="text-3xl font-bold mb-4">Cycle Ingénieur</h3>
                <p className="text-gray-300 mb-6">
                  Spécialisations en génie (BTP, GI, GM, FID, GE)
                </p>
                <Link to="/engineering" className="text-blue-400 hover:text-blue-300 transition-colors">
                Cycle d'Ingénieur
                </Link>
              </div>
            </div>

            {/* Resources */}
            <div className="group relative overflow-hidden rounded-2xl">
              <div 
                className="absolute inset-0 bg-gradient-to-br from-blue-900 to-black transition-transform duration-500 group-hover:scale-110"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundBlendMode: 'overlay'
                }}
              ></div>
              <div className="relative p-8 min-h-[300px] flex flex-col justify-end bg-gradient-to-t from-black/80 to-transparent">
                <h3 className="text-3xl font-bold mb-4">Espace Personnelle</h3>
                <p className="text-gray-300 mb-6">
                  suivez-nous 
                </p>
                <Link 
                  to="/resources" 
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                >
                  Voir les ressources <ChevronRight className="ml-2 h-5 w-5" />
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