// import MainNavbar from "@/components/mainNavbar";
// import Footer from "@/components/footer";
import MainNavbar from "@/components/mainNavbar";
import DynamicSlides from "@/components/slider";
import Image from "next/image";
import Link from "next/link";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>

      <main className=" ">
        {/* 1ci hisse */}

        <header className='relative w-full h-[700px] bg-[url(/fon.png)] bg-cover bg--no repeat' >
          <MainNavbar />
          <div className="w-full md:w-2/3 h-56 text-white  ml-5 my-24">
            <h1 className="text-6xl font-sans font-semibold">Live Sustainable </h1>

            <div className=" flex items-center flex-wrap mt-8  ">
              <h3 className="text-7xl font-sans font-normal "> Feel The Nature </h3>
              <div className="flex items-center gap-5 ml-0 2xl:ml-5">
                <h3 className="text-7xl font-sans font-normal ">With</h3>
                <Image style={{ objectFit: "contain", marginTop: "7px" }} src={"/Vector.png"} alt={""} width={47} height={72} />
                <Image style={{ objectFit: "contain", marginTop: "7px" }} src={"/Plus.png"} alt={""} width={47} height={72} />
                <Image style={{ objectFit: "contain", marginTop: "7px" }} src={"/Vector1.png"} alt={""} width={47} height={52} />
              </div>
            </div>
          </div>

          <Link href={"/sunroom"}>
            <div className="ml-4  mt-32">
              <Image style={{ objectFit: "contain" }} src={"/circle.png"} alt={""} width={130} height={130} />
            </div>
          </Link>

        </header>

        {/* 2ci hisse */}
        <div className=" absolute left-0 top-[600px] w-full h-[690px] p-14 rounded-t-3xl bg-slate-200 flex flex-col gap-4 mt-5 md:mt-1">
          <div className="  flex flex-col gap-3 h-1/2 md:h-1/4 ">
            <span className=" font-sans text-xs">Sustainable Outdoor Living Structures I Custom Pergolas, Sunrooms, Louvers & ADU Modules</span>
            <p className=" text-xl font-sans tracking-tight text-left shadow-sm mb-2">Ante quis sed nibh cras. Ornare ullamcorper libero at elementum enim morbi pulvinar.
              Ac hendrerit nisl rhoncus nisl tempus. Ante quis sed nibh cras. Ornare ullamcorper
              libero at elementum enim morbi pulvinar. Ac hendrerit nisl rhoncus nisl tempus.
            </p>
            <Image src={"/LearnMore.png"} alt={""} width={100} height={30} />
          </div>
          <DynamicSlides />
        </div>
        <div>
        <Footer />
        </div>
       
         
      </main>
    </>

  );
}
