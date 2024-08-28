import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ThirdSectionSlider from "@/components/MainThirdSectionSlider";
import FourthSectionMain from "@/components/FourthSectionMain";
import SecondSectionMain from "@/components/SecondSectionMain";
import Header from '@/components/FirstSectionMain';
import ThirdSectionMain from '@/components/ThirdSectionMain';

export default function Home() {

  return (
    <>
      <main className="flex flex-col min-h-screen overflow-x-hidden">

        {/* 1st Section */}
        <Header />
        {/* 2nd Section*/}
        <SecondSectionMain />

        {/* 3rd section */}
        <ThirdSectionMain />
        
        {/* 4th section */}
        <FourthSectionMain />

      </main>
    </>
  );
}
