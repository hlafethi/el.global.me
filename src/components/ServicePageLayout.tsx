import Link from 'next/link'
import Image from 'next/image'
import WhatsAppButton from '@/components/WhatsAppButton'
import type { ServiceMenuItem } from '@/config/servicesMenu'

interface ServicePageLayoutProps {
  service: ServiceMenuItem
  children: React.ReactNode
  imageSrc?: string
  imageAlt?: string
}

export default function ServicePageLayout({
  service,
  children,
  imageSrc,
  imageAlt,
}: ServicePageLayoutProps) {
  const img = imageSrc ?? service.imagePlaceholder
  const alt = imageAlt ?? service.name

  return (
    <>
      <section
        className={`relative bg-gradient-to-br ${service.heroGradient} text-white py-20 lg:py-28 overflow-hidden`}
      >
        <div className="container-custom relative">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/20 text-white/90 text-sm font-medium mb-6">
              Nos services
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              {service.name}
            </h1>
            <p className="text-xl text-white/90 leading-relaxed mb-8">
              {service.shortDescription}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="bg-white text-gray-900 hover:bg-gray-100 font-semibold py-3 px-6 rounded-lg text-center transition-all shadow-lg"
              >
                Devis gratuit
              </Link>
              <WhatsAppButton text="Nous contacter" variant="secondary" />
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent" />
      </section>

      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white ring-2 ring-primary-200">
              <div className="aspect-[4/3] relative bg-gray-100">
                <Image
                  src={img}
                  alt={alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  unoptimized
                />
              </div>
            </div>
            <div className="space-y-6">{children}</div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Pourquoi faire appel à E & L PROPRETE ?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-2xl p-6 bg-gradient-to-br from-primary-50 to-primary-100 border-2 border-primary-200 text-center">
              <p className="text-4xl font-bold text-primary-700 mb-2">24-48 h</p>
              <p className="font-semibold text-gray-900">Réactivité</p>
              <p className="text-sm text-gray-700 mt-1">Réponse rapide et intervention sur Lyon et agglomération</p>
            </div>
            <div className="rounded-2xl p-6 bg-gradient-to-br from-success-50 to-success-100 border-2 border-success-200 text-center">
              <p className="text-4xl font-bold text-success-700 mb-2">100 %</p>
              <p className="font-semibold text-gray-900">Qualité</p>
              <p className="text-sm text-gray-700 mt-1">Équipe formée et matériel professionnel</p>
            </div>
            <div className="rounded-2xl p-6 bg-gradient-to-br from-accent-50 to-accent-100 border-2 border-accent-200 text-center">
              <p className="text-4xl font-bold text-accent-700 mb-2">Sur mesure</p>
              <p className="font-semibold text-gray-900">Devis personnalisé</p>
              <p className="text-sm text-gray-700 mt-1">Adapté à vos horaires et à votre budget</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container-custom text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Un devis adapté à votre besoin
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto mb-8">
            Décrivez-nous votre projet ou vos locaux. Nous vous répondons sous
            24 à 48 h avec une proposition sur mesure pour Lyon et son
            agglomération.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors shadow-md"
          >
            Demander un devis
          </Link>
        </div>
      </section>
    </>
  )
}
