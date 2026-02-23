import type { Metadata } from 'next'
import Link from 'next/link'
import WhatsAppButton from '@/components/WhatsAppButton'
import {
  FaCheckCircle,
  FaCreditCard,
  FaPercent,
  FaShieldAlt,
  FaListOl,
  FaQuestionCircle,
} from 'react-icons/fa'

export const metadata: Metadata = {
  title: 'Chèques CESU pour le ménage à domicile | E & L PROPRETE Saint-Priest',
  description:
    'Comment utiliser vos chèques CESU pour payer vos prestations de ménage à domicile ? Explications détaillées, avantages fiscaux, mode d\'emploi. E & L PROPRETE accepte les CESU à Saint-Priest.',
  openGraph: {
    title: 'Paiement CESU accepté - E & L PROPRETE',
    description:
      'Utilisez vos chèques CESU pour le ménage à domicile et bénéficiez de 50% de crédit d\'impôt.',
  },
}

export default function ChequesCesuPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
        <div className="container-custom">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Chèques CESU : comment ça marche pour le ménage à domicile ?
            </h1>
            <p className="text-xl mb-8 text-primary-50 leading-relaxed">
              E & L PROPRETE accepte les chèques CESU (Chèque Emploi Service
              Universel) pour le paiement de vos prestations de ménage à domicile.
              Découvrez comment utiliser vos CESU et profiter des avantages fiscaux
              associés.
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

      {/* Qu'est-ce que le CESU ? */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
              Qu'est-ce que le CESU ?
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Le <strong>CESU (Chèque Emploi Service Universel)</strong> est un
              dispositif mis en place par l'État français pour faciliter l'accès
              aux services à la personne, notamment les{' '}
              <strong>prestations de ménage et d'entretien du logement</strong>. Il
              permet aux particuliers de rémunérer facilement et légalement des
              prestataires pour des services effectués à leur domicile.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Le CESU peut prendre deux formes principales :
            </p>
            <ul className="space-y-3 text-lg text-gray-700 mb-4">
              <li className="flex items-start space-x-3">
                <FaCheckCircle className="text-success-600 flex-shrink-0 mt-1" />
                <span>
                  <strong>Le CESU préfinancé</strong> : c'est un titre de paiement
                  nominatif financé en tout ou partie par votre employeur, comité
                  d'entreprise, mutuelle ou conseil départemental. Il fonctionne
                  comme un chèque que vous remettez au prestataire de service.
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <FaCheckCircle className="text-success-600 flex-shrink-0 mt-1" />
                <span>
                  <strong>Le CESU déclaratif</strong> : c'est un système de
                  déclaration simplifié qui vous permet d'embaucher directement un
                  salarié à domicile (notamment pour le ménage) et de déclarer ses
                  heures et son salaire facilement auprès de l'URSSAF.
                </span>
              </li>
            </ul>
            <p className="text-lg text-gray-700 leading-relaxed">
              <strong>E & L PROPRETE</strong> accepte principalement les{' '}
              <strong>CESU préfinancés</strong> pour le règlement de vos
              prestations de ménage à domicile à Saint-Priest et dans le Lyon Est.
              N'hésitez pas à nous contacter pour en savoir plus sur les modalités
              d'utilisation.
            </p>
          </div>
        </div>
      </section>

      {/* Avantages du CESU */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Les avantages du CESU pour le ménage à domicile
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-start space-x-4">
                  <FaPercent className="text-success-600 text-3xl flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg mb-2">
                      Crédit d'impôt de 50%
                    </h3>
                    <p className="text-gray-700">
                      En utilisant le CESU pour des prestations de ménage à
                      domicile, vous bénéficiez d'un crédit d'impôt de 50% sur les
                      sommes engagées, dans la limite d'un plafond annuel fixé par
                      l'administration fiscale (généralement 12 000 € de dépenses,
                      soit 6 000 € de crédit d'impôt maximum).
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-start space-x-4">
                  <FaCreditCard className="text-success-600 text-3xl flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg mb-2">
                      Simplicité de paiement
                    </h3>
                    <p className="text-gray-700">
                      Les CESU préfinancés fonctionnent comme des titres de
                      paiement. Vous les remettez à votre prestataire (E & L
                      PROPRETE) en échange du service rendu. Plus besoin de gérer
                      espèces ou virements complexes.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-start space-x-4">
                  <FaShieldAlt className="text-success-600 text-3xl flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg mb-2">
                      Sécurité et légalité
                    </h3>
                    <p className="text-gray-700">
                      Le CESU garantit un cadre légal pour l'emploi de services à
                      la personne. Vous bénéficiez d'attestations officielles pour
                      justifier vos dépenses auprès des impôts, sans risque de
                      travail dissimulé.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-start space-x-4">
                  <FaCheckCircle className="text-success-600 text-3xl flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg mb-2">
                      Participation de l'employeur
                    </h3>
                    <p className="text-gray-700">
                      Si votre employeur ou comité d'entreprise finance une partie
                      de vos CESU, vous payez moins cher votre ménage à domicile.
                      Cela revient à bénéficier d'une double aide : celle de
                      l'employeur et celle de l'État (crédit d'impôt).
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comment utiliser vos CESU avec E & L PROPRETE */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              Comment utiliser vos CESU avec E & L PROPRETE ?
            </h2>

            <div className="space-y-8">
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Vérifiez que vous disposez de CESU
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Renseignez-vous auprès de votre employeur, comité d'entreprise,
                    mutuelle ou conseil départemental pour savoir si vous avez
                    droit à des chèques CESU préfinancés. Si oui, vous recevrez des
                    titres de paiement nominatifs (version papier ou dématérialisée
                    sur une plateforme en ligne).
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Contactez E & L PROPRETE pour une demande de devis
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Appelez-nous, envoyez un message WhatsApp ou remplissez notre
                    formulaire en ligne. Précisez que vous souhaitez régler vos
                    prestations de ménage à domicile par CESU. Nous vous
                    proposerons un devis adapté à vos besoins (surface, fréquence,
                    prestations).
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Planification et prestations de ménage
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Une fois le devis accepté, nous organisons les interventions de
                    ménage chez vous à Saint-Priest ou dans le Lyon Est. Nos
                    intervenants se rendent à votre domicile aux jours et heures
                    convenus pour réaliser les prestations prévues.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Paiement par CESU préfinancé
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    À la fin de chaque période (mensuelle, par exemple), vous nous
                    remettez vos chèques CESU pour le montant des prestations
                    effectuées. Si le montant de vos CESU ne couvre pas la
                    totalité, vous pouvez compléter par un autre moyen de paiement
                    (chèque bancaire, virement).
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                  5
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Attestation fiscale et crédit d'impôt
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Nous vous fournissons une attestation annuelle récapitulant les
                    sommes versées pour vos prestations de ménage à domicile. Vous
                    devrez la joindre à votre déclaration de revenus pour
                    bénéficier du crédit d'impôt de 50%. L'administration fiscale
                    vous remboursera ensuite la moitié des dépenses engagées (dans
                    la limite du plafond légal).
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ CESU */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Questions fréquentes sur les CESU
            </h2>

            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-start space-x-4">
                  <FaQuestionCircle className="text-primary-600 text-2xl flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg text-gray-900 mb-2">
                      Quelle est la différence entre CESU préfinancé et CESU
                      déclaratif ?
                    </h3>
                    <p className="text-gray-700">
                      Le <strong>CESU préfinancé</strong> est un titre de paiement
                      (comme un chèque-cadeau) que vous remettez à votre
                      prestataire. Il est financé en tout ou partie par un
                      organisme (employeur, mutuelle, etc.). Le{' '}
                      <strong>CESU déclaratif</strong> est un système pour
                      employer directement un salarié à domicile : vous le payez
                      vous-même et déclarez ses heures via le portail CESU de
                      l'URSSAF. E & L PROPRETE étant un prestataire de services,
                      nous acceptons principalement les CESU préfinancés.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-start space-x-4">
                  <FaQuestionCircle className="text-primary-600 text-2xl flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg text-gray-900 mb-2">
                      Comment obtenir des chèques CESU ?
                    </h3>
                    <p className="text-gray-700">
                      Contactez votre service RH, comité d'entreprise, mutuelle ou
                      conseil départemental pour savoir si vous êtes éligible. Ces
                      organismes peuvent vous attribuer des CESU préfinancés en
                      fonction de leurs politiques sociales. Certains employeurs
                      proposent aussi des plateformes en ligne où vous pouvez
                      commander vos CESU dématérialisés.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-start space-x-4">
                  <FaQuestionCircle className="text-primary-600 text-2xl flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg text-gray-900 mb-2">
                      Quel est le montant du crédit d'impôt ?
                    </h3>
                    <p className="text-gray-700">
                      Le crédit d'impôt pour les services à la personne (dont le
                      ménage à domicile) est de <strong>50%</strong> des dépenses
                      engagées, dans la limite d'un plafond annuel de{' '}
                      <strong>12 000 €</strong> de dépenses (soit 6 000 € de crédit
                      d'impôt maximum). Ce plafond peut être majoré dans certains
                      cas (enfants à charge, personne dépendante). Consultez le
                      site officiel des impôts ou votre centre des finances
                      publiques pour connaître les conditions exactes.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-start space-x-4">
                  <FaQuestionCircle className="text-primary-600 text-2xl flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg text-gray-900 mb-2">
                      Puis-je cumuler CESU préfinancé et crédit d'impôt ?
                    </h3>
                    <p className="text-gray-700">
                      Oui, mais attention : seule la part que vous financez
                      vous-même ouvre droit au crédit d'impôt. Si votre employeur
                      finance 100% de vos CESU, vous ne bénéficierez pas de crédit
                      d'impôt. En revanche, si vous complétez le paiement avec vos
                      fonds propres, cette part sera éligible au crédit d'impôt de
                      50%. C'est un double avantage : aide de l'employeur + aide
                      fiscale.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-start space-x-4">
                  <FaQuestionCircle className="text-primary-600 text-2xl flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg text-gray-900 mb-2">
                      E & L PROPRETE fournit-elle les attestations nécessaires ?
                    </h3>
                    <p className="text-gray-700">
                      Oui, nous vous fournissons tous les documents nécessaires
                      pour justifier vos dépenses de ménage à domicile auprès de
                      l'administration fiscale. Vous recevrez une attestation
                      annuelle détaillant les montants versés, à conserver et à
                      présenter lors de votre déclaration de revenus.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-start space-x-4">
                  <FaQuestionCircle className="text-primary-600 text-2xl flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg text-gray-900 mb-2">
                      Puis-je utiliser mes CESU pour d'autres prestations que le
                      ménage ?
                    </h3>
                    <p className="text-gray-700">
                      Oui, les CESU peuvent être utilisés pour de nombreux services
                      à la personne : garde d'enfants, aide aux personnes âgées,
                      jardinage, petit bricolage, cours à domicile, etc. Chez E & L
                      PROPRETE, nous les acceptons pour toutes nos prestations de
                      ménage et d'entretien à domicile à Saint-Priest et dans le
                      Lyon Est.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Récapitulatif des avantages */}
      <section className="py-16 bg-primary-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              En résumé : pourquoi utiliser les CESU pour votre ménage ?
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Le CESU est une solution pratique, économique et légale pour financer
              vos prestations de ménage à domicile tout en bénéficiant d'avantages
              fiscaux importants.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white rounded-lg shadow-md p-6">
                <FaPercent className="text-success-600 text-4xl mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">Économies</h3>
                <p className="text-gray-700">
                  Jusqu'à 50% de crédit d'impôt + aide de l'employeur
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <FaCreditCard className="text-success-600 text-4xl mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">Simplicité</h3>
                <p className="text-gray-700">
                  Paiement facile et déclaration automatique
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <FaShieldAlt className="text-success-600 text-4xl mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">Sécurité</h3>
                <p className="text-gray-700">
                  Cadre légal et attestations officielles
                </p>
              </div>
            </div>

            <p className="text-gray-700 mb-6">
              Vous avez des questions sur l'utilisation des CESU avec E & L
              PROPRETE ? N'hésitez pas à nous contacter pour un accompagnement
              personnalisé.
            </p>

            <Link href="#contact" className="btn-primary inline-block">
              Demander un devis avec paiement CESU
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section id="contact" className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Prêt à utiliser vos CESU pour votre ménage à domicile ?
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Contactez E & L PROPRETE dès maintenant pour un devis personnalisé.
              Nous acceptons les chèques CESU à Saint-Priest et dans tout le Lyon
              Est.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/particuliers" className="btn-primary text-center">
                Voir nos prestations ménage
              </Link>
              <WhatsAppButton text="Appeler sur WhatsApp" variant="secondary" />
            </div>
          </div>
        </div>
      </section>

      {/* Bouton WhatsApp flottant */}
      <WhatsAppButton variant="floating" />
    </>
  )
}
