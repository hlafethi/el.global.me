'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { siteConfig } from '@/config/siteConfig'
import { FaPhone, FaBars, FaTimes } from 'react-icons/fa'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigation = [
    { name: 'Accueil', href: '/' },
    { name: 'Professionnels', href: '/professionnels' },
    { name: 'Particuliers', href: '/particuliers' },
    { name: 'Chèques CESU', href: '/cheques-cesu' },
  ]

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="container-custom">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
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

          {/* Navigation Desktop */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Button Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href={`tel:${siteConfig.contact.phone}`}
              className="flex items-center space-x-2 text-primary-600 hover:text-primary-700 font-semibold transition-colors"
            >
              <FaPhone className="text-lg" />
              <span>{siteConfig.contact.phoneDisplay}</span>
            </a>
          </div>

          {/* Menu Mobile Button */}
          <button
            className="md:hidden text-gray-700 hover:text-primary-600 p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Menu Mobile */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-primary-600 font-medium transition-colors px-4 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <a
                href={`tel:${siteConfig.contact.phone}`}
                className="flex items-center space-x-2 text-primary-600 font-semibold px-4 py-2"
              >
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
