export const metadata = {
  title: "AItonomous AIoT Solutions",
  description: "AItonomous streamlines data verification processes, enhances customer insights with digital precision, and empowers surveillance systems to optimize business operations using AIoT-driven technology.",
};

import PageIllustration from "@/components/page-illustration";
import Hero from "@/components/hero-home";
import Workflows from "@/components/workflows";
import Features from "@/components/features";
import Testimonials from "@/components/solusiindustri";
import Cta from "@/components/cta";
import Solusiindustri from "@/components/solusiindustri";

export default function Home() {
  return (
    <>
      <PageIllustration />
      <Hero />
      <Features id="fitur"/>
      <Workflows id="model"/>
      {/* <Testimonials id="solusi"/> */}
      <Solusiindustri />
      <Cta />
    </>
  );
}
