import { CommonSEO } from "@/components/SEO";
import BlankTemplate from "@/components/templates/BlankTemplate";
import PrimaryNavigation from "@/components/molecules/PrimaryNavigation";
import Section1 from "@/components/molecules/Section1";
import Section2 from "@/components/molecules/Section2";

const index = (props: any) => {
  return (
    <BlankTemplate>
      <PrimaryNavigation />
      <Section1 />
      <Section2 />
    </BlankTemplate>
  );
};

export default index;
