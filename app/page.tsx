import Hero from "./components/tuvan/Hero";
import MarketInsights from "./components/tuvan/MarketInsights";
import CoreServices from "./components/tuvan/CoreServices";
import ExecutionPower from "./components/tuvan/ExecutionPower";
import CaseStudies from "./components/tuvan/CaseStudies"; 
import BrandShowcase from "./components/tuvan/ShowCase";
import OperationTech from "./components/tuvan/OperationTech";
import PartnerProcess from "./components/tuvan/PartnerProcess";
import FooterContact from "./components/tuvan/FooterContact";


export default function Home() {
  return (
    <>
    <Hero />
       <MarketInsights />
       <CoreServices />
       <ExecutionPower  />
       <CaseStudies />
       <BrandShowcase />
       <OperationTech />
       <PartnerProcess />
       <FooterContact />
    </>
  );
}
