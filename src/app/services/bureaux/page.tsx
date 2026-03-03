import type { Metadata } from 'next'
import Link from 'next/link'
import ServicePageLayout from '@/components/ServicePageLayout'
import { servicesMenu } from '@/config/servicesMenu'
import { FaCheckCircle, FaClock, FaBuilding } from 'react-icons/fa'

const service = servicesMenu[0]

export const metadata: Metadata = {
  title: `${service.name} | E & L PROPRETE - Lyon`,
  description: service.shortDescription,
}

export default function BureauxPage() {
  return (
    <ServicePageLayout service={service}>
      <h2 className="text-2xl font-bold text-gray-900">
        Un cadre de travail propre et sain
      </h2>
      <p className="text-gray-700 leading-relaxed">
        E & L PROPRETE assure l&apos;entretien quotidien, hebdomadaire ou
        mensuel de vos bureaux, open spaces, salles de réunion et sanitaires à
        Lyon et dans toute l&apos;agglomération. Nous intervenons en dehors des
        horaires d&apos;ouverture pour ne pas gêner votre activité.
      </p>
      <ul className="space-y-3">
        {[
          'Dépoussiérage, aspiration, lavage des sols',
          'Nettoyage des sanitaires et cuisines d\'entreprise',
          'Entretien des vitres et des parties communes',
          'Horaires flexibles (soir, week-end)',
        ].map((item) => (
          <li key={item} className="flex items-start gap-2">
            <FaCheckCircle className="text-primary-600 mt-1 flex-shrink-0" />
            <span className="text-gray-700">{item}</span>
          </li>
        ))}
      </ul>
      <div className="flex items-center gap-3 p-4 bg-primary-50 rounded-xl border border-primary-200">
        <FaClock className="text-2xl text-primary-600" />
        <div>
          <p className="font-semibold text-gray-900">Réactivité</p>
          <p className="text-sm text-gray-700">
            Intervention sous 24 à 48 h possible sur Lyon et agglomération.
          </p>
        </div>
      </div>
      <Link href="/professionnels" className="text-primary-600 hover:text-primary-700 font-semibold inline-flex items-center gap-1">
        Toutes nos prestations professionnelles →
      </Link>
    </ServicePageLayout>
  )
}
