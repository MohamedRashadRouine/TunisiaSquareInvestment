import React from 'react';
import ContactHero from '../components/contact/ContactHero';

const Contact = () => {
  return (
    <div className="pt-20">
      <ContactHero />
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Nos Coordonnées</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Adresse</h3>
                  <a 
                    href="https://maps.app.goo.gl/4stENezyU5nv82L49" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-amber-600 transition-colors"
                  >
                    Bureau n°6, Centre Farah,<br />
                    Nouvelle Ariana, Ariana, Tunisia
                  </a>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Téléphone</h3>
                  <a 
                    href="tel:+21697800000" 
                    className="text-gray-600 hover:text-amber-600 transition-colors"
                  >
                    +216 97 800 000
                  </a>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Email</h3>
                  <a 
                    href="mailto:Ahmedharoun44@gmail.com" 
                    className="text-gray-600 hover:text-amber-600 transition-colors"
                  >
                    Ahmedharoun44@gmail.com
                  </a>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Heures d'ouverture</h3>
                  <p className="text-gray-600">
                    Lundi - Vendredi: 9h00 - 18h00<br />
                    Samedi: 9h00 - 13h00
                  </p>
                </div>
              </div>
            </div>

            {/* Google Map */}
            <div className="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345092764!2d144.9537353153168!3d-37.8162799797518!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11f0c1%3A0x5045675218ceed30!2sYour%20Office%20Name!5e0!3m2!1sen!2sus!4v1614697287215!5m2!1sen!2sus"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;