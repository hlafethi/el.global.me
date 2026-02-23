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
    <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
      <div className="flex items-center mb-4">
        {[...Array(5)].map((_, index) => (
          <FaStar
            key={index}
            className={
              index < rating ? 'text-yellow-400' : 'text-gray-300'
            }
            size={18}
          />
        ))}
      </div>
      <p className="text-gray-700 mb-4 italic leading-relaxed">"{text}"</p>
      <div className="border-t border-gray-200 pt-4">
        <p className="font-semibold text-gray-900">{name}</p>
        <p className="text-sm text-gray-600">{role}</p>
      </div>
    </div>
  )
}
