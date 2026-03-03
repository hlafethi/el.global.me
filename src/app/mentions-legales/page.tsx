import type { Metadata } from 'next'
import Link from 'next/link'
import { siteConfig } from '@/config/siteConfig'

export const metadata: Metadata = {
  title: 'Mentions légales | E & L PROPRETE',
  description: 'Mentions légales et informations juridiques - E & L PROPRETE.',
}

export default function MentionsLegalesPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-gray-800 to-gray-900 text-white py-16">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">
            Mentions légales
          </h1>
          <p className="text-gray-300">
            Informations juridiques concernant le site {siteConfig.url}
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container-custom max-w-3xl">
          <div className="prose prose-gray max-w-none space-y-10">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Éditeur du site
              </h2>
              <p className="text-gray-700">
                <strong>{siteConfig.name}</strong>
                <br />
                Forme juridique : {siteConfig.businessInfo.legalForm}
                <br />
                {siteConfig.address.fullAddress}
                <br />
                SIRET : {siteConfig.businessInfo.siret || 'À compléter'}
                <br />
                Code NAF : {siteConfig.businessInfo.nafCode}
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Hébergement
              </h2>
              <p className="text-gray-700">
                Ce site est hébergé sur l&apos;infrastructure du client
                (déploiement propre). Pour toute question relative à
                l&apos;hébergement ou aux données collectées, contactez-nous à{' '}
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="text-primary-600 hover:text-primary-700 font-medium"
                >
                  {siteConfig.contact.email}
                </a>
                .
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Propriété intellectuelle
              </h2>
              <p className="text-gray-700">
                L&apos;ensemble du contenu de ce site (textes, images, logo,
                structure) est protégé par le droit d&apos;auteur et appartient à{' '}
                {siteConfig.name} ou à ses partenaires. Toute reproduction ou
                utilisation non autorisée peut constituer une contrefaçon.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Données personnelles
              </h2>
              <p className="text-gray-700">
                Les données collectées via le formulaire de contact sont
                utilisées uniquement pour répondre à vos demandes de devis ou
                d&apos;information. Elles ne sont pas cédées à des tiers. Vous
                disposez d&apos;un droit d&apos;accès, de rectification et
                d&apos;effacement de vos données en nous contactant à{' '}
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="text-primary-600 hover:text-primary-700 font-medium"
                >
                  {siteConfig.contact.email}
                </a>
                .
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Cookies
              </h2>
              <p className="text-gray-700">
                Ce site peut utiliser des cookies techniques nécessaires au
                bon fonctionnement des pages. Aucun cookie publicitaire ou de
                traçage tiers n&apos;est utilisé sans votre consentement.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Crédits
              </h2>
              <p className="text-gray-700">
                Site réalisé pour {siteConfig.name}, entreprise de nettoyage à
                Lyon et son agglomération.
              </p>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <Link
              href="/"
              className="text-primary-600 hover:text-primary-700 font-semibold"
            >
              ← Retour à l&apos;accueil
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
