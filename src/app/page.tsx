import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Services from "@/components/Services";
import ServicesGridSection from "@/components/ServicesGridSection";
import OrgSection from "@/components/OrgSection";
import Brands from "@/components/Brands";
import Team from "@/components/Team";
import GetStartedSection from "@/components/GetStarted";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="bg-white scrollbar-hide">
      <Navbar/>
      <About/>
      <Services/>
      <ServicesGridSection/>
      <OrgSection/> 
      <Brands/>   
      <Team/> 
      <GetStartedSection/>
      <Footer/>
    </div>
  );
}
