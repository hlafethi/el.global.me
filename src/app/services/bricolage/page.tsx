import type { Metadata } from 'next'
import Link from 'next/link'
import ServicePageLayout from '@/components/ServicePageLayout'
import { servicesMenu } from '@/config/servicesMenu'
import { FaCheckCircle, FaTools } from 'react-icons/fa'

const service = servicesMenu[5]

export const metadata: Metadata = {
  title: `${service.name} | E & L PROPRETE - Lyon`,
  description: service.shortDescription,
}

export default function BricolagePage() {
  return (
    <ServicePageLayout service={service}>
      <h2 className="text-2xl font-bold text-gray-900">
        Petits travaux et dépannage à domicile
      </h2>
      <p className="text-gray-700 leading-relaxed">
        E & L PROPRETE vous propose des prestations de bricolage pour
        particuliers et professionnels à Lyon et son agglomération : montage de
        meubles, petites réparations, menuiserie, robinetterie. Un service
        réactif et de qualité pour tous vos petits travaux du quotidien.
      </p>
      <ul className="space-y-3">
        {[
          'Montage et assemblage de meubles',
          'Petites réparations (portes, placards, étagères)',
          'Menuiserie légère',
          'Dépannage robinetterie et petits travaux plomberie',
          'Accrochage et pose de cadres, étagères',
        ].map((item) => (
          <li key={item} className="flex items-start gap-2">
            <FaCheckCircle className="text-blue-600 mt-1 flex-shrink-0" />
            <span className="text-gray-700">{item}</span>
          </li>
        ))}
      </ul>
      <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-xl border border-blue-200">
        <FaTools className="text-2xl text-blue-600" />
        <div>
          <p className="font-semibold text-gray-900">Intervention rapide</p>
          <p className="text-sm text-gray-700">
            Nous nous déplaçons à votre domicile ou dans vos locaux sur Lyon et
            l&apos;agglomération pour un devis ou une intervention.
          </p>
        </div>
      </div>
      <Link href="/contact" className="text-blue-600 hover:text-blue-700 font-semibold inline-flex items-center gap-1">
        Demander un devis bricolage →
      </Link>
    </ServicePageLayout>
  )
}
