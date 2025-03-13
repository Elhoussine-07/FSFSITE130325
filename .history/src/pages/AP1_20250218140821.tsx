import React, { useEffect } from "react";
import { ChevronRight } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { moduleData } from "../data/modules";
import backgroundpage from "/backgroundPages.jfif"; 
import AOS from 'aos';
import 'aos/dist/aos.css';

export function AP1() {
  const { AP1: { S1 = [], S2 = [] } } = moduleData;
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init();
  }, []);

  // Fonction pour afficher les modules
  const renderModule = (module: any, semester: string) => {
    if (!module || !module.code || !module.name) {
      return <p>Module invalide</p>; // Gérer le cas où le module est incomplet
    }

    return (
      <div
        key={module.code}
        className="group relative overflow-hidden rounded-xl bg-black/30 backdrop-blur-sm border border-white/10 hover:border-blue-500/50 transition-all duration-300"
        onClick={() => navigate(`/CourseMaterials?module=${module.code}`, { state: { id: semester } })}
        aria-label={`Accéder aux ressources pour le module ${module.code} - ${module.name}`}
        data-aos="fade-in-out" data-aos-delay="50" data-aos-duration="700" data-aos-easing="ease-in-out"
      >
        <div
          className="absolute inset-0 opacity-20 transition-transform duration-500 group-hover:scale-110"
          style={{
            backgroundImage: `url(${module.background || 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173'})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        ></div>
        <div className="relative p-6">
          <h3 className="text-xl font-bold mb-2 text-white">{module.code} - {module.name}</h3>
          
          {/* Affichage des détails du module */}
          {module.details && module.details.length > 0 && (
            <ul className="text-gray-300 space-y-1 mt-3">
              {module.details.map((detail: string, index: number) => (
                <li key={index} className="flex items-center">
                  <ChevronRight className="h-4 w-4 mr-2 text-blue-400" />
                  {detail}
                </li>
              ))}
            </ul>
          )}

          {/* Affichage des sous-modules */}
          {module.subModules && module.subModules.length > 0 && (
            <div className="mt-4">
              <h4 className="text-lg font-semibold text-white">Sous-modules :</h4>
              <ul className="text-gray-300 space-y-1 mt-2">
                {module.subModules.map((subModule: any, index: number) => (
                  <li key={index} className="flex items-center">
                    <ChevronRight className="h-4 w-4 mr-2 text-blue-400" />
                    {subModule.name}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
      <div className="min-h-screen text-white" style={{
        backgroundImage: `url(${backgroundpage})`, // Remplace par l'URL de ton image
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-aos="fade-in-out" data-aos-delay="50" data-aos-duration="700" data-aos-easing="ease-in-out">
          <div className="flex items-center space-x-4 mb-8">
            <Link to="/" className="text-blue-400 hover:text-blue-300 transition-colors" aria-label="Retour à la page d'accueil">
              Accueil
            </Link>
            <ChevronRight className="h-4 w-4 text-gray-400" />
            <span className="text-gray-300">AP1</span>
          </div>

          <h1 className="year-title">
            Première Année (AP1)
          </h1>

          <div className="space-y-16">
            {/* Section pour le Semestre 1 */}
            <section>
              <h2 className="text-2xl font-semibold mb-8 text-center text-blue-300" data-aos="fade-in-out" data-aos-delay="50" data-aos-duration="700" data-aos-easing="ease-in-out">Semestre 1</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {S1.length > 0 ? S1.map(module => renderModule(module, "S1")) : <p>Aucun module disponible pour le semestre 1</p>}
              </div>
            </section>

            {/* Section pour le Semestre 2 */}
            <section>
              <h2 className="text-2xl font-semibold mb-8 text-center text-blue-300" data-aos="fade-in-out" data-aos-delay="50" data-aos-duration="700" data-aos-easing="ease-in-out">Semestre 2</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {S2.length > 0 ? S2.map(module => renderModule(module, "S2")) : <p>Aucun module disponible pour le semestre 2</p>}
              </div>
            </section>
          </div>
        </div>
        let a=
        <Footer />
      </main>

      
    </div>
  );
}
