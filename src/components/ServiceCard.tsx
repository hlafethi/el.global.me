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
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 p-6 border border-gray-100">
      <div className="flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 rounded-full mb-4 mx-auto">
        <div className="text-3xl">{icon}</div>
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
        {title}
      </h3>
      <p className="text-gray-600 text-center leading-relaxed">{description}</p>
    </div>
  )
}
