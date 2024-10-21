"use client"
// import Image from "next/image";
import TitleCss from "./component/location_text/title_css";

export default function Home() {
  return (
    <>
      <TitleCss title="YEAR"/>
      <div className="h-2 bg-red-700 relative flex justify-between items-center px-3 w-full">
        <div className="relative">
          <div className="w-60 h-1 bg-blue-700 rotate-90 absolute z-0 -ml-24 -mt-20 flex">
            <div className="text-pink-900 -rotate-90 flex w-40 -mt-36">
              <div className="text-5xl">*</div>
              <div className="text-3xl whitespace-nowrap">asdf에라이df</div>
            </div>
            <div className="text-pink-900 -rotate-90 flex -mt-20">
              <div className="text-5xl">*</div>
              <div className="text-3xl whitespace-nowrap">에라이</div>
            </div>
          </div>
          <div className="w-40 h-20 flex items-center justify-center bg-blue-600 rounded-full relative z-10">2019</div>
        </div>
        <div className="relative">
          <div className="w-40 h-20 flex items-center justify-center bg-blue-600 rounded-full relative z-10">2020</div>
          <div className="w-60 h-1 bg-blue-700 rotate-90 absolute z-0 -ml-24 mt-20 flex gap-12">
            <div className="text-pink-900 text-5xl -mt-3 ml-24">*</div>
            <div className="text-pink-900 text-5xl -mt-3">*</div>
          </div>
        </div>
        <div className="relative">
          <div className="w-60 h-1 bg-blue-700 rotate-90 absolute z-0 -ml-24 -mt-20 flex gap-12">
            <div className="text-pink-900 text-5xl -mt-3 ml-10">*</div>
            <div className="text-pink-900 text-5xl -mt-3">*</div>
          </div>
          <div className="w-40 h-20 flex items-center justify-center bg-blue-600 rounded-full relative z-10">2021</div>
        </div>
        <div className="relative">
          <div className="w-40 h-20 flex items-center justify-center bg-blue-600 rounded-full relative z-10">2022</div>
          <div className="w-60 h-1 bg-blue-700 rotate-90 absolute z-0 -ml-24 mt-20 flex gap-12">
            <div className="text-pink-900 text-5xl -mt-3 ml-24">*</div>
            <div className="text-pink-900 text-5xl -mt-3">*</div>
          </div>
        </div>
        <div className="relative">
          <div className="w-60 h-1 bg-blue-700 rotate-90 absolute z-0 -ml-24 -mt-20 flex gap-12">
            <div className="text-pink-900 text-5xl -mt-3 ml-10">*</div>
            <div className="text-pink-900 text-5xl -mt-3">*</div>
          </div>
          <div className="w-40 h-20 flex items-center justify-center bg-blue-600 rounded-full relative z-10">2023</div>
        </div>
        <div className="relative">
          <div className="w-40 h-20 flex items-center justify-center bg-blue-600 rounded-full relative z-10">2024</div>
          <div className="w-60 h-1 bg-blue-700 rotate-90 absolute z-0 -ml-24 mt-20 flex gap-12">
            <div className="text-pink-900 text-5xl -mt-3 ml-24">*</div>
            <div className="text-pink-900 text-5xl -mt-3">*</div>
          </div>
        </div>
      </div>
    </>
  );
}
