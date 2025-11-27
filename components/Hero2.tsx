import LpiContent from "./LpiContent";

export default function Hero2() {
  
  return (
    <section className="py-10 bg-white overflow-hidden">
      <div className="container mx-auto px-4 text-center">
        {/* JUDUL */}
        <h2 className="text-2xl md:text-5xl font-bold text-teal-800 mb-4">
          Welcome to
        </h2>
        <h2 className="text-2xl md:text-4xl font-bold text-teal-800 mb-4">
          <strong>BAITUN NA'IM ISLAMIC FULL DAY SCHOOL</strong>
        </h2>
        <h3 className="text-xl md:text-xl font-medium text-gray-400 mb-4">
          Sekolah Hebat untuk Semua dan Setiap Anak
        </h3>
        <LpiContent/>

        {/* GARIS */}
        {/* <div className="w-180 h-0.5 bg-teal-600 mx-auto mb-10"></div> */}

      </div>
      
    </section>
  );
}
