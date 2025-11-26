import { User, GraduationCap, ClipboardList } from "lucide-react";

export default function Hero3() {
  const stats = [
    {
      icon: <User size={48} />,
      number: 321,
      label: "Pendidik & Tenaga Kependidikan",
    },
    {
      icon: <GraduationCap size={48} />,
      number: 2169,
      label: "Peserta Didik",
    },
    {
      icon: <GraduationCap size={48} />,
      number: 12624,
      label: "Alumni",
    },
    {
      icon: <ClipboardList size={48} />,
      number: 18123,
      label: "Pendaftar Calon Peserta Didik",
    },
  ];

  return (
    <section className="bg-teal-800 py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-lg flex flex-col items-center shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="text-teal-800 mb-4">{stat.icon}</div>
              <h3 className="text-3xl font-bold text-teal-800 mb-2">{stat.number.toLocaleString()}</h3>
              <p className="text-center text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
