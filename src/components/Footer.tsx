import Link from 'next/link'
import { siteConfig } from '@/config/siteConfig'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Informations entreprise */}
          <div>
            <h3 className="text-xl font-bold mb-4">{siteConfig.name}</h3>
            <p className="text-gray-400 mb-4">
              Votre partenaire de confiance pour tous vos besoins en nettoyage
              et entretien à Lyon et son agglomération.
            </p>
            <div className="flex gap-3">
              <a
                href={siteConfig.contact.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-lg bg-success-600/20 text-success-400 hover:bg-success-500 hover:text-white transition-colors"
                aria-label="Contacter via WhatsApp"
              >
                <FaWhatsapp size={22} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Accueil
                </Link>
              </li>
              <li>
                <Link
                  href="/professionnels"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Professionnels
                </Link>
              </li>
              <li>
                <Link
                  href="/particuliers"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Particuliers
                </Link>
              </li>
              <li>
                <Link
                  href="/cheques-cesu"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Chèques CESU
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/mentions-legales"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Mentions légales
                </Link>
              </li>
              <li>
                <Link
                  href="/plan-du-site"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Plan du site
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Nos Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/services/bureaux" className="hover:text-primary-300 transition-colors">Nettoyage de bureaux</Link>
              </li>
              <li>
                <Link href="/services/coproprietes" className="hover:text-primary-300 transition-colors">Copropriétés</Link>
              </li>
              <li>
                <Link href="/services/menage-domicile" className="hover:text-primary-300 transition-colors">Ménage à domicile</Link>
              </li>
              <li>
                <Link href="/services/apres-travaux" className="hover:text-primary-300 transition-colors">Après travaux</Link>
              </li>
              <li>
                <Link href="/services/debarras" className="hover:text-primary-300 transition-colors">Débarras</Link>
              </li>
              <li>
                <Link href="/services/bricolage" className="hover:text-primary-300 transition-colors">Bricolage</Link>
              </li>
              <li>
                <Link href="/services/jardinage" className="hover:text-primary-300 transition-colors">Jardinage</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <FaMapMarkerAlt className="text-primary-400 mt-1 flex-shrink-0 text-lg" />
                <span className="text-gray-400">
                  {siteConfig.address.fullAddress}
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <FaPhone className="text-primary-400 flex-shrink-0" />
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {siteConfig.contact.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <FaEnvelope className="text-primary-400 flex-shrink-0" />
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {siteConfig.contact.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Zone d'intervention */}
        <div className="mt-8 pt-8 border-t border-gray-800">
          <h4 className="font-semibold mb-3">Zone d'intervention</h4>
          <p className="text-gray-400 text-sm">
            {siteConfig.serviceArea.join(' • ')}
          </p>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
          <p>
            © {currentYear} {siteConfig.name}. Tous droits réservés. | SIRET :{' '}
            {siteConfig.businessInfo.siret || 'À compléter'} | Code NAF :{' '}
            {siteConfig.businessInfo.nafCode}
          </p>
        </div>
      </div>
    </footer>
  )
}
