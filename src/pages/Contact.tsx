import { Phone, MapPin, Mail, PlayCircle } from "lucide-react"; 
import Footer from "@/components/layout/Footer"; 

export default function Contact() {
  return (
    <div className="bg-white dark:bg-gray-900">  
      {/* Hero Section */}
      <div
        className="relative h-[300px] w-full bg-cover bg-center bg-no-repeat flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070&auto=format')",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl font-bold mb-3">Contact Us</h1>
          <p className="text-lg">
            <span className="text-[#ff970d]">Home</span> &gt; Contact Us
          </p>
        </div>
      </div>

      {/* 3 Cards Section */}
      <div className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Address Card */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-all cursor-pointer group">
          <div className="w-20 h-20 bg-[#4da528]/10 rounded-full flex items-center justify-center mx-auto mb-5 group-hover:bg-[#4da528]/20 transition-all">
            <MapPin className="w-10 h-10 text-[#4da528]" />
          </div>
          <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-white">Address</h3>
          <p className="text-gray-600 dark:text-gray-300">Bowery St, New York, NY 10013, USA</p>
        </div>

        {/* Phone Card */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-all cursor-pointer group">
          <div className="w-20 h-20 bg-[#ff970d]/10 rounded-full flex items-center justify-center mx-auto mb-5 group-hover:bg-[#ff970d]/20 transition-all">
            <Phone className="w-10 h-10 text-[#ff970d]" />
          </div>
          <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-white">Phone Number</h3>
          <p className="text-gray-600 dark:text-gray-300">+1255 - 568 - 6523</p>
          <p className="text-gray-600 dark:text-gray-300">+1255 - 568 - 6523</p>
        </div>

        {/* Mail Card */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-all cursor-pointer group">
          <div className="w-20 h-20 bg-[#4da528]/10 rounded-full flex items-center justify-center mx-auto mb-5 group-hover:bg-[#4da528]/20 transition-all">
            <Mail className="w-10 h-10 text-[#4da528]" />
          </div>
          <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-white">Mail Address</h3>
          <p className="text-gray-600 dark:text-gray-300">email@example.com</p>
          <p className="text-gray-600 dark:text-gray-300">info@yourdomain.com</p>
        </div>
      </div>

      {/* Get in Touch + Form Section */}
      <div className="max-w-7xl mx-auto px-4 pb-20 grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Side */}
        <div>
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">Get in touch</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipiscing elit mattis faucibus odio feugiat arc dolor.
          </p>
          <div className="mt-8 flex items-center gap-4 text-[#4da528] hover:text-[#ff970d] transition-colors cursor-pointer">
            <PlayCircle className="w-8 h-8" />
            <span className="font-semibold">Watch our intro video</span>
          </div>
        </div>

        {/* Right Side Form */}
        <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">Fill Up The Form</h3>
          <p className="text-sm text-gray-500 mb-6">
            Your email address will not be published. Required fields are marked *
          </p>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("Message sent! We'll contact you soon.");
            }}
            className="space-y-5"
          >
            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">
                Your Name *
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-[#4da528] focus:border-transparent outline-none"
                placeholder="John Doe"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">
                Email Address *
              </label>
              <input
                type="email"
                className="w-full border border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-[#4da528] focus:border-transparent outline-none"
                placeholder="you@example.com"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">
                Your Message *
              </label>
              <textarea
                rows={4}
                className="w-full border border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-[#4da528] focus:border-transparent outline-none resize-none"
                placeholder="Write your message here..."
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#4da528] hover:bg-[#ff970d] text-white font-bold py-3 rounded-xl transition-all duration-300"
            >
              Get In Touch
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}