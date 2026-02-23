import Link from 'next/link'
import { siteConfig } from '@/config/siteConfig'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Informations entreprise */}
          <div>
            <h3 className="text-xl font-bold mb-4">{siteConfig.name}</h3>
            <p className="text-gray-400 mb-4">
              Votre partenaire de confiance pour tous vos besoins en nettoyage
              et entretien à Saint-Priest et dans le Rhône.
            </p>
            <div className="flex space-x-4">
              <a
                href={siteConfig.contact.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-success-400 hover:text-success-300 transition-colors"
                aria-label="Contacter via WhatsApp"
              >
                <FaWhatsapp size={24} />
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
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Nos Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Nettoyage de bureaux</li>
              <li>Nettoyage de copropriétés</li>
              <li>Ménage à domicile</li>
              <li>Nettoyage après travaux</li>
              <li>Débarras et remise en état</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <FaMapMarkerAlt className="text-primary-400 mt-1 flex-shrink-0" />
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
