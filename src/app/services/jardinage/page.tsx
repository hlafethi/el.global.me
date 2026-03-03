import type { Metadata } from 'next'
import Link from 'next/link'
import ServicePageLayout from '@/components/ServicePageLayout'
import { servicesMenu } from '@/config/servicesMenu'
import { FaCheckCircle, FaLeaf } from 'react-icons/fa'

const service = servicesMenu[6]

export const metadata: Metadata = {
  title: `${service.name} | E & L PROPRETE - Lyon`,
  description: service.shortDescription,
}

export default function JardinagePage() {
  return (
    <ServicePageLayout service={service}>
      <h2 className="text-2xl font-bold text-gray-900">
        Entretien des espaces verts et jardins
      </h2>
      <p className="text-gray-700 leading-relaxed">
        Tonte, taille de haies, désherbage, ramassage de feuilles… E & L
        PROPRETE assure l&apos;entretien de votre jardin ou de vos espaces
        verts à Lyon et dans l&apos;agglomération. Interventions régulières ou
        ponctuelles, pour particuliers et copropriétés.
      </p>
      <ul className="space-y-3">
        {[
          'Tonte de gazon et entretien des pelouses',
          'Taille de haies et arbustes',
          'Désherbage et débroussaillage',
          'Ramassage de feuilles mortes',
          'Entretien des massifs et plantations',
          'Nettoyage des allées et terrasses',
        ].map((item) => (
          <li key={item} className="flex items-start gap-2">
            <FaCheckCircle className="text-emerald-600 mt-1 flex-shrink-0" />
            <span className="text-gray-700">{item}</span>
          </li>
        ))}
      </ul>
      <div className="flex items-center gap-3 p-4 bg-emerald-50 rounded-xl border border-emerald-200">
        <FaLeaf className="text-2xl text-emerald-600" />
        <div>
          <p className="font-semibold text-gray-900">Régulier ou ponctuel</p>
          <p className="text-sm text-gray-700">
            Contrat à l&apos;année ou intervention ponctuelle selon vos besoins,
            pour un jardin toujours soigné.
          </p>
        </div>
      </div>
      <Link href="/contact" className="text-emerald-600 hover:text-emerald-700 font-semibold inline-flex items-center gap-1">
        Demander un devis jardinage →
      </Link>
    </ServicePageLayout>
  )
}
