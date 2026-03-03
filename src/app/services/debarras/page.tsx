import type { Metadata } from 'next'
import Link from 'next/link'
import ServicePageLayout from '@/components/ServicePageLayout'
import { servicesMenu } from '@/config/servicesMenu'
import { FaCheckCircle, FaTruck } from 'react-icons/fa'

const service = servicesMenu[4]

export const metadata: Metadata = {
  title: `${service.name} | E & L PROPRETE - Lyon`,
  description: service.shortDescription,
}

export default function DebarrasPage() {
  return (
    <ServicePageLayout service={service}>
      <h2 className="text-2xl font-bold text-gray-900">
        Évacuation et remise en état
      </h2>
      <p className="text-gray-700 leading-relaxed">
        Caves, greniers, garages, locaux commerciaux : nous assurons le
        débarras professionnel, l&apos;évacuation des encombrants, le tri
        sélectif et le nettoyage final. Intervention sur Lyon et son
        agglomération.
      </p>
      <ul className="space-y-3">
        {[
          'Débarras de caves et greniers',
          'Évacuation de garages et locaux',
          'Tri et évacuation des encombrants',
          'Nettoyage après débarras',
          'Devis sur mesure selon le volume',
        ].map((item) => (
          <li key={item} className="flex items-start gap-2">
            <FaCheckCircle className="text-gray-600 mt-1 flex-shrink-0" />
            <span className="text-gray-700">{item}</span>
          </li>
        ))}
      </ul>
      <div className="flex items-center gap-3 p-4 bg-gray-100 rounded-xl border border-gray-200">
        <FaTruck className="text-2xl text-gray-600" />
        <div>
          <p className="font-semibold text-gray-900">Sur mesure</p>
          <p className="text-sm text-gray-700">
            Chaque situation est évaluée pour un devis adapté à votre besoin.
          </p>
        </div>
      </div>
      <Link href="/contact" className="text-gray-700 hover:text-gray-900 font-semibold inline-flex items-center gap-1">
        Demander un devis débarras →
      </Link>
    </ServicePageLayout>
  )
}