"use client";

import Image from "next/image";
import IllustrationImage from "@/public/images/ilustrasi-edge-ai.svg";


export default function Illustrasi() {
  const divStyle = {
    marginTop: '-150px',
    position: 'relative',
  };

  return(

    <div className="flex justify-center -mt-8 pb-4 md:pb-12" data-aos="fade-up" style={divStyle}>
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
