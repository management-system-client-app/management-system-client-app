import { useEffect, useState } from "react"

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
            // transform: i < visibleCount ? "translateY(-0px)" : "translateY(20px)",
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
    <div className="relative w-full">
      <img
        src="/banner.png"
        alt="banner img"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/30" />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 pb-100">
        <p className="text-[#4da528] font-yester font-normal text-xl md:text-3xl mb-2">
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