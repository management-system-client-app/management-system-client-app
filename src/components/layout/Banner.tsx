import { useEffect, useState } from "react"
import bannerImg from "../../assets/banner.png"

const AnimatedWord = ({ word }: { word: string }) => {
  const [visibleCount, setVisibleCount] = useState(0)

  useEffect(() => {
    if (visibleCount > word.length) return

    if (visibleCount === word.length) {
      const pause = setTimeout(() => setVisibleCount(0), 800)
      return () => clearTimeout(pause)
    }

    const timer = setTimeout(() => {
      setVisibleCount((prev) => prev + 1)
    }, 120)

    return () => clearTimeout(timer)
  }, [visibleCount, word])

  return (
    <span className="inline-flex">
      {word.split("").map((letter, i) => (
        <span
          key={i}
          className="transition-all duration-500"
          style={{
            opacity: i < visibleCount ? 1 : 0,
            transition: "opacity 0.5s ease",
          }}
        >
          {letter}
        </span>
      ))}
    </span>
  )
}

export const Banner = () => {
  return (
    <div className="relative w-full h-112.5 md:h-175 overflow-hidden">

      {/* Light Green */}
      <div
        className="absolute top-0 left-0 h-full w-[7%] z-10"
        style={{
          background: "#829A0D",
          opacity: 0.9,
          clipPath: "polygon(0 0, 100% 67.5%, 0 50%)",
        }}
      />

      {/* Deep Green */}
      <div
        className="absolute top-0 left-0 h-full w-[20%] z-20"
        style={{
          background: "#20430B",
          opacity: 0.8,
          clipPath: "polygon(0 50%, 100% 100%, 0 100%)"
        }}
      />

      {/* IMAGE */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${bannerImg})`,
          backgroundSize: "110%",
          backgroundPosition: "80% center",
          backgroundRepeat: "no-repeat",
        }}
      />
      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/10" />
      <div className="absolute inset-0 bg-green-500/10 mix-blend-overlay" />

      {/* CONTENT */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        <p className="text-[#4da528] font-yester text-xl md:text-3xl mb-2">
          Explore the world
        </p>
        <h1 className="text-white font-jakarta md:font-extrabold text-5xl md:text-7xl font-bold leading-tight">
          Tour{" "}
          <span className="text-[#4da528] font-yester">
            <AnimatedWord word="Travel" />
          </span>{" "}
          & <br /> Adventure Camping
        </h1>
      </div>
    </div>
  )
}