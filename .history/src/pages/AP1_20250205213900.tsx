import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { moduleData } from '../data/modules';

export function AP1() {
  const { AP1: { S1, S2 } } = moduleData;

  const renderModule = (module: any) => (
    <div
      key={module.code}
      className="group relative overflow-hidden rounded-xl bg-black/30 backdrop-blur-sm border border-white/10 hover:border-blue-500/50 transition-all duration-300"
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
        {module.link && (
          <a
            href={module.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center mt-4 text-blue-400 hover:text-blue-300 transition-colors"
          >
            Accéder aux ressources <ChevronRight className="ml-1 h-4 w-4" />
          </a>
        )}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#020817] text-white">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-4 mb-8">
            <Link to="/" className="text-blue-400 hover:text-blue-300 transition-colors">
              Accueil
            </Link>
            <ChevronRight className="h-4 w-4 text-gray-400" />
            <span className="text-gray-300">AP1</span>
          </div>

          <h1 className="year-title">
            Première Année (AP1)
          </h1>

          <div className="space-y-16">
            <section>
              <h2 className="text-2xl font-semibold mb-8 text-center text-blue-300">Semestre 1</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {S1.map(renderModule)}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-8 text-center text-blue-300">Semestre 2</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {S2.map(renderModule)}
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}