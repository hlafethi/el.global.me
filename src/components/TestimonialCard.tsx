import { FaStar } from 'react-icons/fa'

interface TestimonialCardProps {
  name: string
  role: string
  rating: number
  text: string
}

export default function TestimonialCard({
  name,
  role,
  rating,
  text,
}: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg p-6 border-2 border-gray-100 hover:border-primary-200 transition-all duration-300 bg-gradient-to-b from-white to-primary-50/30">
      <div className="flex items-center gap-1 mb-4">
        {[...Array(5)].map((_, index) => (
          <FaStar
            key={index}
            className={
              index < rating ? 'text-accent-500' : 'text-gray-200'
            }
            size={20}
          />
        ))}
      </div>
      <p className="text-gray-700 mb-4 italic leading-relaxed">"{text}"</p>
      <div className="border-t-2 border-primary-100 pt-4">
        <p className="font-semibold text-gray-900">{name}</p>
        <p className="text-sm text-primary-700">{role}</p>
      </div>
    </div>
  )
}
