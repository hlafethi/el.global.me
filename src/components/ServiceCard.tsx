import { ReactNode } from 'react'

interface ServiceCardProps {
  icon: ReactNode
  title: string
  description: string
}

export default function ServiceCard({
  icon,
  title,
  description,
}: ServiceCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl hover:shadow-primary-glow transition-all duration-300 p-6 border-2 border-gray-100 hover:border-primary-200 hover:-translate-y-1">
      <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-100 to-primary-200 text-primary-700 rounded-xl mb-4 mx-auto ring-2 ring-primary-100">
        <div className="text-3xl">{icon}</div>
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
        {title}
      </h3>
      <p className="text-gray-600 text-center leading-relaxed">{description}</p>
    </div>
  )
}
