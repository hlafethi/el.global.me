export interface ServiceMenuItem {
  name: string
  href: string
  shortDescription: string
  heroGradient: string
  heroImage: string
  imagePlaceholder: string
  accentColor: string
}

export const servicesMenu: ServiceMenuItem[] = [
  {
    name: 'Nettoyage de bureaux',
    href: '/services/bureaux',
    shortDescription: 'Entretien de vos espaces de travail à Lyon et agglomération',
    heroGradient: 'from-primary-600 via-primary-700 to-primary-800',
    heroImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80',
    imagePlaceholder: 'https://placehold.co/800x500/047857/ecfdf5?text=Nettoyage+bureaux&font=source-sans-pro',
    accentColor: 'primary',
  },
  {
    name: 'Copropriétés',
    href: '/services/coproprietes',
    shortDescription: 'Parties communes et résidences à Lyon et agglomération',
    heroGradient: 'from-success-600 via-success-700 to-success-800',
    heroImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&q=80',
    imagePlaceholder: 'https://placehold.co/800x500/15803d/dcfce7?text=Copropri%C3%A9t%C3%A9s&font=source-sans-pro',
    accentColor: 'success',
  },
  {
    name: 'Ménage à domicile',
    href: '/services/menage-domicile',
    shortDescription: 'Entretien chez les particuliers, CESU accepté',
    heroGradient: 'from-primary-500 via-primary-600 to-success-700',
    heroImage: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1600&q=80',
    imagePlaceholder: 'https://placehold.co/800x500/059669/d1fae5?text=M%C3%A9nage+%C3%A0+domicile&font=source-sans-pro',
    accentColor: 'primary',
  },
  {
    name: 'Après travaux',
    href: '/services/apres-travaux',
    shortDescription: 'Remise en état après rénovation ou chantier',
    heroGradient: 'from-amber-600 via-amber-700 to-orange-800',
    heroImage: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600&q=80',
    imagePlaceholder: 'https://placehold.co/800x500/b45309/fef3c7?text=Apr%C3%A8s+travaux&font=source-sans-pro',
    accentColor: 'accent',
  },
  {
    name: 'Débarras',
    href: '/services/debarras',
    shortDescription: 'Évacuation et remise en état (caves, greniers, locaux)',
    heroGradient: 'from-gray-700 via-gray-800 to-gray-900',
    heroImage: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=1600&q=80',
    imagePlaceholder: 'https://placehold.co/800x500/374151/f3f4f6?text=D%C3%A9barras&font=source-sans-pro',
    accentColor: 'gray',
  },
  {
    name: 'Bricolage',
    href: '/services/bricolage',
    shortDescription: 'Petits travaux et dépannage à domicile à Lyon et agglomération',
    heroGradient: 'from-blue-600 via-blue-700 to-blue-800',
    heroImage: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?w=1600&q=80',
    imagePlaceholder: 'https://placehold.co/800x500/2563eb/dbeafe?text=Bricolage&font=source-sans-pro',
    accentColor: 'blue',
  },
  {
    name: 'Jardinage',
    href: '/services/jardinage',
    shortDescription: 'Entretien des espaces verts et jardins à Lyon et agglomération',
    heroGradient: 'from-emerald-600 via-emerald-700 to-emerald-800',
    heroImage: 'https://images.unsplash.com/photo-1558904541-efa843a96f01?w=1600&q=80',
    imagePlaceholder: 'https://placehold.co/800x500/059669/d1fae5?text=Jardinage&font=source-sans-pro',
    accentColor: 'emerald',
  },
]
