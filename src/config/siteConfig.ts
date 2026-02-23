// Configuration centralisée du site E & L PROPRETE
// TODO: Remplacer les valeurs placeholder par les vraies informations

export const siteConfig = {
  name: 'E & L PROPRETE',
  description: 'Entreprise de nettoyage professionnelle à Saint-Priest (69800). Services de propreté pour professionnels et particuliers dans le Rhône.',
  url: 'https://www.el-proprete.fr', // TODO: Remplacer par l'URL réelle
  
  contact: {
    // TODO: Remplacer par le vrai numéro de téléphone
    phone: '+33612345678', // Format international
    phoneDisplay: '06 12 34 56 78', // Format d'affichage
    
    // TODO: Remplacer par l'adresse email réelle
    email: 'contact@el-proprete.fr',
    
    // TODO: Remplacer par le vrai lien WhatsApp
    // Pour créer un lien d'appel WhatsApp : https://wa.me/<NUMERO_AVEC_INDICATIF>
    // Exemple : https://wa.me/33612345678
    whatsappLink: 'https://wa.me/33612345678',
    whatsappDisplay: '+33 6 12 34 56 78',
  },
  
  address: {
    street: '13 chemin du Charbonnier',
    city: 'Saint-Priest',
    postalCode: '69800',
    region: 'Auvergne-Rhône-Alpes',
    country: 'France',
    fullAddress: '13 chemin du Charbonnier, 69800 Saint-Priest',
  },
  
  geo: {
    latitude: 45.6947,
    longitude: 4.9437,
  },
  
  // TODO: Adapter les horaires réels
  openingHours: 'Mo-Fr 08:00-18:00, Sa 09:00-12:00',
  
  socialMedia: {
    // TODO: Ajouter les liens réels vers les réseaux sociaux si disponibles
    facebook: '',
    instagram: '',
    linkedin: '',
  },
  
  businessInfo: {
    siret: '', // TODO: Ajouter le SIRET
    nafCode: '8121Z',
    legalForm: 'SARL', // TODO: Vérifier la forme juridique
  },
  
  serviceArea: [
    'Saint-Priest',
    'Mions',
    'Bron',
    'Vénissieux',
    'Chassieu',
    'Lyon 8ème',
    'Lyon 7ème',
    'Meyzieu',
    'Décines-Charpieu',
    'Genas',
  ],
}

// Schema JSON-LD pour le SEO local
export const generateLocalBusinessSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': siteConfig.url,
  name: siteConfig.name,
  description: siteConfig.description,
  image: `${siteConfig.url}/logo.png`, // TODO: Ajouter le logo
  url: siteConfig.url,
  telephone: siteConfig.contact.phone,
  email: siteConfig.contact.email,
  address: {
    '@type': 'PostalAddress',
    streetAddress: siteConfig.address.street,
    addressLocality: siteConfig.address.city,
    postalCode: siteConfig.address.postalCode,
    addressRegion: siteConfig.address.region,
    addressCountry: siteConfig.address.country,
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: siteConfig.geo.latitude,
    longitude: siteConfig.geo.longitude,
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '08:00',
    closes: '18:00',
  },
  priceRange: '$$',
  areaServed: siteConfig.serviceArea.map(area => ({
    '@type': 'City',
    name: area,
  })),
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '47',
  },
})
