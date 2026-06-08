import Banner from "@/component/Banner";
import Featured from "@/component/Featured";
import SuccessStories from "@/component/SuccessStories";
import WhyAdopt from "@/component/WhyAdopt";


export default function Home() {
  return (
      <div>
        <Banner></Banner>
        <Featured></Featured>
        <WhyAdopt></WhyAdopt>
        <SuccessStories></SuccessStories>
      </div>
  );
}
