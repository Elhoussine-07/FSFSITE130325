import { Link } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { moduleData } from '../data/modules';

export function CoursEtTDs() {
  const { AP1: { S1, S2 } } = moduleData;

  return (
    <div className="min-h-screen bg-[#020817] text-white">
      <Header />

      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-4 mb-8">
            <Link to="/" className="text-blue-400 hover:text-blue-300 transition-colors">
              Accueil
            </Link>
            <Link to="/ap1" className="text-blue-400 hover:text-blue-300 transition-colors">
              AP1
            </Link>
            <span className="text-gray-300">Cours & TDs</span>
          </div>

          <h1 className="text-3xl font-bold text-center text-blue-300 mb-8">Cours et TDs</h1>

          {[S1, S2].map((semestre, index) => (
            <section key={index} className="mb-12">
              <h2 className="text-2xl font-semibold mb-6 text-center text-blue-400">Semestre {index + 1}</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {semestre.map(module => (
                  <div key={module.code} className="p-6 bg-black/30 rounded-lg border border-white/10">
                    <h3 className="text-xl font-bold mb-2 text-white">{module.code} - {module.name}</h3>
                    <ul className="space-y-2">
                      {module.details.map(detail => (
                        <li key={detail.name} className="flex items-center">
                          {detail.Link ? (
                            <a href={detail.Link} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">
                              {modules.name}
                            </a>
                          ) : (
                            <span>{detail.name}</span>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
