import type { Metadata } from 'next'
import Link from 'next/link'
import ContactForm from '@/components/ContactForm'
import WhatsAppButton from '@/components/WhatsAppButton'
import { siteConfig } from '@/config/siteConfig'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa'

export const metadata: Metadata = {
  title: 'Contact & Devis gratuit | E & L PROPRETE',
  description:
    'Contactez E & L PROPRETE pour un devis gratuit. Téléphone, email, WhatsApp. Nettoyage à Lyon et son agglomération.',
}

export default function ContactPage() {
  return (
    <>
      <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white py-16">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Contactez-nous
            </h1>
            <p className="text-xl text-primary-100">
              Demandez votre devis gratuit ou posez-nous vos questions. Nous
              répondons rapidement aux demandes pour Lyon et son agglomération.
            </p>
          </div>
        </div>
      </section>

      <section id="contact" className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              <ContactForm
                formTitle="Demande de devis gratuit"
                submitButtonText="Envoyer ma demande"
              />

              <div className="space-y-6">
                <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-primary-500">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Nos coordonnées
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <FaPhone className="text-primary-600 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-gray-900">Téléphone</p>
                        <a
                          href={`tel:${siteConfig.contact.phone}`}
                          className="text-primary-600 hover:text-primary-700 font-semibold"
                        >
                          {siteConfig.contact.phoneDisplay}
                        </a>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <FaEnvelope className="text-primary-600 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-gray-900">Email</p>
                        <a
                          href={`mailto:${siteConfig.contact.email}`}
                          className="text-primary-600 hover:text-primary-700 break-all"
                        >
                          {siteConfig.contact.email}
                        </a>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <FaMapMarkerAlt className="text-primary-600 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-gray-900">Adresse</p>
                        <p className="text-gray-700">
                          {siteConfig.address.fullAddress}
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <FaClock className="text-primary-600 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-gray-900">Horaires</p>
                        <p className="text-gray-700">
                          {siteConfig.openingHours}
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="bg-primary-50 rounded-xl p-6 border border-primary-200">
                  <h4 className="font-bold text-gray-900 mb-2">
                    Réponse sous 24 à 48 h
                  </h4>
                  <p className="text-gray-700 text-sm">
                    Pour une demande urgente, privilégiez l&apos;appel ou
                    WhatsApp. Nous intervenons sur Lyon et son agglomération.
                  </p>
                  <WhatsAppButton
                    text="Contacter par WhatsApp"
                    variant="primary"
                    className="mt-4 w-full justify-center"
                  />
                </div>

                <Link
                  href="/"
                  className="inline-block text-primary-600 hover:text-primary-700 font-semibold"
                >
                  ← Retour à l&apos;accueil
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
