import { FaWhatsapp } from 'react-icons/fa'
import { siteConfig } from '@/config/siteConfig'

interface WhatsAppButtonProps {
  text?: string
  className?: string
  variant?: 'primary' | 'secondary' | 'floating'
}

export default function WhatsAppButton({
  text = 'Appeler sur WhatsApp',
  className = '',
  variant = 'primary',
}: WhatsAppButtonProps) {
  const baseClasses =
    'inline-flex items-center justify-center space-x-2 font-semibold rounded-lg transition-all duration-300'

  const variantClasses = {
    primary:
      'bg-success-600 hover:bg-success-700 text-white py-3 px-6 shadow-md hover:shadow-lg',
    secondary:
      'border-2 border-success-600 text-success-600 hover:bg-success-600 hover:text-white py-3 px-6',
    floating:
      'fixed bottom-6 right-6 bg-success-600 hover:bg-success-700 text-white p-4 rounded-full shadow-xl hover:shadow-2xl z-40 animate-bounce',
  }

  if (variant === 'floating') {
    return (
      <a
        href={siteConfig.contact.whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className={`${baseClasses} ${variantClasses[variant]} ${className}`}
        aria-label="Contacter via WhatsApp"
      >
        <FaWhatsapp size={28} />
      </a>
    )
  }

  return (
    <a
      href={siteConfig.contact.whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
    >
      <FaWhatsapp size={20} />
      <span>{text}</span>
    </a>
  )
}
