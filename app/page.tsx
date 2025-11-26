import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Hero2 from '@/components/Hero2';
import KataMereka from '@/components/KataMereka';
import Kerjasama from '@/components/Kerjasama';
import SosialMedia from '@/components/SosialMedia';
import JoinSection from '@/components/JoinSection';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen text-black">
      <Navbar  />
      <main className="flex-1 pt-22">
        <Hero2 />
        <KataMereka />
          <Kerjasama/>
          <SosialMedia/>
      </main>
      <Footer />
    </div>
  );
}
