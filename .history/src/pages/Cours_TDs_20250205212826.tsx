import React, { useState, useEffect } from 'react';
import { ChevronRight, Book, FileText, TestTube, ArrowLeft, Search } from 'lucide-react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { moduleData } from '../data/modules';

type MaterialType = 'cours' | 'td' | 'ds';

export function CourseMaterials() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const moduleParam = searchParams.get('module');
  const typeParam = searchParams.get('type') as MaterialType | null;

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState<MaterialType | null>(typeParam);

  useEffect(() => {
    if (typeParam) {
      setSelectedType(typeParam);
    }
  }, [typeParam]);

  // Récupérer tous les modules
  const allModules = [
    ...moduleData.AP1.S1,
    ...moduleData.AP1.S2,
    ...moduleData.AP2.S3,
    ...moduleData.AP2.S4
  ];

  // Filtrer les modules en fonction de la recherche et des paramètres
  const filteredModules = allModules.filter(module => {
    const matchesSearch = (
      module.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      module.code.toLowerCase().includes(searchTerm.toLowerCase())
    );
    const matchesModule = moduleParam ? module.code === moduleParam : true;
    return matchesSearch && matchesModule;
  });

  // Composant pour les boutons de type de matériel
  const MaterialTypeButton = ({ type, icon: Icon }: { type: MaterialType; icon: any }) => (
    <button
      onClick={() => setSelectedType(selectedType === type ? null : type)}
      className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
        selectedType === type 
          ? 'bg-blue-600 text-white' 
          : 'bg-black/30 text-gray-300 hover:bg-black/40'
      }`}
    >
      <Icon className="h-4 w-4" />
      <span className="capitalize">{type}</span>
    </button>
  );

  // Filtrer les détails en fonction du type sélectionné
  const filterDetails = (details: any[]) => {
    if (!selectedType) return details;
    return details.filter(detail => 
      detail.name.toLowerCase().includes(selectedType.toLowerCase())
    );
  };

  return (
    <div className="min-h-screen bg-[#020817] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* En-tête avec bouton retour */}
        <div className="flex items-center space-x-4 mb-8">
          <button 
            onClick={() => navigate(-1)}
            className="flex items-center text-blue-400 hover:text-blue-300 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Retour
          </button>
        </div>

        {/* Titre de la page */}
        <h1 className="year-title mb-12">
          Ressources Pédagogiques
          {moduleParam && ` - ${moduleParam}`}
        </h1>

        {/* Barre de recherche et filtres */}
        <div className="mb-8 space-y-6">
          <div className="relative">
            <input
              type="text"
              placeholder="Rechercher un module..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-black/30 border border-white/10 focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 text-white placeholder-gray-400 outline-none transition-all duration-300"
            />
            <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          </div>

          {/* Boutons de filtre */}
          <div className="flex flex-wrap gap-4">
            <MaterialTypeButton type="cours" icon={Book} />
            <MaterialTypeButton type="td" icon={FileText} />
            <MaterialTypeButton type="ds" icon={TestTube} />
          </div>
        </div>

        {/* Grille des modules */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredModules.map((module) => (
            <div
              key={module.code}
              className="group relative overflow-hidden rounded-xl glass-effect card-hover blue-glow"
            >
              {/* Arrière-plan du module */}
              <div 
                className="absolute inset-0 opacity-20 transition-transform duration-500 group-hover:scale-110"
                style={{
                  backgroundImage: `url(${module.background})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              />
              
              {/* Contenu du module */}
              <div className="relative p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-bold text-white">
                    {module.code} - {module.name}
                  </h3>
                </div>

                {/* Liste des ressources */}
                {module.details && module.details.length > 0 && (
                  <div className="space-y-2">
                    {filterDetails(module.details).map((detail: any, index: number) => (
                      <div key={index} className="flex items-center group/item">
                        <ChevronRight className="h-4 w-4 mr-2 text-blue-400" />
                        {detail.Link ? (
                          <a
                            href={detail.Link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-400 hover:text-blue-300 transition-colors flex items-center"
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
          ))}
        </div>

        {/* Message si aucun résultat */}
        {filteredModules.length === 0 && (
          <div className="text-center text-gray-400 mt-8">
            Aucun module ne correspond à votre recherche
          </div>
        )}
      </div>
    </div>
  );
}