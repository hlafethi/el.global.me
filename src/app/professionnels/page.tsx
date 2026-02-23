import type { Metadata } from 'next'
import Link from 'next/link'
import WhatsAppButton from '@/components/WhatsAppButton'
import ContactForm from '@/components/ContactForm'
import ServiceCard from '@/components/ServiceCard'
import {
  FaBuilding,
  FaStore,
  FaIndustry,
  FaHospital,
  FaWarehouse,
  FaCheckCircle,
  FaClipboardList,
  FaHandshake,
  FaTools,
} from 'react-icons/fa'

export const metadata: Metadata = {
  title: 'Nettoyage professionnel pour entreprises à Saint-Priest | E & L PROPRETE',
  description:
    'Services de nettoyage pour professionnels à Saint-Priest : bureaux, commerces, copropriétés, locaux industriels. Contrats réguliers et interventions ponctuelles. Devis gratuit.',
  openGraph: {
    title: 'Nettoyage professionnel entreprises - E & L PROPRETE Saint-Priest',
    description:
      'Entretien de bureaux, commerces, copropriétés dans le Rhône. Qualité et ponctualité garanties.',
  },
}

export default function ProfessionalsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-700 to-primary-900 text-white py-20">
        <div className="container-custom">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Entreprise de nettoyage pour professionnels à Saint-Priest et Lyon
              Est
            </h1>
            <p className="text-xl mb-8 text-primary-50 leading-relaxed">
              E & L PROPRETE accompagne les entreprises, syndics, commerces et
              professionnels de santé dans l'entretien quotidien de leurs locaux.
              Solutions sur-mesure, contrats flexibles et qualité irréprochable.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="#contact" className="btn-primary text-center">
                Demander un devis
              </Link>
              <WhatsAppButton
                text="Appeler sur WhatsApp"
                variant="secondary"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
              Votre partenaire nettoyage professionnel dans le Rhône
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Située à Saint-Priest, <strong>E & L PROPRETE</strong> est
              spécialisée dans le <strong>nettoyage professionnel</strong> pour
              les entreprises, syndics de copropriétés, commerces et
              établissements de santé. Nous intervenons dans tout le secteur du
              Lyon Est (Saint-Priest, Bron, Vénissieux, Mions, Chassieu, Meyzieu,
              Lyon 7ème et 8ème).
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Que vous ayez besoin d'un <strong>entretien régulier</strong> de vos
              bureaux, du <strong>nettoyage de parties communes</strong> dans une
              copropriété ou d'une <strong>remise en état après travaux</strong>,
              notre équipe qualifiée s'adapte à vos contraintes : horaires,
              fréquence d'intervention, protocoles spécifiques.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Nous proposons des contrats annuels ou des interventions ponctuelles,
              avec un interlocuteur unique dédié à votre suivi. Notre objectif :
              vous garantir un environnement de travail propre, sain et accueillant
              pour vos collaborateurs et clients.
            </p>
          </div>
        </div>
      </section>

      {/* Services pour professionnels */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nos prestations de nettoyage professionnel
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Des solutions complètes et personnalisées pour tous types de locaux
              professionnels à Saint-Priest et dans le Rhône.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              icon={<FaBuilding />}
              title="Nettoyage de bureaux et espaces de travail"
              description="Entretien quotidien ou hebdomadaire de vos bureaux, open spaces, salles de réunion, cuisines d'entreprise et sanitaires. Dépoussiérage, aspiration, désinfection des surfaces. Intervention en dehors des heures de travail pour ne pas perturber votre activité."
            />

            <ServiceCard
              icon={<FaStore />}
              title="Nettoyage de commerces et boutiques"
              description="Entretien régulier de magasins, boutiques, restaurants, boulangeries, salons de coiffure. Nettoyage des vitrines, sols, rayonnages, arrière-boutiques. Respect des normes d'hygiène strictes pour le secteur alimentaire et les ERP."
            />

            <ServiceCard
              icon={<FaBuilding />}
              title="Entretien de copropriétés et immeubles"
              description="Nettoyage des parties communes pour les syndics et gestionnaires immobiliers : halls d'entrée, escaliers, paliers, ascenseurs, locaux poubelles. Fréquence adaptable (quotidienne, bi-hebdomadaire, hebdomadaire). Présence sur Saint-Priest, Mions, Bron."
            />

            <ServiceCard
              icon={<FaIndustry />}
              title="Nettoyage industriel léger et ateliers"
              description="Entretien d'ateliers, entrepôts, zones de production. Nettoyage des sols industriels, dégraissage, évacuation des déchets. Intervention adaptée aux contraintes de sécurité et aux horaires de production."
            />

            <ServiceCard
              icon={<FaHospital />}
              title="Nettoyage de cabinets médicaux et paramédicaux"
              description="Prestations spécialisées pour cabinets médicaux, dentaires, kinésithérapeutes, laboratoires. Protocoles d'hygiène renforcés, désinfection des surfaces de contact, respect des normes sanitaires en vigueur."
            />

            <ServiceCard
              icon={<FaWarehouse />}
              title="Nettoyage après travaux et chantiers"
              description="Remise en état complète de locaux neufs ou rénovés : élimination des gravats, poussières de plâtre, traces de peinture, nettoyage des vitres. Livraison rapide pour respecter vos délais de chantier ou d'emménagement."
            />
          </div>
        </div>
      </section>

      {/* Notre processus d'intervention */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              Comment se déroule notre intervention ?
            </h2>

            <div className="space-y-8">
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Prise de contact et étude de vos besoins
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Vous nous contactez par téléphone, email ou via notre
                    formulaire. Nous échangeons sur vos attentes : type de locaux,
                    surface, fréquence d'intervention, horaires souhaités,
                    prestations spécifiques.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Visite de vos locaux (gratuite et sans engagement)
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Nous nous déplaçons sur site à Saint-Priest ou dans le Lyon
                    Est pour effectuer un état des lieux précis. Cette visite nous
                    permet d'évaluer la nature des prestations, les contraintes
                    d'accès, le matériel nécessaire et d'échanger directement avec
                    vous.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Devis personnalisé et détaillé
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Suite à la visite, nous vous transmettons un devis clair et
                    transparent, détaillant chaque poste : prestations, fréquence,
                    tarif horaire ou forfaitaire. Aucun frais caché. Vous êtes
                    libre d'accepter ou de négocier certains points.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Mise en place des prestations
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Une fois le devis validé, nous organisons le planning
                    d'intervention. Un référent unique vous est attribué pour
                    assurer le suivi et répondre à vos demandes. Nos équipes
                    interviennent aux horaires convenus, avec le matériel et les
                    produits adaptés.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                  5
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Suivi qualité et ajustements
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Nous assurons un suivi régulier de la qualité de nos
                    prestations. En cas de remarque ou de besoin d'ajustement,
                    votre interlocuteur reste disponible pour adapter le service.
                    Votre satisfaction est notre priorité.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Avantages pour les professionnels */}
      <section className="py-16 bg-primary-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Pourquoi les professionnels nous font confiance ?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-start space-x-4">
                  <FaCheckCircle className="text-success-600 text-2xl flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg mb-2">
                      Contrats flexibles
                    </h3>
                    <p className="text-gray-700">
                      Contrats annuels, semestriels ou interventions ponctuelles.
                      Fréquence modulable selon vos besoins et votre budget.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-start space-x-4">
                  <FaClipboardList className="text-success-600 text-2xl flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg mb-2">
                      Protocoles personnalisés
                    </h3>
                    <p className="text-gray-700">
                      Adaptation aux normes de votre secteur (santé, alimentaire,
                      industrie). Respect des consignes de sécurité et d'accès.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-start space-x-4">
                  <FaHandshake className="text-success-600 text-2xl flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg mb-2">
                      Interlocuteur dédié
                    </h3>
                    <p className="text-gray-700">
                      Un référent unique pour votre compte : suivi, gestion des
                      demandes, remontée d'informations. Disponibilité et écoute.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-start space-x-4">
                  <FaTools className="text-success-600 text-2xl flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg mb-2">
                      Matériel professionnel
                    </h3>
                    <p className="text-gray-700">
                      Équipements performants et produits adaptés fournis par nos
                      soins. Vous n'avez rien à prévoir.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section id="contact" className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Obtenez votre devis gratuit pour le nettoyage de vos locaux
              </h2>
              <p className="text-lg text-gray-600">
                Vous êtes une entreprise, un syndic, un commerce ou un
                professionnel de santé à Saint-Priest ou dans le Lyon Est ?
                Contactez-nous dès maintenant pour un devis sur-mesure.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <ContactForm
                formTitle="Demande de devis professionnels"
                submitButtonText="Envoyer ma demande"
              />

              <div className="space-y-6">
                <div className="bg-gray-50 rounded-lg p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Contactez-nous rapidement
                  </h3>
                  <p className="text-gray-700 mb-6">
                    Besoin d'un devis urgent ? Appelez-nous directement ou
                    contactez-nous via WhatsApp pour une réponse rapide.
                  </p>
                  <div className="space-y-4">
                    <WhatsAppButton
                      text="Appeler via WhatsApp"
                      variant="primary"
                      className="w-full"
                    />
                    <Link
                      href="/"
                      className="btn-outline w-full text-center block"
                    >
                      Retour à l'accueil
                    </Link>
                  </div>
                </div>

                <div className="bg-primary-50 border-2 border-primary-200 rounded-lg p-6">
                  <h4 className="font-bold text-lg text-gray-900 mb-2">
                    Interventions d'urgence
                  </h4>
                  <p className="text-gray-700">
                    Besoin d'un nettoyage en urgence (après sinistre, avant
                    événement, livraison de chantier) ? Nous intervenons sous 24 à
                    48h à Saint-Priest et Lyon Est.
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
