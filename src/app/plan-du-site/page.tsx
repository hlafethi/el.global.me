import type { Metadata } from 'next'
import type React from 'react'
import Link from 'next/link'
import {
  FaHome,
  FaBuilding,
  FaUser,
  FaPercent,
  FaEnvelope,
  FaBalanceScale,
  FaSitemap,
  FaBroom,
  FaTools,
  FaTruck,
  FaLeaf,
} from 'react-icons/fa'
import { servicesMenu } from '@/config/servicesMenu'

export const metadata: Metadata = {
  title: 'Plan du site | E & L PROPRETE',
  description: 'Plan du site E & L PROPRETE - Nettoyage à Lyon et son agglomération.',
}

const sitePages = [
  { name: 'Accueil', href: '/', icon: FaHome },
  { name: 'Professionnels', href: '/professionnels', icon: FaBuilding },
  { name: 'Particuliers', href: '/particuliers', icon: FaUser },
  { name: 'Chèques CESU', href: '/cheques-cesu', icon: FaPercent },
  { name: 'Contact & Devis', href: '/contact', icon: FaEnvelope },
  { name: 'Mentions légales', href: '/mentions-legales', icon: FaBalanceScale },
  { name: 'Plan du site', href: '/plan-du-site', icon: FaSitemap },
]

const serviceIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  'Nettoyage de bureaux': FaBuilding,
  'Copropriétés': FaBuilding,
  'Ménage à domicile': FaBroom,
  'Après travaux': FaTools,
  'Débarras': FaTruck,
  'Bricolage': FaTools,
  'Jardinage': FaLeaf,
}

export default function PlanDuSitePage() {
  return (
    <>
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-16">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">Plan du site</h1>
          <p className="text-primary-100">
            Retrouvez toutes les pages du site E & L PROPRETE
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container-custom max-w-2xl">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Pages principales</h2>
          <ul className="space-y-3 mb-10">
            {sitePages.map((page) => {
              const Icon = page.icon
              return (
                <li key={page.href}>
                  <Link
                    href={page.href}
                    className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm hover:shadow-md hover:border-primary-200 border border-transparent transition-all text-gray-800 hover:text-primary-700"
                  >
                    <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary-100 text-primary-600">
                      <Icon className="text-lg" />
                    </span>
                    <span className="font-medium">{page.name}</span>
                  </Link>
                </li>
              )
            })}
          </ul>
          <h2 className="text-xl font-bold text-gray-900 mb-4">Nos services</h2>
          <ul className="space-y-3">
            {servicesMenu.map((item) => {
              const Icon = serviceIcons[item.name] ?? FaBroom
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm hover:shadow-md hover:border-primary-200 border border-transparent transition-all text-gray-800 hover:text-primary-700"
                  >
                    <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary-100 text-primary-600">
                      <Icon className="text-lg" />
                    </span>
                    <span className="font-medium">{item.name}</span>
                  </Link>
                </li>
              )
            })}
          </ul>

          <div className="mt-10">
            <Link
              href="/"
              className="inline-block text-primary-600 hover:text-primary-700 font-semibold"
            >
              ← Retour à l&apos;accueil
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
