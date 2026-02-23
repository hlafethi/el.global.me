import type { Metadata } from 'next'
import Link from 'next/link'
import WhatsAppButton from '@/components/WhatsAppButton'
import ContactForm from '@/components/ContactForm'
import ServiceCard from '@/components/ServiceCard'
import {
  FaHome,
  FaBroom,
  FaCouch,
  FaTshirt,
  FaStar,
  FaCheckCircle,
  FaShieldAlt,
  FaCalendarAlt,
  FaCreditCard,
} from 'react-icons/fa'

export const metadata: Metadata = {
  title: 'Ménage à domicile à Saint-Priest (69) | E & L PROPRETE',
  description:
    'Service de ménage à domicile à Saint-Priest et Lyon Est. Personnel qualifié et discret. Paiement CESU accepté avec avantages fiscaux. Devis gratuit.',
  openGraph: {
    title: 'Ménage à domicile Saint-Priest - E & L PROPRETE',
    description:
      'Service de ménage régulier ou ponctuel pour particuliers. Paiement CESU accepté.',
  },
}

export default function ParticuliersPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-success-600 to-success-800 text-white py-20">
        <div className="container-custom">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Ménage à domicile à Saint-Priest et Lyon Est
            </h1>
            <p className="text-xl mb-8 text-success-50 leading-relaxed">
              E & L PROPRETE vous propose des prestations de ménage à domicile
              personnalisées pour vous libérer du temps et profiter d'un intérieur
              toujours impeccable. Personnel qualifié, discret et de confiance.
              Paiement par chèques CESU accepté.
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
              Un service de ménage à domicile de confiance
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Basée à Saint-Priest dans le Rhône, <strong>E & L PROPRETE</strong>{' '}
              accompagne les particuliers dans l'entretien de leur domicile. Que
              vous ayez besoin d'un{' '}
              <strong>ménage régulier hebdomadaire</strong>, d'un{' '}
              <strong>grand nettoyage de printemps</strong> ou d'un{' '}
              <strong>nettoyage avant ou après déménagement</strong>, notre équipe
              s'adapte à vos besoins et à votre rythme de vie.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Nous intervenons sur <strong>Saint-Priest</strong> et dans tout le{' '}
              <strong>Lyon Est</strong> : Mions, Bron, Vénissieux, Chassieu,
              Meyzieu, Décines-Charpieu, Genas, Lyon 7ème et 8ème. Notre personnel
              est formé, expérimenté et respectueux de votre intimité. Vous pouvez
              nous faire confiance pour l'entretien de votre maison ou appartement.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Nous acceptons les <strong>chèques CESU</strong> (Chèque Emploi
              Service Universel) comme moyen de paiement, vous permettant de
              bénéficier d'avantages fiscaux intéressants sur vos prestations de
              ménage à domicile.{' '}
              <Link
                href="/cheques-cesu"
                className="text-primary-600 hover:text-primary-700 font-semibold underline"
              >
                En savoir plus sur les CESU
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* Services pour particuliers */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nos prestations de ménage à domicile
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Des solutions flexibles et personnalisées pour l'entretien de votre
              intérieur à Saint-Priest et dans le Rhône.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              icon={<FaBroom />}
              title="Ménage régulier à domicile"
              description="Entretien hebdomadaire ou bi-mensuel de votre logement : dépoussiérage, aspiration, lavage des sols, nettoyage des sanitaires, cuisine. Intervention à jour et heure fixes pour votre confort."
            />

            <ServiceCard
              icon={<FaHome />}
              title="Grand nettoyage de printemps"
              description="Nettoyage en profondeur de votre maison ou appartement : intérieur des placards, vitres, radiateurs, plinthes, appareils électroménagers. Remise à neuf complète pour un intérieur éclatant."
            />

            <ServiceCard
              icon={<FaCouch />}
              title="Nettoyage avant / après déménagement"
              description="Remise en état de votre ancien ou nouveau logement : nettoyage complet de toutes les pièces, sols, murs, sanitaires, cuisine. Idéal pour récupérer votre caution ou emménager dans un lieu impeccable."
            />

            <ServiceCard
              icon={<FaTshirt />}
              title="Repassage à domicile"
              description="Prestation de repassage de votre linge : vêtements, draps, torchons. Service complémentaire au ménage ou prestation isolée selon vos besoins."
            />

            <ServiceCard
              icon={<FaStar />}
              title="Nettoyage ponctuel après événement"
              description="Remise en ordre après une fête, réception, événement familial. Nettoyage rapide et efficace pour retrouver un intérieur propre sans effort."
            />

            <ServiceCard
              icon={<FaShieldAlt />}
              title="Entretien de résidences secondaires"
              description="Ouverture, aération, dépoussiérage et entretien régulier de votre résidence secondaire pendant votre absence. Tranquillité d'esprit garantie."
            />
          </div>
        </div>
      </section>

      {/* Avantages du service */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Pourquoi choisir E & L PROPRETE pour votre ménage ?
            </h2>

            <div className="space-y-6">
              <div className="flex items-start space-x-4 bg-gray-50 p-6 rounded-lg">
                <FaShieldAlt className="text-success-600 text-2xl flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-2">
                    Personnel de confiance et discret
                  </h3>
                  <p className="text-gray-700">
                    Nos intervenants sont soigneusement sélectionnés, formés et
                    expérimentés. Ils respectent votre intimité et vos biens
                    personnels. Vous pouvez leur confier les clés de votre domicile
                    en toute sérénité.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 bg-gray-50 p-6 rounded-lg">
                <FaCalendarAlt className="text-success-600 text-2xl flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-2">
                    Flexibilité et ponctualité
                  </h3>
                  <p className="text-gray-700">
                    Nous nous adaptons à votre emploi du temps : intervention en
                    semaine, le week-end, en votre présence ou en votre absence.
                    Ponctualité et régularité garanties pour que vous puissiez vous
                    organiser sereinement.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 bg-gray-50 p-6 rounded-lg">
                <FaCreditCard className="text-success-600 text-2xl flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-2">
                    Paiement CESU accepté avec avantages fiscaux
                  </h3>
                  <p className="text-gray-700">
                    Nous acceptons les chèques CESU (préfinancés ou déclaratifs)
                    pour le paiement de nos prestations de ménage à domicile. Vous
                    pouvez bénéficier d'un crédit d'impôt de 50% sur les sommes
                    engagées, dans la limite des plafonds en vigueur.{' '}
                    <Link
                      href="/cheques-cesu"
                      className="text-primary-600 hover:text-primary-700 font-semibold underline"
                    >
                      Plus d'infos sur les CESU
                    </Link>
                    .
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 bg-gray-50 p-6 rounded-lg">
                <FaCheckCircle className="text-success-600 text-2xl flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-2">
                    Matériel et produits fournis
                  </h3>
                  <p className="text-gray-700">
                    Nous apportons notre propre matériel de nettoyage et nos
                    produits d'entretien (possibilité d'utiliser vos produits
                    personnels si vous le souhaitez). Vous n'avez rien à prévoir.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 bg-gray-50 p-6 rounded-lg">
                <FaCheckCircle className="text-success-600 text-2xl flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-2">
                    Satisfaction garantie
                  </h3>
                  <p className="text-gray-700">
                    Votre satisfaction est notre priorité. En cas de remarque ou
                    d'insatisfaction, nous nous engageons à intervenir rapidement
                    pour corriger le problème. Un interlocuteur reste à votre
                    écoute.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comment ça marche */}
      <section className="py-16 bg-primary-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              Comment se déroule le service de ménage ?
            </h2>

            <div className="space-y-8">
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-12 h-12 bg-success-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Premier contact
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Vous nous contactez par téléphone, WhatsApp ou formulaire en
                    ligne. Nous échangeons sur vos besoins : type de logement
                    (maison, appartement), nombre de pièces, fréquence souhaitée,
                    prestations spécifiques (repassage, vitres...).
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-12 h-12 bg-success-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Visite et devis gratuit
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Nous pouvons nous déplacer à votre domicile à Saint-Priest ou
                    dans le Lyon Est pour une visite gratuite et sans engagement.
                    Cela nous permet d'évaluer précisément vos besoins et de vous
                    proposer un devis personnalisé.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-12 h-12 bg-success-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Planification des interventions
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Une fois le devis accepté, nous fixons ensemble les jours et
                    horaires d'intervention qui vous conviennent le mieux. Vous
                    choisissez la fréquence : hebdomadaire, tous les 15 jours, ou
                    ponctuelle.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-12 h-12 bg-success-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Interventions régulières
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Notre intervenant(e) se rend à votre domicile aux jours et
                    heures convenus. Il/elle réalise les prestations prévues avec
                    soin et efficacité. Vous pouvez être présent(e) ou nous confier
                    vos clés.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-12 h-12 bg-success-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                  5
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Paiement et avantages fiscaux
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Vous réglez nos prestations par chèque, virement ou chèques
                    CESU. Si vous utilisez le CESU, vous bénéficiez d'un crédit
                    d'impôt de 50% l'année suivante. Nous vous fournissons toutes
                    les attestations nécessaires.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ courte */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Questions fréquentes
            </h2>

            <div className="space-y-6">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-2">
                  Dois-je être présent(e) lors du ménage ?
                </h3>
                <p className="text-gray-700">
                  Non, ce n'est pas obligatoire. Beaucoup de nos clients nous
                  confient leurs clés pour que nous intervenions en leur absence.
                  Nous sommes assurés et nos intervenants sont de confiance.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-2">
                  Dois-je fournir le matériel de ménage ?
                </h3>
                <p className="text-gray-700">
                  Non, nous apportons notre propre matériel et nos produits
                  d'entretien. Si vous préférez que nous utilisions vos produits
                  personnels (produits écologiques, par exemple), c'est tout à fait
                  possible.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-2">
                  Puis-je modifier la fréquence ou annuler une intervention ?
                </h3>
                <p className="text-gray-700">
                  Oui, nous sommes flexibles. Vous pouvez modifier la fréquence,
                  décaler ou annuler une intervention en nous prévenant à l'avance.
                  Nous nous adaptons à vos imprévus.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-2">
                  Combien coûte le ménage à domicile ?
                </h3>
                <p className="text-gray-700">
                  Le tarif dépend de plusieurs critères : surface de votre logement,
                  nombre de pièces, fréquence d'intervention, prestations demandées.
                  Nous vous proposons un devis gratuit et personnalisé après une
                  visite ou un échange détaillé.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-2">
                  Comment utiliser mes chèques CESU ?
                </h3>
                <p className="text-gray-700">
                  Si vous disposez de chèques CESU (fournis par votre employeur ou
                  comité d'entreprise), vous pouvez les utiliser pour régler nos
                  prestations.{' '}
                  <Link
                    href="/cheques-cesu"
                    className="text-primary-600 hover:text-primary-700 font-semibold underline"
                  >
                    Consultez notre page dédiée aux CESU
                  </Link>{' '}
                  pour plus de détails.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section id="contact" className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Demandez votre devis gratuit pour le ménage à domicile
              </h2>
              <p className="text-lg text-gray-600">
                Vous habitez Saint-Priest, Mions, Bron, Vénissieux ou le Lyon Est
                ? Contactez-nous pour un devis personnalisé et sans engagement.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <ContactForm
                formTitle="Demande de devis ménage à domicile"
                submitButtonText="Envoyer ma demande"
              />

              <div className="space-y-6">
                <div className="bg-white rounded-lg shadow-md p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Contactez-nous rapidement
                  </h3>
                  <p className="text-gray-700 mb-6">
                    Besoin d'un ménage en urgence ou d'un renseignement ?
                    Appelez-nous ou contactez-nous via WhatsApp.
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

                <div className="bg-success-50 border-2 border-success-200 rounded-lg p-6">
                  <h4 className="font-bold text-lg text-gray-900 mb-2">
                    Paiement CESU accepté
                  </h4>
                  <p className="text-gray-700">
                    Utilisez vos chèques CESU et bénéficiez de 50% de crédit
                    d'impôt sur vos prestations de ménage à domicile.{' '}
                    <Link
                      href="/cheques-cesu"
                      className="text-primary-600 hover:text-primary-700 font-semibold underline"
                    >
                      En savoir plus
                    </Link>
                    .
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
