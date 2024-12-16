import HeroSection from '@/components/Hero';
import PopularCars from '@/components/PopularCars';
import RecommendationCars from '@/components/RecommendationCars';
// import DashboardPage from '@/components/dashboard/Dashboard';


export default function Home() {
  return (
    <>
    <HeroSection />
    <PopularCars />
    <RecommendationCars />

    </>
  );
}
