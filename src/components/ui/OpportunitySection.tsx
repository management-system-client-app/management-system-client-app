import { FaMapMarkedAlt, FaUserTie } from "react-icons/fa"
import opportunityImg from "../../assets/oppertunity.png"

export const OpportunitySection = () => {
  return (
    <div className="w-full bg-white py-20">

      {/* WIDER CONTAINER + CUSTOM GRID */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-[1.2fr_1fr] gap-12 items-center px-6">

        {/* LEFT IMAGE */}
        <div className="flex justify-center md:justify-start">
          <img
            src={opportunityImg}
            className="w-full max-w-xl scale-110 object-contain"
            alt="opportunity"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div>

          <p className="text-[#4da528] font-yester text-2xl mb-2">
            Explore the world
          </p>

          <h2 className="text-4xl font-bold text-gray-900 mb-4 leading-snug">
            Great Opportunity For <br />
            <span className="text-gray-400 font-yester italic">
              Adventure
            </span>{" "}
            & Travels
          </h2>

          <p className="text-gray-500 mb-8">
            Welcome to our Print 128 website! We are a professional and reliable
            printing company that offers a wide range of printing services.
          </p>

          {/* GRID */}
          <div className="grid grid-cols-2 gap-6">

            {/* LEFT SIDE FEATURES */}
            <div className="space-y-6">

              {/* ITEM 1 */}
              <div className="flex gap-4 group">
                <div className="p-3 bg-white rounded-full shadow-md group-hover:shadow-lg transition">
                  <FaMapMarkedAlt className="text-[#4da528] text-2xl" />
                </div>

                <div>
                  <h4 className="font-semibold transition group-hover:text-[#4da528] mb-3 cursor-pointer">
                    Safety First Always
                  </h4>
                  <p className="text-gray-500 text-sm">
                    Welcome to our Print 128 web company that offers a wide
                  </p>
                </div>
              </div>

              {/* ITEM 2 */}
              <div className="flex gap-4 group">
                <div className="p-3 bg-white rounded-full shadow-md group-hover:shadow-lg transition">
                  <FaUserTie className="text-[#4da528] text-2xl" />
                </div>

                <div>
                  <h4 className="font-semibold transition group-hover:text-[#4da528] mb-3 cursor-pointer">
                    Trusted Travel Guide
                  </h4>
                  <p className="text-gray-500 text-sm">
                    Welcome to our Print 128 web company that offers a wide
                  </p>
                </div>
              </div>

            </div>

            {/* RIGHT SIDE STATS */}
            <div className="space-y-4">

              <div className="bg-white px-6 py-3 rounded-full shadow-md hover:shadow-lg hover:bg-lime-500 transition cursor-pointer group">
                <p className="text-gray-700 text-sm group-hover:text-white">
                  <span className="text-[#4da528] font-bold text-lg mr-2 group-hover:text-white">
                    05+
                  </span>
                  Years of experience
                </p>
              </div>

              <div className="bg-white px-6 py-3 rounded-full shadow-md hover:shadow-lg hover:bg-lime-500 transition cursor-pointer group">
                <p className="text-gray-700 text-sm group-hover:text-white">
                  <span className="text-[#4da528] font-bold text-lg mr-2 group-hover:text-white">
                    10+
                  </span>
                  Team Members
                </p>
              </div>

              <div className="bg-white px-6 py-3 rounded-full shadow-md hover:shadow-lg hover:bg-lime-500 transition cursor-pointer group">
                <p className="text-gray-700 text-sm group-hover:text-white">
                  <span className="text-[#4da528] font-bold text-lg mr-2 group-hover:text-white">
                    05+
                  </span>
                  Years of experience
                </p>
              </div>

            </div>

          </div>
        </div>
      </div>
    </div>
  )
}