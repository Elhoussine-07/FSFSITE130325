import React from 'react';
import { ChevronRight, Book, FileText, TestTube } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { moduleData } from '../data/modules';

export function AP1() {
  const { AP1: { S1, S2 } } = moduleData;
  const navigate = useNavigate();

  const handleMaterialClick = (moduleCode: string, type: 'cours' | 'td' | 'ds') => {
    navigate(`/course-materials?module=${moduleCode}&type=${type}`);
  };

  return (
    <div className="min-h-screen bg-[#020817] text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8">Modules de la Première Année (AP1)</h1>

        {/* Semestre 1 */}
        <h2 className="text-2xl font-semibold text-blue-400 mb-4">Semestre 1</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {S1.map(module => (
            <div key={module.code} className="relative p-6 rounded-xl bg-black/40">
              <h3 className="text-xl font-bold text-white">{module.code} - {module.name}</h3>
              <div className="flex gap-2 mt-4">
                <button onClick={() => handleMaterialClick(module.code, 'cours')} className="flex items-center px-3 py-1.5 rounded-lg bg-blue-500/10 text-blue-400">
                  <Book className="h-4 w-4 mr-2" /> Cours
                </button>
                <button onClick={() => handleMaterialClick(module.code, 'td')} className="flex items-center px-3 py-1.5 rounded-lg bg-green-500/10 text-green-400">
                  <FileText className="h-4 w-4 mr-2" /> TDs
                </button>
                <button onClick={() => handleMaterialClick(module.code, 'ds')} className="flex items-center px-3 py-1.5 rounded-lg bg-red-500/10 text-red-400">
                  <TestTube className="h-4 w-4 mr-2" /> DS
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Semestre 2 */}
        <h2 className="text-2xl font-semibold text-blue-400 mb-4">Semestre 2</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {S2.map(module => (
            <div key={module.code} className="relative p-6 rounded-xl bg-black/40">
              <h3 className="text-xl font-bold text-white">{module.code} - {module.name}</h3>
              <div className="flex gap-2 mt-4">
                <button onClick={() => handleMaterialClick(module.code, 'cours')} className="flex items-center px-3 py-1.5 rounded-lg bg-blue-500/10 text-blue-400">
                  <Book className="h-4 w-4 mr-2" /> Cours
                </button>
                <button onClick={() => handleMaterialClick(module.code, 'td')} className="flex items-center px-3 py-1.5 rounded-lg bg-green-500/10 text-green-400">
                  <FileText className="h-4 w-4 mr-2" /> TDs
                </button>
                <button onClick={() => handleMaterialClick(module.code, 'ds')} className="flex items-center px-3 py-1.5 rounded-lg bg-red-500/10 text-red-400">
                  <TestTube className="h-4 w-4 mr-2" /> DS
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
