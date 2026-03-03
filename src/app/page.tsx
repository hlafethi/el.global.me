import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import WhatsAppButton from '@/components/WhatsAppButton'
import ContactForm from '@/components/ContactForm'
import ServiceCard from '@/components/ServiceCard'
import TestimonialCard from '@/components/TestimonialCard'
import { siteConfig } from '@/config/siteConfig'
import { servicesMenu } from '@/config/servicesMenu'
import {
  FaBuilding,
  FaHome,
  FaBroom,
  FaTools,
  FaTruck,
  FaCheckCircle,
  FaClock,
  FaUserTie,
  FaShieldAlt,
  FaMapMarkedAlt,
  FaPercent,
  FaFileAlt,
  FaHandshake,
  FaUserCheck,
  FaStar,
} from 'react-icons/fa'

export const metadata: Metadata = {
  title: 'Entreprise de nettoyage à Lyon et son agglomération (69) - Professionnels & Particuliers',
  description:
    'E & L PROPRETE : entreprise de nettoyage à Lyon et son agglomération. Nettoyage de bureaux, copropriétés, ménage à domicile. Devis gratuit. Métropole de Lyon et Rhône.',
  openGraph: {
    title: 'E & L PROPRETE - Entreprise de nettoyage Lyon et agglomération',
    description:
      'Services de nettoyage professionnel pour bureaux, immeubles, particuliers à Lyon et son agglomération.',
  },
}

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white py-20 lg:py-32 overflow-hidden">
        <div className="container-custom relative">
          <div className="max-w-4xl">
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/20 text-primary-100 text-sm font-medium mb-6">
              Lyon et agglomération
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Entreprise de nettoyage à Lyon et son agglomération pour professionnels et
              particuliers
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-50 leading-relaxed">
              E & L PROPRETE vous accompagne dans l'entretien et le nettoyage de
              vos locaux professionnels et de votre domicile à Lyon et dans toute
              la métropole lyonnaise. Qualité, réactivité et propreté
              irréprochable garanties.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="btn-primary text-center inline-block"
              >
                Devis gratuit
              </Link>
              <WhatsAppButton
                text="Appeler sur WhatsApp"
                variant="secondary"
              />
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Crédit d'impôt 50 % - Particuliers (inspiré Servizen) */}
      <section className="py-16 bg-gradient-to-b from-primary-50/40 to-white border-b border-primary-100">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-3 py-1 rounded-full bg-accent-100 text-accent-800 text-sm font-semibold mb-4">
              50 % de crédit d'impôt
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Ne payez plus que 50 % de votre facture ménage à domicile
            </h2>
            <p className="text-xl text-gray-700 mb-8">
              E & L PROPRETE vous propose le paiement par <strong>chèques CESU</strong> pour vos prestations de ménage à domicile. Bénéficiez immédiatement de votre <strong>crédit d'impôt de 50 %</strong> sur vos factures de services à la personne.
            </p>
            <div className="bg-gradient-to-br from-primary-50 to-success-50 rounded-2xl p-8 mb-8 border-2 border-primary-200 shadow-lg shadow-primary-200/20">
              <div className="flex items-center justify-center gap-3 mb-4">
                <FaPercent className="text-4xl text-primary-600" />
                <span className="text-4xl font-bold text-primary-700">50 %</span>
              </div>
              <p className="text-gray-800 font-semibold mb-2">Comment ça fonctionne ?</p>
              <p className="text-gray-700 mb-4">
                Pour une prestation de <strong>200 €</strong> réalisée par E & L PROPRETE, vous ne payez que <strong>100 €</strong> après déduction du crédit d'impôt. Nous nous occupons des démarches et du suivi pour vous.
              </p>
              <Link
                href="/cheques-cesu"
                className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
              >
                En savoir plus sur les chèques CESU
              </Link>
            </div>
            <p className="text-gray-600 text-sm">
              Gain de temps, économies immédiates et simplicité : une gestion 100 % prise en charge pour vos prestations à domicile dans le Rhône.
            </p>
          </div>
        </div>
      </section>

      {/* À propos */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              <span className="text-primary-600">E & L PROPRETE</span>, votre partenaire propreté à Lyon et son agglomération
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Basée à Saint-Priest, <strong>E & L PROPRETE</strong> intervient sur{' '}
              <strong>Lyon et son agglomération</strong>. Nous sommes une
              entreprise de nettoyage spécialisée dans l'entretien courant des
              bâtiments (code NAF 8121Z), auprès des professionnels et des
              particuliers : nettoyage de bureaux, entretien de copropriétés,
              ménage à domicile, remise en état après travaux et débarras.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Notre zone d'intervention couvre la métropole de Lyon et ses
              environs : Lyon et ses arrondissements, Saint-Priest, Mions, Bron,
              Vénissieux, Chassieu, Meyzieu, Décines-Charpieu, Genas et le Rhône. Nous nous engageons à offrir un service de
              qualité, ponctuel et personnalisé, adapté aux besoins spécifiques
              de chaque client.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center">
                  <FaClock className="text-3xl text-primary-600" />
                </div>
              </div>
              <h3 className="font-bold text-lg mb-2">Réactivité</h3>
              <p className="text-gray-600">
                Intervention rapide sous 24 à 48 heures
              </p>
            </div>

            <div className="text-center p-6">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center">
                  <FaUserTie className="text-3xl text-primary-600" />
                </div>
              </div>
              <h3 className="font-bold text-lg mb-2">Interlocuteur unique</h3>
              <p className="text-gray-600">
                Un référent dédié pour vos besoins
              </p>
            </div>

            <div className="text-center p-6">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center">
                  <FaShieldAlt className="text-3xl text-primary-600" />
                </div>
              </div>
              <h3 className="font-bold text-lg mb-2">Professionnalisme</h3>
              <p className="text-gray-600">
                Personnel qualifié et matériel adapté
              </p>
            </div>

            <div className="text-center p-6">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center">
                  <FaCheckCircle className="text-3xl text-primary-600" />
                </div>
              </div>
              <h3 className="font-bold text-lg mb-2">Qualité garantie</h3>
              <p className="text-gray-600">
                Propreté irréprochable à chaque intervention
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Le fonctionnement E & L PROPRETE (inspiré Servizen) */}
      <section className="py-16 bg-primary-50">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Le fonctionnement E & L PROPRETE
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                <FaFileAlt className="text-2xl" />
              </div>
              <h3 className="font-bold text-lg text-gray-900 mb-2">Demande de devis</h3>
              <p className="text-gray-700 text-sm">Contactez-nous pour un devis gratuit et sans engagement. Par téléphone, formulaire ou WhatsApp.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                <FaHandshake className="text-2xl" />
              </div>
              <h3 className="font-bold text-lg text-gray-900 mb-2">Étude de vos besoins</h3>
              <p className="text-gray-700 text-sm">Nous définissons ensemble la fréquence, les prestations et les horaires adaptés à votre situation.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                <FaBroom className="text-2xl" />
              </div>
              <h3 className="font-bold text-lg text-gray-900 mb-2">Intervention</h3>
              <p className="text-gray-700 text-sm">Nos équipes interviennent à domicile ou dans vos locaux avec le matériel et les produits adaptés.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                <FaStar className="text-2xl" />
              </div>
              <h3 className="font-bold text-lg text-gray-900 mb-2">Suivi qualité</h3>
              <p className="text-gray-700 text-sm">Nous restons à votre écoute et assurons un suivi régulier pour garantir votre satisfaction.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Nos services principaux */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nos services de nettoyage à Lyon et son agglomération
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              E & L PROPRETE propose une gamme complète de prestations de
              nettoyage et d'entretien, adaptées aux besoins des professionnels
              et des particuliers dans le Rhône.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
            {servicesMenu.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className={`group relative rounded-xl bg-gradient-to-br ${service.heroGradient} p-5 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-white overflow-hidden flex flex-col items-center justify-center min-h-[7rem]`}
              >
                <span className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors duration-300" />
                <span className="relative block text-center">
                  <span className="font-bold text-sm leading-tight block mb-2">
                    {service.name}
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-white/95 group-hover:underline">
                    Voir plus
                    <span className="group-hover:translate-x-0.5 transition-transform">→</span>
                  </span>
                </span>
              </Link>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <ServiceCard
              icon={<FaBuilding />}
              title="Nettoyage de bureaux et locaux professionnels"
              description="Entretien quotidien, hebdomadaire ou mensuel de vos espaces de travail : bureaux, salles de réunion, open spaces, sanitaires. Intervention en dehors des horaires d'ouverture pour ne pas gêner votre activité."
            />

            <ServiceCard
              icon={<FaHome />}
              title="Nettoyage d'immeubles et copropriétés"
              description="Entretien régulier des parties communes : halls d'entrée, cages d'escalier, paliers, ascenseurs. Nous travaillons avec les syndics et gardiens pour assurer la propreté de vos résidences à Lyon et dans l'agglomération."
            />

            <ServiceCard
              icon={<FaBroom />}
              title="Ménage à domicile"
              description="Prestations de ménage chez les particuliers : entretien régulier, grand nettoyage, repassage. Possibilité de paiement par chèques CESU avec avantages fiscaux. Personnel de confiance, formé et discret."
            />

            <ServiceCard
              icon={<FaTools />}
              title="Nettoyage après travaux"
              description="Remise en état complète de vos locaux ou logements après rénovation, construction ou aménagement. Élimination des gravats, poussières, traces de peinture. Intervention rapide pour une livraison impeccable."
            />

            <ServiceCard
              icon={<FaTruck />}
              title="Débarras et remise en état"
              description="Service de débarras professionnel pour caves, greniers, garages, locaux commerciaux. Évacuation des encombrants, tri sélectif, nettoyage final. Intervention sur Lyon et son agglomération."
            />

            <ServiceCard
              icon={<FaMapMarkedAlt />}
              title="Nettoyage de commerces et locaux spécifiques"
              description="Entretien de boutiques, restaurants, cabinets médicaux, salles de sport. Respect des normes d'hygiène strictes. Adaptation aux contraintes spécifiques de chaque secteur d'activité."
            />
          </div>

          {/* Grille services rapides (inspiré Servizen) */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Nos services en détail
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              <Link
                href="/professionnels"
                className="bg-white rounded-lg p-4 shadow-sm border border-gray-200 hover:border-primary-400 hover:shadow-md transition-all text-center group"
              >
                <FaBuilding className="text-2xl text-primary-600 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                <span className="font-semibold text-gray-900 text-sm">Bureaux & locaux pro</span>
              </Link>
              <Link
                href="/particuliers"
                className="bg-white rounded-lg p-4 shadow-sm border border-gray-200 hover:border-primary-400 hover:shadow-md transition-all text-center group"
              >
                <FaHome className="text-2xl text-primary-600 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                <span className="font-semibold text-gray-900 text-sm">Ménage à domicile</span>
              </Link>
              <Link
                href="/cheques-cesu"
                className="bg-white rounded-lg p-4 shadow-sm border border-gray-200 hover:border-primary-400 hover:shadow-md transition-all text-center group"
              >
                <FaPercent className="text-2xl text-primary-600 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                <span className="font-semibold text-gray-900 text-sm">Chèques CESU</span>
              </Link>
              <Link
                href="/services/coproprietes"
                className="bg-white rounded-lg p-4 shadow-sm border border-gray-200 hover:border-primary-400 hover:shadow-md transition-all text-center group"
              >
                <FaBuilding className="text-2xl text-primary-600 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                <span className="font-semibold text-gray-900 text-sm">Copropriétés</span>
              </Link>
              <Link
                href="/services/apres-travaux"
                className="bg-white rounded-lg p-4 shadow-sm border border-gray-200 hover:border-primary-400 hover:shadow-md transition-all text-center group"
              >
                <FaTools className="text-2xl text-primary-600 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                <span className="font-semibold text-gray-900 text-sm">Après travaux</span>
              </Link>
              <Link
                href="/services/debarras"
                className="bg-white rounded-lg p-4 shadow-sm border border-gray-200 hover:border-primary-400 hover:shadow-md transition-all text-center group"
              >
                <FaTruck className="text-2xl text-primary-600 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                <span className="font-semibold text-gray-900 text-sm">Débarras</span>
              </Link>
            </div>
          </div>

          <div className="text-center">
            <p className="text-gray-700 mb-6">
              Vous avez un besoin spécifique ou souhaitez combiner plusieurs
              services ?
            </p>
            <Link href="#contact" className="btn-primary inline-block">
              Demander un devis personnalisé
            </Link>
          </div>
        </div>
      </section>

      {/* Nos atouts (inspiré Servizen - 3 piliers) */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Les atouts E & L PROPRETE
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gray-50 rounded-xl p-8 text-center border border-primary-100 hover:border-primary-300 transition-colors">
              <div className="w-14 h-14 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaMapMarkedAlt className="text-2xl text-primary-600" />
              </div>
              <h3 className="font-bold text-xl text-gray-900 mb-3">La proximité</h3>
              <p className="text-gray-700">
                E & L PROPRETE intervient sur Lyon et son agglomération. Proche de vous, nous sommes votre partenaire propreté du quotidien. Réactivité et connaissance du territoire garanties.
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-8 text-center border border-primary-100 hover:border-primary-300 transition-colors">
              <div className="w-14 h-14 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaCheckCircle className="text-2xl text-primary-600" />
              </div>
              <h3 className="font-bold text-xl text-gray-900 mb-3">La qualité</h3>
              <p className="text-gray-700">
                Nous garantissons des prestations de qualité : personnel formé, matériel professionnel et protocoles d'hygiène respectés. Un suivi régulier assure la satisfaction de nos clients professionnels et particuliers.
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-8 text-center border border-primary-100 hover:border-primary-300 transition-colors">
              <div className="w-14 h-14 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaUserTie className="text-2xl text-primary-600" />
              </div>
              <h3 className="font-bold text-xl text-gray-900 mb-3">L'humain</h3>
              <p className="text-gray-700">
                Un interlocuteur dédié, à l'écoute de vos besoins. Nous adaptons nos prestations à vos contraintes et restons disponibles pour toute question. Confiance et relation de proximité au cœur de notre métier.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pourquoi nous choisir */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Pourquoi choisir E & L PROPRETE ?
            </h2>

            <div className="space-y-6">
              <div className="flex items-start space-x-4 bg-gray-50 p-6 rounded-lg">
                <FaCheckCircle className="text-success-600 text-2xl flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-2">
                    Une société locale de confiance
                  </h3>
                  <p className="text-gray-700">
                    Présents sur Lyon et son agglomération, nous connaissons parfaitement les
                    besoins du territoire. Proximité, disponibilité et
                    réactivité sont nos maîtres-mots pour vous garantir un
                    service de qualité.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 bg-gray-50 p-6 rounded-lg">
                <FaCheckCircle className="text-success-600 text-2xl flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-2">
                    Flexibilité et adaptation
                  </h3>
                  <p className="text-gray-700">
                    Contrats réguliers ou interventions ponctuelles, horaires
                    flexibles (matin, soir, week-end), fréquence modulable :
                    nous nous adaptons à vos contraintes pour vous offrir le
                    service le plus pratique.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 bg-gray-50 p-6 rounded-lg">
                <FaCheckCircle className="text-success-600 text-2xl flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-2">
                    Respect des normes d'hygiène et de sécurité
                  </h3>
                  <p className="text-gray-700">
                    Nous utilisons des produits professionnels adaptés et
                    respectueux de l'environnement. Notre équipe est formée aux
                    protocoles d'hygiène et de sécurité, notamment pour les
                    secteurs sensibles (médical, alimentaire).
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 bg-gray-50 p-6 rounded-lg">
                <FaCheckCircle className="text-success-600 text-2xl flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-2">
                    Devis gratuit et tarifs transparents
                  </h3>
                  <p className="text-gray-700">
                    Nous vous proposons un devis détaillé et sans engagement
                    après une visite de vos locaux. Nos tarifs sont clairs,
                    compétitifs et sans frais cachés.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Zone d'intervention */}
      <section className="py-16 bg-primary-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Notre zone d'intervention : Lyon et son agglomération
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              E & L PROPRETE intervient sur <strong>Lyon et son agglomération</strong>,{' '}
              dans la <strong>métropole de Lyon</strong> et le Rhône. Nous couvrons
              les communes de l'agglomération lyonnaise pour tous vos besoins en
              nettoyage professionnel et ménage à domicile.
            </p>

            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="font-bold text-xl mb-4">Villes desservies</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-gray-700">
                {siteConfig.serviceArea.map((city) => (
                  <div key={city} className="flex items-center space-x-2">
                    <FaMapMarkedAlt className="text-primary-600" />
                    <span>{city}</span>
                  </div>
                ))}
              </div>
              <p className="text-gray-600 mt-6">
                Votre commune ne figure pas dans cette liste ?{' '}
                <a
                  href="#contact"
                  className="text-primary-600 hover:text-primary-700 font-semibold"
                >
                  Contactez-nous
                </a>{' '}
                pour vérifier la possibilité d'intervention.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section Région Lyonnaise enrichie */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          {/* Titre principal */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Votre entreprise de nettoyage au cœur de Lyon et son agglomération
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Nous intervenons sur Lyon et son agglomération et connaissons
              parfaitement le tissu économique et les spécificités de la
              métropole de Lyon et de ses communes.
            </p>
          </div>

          {/* Image principale + texte */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="relative h-96 rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="/region-lyonnaise.jpg"
                alt="Région lyonnaise - Zone d'intervention E & L PROPRETE"
                fill
                className="object-cover"
              />
              {/* TODO: Remplacer par une vraie photo de Lyon ou de l'agglomération lyonnaise */}
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                Une implantation au cœur de l'agglomération lyonnaise
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Notre siège est au <strong>13 chemin du Charbonnier à Saint-Priest</strong>.
                Nous desservons <strong>Lyon et son agglomération</strong> : la
                métropole de Lyon et ses communes (Saint-Priest, Bron, Vénissieux,
                Villeurbanne, Vaulx-en-Velin, Meyzieu, Décines-Charpieu, etc.).
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Cette implantation nous permet d'intervenir en moins de{' '}
                <strong>30 minutes</strong> dans la plupart des communes de la{' '}
                <strong>métropole de Lyon</strong>, ainsi que dans les
                arrondissements lyonnais et les communes environnantes.
              </p>
              <div className="bg-primary-50 border-l-4 border-primary-600 p-4 rounded">
                <p className="text-gray-800 font-semibold">
                  💡 Intervention rapide : nous pouvons être chez vous ou dans vos
                  locaux sous 24 à 48 heures maximum pour une urgence.
                </p>
              </div>
            </div>
          </div>

          {/* Lyon et son agglomération */}
          <div className="mb-20">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
              Lyon et son agglomération : un territoire en plein essor
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-gradient-to-br from-primary-50 to-white p-8 rounded-xl shadow-md border border-primary-100">
                <div className="text-4xl font-bold text-primary-600 mb-2">
                  150 000+
                </div>
                <p className="text-gray-700 font-semibold mb-2">
                  habitants dans notre zone principale
                </p>
                <p className="text-gray-600 text-sm">
                  Lyon et son agglomération représentent un bassin de
                  vie important
                </p>
              </div>

              <div className="bg-gradient-to-br from-success-50 to-white p-8 rounded-xl shadow-md border border-success-100">
                <div className="text-4xl font-bold text-success-600 mb-2">
                  2 000+
                </div>
                <p className="text-gray-700 font-semibold mb-2">
                  entreprises dans le secteur
                </p>
                <p className="text-gray-600 text-sm">
                  Zones d'activités de Chassieu, Meyzieu, Saint-Priest, Lyon : tissu
                  économique dense
                </p>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl shadow-md border border-blue-100">
                <div className="text-4xl font-bold text-blue-600 mb-2">
                  10 min
                </div>
                <p className="text-gray-700 font-semibold mb-2">
                  du centre de Lyon
                </p>
                <p className="text-gray-600 text-sm">
                  Proximité immédiate de Lyon via A43, tramway T2 et bus
                </p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-8">
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                L'<strong>agglomération lyonnaise</strong> connaît un développement
                économique soutenu depuis plusieurs années. Entre les{' '}
                <strong>zones d'activités de Chassieu</strong> (Montélier, Château
                Sec), le <strong>pôle multimodal de Meyzieu</strong>, le{' '}
                <strong>parc d'activités de Genas</strong> et les nombreux
                commerces et bureaux implantés à Lyon et dans l'agglomération, le besoin en{' '}
                <strong>services de nettoyage professionnel</strong> ne cesse de
                croître.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                E & L PROPRETE accompagne cette dynamique en proposant des
                prestations de haute qualité adaptées aux exigences des entreprises
                et des syndics de copropriétés de la région lyonnaise.
              </p>
            </div>
          </div>

          {/* Images services + descriptions */}
          <div className="space-y-16">
            {/* Bureaux */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="order-2 lg:order-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Nettoyage de bureaux dans la métropole de Lyon
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Les <strong>entreprises de la région lyonnaise</strong> nous font
                  confiance pour l'entretien quotidien de leurs espaces de travail.
                  Que vous soyez une TPE à Lyon, une PME dans une zone
                  d'activités de Chassieu ou un grand groupe implanté à Lyon, nous
                  adaptons nos prestations à la taille et aux contraintes de votre
                  structure.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <FaCheckCircle className="text-success-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">
                      Intervention en dehors des heures de bureau
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <FaCheckCircle className="text-success-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">
                      Nettoyage quotidien, hebdomadaire ou mensuel
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <FaCheckCircle className="text-success-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">
                      Contrats annuels flexibles pour entreprises du Grand Lyon
                    </span>
                  </li>
                </ul>
              </div>
              <div className="relative h-80 rounded-xl overflow-hidden shadow-xl order-1 lg:order-2">
                <Image
                  src="/bureau-propre.png"
                  alt="Nettoyage de bureaux Lyon et agglomération"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Copropriétés */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="relative h-80 rounded-xl overflow-hidden shadow-xl flex items-center justify-center bg-primary-50 p-8">
                <Image
                  src="/logo.png"
                  alt="Nettoyage de copropriétés région lyonnaise - E & L PROPRETE"
                  width={280}
                  height={120}
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Entretien de copropriétés à Lyon et son agglomération
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Les <strong>syndics de copropriétés</strong> de Lyon et de
                  l'agglomération (Saint-Priest, Bron, Vénissieux, Mions, etc.) nous
                  confient l'entretien régulier de leurs résidences. Nous
                  intervenons pour le nettoyage des parties communes, la vitrerie,
                  l'entretien des espaces extérieurs et le lavage des containers.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Nos équipes connaissent parfaitement les spécificités du parc
                  immobilier de la <strong>région lyonnaise</strong>, des
                  copropriétés de la métropole de Lyon, des secteurs Est aux
                  arrondissements lyonnais.
                </p>
              </div>
            </div>

            {/* Ménage à domicile */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="order-2 lg:order-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Ménage à domicile dans le Grand Lyon
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Les <strong>particuliers de la région lyonnaise</strong> font
                  appel à nos services pour l'entretien régulier de leur maison ou
                  appartement. Que vous habitiez à Lyon ou dans l'agglomération
                  (Saint-Priest, Mions, Bron, Vénissieux, etc.), nous nous
                  déplaçons chez vous.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Paiement par <strong>chèques CESU</strong> accepté, vous
                  permettant de bénéficier du <strong>crédit d'impôt de 50%</strong>{' '}
                  pour vos prestations de ménage à domicile dans le Rhône.
                </p>
                <Link
                  href="/particuliers"
                  className="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold"
                >
                  En savoir plus sur le ménage à domicile →
                </Link>
              </div>
              <div className="relative h-80 rounded-xl overflow-hidden shadow-xl order-1 lg:order-2">
                <Image
                  src="/menage-domicile.png"
                  alt="Ménage à domicile Lyon et agglomération"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* CTA Local */}
          <div className="mt-20 bg-gradient-to-br from-primary-600 to-primary-800 rounded-2xl p-12 text-white text-center">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Une entreprise locale au service de la région lyonnaise
            </h3>
            <p className="text-xl text-primary-50 mb-8 max-w-3xl mx-auto">
              Faites confiance à une entreprise qui intervient sur Lyon et son
              agglomération et connaît votre territoire. Devis gratuit et
              personnalisé en 24h.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#contact"
                className="bg-white text-primary-600 hover:bg-primary-50 font-semibold py-3 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Demander un devis
              </Link>
              <WhatsAppButton text="Appeler maintenant" variant="secondary" />
            </div>
          </div>

          {/* Notre équipe */}
          <div className="mt-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative h-96 rounded-xl overflow-hidden shadow-2xl">
                <Image
                  src="/equipe-nettoyage.png"
                  alt="Équipe E & L PROPRETE Lyon et agglomération"
                  fill
                  className="object-cover"
                />
              </div>

              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                  Une équipe locale et expérimentée
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Notre équipe intervient sur <strong>Lyon et son agglomération</strong>{' '}
                  et connaît parfaitement la métropole lyonnaise et ses
                  particularités. Nos intervenants sont tous formés aux techniques
                  de nettoyage professionnel et aux normes d'hygiène en vigueur.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Que vous soyez à Lyon, Saint-Priest, Bron, Vénissieux, Mions, Chassieu,
                  Meyzieu ou ailleurs dans l'agglomération, vous
                  bénéficiez du même niveau d'exigence et de la même réactivité.
                </p>
                <div className="bg-success-50 border border-success-200 rounded-lg p-6">
                  <h4 className="font-bold text-gray-900 mb-2">
                    Nos atouts en région lyonnaise :
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start space-x-2">
                      <span className="text-success-600 font-bold">✓</span>
                      <span>
                        Connaissance approfondie du tissu économique local
                      </span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-success-600 font-bold">✓</span>
                      <span>
                        Temps de déplacement optimisés sur toute l'agglomération lyonnaise
                      </span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-success-600 font-bold">✓</span>
                      <span>
                        Disponibilité et réactivité pour interventions urgentes
                      </span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-success-600 font-bold">✓</span>
                      <span>Partenariats avec entreprises et syndics locaux</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Avis clients */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ils nous font confiance
            </h2>
            <p className="text-lg text-gray-600">
              Découvrez les retours de nos clients satisfaits à Lyon et dans
              l'agglomération
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard
              name="Sophie Martin"
              role="Gérante d'un cabinet médical dans la métropole de Lyon"
              rating={5}
              text="E & L PROPRETE assure le nettoyage de notre cabinet depuis 6 mois. Le travail est impeccable et l'équipe très professionnelle. Les protocoles d'hygiène sont parfaitement respectés, ce qui est essentiel dans notre secteur."
            />

            <TestimonialCard
              name="Syndic Résidence Les Chênes"
              role="Copropriété à Mions"
              rating={5}
              text="Nous avons fait appel à E & L PROPRETE pour l'entretien de notre résidence de 45 logements. La réactivité et la qualité du service sont au rendez-vous. Les parties communes sont toujours impeccables."
            />

            <TestimonialCard
              name="Jean-Pierre Durand"
              role="Particulier à Lyon et agglomération"
              rating={5}
              text="J'utilise leurs services de ménage à domicile depuis 1 an avec paiement en CESU. Le personnel est ponctuel, soigneux et discret. Je recommande vivement cette entreprise locale."
            />
          </div>
        </div>
      </section>

      {/* Section Contact / Devis */}
      <section id="contact" className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Demandez votre devis gratuit
              </h2>
              <p className="text-lg text-gray-600">
                Vous êtes professionnel ou particulier à Lyon ou dans son agglomération ? Contactez-nous pour un devis personnalisé et sans
                engagement. Réponse rapide garantie.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <ContactForm />

              <div className="space-y-6">
                <div className="bg-white rounded-lg shadow-md p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Autres moyens de contact
                  </h3>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Téléphone
                      </h4>
                      <a
                        href={`tel:${siteConfig.contact.phone}`}
                        className="text-primary-600 hover:text-primary-700 text-lg font-semibold"
                      >
                        {siteConfig.contact.phoneDisplay}
                      </a>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        WhatsApp
                      </h4>
                      <WhatsAppButton
                        text="Appeler via WhatsApp"
                        variant="primary"
                        className="w-full"
                      />
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Email
                      </h4>
                      <a
                        href={`mailto:${siteConfig.contact.email}`}
                        className="text-primary-600 hover:text-primary-700"
                      >
                        {siteConfig.contact.email}
                      </a>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Adresse
                      </h4>
                      <p className="text-gray-700">
                        {siteConfig.address.fullAddress}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-primary-50 border-2 border-primary-200 rounded-lg p-6">
                  <h4 className="font-bold text-lg text-gray-900 mb-2">
                    Intervention rapide
                  </h4>
                  <p className="text-gray-700">
                    Besoin urgent ? Nous intervenons sous 24 à 48h pour toute
                    demande de nettoyage à Lyon et son agglomération.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bouton WhatsApp flottant */}
      <WhatsAppButton variant="floating" />
    </>
  )
}
