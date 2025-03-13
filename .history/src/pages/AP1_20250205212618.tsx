import React from 'react';
import { ChevronRight, Book, FileText } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { moduleData } from '../data/modules';

export function AP1() {
  const { AP1: { S1, S2 } } = moduleData;
  const navigate = useNavigate();

  const handleMaterialClick = (moduleCode: string, type: 'cours' | 'td') => {
    navigate(`/course-materials?module=${moduleCode}&type=${type}`);
  };

  const renderModule = (module: any) => (
    <div
      key={module.code}
      className="group relative overflow-hidden rounded-xl glass-effect card-hover blue-glow"
    >
      <div 
        className="absolute inset-0 opacity-20 transition-transform duration-500 group-hover:scale-110"
        style={{
          backgroundImage: `url(${module.background || 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173'})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      <div className="relative p-6 space-y-4">
        <h3 className="text-xl font-bold text-white">{module.code} - {module.name}</h3>
        
        <div className="space-y-2">
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => handleMaterialClick(module.code, 'cours')}
              className="flex items-center space-x-2 px-3 py-1.5 rounded-lg bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/20 hover:border-blue-500/30 transition-all duration-300"
            >
              <Book className="h-4 w-4 text-blue-400" />
              <span className="text-blue-400">Cours</span>
            </button>
            <button
              onClick={() => handleMaterialClick(module.code, 'td')}
              className="flex items-center space-x-2 px-3 py-1.5 rounded-lg bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/20 hover:border-blue-500/30 transition-all duration-300"
            >
              <FileText className="h-4 w-4 text-blue-400" />
              <span className="text-blue-400">TDs</span>
            </button>
          </div>

          {module.details && module.details.length > 0 && (
            <div className="mt-4 space-y-2">
              {module.details.map((detail: any, index: number) => (
                <div key={index} className="flex items-center text-sm">
                  <ChevronRight className="h-4 w-4 mr-2 text-blue-400" />
                  {detail.Link ? (
                    <a
                      href={detail.Link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-blue-300 transition-colors"
                    >
                      {detail.name}
                    </a>
                  ) : (
                    <span className="text-gray-300">{detail.name}</span>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
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