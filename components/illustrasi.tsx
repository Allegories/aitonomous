"use client";

import Image from "next/image";
import IllustrationImage from "@/public/images/ilustrasi-edge-ai.svg";


export default function Illustrasi() {


  return(

    <div className="flex relative justify-center -mt-8 pb-4 md:pb-12 mt-[-150px]" data-aos="fade-up">
            <Image
              className="max-w-none"
              src={IllustrationImage}
              width={1104}
              height={384}
              alt="EdgeAI"
            />
       </div>
  );


}
