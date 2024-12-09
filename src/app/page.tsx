import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/Hero';
import PopularCars from '@/components/PopularCars';
import RecommendationCars from '@/components/RecommendationCars';


export default function Home() {
  return (
    <>
    <Navbar />
    <HeroSection />
    <PopularCars />
    <RecommendationCars />
    <Footer />

    </>
  );
}
