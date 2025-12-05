"use client";

export default function Hero2() {


  return (
    <section className="relative w-full aspect-[2/1] md:[2/1] md:max-h-screen overflow-hidden">

  {/* Background Image */}
  <img
    src="/images/Flyer-SPMB.jpg"
    alt="Hero Image"
    className="absolute inset-0 w-full h-full object-cover object-center"
  />

  {/* Overlay */}
  <div className="absolute inset-0 bg-black/40"></div>

  <div className="absolute inset-0">
  <div className="absolute right-3 bottom-3 sm:right-6 sm:bottom-10 lg:right-12 lg:bottom-12">
    <a
      href="https://spmbbaitunnaim.com/"
      target="_blank"
      rel="noopener noreferrer"
      className="
        inline-block bg-yellow-500 text-teal-800 font-semibold font-poppins rounded-full
        transition duration-300 hover:bg-yellow-400 hover:shadow-md
        text-[8px] sm:text-[10px] md:text-[20px] lg:text-[32px]
        px-2 sm:px-6 md:px-3 lg:px-8
        py-0.5 sm:py-1.5 md:py-1 lg:py-1.5
      "
    >
      Daftar Sekarang
    </a>
  </div>
</div>

      {/* Slide wrapper */}
      {/* <div className="absolute inset-0">
        {heroimages.map((img, i) => (
          <div
            key={i}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-[1200ms]
              ${i === currentIndex ? "opacity-100" : "opacity-0"}
            `}
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}
      </div> */}
    </section>
  );
}
