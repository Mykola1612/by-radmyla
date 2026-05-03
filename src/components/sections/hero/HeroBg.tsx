import Image from "next/image";

export const HeroBg = () => {
  return (
    <>
      <Image
        src="/images/premium-hair-salon-bg.webp"
        alt="Description of the image"
        fill
        priority
        className="absolute -z-20 object-cover"
      />
      <div
        className="absolute inset-0
          bg-[radial-gradient(ellipse_at_30%_50%,_rgba(0,0,0,0.8)_0%,_rgba(0,0,0,0.3)_50%,_transparent_100%)]"
      ></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/60"></div>
    </>
  );
};
