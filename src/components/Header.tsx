'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { siteConfig } from '@/config/siteConfig'
import { servicesMenu } from '@/config/servicesMenu'
import { FaPhone, FaBars, FaTimes, FaChevronDown } from 'react-icons/fa'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const mainNavigation = [
    { name: 'Accueil', href: '/' },
    { name: 'Professionnels', href: '/professionnels' },
    { name: 'Particuliers', href: '/particuliers' },
    { name: 'Chèques CESU', href: '/cheques-cesu' },
    { name: 'Contact', href: '/contact' },
  ]

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <header className="sticky top-0 z-50">
      <div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-2.5">
        <div className="container-custom flex flex-wrap justify-center md:justify-end gap-4 md:gap-6 text-sm font-medium">
          <Link href="/contact" className="hover:text-primary-100 transition-colors">
            Devis gratuit
          </Link>
          <a href={`tel:${siteConfig.contact.phone}`} className="hover:text-primary-100 transition-colors flex items-center gap-1">
            <FaPhone className="text-xs" />
            Rappel / Contact
          </a>
        </div>
      </div>
      <nav className="container-custom bg-white shadow-md border-b border-primary-100">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center space-x-3">
            <Image
              src="/logo.png"
              alt={`Logo ${siteConfig.name}`}
              width={120}
              height={50}
              className="h-12 w-auto"
              priority
            />
            <div className="text-xl md:text-2xl font-bold text-primary-600 hidden sm:block">
              {siteConfig.name}
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-6">
            <div className="relative" ref={dropdownRef}>
              <button
                type="button"
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="flex items-center gap-1 text-gray-700 hover:text-primary-600 font-medium transition-colors py-2"
                aria-expanded={isServicesOpen}
                aria-haspopup="true"
              >
                Nos services
                <FaChevronDown className={`text-xs transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {isServicesOpen && (
                <div className="absolute top-full left-0 mt-1 w-[32rem] max-w-[95vw] p-4 bg-white rounded-xl shadow-xl border border-gray-200 z-50">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3 px-1">
                    Nos services
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    {servicesMenu.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={`group flex flex-col rounded-lg bg-gradient-to-br ${item.heroGradient} p-3 text-white shadow-sm hover:shadow-md transition-all duration-200`}
                        onClick={() => setIsServicesOpen(false)}
                      >
                        <span className="font-semibold text-sm leading-tight">
                          {item.name}
                        </span>
                        <span className="mt-1 text-xs font-medium text-white/90 group-hover:text-white group-hover:underline">
                          Voir plus →
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
            {mainNavigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <a
              href={`tel:${siteConfig.contact.phone}`}
              className="flex items-center space-x-2 text-primary-600 hover:text-primary-700 font-semibold transition-colors"
            >
              <FaPhone className="text-lg" />
              <span>{siteConfig.contact.phoneDisplay}</span>
            </a>
          </div>

          <button
            type="button"
            className="md:hidden text-gray-700 hover:text-primary-600 p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Ouvrir le menu"
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-1">
              <Link href="/" className="text-gray-700 hover:text-primary-600 font-medium px-4 py-2" onClick={() => setIsMenuOpen(false)}>
                Accueil
              </Link>
              <div className="px-4 py-2">
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Nos services</p>
                <div className="grid grid-cols-2 gap-2">
                  {servicesMenu.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`rounded-lg bg-gradient-to-br ${item.heroGradient} p-3 text-white text-sm font-semibold shadow-sm flex flex-col justify-center min-h-[3.5rem]`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                      <span className="text-xs font-medium text-white/90 mt-0.5">Voir plus →</span>
                    </Link>
                  ))}
                </div>
              </div>
              {mainNavigation.filter((item) => item.name !== 'Accueil').map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-primary-600 font-medium px-4 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <a href={`tel:${siteConfig.contact.phone}`} className="flex items-center gap-2 text-primary-600 font-semibold px-4 py-2">
                <FaPhone />
                <span>{siteConfig.contact.phoneDisplay}</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
