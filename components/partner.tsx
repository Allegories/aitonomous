"use client";

import Image from "next/image";
import Partner from "@/public/images/partner.png";


export default function Illustrasi() {
  return(

    <div className="flex justify-center mt-16 mb-16 " data-aos="fade-up">
            <Image
              className="max-w-none"
              src={Partner}
              width={1104}
              height={384}
              alt="EdgeAI"
            />
       </div>
  );


}
