import { Handshake } from "lucide-react"

const partners = [
  "Savera IIT Delhi",
  "Patliputra Samvad",
  "Rishihood University",
  "India House | Bharat Mandala",
  "Khetee Foundation",
  "Anaadi Foundation",
  "Shivganga",
  "Krida Bharati",
  "Adi Shankracharya Foundation",
]

export function PartnersSection() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-orange-700">Our Partners</h2>
        <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
          We are proud to collaborate with these esteemed organizations to drive village upliftment and nation building.
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {partners.map((partner, index) => (
            <div 
              key={index} 
              className="flex items-center justify-center p-4 bg-gray-50 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <span className="font-semibold text-gray-800 text-center">{partner}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
