import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { moduleData } from '../data/modules';

export function CoursesAndTDs() {
  const { AP1, AP2 } = moduleData;

  const renderModuleDetails = (module) => (
    <div
      key={module.code}
      className="group relative overflow-hidden rounded-xl bg-black/30 backdrop-blur-sm border border-white/10 hover:border-blue-500/50 transition-all duration-300 p-6"
    >
      <h3 className="text-xl font-bold mb-4 text-white">{module.code} - {module.name}</h3>
      <ul className="space-y-2">
        {module.details.map((detail, index) => (
          <li key={index} className="flex items-center">
            <ChevronRight className="h-4 w-4 mr-2 text-blue-400" />
            {detail.Link ? (
              <a href={detail.Link} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">
                {detail.name}
              </a>
            ) : (
              detail.name
            )}
          </li>
        ))}
      </ul>
    </div>
  );

  const renderSemester = (semester, title) => (
    <section>
      <h2 className="text-2xl font-semibold mb-8 text-center text-blue-300">{title}</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {semester.map(renderModuleDetails)}
      </div>
    </section>
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
            <span className="text-gray-300">Cours et TDs</span>
          </div>

          <h1 className="year-title text-center text-3xl font-bold mb-12 text-white">
            Cours et Travaux Dirigés (TDs)
          </h1>

          <div className="space-y-16">
            {renderSemester(AP1.S1, 'Semestre 1 - AP1')}
            {renderSemester(AP1.S2, 'Semestre 2 - AP1')}
            {renderSemester(AP2.S3, 'Semestre 3 - AP2')}
            {renderSemester(AP2.S4, 'Semestre 4 - AP2')}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
