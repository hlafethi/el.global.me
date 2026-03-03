import type { Metadata } from 'next'
import Link from 'next/link'
import ServicePageLayout from '@/components/ServicePageLayout'
import { servicesMenu } from '@/config/servicesMenu'
import { FaCheckCircle, FaBuilding } from 'react-icons/fa'

const service = servicesMenu[1]

export const metadata: Metadata = {
  title: `${service.name} | E & L PROPRETE - Lyon`,
  description: service.shortDescription,
}

export default function CoproprietesPage() {
  return (
    <ServicePageLayout service={service}>
      <h2 className="text-2xl font-bold text-gray-900">
        Parties communes impeccables
      </h2>
      <p className="text-gray-700 leading-relaxed">
        Nous travaillons avec les syndics et gardiens pour l&apos;entretien
        régulier des halls d&apos;entrée, cages d&apos;escalier, paliers,
        ascenseurs et locaux poubelles. Présents sur Lyon, Saint-Priest, Bron,
        Vénissieux, Mions et toute la métropole.
      </p>
      <ul className="space-y-3">
        {[
          'Nettoyage des halls et entrées',
          'Escaliers, paliers, rampes',
          'Ascenseurs et cabines',
          'Vitrerie et façades vitrées',
          'Fréquence adaptable (quotidien à mensuel)',
        ].map((item) => (
          <li key={item} className="flex items-start gap-2">
            <FaCheckCircle className="text-success-600 mt-1 flex-shrink-0" />
            <span className="text-gray-700">{item}</span>
          </li>
        ))}
      </ul>
      <div className="flex items-center gap-3 p-4 bg-success-50 rounded-xl border border-success-200">
        <FaBuilding className="text-2xl text-success-600" />
        <div>
          <p className="font-semibold text-gray-900">Syndics & résidences</p>
          <p className="text-sm text-gray-700">
            De la petite copropriété au grand ensemble, nous nous adaptons.
          </p>
        </div>
      </div>
      <Link href="/professionnels" className="text-success-600 hover:text-success-700 font-semibold inline-flex items-center gap-1">
        Prestations pour professionnels →
      </Link>
    </ServicePageLayout>
  )
}
