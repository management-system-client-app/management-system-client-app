import { FaArrowRight } from "react-icons/fa";
import Costarica from "../../assets/costarica.jpg"
import UK from "../../assets/uk.jpg"
import Africa from "../../assets/africa.jpg"
import Swisarland from "../../assets/swirland.jpg"
import Europe from "../../assets/europe.jpg"
import USA from "../../assets/usa.jpg"

const destinations = [
  { name: "Cost Rica", img: Costarica, color: "bg-yellow-400" },
  { name: "United Kingdom", img: UK, color: "bg-cyan-400" },
  { name: "Africa", img: Africa, color: "bg-red-500" },
  { name: "Swizerland", img: Swisarland, color: "bg-cyan-500" },
  { name: "Euroupe", img: Europe, color: "bg-pink-500" },
  { name: "United State", img: USA, color: "bg-red-600" },
];

export const TopDestinations = () => {
  return (
    <section className="py-20 bg-white px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="flex justify-between items-end mb-12">
          <div>
            <p className="font-yester text-3xl text-[#4da528]">Explore the world</p>
            <h2 className="text-5xl font-bold text-gray-900 mt-2">We Provide Top Destination</h2>
          </div>
          <button className="flex items-center gap-2 font-semibold hover:text-[#4da528] transition">
            VIEW ALL DESTINATION <FaArrowRight />
          </button>
        </div>

        {/* Destination Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {destinations.map((dest, i) => (
            <div key={i} className="group flex flex-col items-center cursor-pointer">
              {/* Circular Image with Hover Zoom */}
              <div className="relative w-40 h-40 overflow-hidden rounded-full shadow-lg transition-transform duration-500 group-hover:scale-105">
                <img 
                  src={dest.img} 
                  alt={dest.name} 
                  className="w-full h-full object-cover" 
                />
              </div>
              
              {/* Badge */}
              <div className={`${dest.color} text-white text-xs font-bold px-4 py-1 rounded-full -mt-3 z-10 shadow-md`}>
                3 Tour
              </div>
              
              {/* Label */}
              <h3 className="mt-4 font-bold text-lg text-gray-800 group-hover:text-[#4da528] transition">
                {dest.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};