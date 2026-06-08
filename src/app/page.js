import Banner from "@/component/Banner";
import Featured from "@/component/Featured";
import HowAdoptionWork from "@/component/HowAdoptionWork";
import PetCare from "@/component/PetCare";
import RelatedVideos from "@/component/RelatedVideos";
import SuccessStories from "@/component/SuccessStories";
import WhyAdopt from "@/component/WhyAdopt";


export default function Home() {
  return (
      <div>
        <Banner></Banner>
        <Featured></Featured>
        <WhyAdopt></WhyAdopt>
        <SuccessStories></SuccessStories>
        <PetCare></PetCare>
        <HowAdoptionWork></HowAdoptionWork>
        <RelatedVideos></RelatedVideos>
        
      </div>
  );
}
