"use client"
import { motion } from "framer-motion"

type Partner = {
  name: string
  logo: string
}

/* ===== DATA DUMMY LOGO ===== */
const partners: Partner[] = [
  { name: "Partner 1", logo: "./logo.png" },
  { name: "Partner 2", logo: "./logo_lpi.png" },
  { name: "Partner 3", logo: "../logo.png" },
  { name: "Partner 4", logo: "./logo_lpi.png" },
  { name: "Partner 5", logo: "./logo.png" },
  { name: "Partner 6", logo: "./logo_lpi.png" },
  { name: "Partner 7", logo: "./logo.png" },
  { name: "Partner 8", logo: "./logo_lpi.png" },
]


export default function Kerjasama() {
  return (
    <section className="py-10 bg-white overflow-hidden">
      <div className="container mx-auto px-4 text-center">

        {/* JUDUL */}
        <h2 className="text-4xl md:text-5xl font-bold text-teal-800 mb-4">
          Kerjasama
        </h2>

        {/* GARIS */}
        <div className="w-180 h-0.5 bg-teal-600 mx-auto mb-8"/></div>

        {/* WRAPPER */}
        <div className="relative w-full overflow-hidden">

          {/* ANIMATION TRACK */}
          <motion.div
            className="flex w-max gap-12"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              duration: 25,      // 🔥 makin besar makin lambat
              ease: "linear",
            }}
          >

            {/* DUPLIKASI LIST BIAR LOOP MULUS */}
            {[...partners, ...partners].map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-center w-40 md:w-48 h-35"
              >
                <img
                  src={item.logo}
                  alt={item.name}
                  className="max-h-30 object-contain"
                />
              </div>
            ))}

          </motion.div>

        
      </div>
    </section>
  )
}
