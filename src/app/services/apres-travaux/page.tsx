import type { Metadata } from 'next'
import Link from 'next/link'
import ServicePageLayout from '@/components/ServicePageLayout'
import { servicesMenu } from '@/config/servicesMenu'
import { FaCheckCircle, FaTools } from 'react-icons/fa'

const service = servicesMenu[3]

export const metadata: Metadata = {
  title: `${service.name} | E & L PROPRETE - Lyon`,
  description: service.shortDescription,
}

export default function ApresTravauxPage() {
  return (
    <ServicePageLayout service={service}>
      <h2 className="text-2xl font-bold text-gray-900">
        Remise en état après chantier
      </h2>
      <p className="text-gray-700 leading-relaxed">
        Rénovation, construction ou aménagement : nous assurons la remise en
        état complète de vos locaux ou logements. Élimination des gravats,
        poussières, traces de peinture. Intervention rapide pour une livraison
        impeccable à Lyon et agglomération.
      </p>
      <ul className="space-y-3">
        {[
          'Nettoyage des poussières de plâtre et gravats',
          'Décapage des traces de peinture',
          'Lavage des sols et des vitres',
          'Nettoyage des sanitaires et cuisines',
          'Respect des délais de livraison',
        ].map((item) => (
          <li key={item} className="flex items-start gap-2">
            <FaCheckCircle className="text-amber-600 mt-1 flex-shrink-0" />
            <span className="text-gray-700">{item}</span>
          </li>
        ))}
      </ul>
      <div className="flex items-center gap-3 p-4 bg-amber-50 rounded-xl border border-amber-200">
        <FaTools className="text-2xl text-amber-600" />
        <div>
          <p className="font-semibold text-gray-900">Rapidité</p>
          <p className="text-sm text-gray-700">
            Nous nous adaptons à votre planning de chantier ou d&apos;emménagement.
          </p>
        </div>
      </div>
      <Link href="/contact" className="text-amber-700 hover:text-amber-800 font-semibold inline-flex items-center gap-1">
        Demander un devis après travaux →
      </Link>
    </ServicePageLayout>
  )
}
