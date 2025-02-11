import React, { useState, useEffect } from 'react';
import { ChevronRight, Book, FileText, TestTube, FilePlus, ArrowLeft } from 'lucide-react';
import { useSearchParams, useNavigate, useLocation } from 'react-router-dom';
import { moduleData } from '../data/modules';
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

type MaterialType = 'cours' | 'td' | 'ds' | 'extra';

type FileType = {
  id: string;
  name: string;
  mimeType: string;
};

export function CourseMaterials() {
  const [searchParams] = useSearchParams();
  const location = useLocation();
  const navigate = useNavigate();

  const moduleParam = searchParams.get('module');
  const typeParam = searchParams.get('type') as MaterialType | null;

  const [selectedType, setSelectedType] = useState<MaterialType | null>(typeParam);
  const [files, setFiles] = useState<FileType[]>([]);

  const md = location.state?.id ?? 'S1';

  const [modul, setModule] = useState<any>({
    'S1': moduleData?.AP1?.S1 || [],
    'S2': moduleData?.AP1?.S2 || [],
    'S3': moduleData?.AP2?.S3 || [],
    'S4': moduleData?.AP2?.S4 || []
  });

  useEffect(() => {
    if (selectedType && moduleParam && modul[md]) {
      const module = modul[md].find((mod: { code: string; }) => mod.code === moduleParam);
      if (module && module.details[selectedType] && module.details[selectedType].googleDriveFolderId) {
        const folderId = module.details[selectedType].googleDriveFolderId;
        const apiKey = 'AIzaSyACQLVbDM6D2wEdDWVzWyrA1Ig9p8ujluk'; // Remplace par ta clé API
        const query = encodeURIComponent(`'${folderId}' in parents`);
        const url = `https://www.googleapis.com/drive/v3/files?q=${query}&key=${apiKey}&fields=files(id,name,mimeType)`;

        fetch(url)
          .then(response => response.json())
          .then(data => {
            if (data.files) {
              setFiles(data.files.filter((file: any) => file.mimeType === 'application/pdf'));
            } else {
              console.error('Aucun fichier trouvé pour ce dossier.');
              setFiles([]);
            }
          })
          .catch(error => {
            console.error('Erreur lors de la récupération des fichiers :', error);
          });
      }
    }
  }, [selectedType, moduleParam, md, modul]);

  const allModules = [
    ...modul['S1'],
    ...modul['S2'],
    ...modul['S3'],
    ...modul['S4']
  ];

  const filteredModules = allModules.filter(module => {
    const matchesModule = moduleParam ? module.code === moduleParam : true;
    return matchesModule;
  });

  const MaterialTypeButton = ({ type, icon: Icon }: { type: MaterialType; icon: any }) => (
    <button
      onClick={() => setSelectedType(selectedType === type ? null : type)}
      className={`material-button flex items-center space-x-3 px-8 py-4 rounded-2xl ${selectedType === type ? 'bg-gradient-to-r from-blue-600 to-blue-400 shadow-lg shadow-blue-500/30' : 'glass-card hover:bg-white/20'}`}
    >
      <Icon className={`h-6 w-6 ${selectedType === type ? 'text-white' : 'text-blue-400'}`} />
      <span className={`capitalize text-lg font-medium ${selectedType === type ? 'text-white' : 'text-blue-400'}`}>
        {type}
      </span>
    </button>
  );

  const filterDetailsByType = (module: any) => {
    if (!selectedType) return [];

    if (files.length > 0) {
      return files.map((file: FileType, index: number) => (
        <div 
          key={index} 
          className="flex items-center py-3 px-4 rounded-lg hover:bg-white/5 transition-colors group"
        >
          <ChevronRight className="h-5 w-5 mr-3 text-blue-400 group-hover:translate-x-1 transition-transform" />
          <a 
            href={`https://drive.google.com/file/d/${file.id}/view`} 
            target="_blank" 
            className="text-lg text-blue-400 hover:text-blue-300 transition-all group-hover:underline"
          >
            {file.name}
          </a>
        </div>
      ));
    }

    return (
      <div className="text-gray-400 text-sm italic px-4 py-3">
        Aucun fichier disponible pour ce type.
      </div>
    );
  };

  const renderSubModules = (module: any) => {
    if (module.subModules && module.subModules.length > 0) {
      return (
        <div className="mt-4">
          <h4 className="text-lg font-semibold text-white">Sous-modules :</h4>
          <ul className="text-gray-300 space-y-1 mt-2">
            {module.subModules.map((subModule: any, index: number) => (
              <li key={index} className="flex flex-col">
                <div className="flex items-center">
                  <ChevronRight className="h-4 w-4 mr-2 text-blue-400" />
                  {subModule.name}
                </div>

                {/* Afficher les fichiers PDF associés à ce sous-module */}
                {files.length > 0 && subModule.files?.length > 0 && (
                  <ul className="text-gray-300 mt-2 pl-6">
                    {subModule.files.map((subFile: any, subIndex: number) => (
                      <li key={subIndex} className="flex items-center py-1">
                        <ChevronRight className="h-4 w-4 mr-2 text-blue-400" />
                        <a 
                          href={`https://drive.google.com/file/d/${subFile.id}/view`} 
                          target="_blank" 
                          className="text-blue-400 hover:text-blue-300 transition-all group-hover:underline"
                        >
                          {subFile.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="min-h-screen bg-[#020817] text-white">
      <Header />
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-4 mb-8">
            <button
              onClick={() => navigate(-1)}
              className="flex items-center text-blue-400 hover:text-blue-300 transition-colors group"
            >
              <ArrowLeft className="h-5 w-5 mr-2 group-hover:-translate-x-1 transition-transform" />
              <span className="text-lg">Retour</span>
            </button>
          </div>

          <div className="text-center space-y-4">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
              Ressources Pédagogiques
            </h1>
            {moduleParam && (
              <h2 className="text-2xl text-white/80">
                Module {moduleParam}
              </h2>
            )}
          </div>

          <div className="space-y-8">
            <div className="flex flex-wrap gap-4 justify-center">
              <MaterialTypeButton type="cours" icon={Book} />
              <MaterialTypeButton type="td" icon={FileText} />
              <MaterialTypeButton type="ds" icon={TestTube} />
              <MaterialTypeButton type="extra" icon={FilePlus} />
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredModules.length > 0 ? (
              filteredModules.map((module) => (
                <div 
                  key={module.code} 
                  className="glass-card rounded-2xl p-6 transform transition-all duration-300 hover:scale-[1.02] hover:bg-white/15"
                >
                  <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-white to-white/80 text-transparent bg-clip-text">
                    {module.code} - {module.name}
                  </h3>
                  <div className="space-y-2">
                    {filterDetailsByType(module)}
                    {renderSubModules(module)} {/* Ajouter les sous-modules ici */}
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <div className="glass-card inline-block px-8 py-4 rounded-xl">
                  <p className="text-lg text-white/60">
                    Aucun module ne correspond à votre recherche
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
