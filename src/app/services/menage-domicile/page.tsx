import type { Metadata } from 'next'
import Link from 'next/link'
import ServicePageLayout from '@/components/ServicePageLayout'
import { servicesMenu } from '@/config/servicesMenu'
import { FaCheckCircle, FaPercent } from 'react-icons/fa'

const service = servicesMenu[2]

export const metadata: Metadata = {
  title: `${service.name} | E & L PROPRETE - Lyon`,
  description: service.shortDescription,
}

export default function MenageDomicilePage() {
  return (
    <ServicePageLayout service={service}>
      <h2 className="text-2xl font-bold text-gray-900">
        Votre intérieur entre de bonnes mains
      </h2>
      <p className="text-gray-700 leading-relaxed">
        Ménage régulier, grand nettoyage ou ponctuel : notre équipe intervient
        chez les particuliers à Lyon et dans l&apos;agglomération. Personnel
        qualifié, discret et de confiance. Paiement par chèques CESU accepté
        avec crédit d&apos;impôt de 50 %.
      </p>
      <ul className="space-y-3">
        {[
          'Ménage hebdomadaire ou bi-mensuel',
          'Grand nettoyage de printemps',
          'Repassage et linge',
          'Avant / après déménagement',
          'Paiement CESU : ne payez que 50 % après crédit d\'impôt',
        ].map((item) => (
          <li key={item} className="flex items-start gap-2">
            <FaCheckCircle className="text-primary-600 mt-1 flex-shrink-0" />
            <span className="text-gray-700">{item}</span>
          </li>
        ))}
      </ul>
      <div className="flex items-center gap-3 p-4 bg-accent-50 rounded-xl border border-accent-200">
        <FaPercent className="text-2xl text-accent-600" />
        <div>
          <p className="font-semibold text-gray-900">50 % de crédit d&apos;impôt</p>
          <p className="text-sm text-gray-700">
            Avec les chèques CESU, vous ne payez que la moitié de la facture.
          </p>
        </div>
      </div>
      <div className="flex flex-wrap gap-4">
        <Link href="/particuliers" className="text-primary-600 hover:text-primary-700 font-semibold">
          Page Particuliers →
        </Link>
        <Link href="/cheques-cesu" className="text-primary-600 hover:text-primary-700 font-semibold">
          Chèques CESU →
        </Link>
      </div>
    </ServicePageLayout>
  )
}
