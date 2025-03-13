import { Link } from "lucide-react";

export const moduleData = {
  AP1: {
    S1: [
      {
        code: 'M111',
        name: 'Analyse 1',
        details: [
          { name: 'Cours', Link: <Link to="/Cours_TDs">Cours</Link> },
          { name: 'TDs', Link: '#' }
        ],
        background: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&q=80'
      },
      {
        code: 'M112',
        name: 'Algèbre 1',
        details: [
          { name: 'Cours', Link: '#' },
          { name: 'TDs', Link: '#' }
        ],
        background: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80'
      },
      {
        code: 'M113',
        name: 'Physique 1',
        details: [
          { name: 'Électrostatique' },
          { name: 'Cours', Link: '#' },
          { name: 'TDs', Link: '#' },
          { name: 'Magnétostatique' },
          { name: 'Cours', Link: '#' },
          { name: 'TDs', Link: '#' }
        ],
        background: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80'
      },
      {
        code: 'M114',
        name: 'Mécanique 1',
        details: [
          { name: 'Mécanique du point matériel' },
          { name: 'Cours', Link: '#' },
          { name: 'TDs', Link: '#' }
        ],
        background: 'https://images.unsplash.com/photo-1537724326059-2ea20251b9c8?auto=format&fit=crop&q=80'
      },
      {
        code: 'M115',
        name: 'Informatique 1',
        details: [
          { name: 'Algorithmique et programmation' },
          { name: 'Cours', Link: '#' },
          { name: 'TDs', Link: '#' }
        ],
        background: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80'
      },
      {
        code: 'M116',
        name: 'Méthodologie de travail universitaire',
        details: [
          { name: 'Cours', Link: '#' },
          { name: 'TDs', Link: '#' }
        ],
        background: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80'
      },
      {
        code: 'M117',
        name: 'Langues Étrangères 1',
        details: [
          { name: 'Langue Anglaise' },
          { name: 'Cours', Link: '#' },
          { name: 'TDs', Link: '#' },
          { name: 'Langue Française' },
          { name: 'Cours', Link: '#' },
          { name: 'TDs', Link: '#' }
        ],
        background: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80'
      }
    ],
    S2: [
      {
        code: 'M121',
        name: 'Analyse 2',
        details: [],
        background: 'https://images.unsplash.com/photo-1596495577886-d920f1fb7238?auto=format&fit=crop&q=80'
      },
      {
        code: 'M122',
        name: 'Algèbre 2',
        details: [],
        background: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80'
      },
      {
        code: 'M123',
        name: 'Physique 2',
        details: ['Électrocinétique 1', 'Électrocinétique 2'],
        background: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80'
      },
      {
        code: 'M124',
        name: 'Informatique 2',
        details: ['Bases de données', 'Programmation web'],
        background: 'https://images.unsplash.com/photo-1517134191118-9d595e4c8c2b?auto=format&fit=crop&q=80'
      },
      {
        code: 'M125',
        name: 'Chimie Générale',
        details: ['Cinétique chimique et thermochimie', 'Structure de la matière'],
        background: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&q=80'
      },
      {
        code: 'M126',
        name: 'Culture digitale',
        details: [],
        background: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80'
      },
      {
        code: 'M127',
        name: 'Langues Étrangères 2',
        details: ['Langue Anglaise', 'Langue Française'],
        background: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80'
      }
    ]
  },
  // Continue for AP2 and other semesters...
};
