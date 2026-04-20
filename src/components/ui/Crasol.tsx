import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowRight, FaCampground, FaMapSigns, FaFire, FaCaravan } from "react-icons/fa";

const features = [
  { title: "Luxury Cabin", icon: <FaCampground />, desc: "Pellentesque habitant morbi tristique senectus netus et malesuada fames ac." },
  { title: "Adventure Plan", icon: <FaMapSigns />, desc: "Pellentesque habitant morbi tristique senectus netus et malesuada fames ac." },
  { title: "Secure Camping", icon: <FaFire />, desc: "Pellentesque habitant morbi tristique senectus netus et malesuada fames ac." },
  { title: "Trailers & RV", icon: <FaCaravan />, desc: "Pellentesque habitant morbi tristique senectus netus et malesuada fames ac." },
];

export const AdventureCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    pauseOnHover: true,
    arrows: false,
    rtl: true, 
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3, rtl: true } },
      { breakpoint: 600, settings: { slidesToShow: 1, rtl: true } }
    ]
  };

  return (
    <div className="py-20 bg-white adventure-slider-container">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <p className="font-yester text-[#4da528] text-3xl mb-2">Explore the world</p>
          <h2 className="text-5xl font-bold text-[#0f1f17]">Great Opportunity For <br />
            <span className="font-yester text-[#a0a0a0]">Adventure</span> & Travels
          </h2>
        </div>

        <Slider {...settings}>
          {features.map((item, i) => (
            <div key={i} className="px-3 outline-none">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 
                              hover:bg-gradient-to-br hover:from-white hover:to-green-50 
                              hover:border-[#4da528] transition-all duration-500 group cursor-pointer h-[320px]">

                <div className="w-16 h-16 bg-green-50 flex items-center justify-center rounded-full text-3xl text-[#4da528] mb-6 group-hover:bg-[#4da528] group-hover:text-white transition-all duration-300">
                  {item.icon}
                </div>

                <h3 className="text-xl font-bold mb-3 text-[#0f1f17]">{item.title}</h3>
                <p className="text-gray-500 text-sm mb-6 leading-relaxed">{item.desc}</p>

                <div className="text-[#4da528] font-bold flex items-center gap-2 group-hover:gap-4 transition-all duration-300">
                  Booking Now <FaArrowRight size={14} />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};