import { FaCampground, FaMapSigns, FaHandshake, FaBullseye, FaUserTie, FaDollarSign } from "react-icons/fa";
import travelerImg from "../../assets/traveldog.jpg"; 

export const GrateOppertunity = () => {
  const features = [
    { title: "Family Camping", icon: <FaCampground /> },
    { title: "Luxury Cabin", icon: <FaMapSigns /> },
    { title: "Excellent Support", icon: <FaHandshake /> },
    { title: "Ultimate Flexibility", icon: <FaBullseye /> },
    { title: "Quality At Our Core", icon: <FaUserTie /> },
    { title: "Cost Friendly Tour", icon: <FaDollarSign /> },
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-[1fr_1.1fr] gap-16 items-center relative">
        
        
        <div className="relative">
          <div className="absolute -top-10 -left-16 opacity-10 w-full h-full pointer-events-none bg-no-repeat bg-contain"></div>

          <div className="relative z-10">
            <img 
              src={travelerImg} 
              alt="Traveler with dog" 
              className="w-full object-cover rounded-t-[250px] rounded-b-[30px]" 
            />
            
            <div className="absolute bottom-16 -left-10 bg-[#4da528] text-white p-6 rounded-3xl shadow-xl rotate-[-15deg] z-20">
              <p className="font-yester text-3xl leading-tight text-center">
                Never stop <br /> Exploring
              </p>
            </div>
          </div>
        </div>

      
        <div className="relative z-10">
          <div className="mb-10">
            <p className="font-yester text-[#4da528] text-3xl mb-2">Explore the world</p>
            <h2 className="text-6xl font-extrabold text-[#0f1f17] leading-tight mb-6">
              Great Opportunity For <br />
              <span className="font-yester text-[#a0a0a0]">Adventure</span> & Travels
            </h2>
            <p className="text-gray-600 leading-relaxed max-w-xl">
              Welcome to our Print 128 website! We are a professional and reliable printing company that offers a wide range of printing services to
            </p>
          </div>

          <div className="grid grid-cols-2 border border-green-100 rounded-2xl overflow-hidden shadow-sm bg-white">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className={`flex items-center gap-5 p-7 border-green-100 
                  ${index % 2 === 0 ? 'border-r' : ''} 
                  ${index < 4 ? 'border-b' : ''}
                  hover:bg-green-50 transition-colors cursor-pointer group`}
              >
                <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center text-3xl text-[#4da528] border border-green-100 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                
                <h4 className="text-lg font-semibold text-[#0f1f17]">
                  {feature.title}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};