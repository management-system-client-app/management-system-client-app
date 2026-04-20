import { FaEnvira } from "react-icons/fa"

export const BrandsStrip = () => {
  const brands = new Array(10).fill("envato")

  return (
    <div className="w-full py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4">

        {/* TITLE WITH LINES */}
        <div className="flex items-center justify-center gap-4 mb-10">
          <div className="flex-1 h-[1px] bg-gray-300"></div>
          <p className="text-gray-700 text-lg whitespace-nowrap">
            We’ve been mentioned in Below Brands
          </p>
          <div className="flex-1 h-[1px] bg-gray-300"></div>
        </div>

        {/* SLIDER */}
        <div className="overflow-hidden relative">
          <div className="flex gap-30 animate-slide">
            {[...brands, ...brands].map((_, i) => (
              <div key={i} className="flex items-center gap-2 opacity-40">
                <FaEnvira className="text-4xl text-gray-400" />
                <span className="text-4xl font-semibold text-gray-400">
                  envato
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ANIMATION */}
      <style>
        {`
          @keyframes slide {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-slide {
            width: max-content;
            animation: slide 70s linear infinite;
          }
        `}
      </style>
    </div>
  )
}