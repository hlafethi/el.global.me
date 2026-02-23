'use client'

import { useState, FormEvent } from 'react'

interface ContactFormProps {
  formTitle?: string
  submitButtonText?: string
}

export default function ContactForm({
  formTitle = 'Demande de devis gratuit',
  submitButtonText = 'Envoyer ma demande',
}: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceType: '',
    message: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSubmitting(true)

    // TODO: Implémenter l'envoi du formulaire vers votre backend ou service d'emailing
    // Exemple : EmailJS, Formspree, ou votre propre API
    
    setTimeout(() => {
      setSubmitMessage(
        'Merci pour votre demande ! Nous vous contacterons dans les plus brefs délais.'
      )
      setIsSubmitting(false)
      setFormData({
        name: '',
        email: '',
        phone: '',
        serviceType: '',
        message: '',
      })
    }, 1500)
  }

  const handleChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = event.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <h3 className="text-2xl font-bold text-gray-900 mb-6">{formTitle}</h3>

      {submitMessage && (
        <div className="mb-6 p-4 bg-success-50 border border-success-200 text-success-800 rounded-lg">
          {submitMessage}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Nom complet *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
            placeholder="Jean Dupont"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
              placeholder="jean.dupont@email.com"
            />
          </div>

          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Téléphone *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
              placeholder="06 12 34 56 78"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="serviceType"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Type de service *
          </label>
          <select
            id="serviceType"
            name="serviceType"
            value={formData.serviceType}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
          >
            <option value="">Sélectionnez un service</option>
            <option value="bureaux">Nettoyage de bureaux</option>
            <option value="coproprietes">Nettoyage de copropriétés</option>
            <option value="commerces">Nettoyage de commerces</option>
            <option value="menage-domicile">Ménage à domicile</option>
            <option value="apres-travaux">Nettoyage après travaux</option>
            <option value="debarras">Débarras et remise en état</option>
            <option value="autre">Autre</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Votre message *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none"
            placeholder="Décrivez vos besoins en détail : type de locaux, surface, fréquence souhaitée..."
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Envoi en cours...' : submitButtonText}
        </button>

        <p className="text-xs text-gray-500 text-center">
          * Champs obligatoires. Vos données sont protégées et ne seront jamais
          partagées.
        </p>
      </form>
    </div>
  )
}
