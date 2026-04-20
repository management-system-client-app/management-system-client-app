import {
    FaMusic,
    FaCampground,
    FaFish,
    FaHiking,
    FaCaravan,
    FaShieldAlt
} from "react-icons/fa";
import bannerImg from "../../assets/banner.png";

export const OfferPackage = () => {
    const items = [
        { icon: <FaMusic />, label: "Music & Relaxings" },
        { icon: <FaCampground />, label: "Couple camping" },
        { icon: <FaFish />, label: "Fishing & Swimming" },
        { icon: <FaHiking />, label: "Mountain & Hill Hiking" },
        { icon: <FaCaravan />, label: "Trailers & RV Sports" },
    ];

    return (
        <section className="w-full py-20 bg-white">
            {/* OUTER CONTAINER */}
            <div className="max-w-7xl mx-auto px-6">
                
                {/* INNER CARD: Grid ratio 0.8fr (Left) to 1.2fr (Right) */}
                <div className="bg-[#0f1f17] rounded-2xl p-10 md:p-14 grid md:grid-cols-[0.8fr_1.2fr] gap-12 items-center">

                    {/* LEFT SECTION */}
                    <div className="w-full">
                        <p className="text-[#4da528] font-yester text-2xl mb-2">
                            Explore the world
                        </p>

                        <h2 className="text-4xl text-white font-bold mb-6">
                            Offer Package For You
                        </h2>

                        <div className="bg-[#EEE9E9] rounded-xl p-6 space-y-4">
                            {items.map((item, i) => (
                                <div
                                    key={i}
                                    className="flex items-center w-full gap-3 bg-white p-4 rounded-lg cursor-pointer transition hover:bg-[#4da528] group"
                                >
                                    <div className="text-[#4da528] text-2xl group-hover:text-white">
                                        {item.icon}
                                    </div>
                                    <p className="font-medium text-gray-800 group-hover:text-white">
                                        {item.label}
                                    </p>
                                </div>
                            ))}

                            <p className="text-center text-sm text-gray-500 mt-3 cursor-pointer hover:text-[#4da528]">
                                More Place
                            </p>
                        </div>
                    </div>

                    {/* RIGHT SECTION */}
                    <div className="w-full">
                        <img
                            src={bannerImg}
                            className="rounded-xl w-full h-[350px] object-cover"
                            alt="camping adventure"
                        />

                        {/* FEATURES */}
                        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 text-white">
                            
                            {/* Feature 1 */}
                            <div className="flex items-start gap-4 group cursor-pointer">
                                <div className="bg-[#1c2f25] p-3 rounded-full">
                                    <FaHiking className="text-[#4da528] text-2xl group-hover:scale-110 transition" />
                                </div>
                                <div>
                                    <p className="font-semibold group-hover:text-[#4da528] transition mb-1">
                                        Real adventure Feel
                                    </p>
                                    <p className="text-gray-400 text-sm">
                                        Experience the raw beauty of nature with our curated hiking packages.
                                    </p>
                                </div>
                            </div>

                            {/* Feature 2 */}
                            <div className="flex items-start gap-4 group cursor-pointer">
                                <div className="bg-[#1c2f25] p-3 rounded-full">
                                    <FaShieldAlt className="text-[#4da528] text-2xl group-hover:scale-110 transition" />
                                </div>
                                <div>
                                    <p className="font-semibold group-hover:text-[#4da528] transition mb-1">
                                        Comfort & Secure trip
                                    </p>
                                    <p className="text-gray-400 text-sm">
                                        Travel with peace of mind knowing your safety is our top priority.
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};