import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import User from "../../assets/random_man.jpg"
import BottomImage from "../../assets/bottom.jpg"

const TestimonialCard = () => {
  const settings = {
    dots: true,
    infinite: true,          
    speed: 500,              
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,          
    autoplaySpeed: 3000,      
    rtl: true,               
    pauseOnHover: true,       
    pauseOnFocus: true,       
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const testimonials = [
    {
      id: 1,
      name: "Cameron Williamson",
      position: "Ceo & Founder",
      image: User,
      text: "The most advanced revenue than this. I will refer everyone I like Level more and more each day because it makes my easier. It really saves me time and effort."
    },
    {
      id: 2,
      name: "Sarah Johnson",
      position: "Marketing Director",
      image: User,
      text: "Absolutely amazing experience! The team went above and beyond to ensure everything was perfect. I couldn't be happier with the results and would definitely recommend to anyone."
    },
    {
      id: 3,
      name: "Michael Chen",
      position: "Travel Blogger",
      image: User,
      text: "This service transformed how I plan my trips. The attention to detail and customer support is outstanding. Five stars isn't enough to rate this incredible platform!"
    },
    {
      id: 4,
      name: "Emma Watson",
      position: "Adventure Guide",
      image: User,
      text: "I've tried many similar services, but this one stands out from the crowd. The features are intuitive and the results speak for themselves. Highly recommended!"
    },
    {
      id: 5,
      name: "David Kumar",
      position: "Tour Operator",
      image: User,
      text: "A game-changer for our business! The efficiency and reliability have exceeded our expectations. We've seen tremendous growth since using this service."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p className="font-yester text-[#4da528] text-2xl mb-2">Explore the world</p>
        <h2 className="text-5xl font-bold text-[#0f1f17] mb-4">Amazing Featured Tour</h2>
        <p className="font-yester text-4xl text-[#a0a0a0] mb-12">Package <span className="text-[#0f1f17]">The World</span></p>

        <Slider {...settings}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="px-3">
              <div className="bg-white p-8 rounded-lg shadow-sm border-l-4 border-[#4da528] relative text-left h-full">
                <div className="absolute top-8 right-8 text-[#4da528] text-6xl opacity-50 font-serif">,,</div>
                
                <div className="flex items-center gap-4 mb-6">
                  <img src={testimonial.image} alt={testimonial.name} className="w-16 h-16 rounded-full object-cover" />
                  <div>
                    <h4 className="font-bold text-lg">{testimonial.name}</h4>
                    <p className="text-[#4da528] font-medium">{testimonial.position}</p>
                  </div>
                </div>

                <p className="text-gray-600 leading-relaxed mb-8">
                  {testimonial.text}
                </p>

                <div className="absolute bottom-0 right-0 w-20 h-20 bg-[#4da528]" 
                     style={{ clipPath: 'polygon(100% 0, 0% 100%, 100% 100%)' }}>
                </div>
              </div>
            </div>
          ))}
        </Slider>
        <div className="mt-[80px]">
          <img 
            src={BottomImage} 
            alt="Bottom decoration" 
            className="w-full rounded-lg"
          />
        </div>
      </div>

      <style>
        {`
          .slick-prev:before, .slick-next:before {
            color: #4da528;
            font-size: 24px;
          }
          .slick-dots li button:before {
            font-size: 12px;
            color: #4da528;
          }
          .slick-dots li.slick-active button:before {
            color: #4da528;
          }
        `}
      </style>
    </section>
  );
};

export default TestimonialCard;