import { ChevronRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom'; // Importer useNavigate
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { moduleData } from '../data/modules';
import backgroundpage from "/backgroundPages.jfif"; 

export function AP2() {
  const { AP2: { S3, S4 } } = moduleData;
  const navigate = useNavigate(); // Déclare le hook

  const handleModuleClick = (moduleCode: string, semester: string) => {
    // Redirection vers la page des matériaux de cours avec le paramètre 'module' dans l'URL
    navigate(`/CourseMaterials?module=${moduleCode}`, { state: { id: semester } });
  };

  const renderModule = (module: any, semester: string) => (
    <div
      key={module.code}
      className="group relative overflow-hidden rounded-xl bg-black/30 backdrop-blur-sm border border-white/10 hover:border-blue-500/50 transition-all duration-300"
      onClick={() => handleModuleClick(module.code, semester)}  // Ajouter un clic qui appelle handleModuleClick
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
        {module.details && module.details.length > 0 && (
          <ul className="text-gray-300 space-y-1 mt-3">
            {module.details.map((detail: string) => (
              <li key={detail} className="flex items-center">
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

  return (
    <div className="min-h-screen text-white" style={{
      backgroundImage: `url(${backgroundpage})`, // Remplace par l'URL de ton image
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}>
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-4 mb-8">
            <Link to="/" className="text-blue-400 hover:text-blue-300 transition-colors">
              Accueil
            </Link>
            <ChevronRight className="h-4 w-4 text-gray-400" />
            <span className="text-gray-300">AP2</span>
          </div>

          <h1 className="year-title">
            Deuxième Année (AP2)
          </h1>

          <div className="space-y-16">
            <section>
              <h2 className="text-2xl font-semibold mb-8 text-center text-blue-300" data-aos="fade-in-out" data-aos-delay="50" data-aos-duration="700" data-aos-easing="ease-in-out">Semestre 3</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {S3.length > 0 ? S3.map(module => renderModule(module, "S3")) : <p>Aucun module disponible pour le semestre 3</p>}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-8 text-center text-blue-300" data-aos="fade-in-out" data-aos-delay="50" data-aos-duration="700" data-aos-easing="ease-in-out">Semestre 4</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {S4.length > 0 ? S4.map(module => renderModule(module, "S4")) : <p>Aucun module disponible pour le semestre 4</p>}
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
