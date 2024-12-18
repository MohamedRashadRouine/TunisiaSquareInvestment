import React from 'react';
import AboutHero from '../components/about/AboutHero';

const About = () => {
  const contentSections = [
    {
      icon: '📖',
      title: 'Notre Histoire',
      description: 'Tunisia Square Investment est née de la vision d\'offrir des services d\'investissement immobilier de premier ordre en Tunisie. Depuis notre création, nous nous sommes engagés à fournir des solutions personnalisées à nos clients.'
    },
    {
      icon: '🎯',
      title: 'Notre Mission',
      description: 'Faciliter vos investissements immobiliers en toute sécurité, en vous fournissant des conseils avisés et un accompagnement personnalisé pour tous vos projets d\'investissement. Nous nous efforçons de comprendre vos besoins et vos objectifs pour vous offrir des solutions sur mesure.'
    },
    {
      icon: '👥',
      title: 'Notre Équipe',
      description: 'Une équipe de professionnels dévoués à votre service, avec une profonde connaissance du marché immobilier tunisien et une équipe d\'experts qualifiés. Nous sommes passionnés par ce que nous faisons et nous nous engageons à vous fournir le meilleur service possible.'
    },
    {
      icon: '🏆',
      title: 'Notre Excellence',
      description: 'Un service premium et des résultats garantis, grâce à notre engagement à maintenir les plus hauts standards de qualité et d\'éthique dans toutes nos activités. Nous nous efforçons d\'être les meilleurs dans notre domaine et de vous offrir une expérience d\'investissement exceptionnelle.'
    },
    {
      icon: '💡',
      title: 'Notre Expertise',
      description: 'Nous sommes là pour vous aider à naviguer dans le monde complexe de l\'immobilier.'
    },
    {
      icon: '🤝',
      title: 'Notre Engagement',
      description: 'Nous nous engageons à maintenir les plus hauts standards de qualité et d\'éthique dans toutes nos activités. La satisfaction de nos clients est notre priorité absolue.'
    }
  ];

  return (
    <div className="pt-20">
      <AboutHero />
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {contentSections.map((section, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl mb-4">{section.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{section.title}</h3>
              <p className="text-gray-600 leading-relaxed">{section.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;