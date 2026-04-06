

export const Banner = () => {
  return (
    <>
    <div className="relative w-full ">

  {/* Image */}
  <img
    src="/banner.png"
    alt="banner img"
    className="w-full h-full object-cover"
  />

  {/* Black opacity layer */}
  <div className="absolute inset-0 bg-black/30">
 
  
  </div>
  
</div>

    </>
  )
}
