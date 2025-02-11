"use client";
import Image from "next/image";
import Link from "next/link";
import Logo from "./logo";
import IllustrationImage from "@/public/images/ilustrasi-edge-ai.svg";




export default function Header() {

  return (
   
    <header className="z-30 mt-2 w-full md:mt-5">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative flex h-14 items-center justify-between gap-3 rounded-2xl bg-gray-900/90 px-3 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,theme(colors.gray.800),theme(colors.gray.700),theme(colors.gray.800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] after:absolute after:inset-0 after:-z-10 after:backdrop-blur-sm">
          {/* Site branding */}
          <div className="flex flex-1 items-center">
            <Logo />
          </div>

          {/* Desktop sign in links */}
          <ul className=" hidden md:flex flex-col font-medium mt-4 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
              <li>
                <a href="#fitur" 
                      className="block py-2 px-3 md:p-0 text-white rounded hover:border-b-2 hover:border-white"
                      >Fitur</a>
              </li>
              <li>
                <a href="#model" className="block py-2 px-3 md:p-0 text-white rounded hover:border-b-2 hover:border-white">Model</a>
              </li>
              <li>
                <a href="#solusi" className="block py-2 px-3 md:p-0 text-white rounded hover:border-b-2 hover:border-white">Solusi Industri</a>
              </li>
          </ul>
          <ul className="flex flex-1 items-center justify-end gap-3">
            <li>
              <Link
                href="https://wa.me/628158825615?text=Halo%20saya%20tertarik%20dengan%20solusi%20AIoT%20dari%20AI-Tonomous"
                target="_blank" // Open in a new tab
                rel="noopener noreferrer" // Security best practice
                className="btn-sm bg-gradient-to-t from-indigo-600 to-indigo-500 bg-[length:100%_100%] bg-[bottom] py-[5px] text-white shadow-[inset_0px_1px_0px_0px_theme(colors.white/.16)] hover:bg-[length:100%_150%]"
              >
                Konsultasi Sekarang
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
    
  );
}
