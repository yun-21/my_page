"use client"
// import Image from "next/image";
import TitleCss from "./component/location_text/title_css";

export default function Home() {
  return (
    <>
      <TitleCss title="YEAR" />
      <div className="h-2 bg-red-700 relative flex justify-between items-center px-3 w-full">
        <div className="relative">
          <div className="w-40 h-1 bg-blue-700 rotate-90 absolute z-0 -ml-14 -mt-16 flex">
            <div className="text-pink-900 -rotate-90 flex w-40 -mt-[134px] ml-12">
              <div className="text-5xl">*</div>
              <div className="text-base whitespace-nowrap">
                <div>
                  12월11일~12월20일
                </div>
                <div>블루투스 LED 제어</div>
              </div>
            </div>
          </div>
          <div className="w-40 h-20 flex items-center justify-center bg-blue-600 rounded-full relative z-10">2019</div>
        </div>
        <div className="relative">
          <div className="w-40 h-20 flex items-center justify-center bg-blue-600 rounded-full relative z-10">2020</div>
          <div className="w-60 h-1 bg-blue-700 rotate-90 absolute z-0 -ml-24 mt-20 flex">
            <div className="text-pink-900 -rotate-90 flex w-40 -mt-[64px] ml-20">
              <div className="text-5xl">*</div>
              <div className="text-base whitespace-nowrap">
                <div>
                  12월14일
                </div>
                <div>홈쇼핑</div>
              </div>
            </div>
            <div className="text-pink-900 -rotate-90 flex w-40 -mt-[142px]">
              <div className="text-5xl">*</div>
              <div className="text-base whitespace-nowrap">
                <div>
                  12월20일
                </div>
                <div>리눅스기반 홈페이지 구축</div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="w-40 h-1 bg-blue-700 rotate-90 absolute z-0 -ml-14 -mt-16 flex gap-12">
            <div className="text-pink-900 -rotate-90 flex w-40 -mt-[141px] ml-12">
              <div className="text-5xl">*</div>
              <div className="text-base whitespace-nowrap">
                <div>
                  12월14일
                </div>
                <div>온라인 학습프로그램 DB구축</div>
              </div>
            </div>
          </div>
          <div className="w-40 h-20 flex items-center justify-center bg-blue-600 rounded-full relative z-10">2021</div>
        </div>
        <div className="relative">
          <div className="w-40 h-20 flex items-center justify-center bg-blue-600 rounded-full relative z-10">2022</div>
          <div className="w-80 h-1 bg-red-700 rotate-90 absolute z-0 -ml-32 mt-36 flex">
            <div className="text-pink-900 -rotate-90 flex w-40 -mt-36 ml-10">
              <div className="text-5xl">*</div>
              <div className="text-base whitespace-nowrap">
                <div>
                  5월4일~6월10일
                </div>
                <div>기회는 삼세판</div>
              </div>
            </div>
            <div className="text-pink-900 -rotate-90 flex w-40 -mt-36 -ml-16">
              <div className="text-5xl">*</div>
              <div className="text-base whitespace-nowrap">
                <div>
                  6월22일
                </div>
                <div>socket 통신</div>
              </div>
            </div>
            <div className="text-pink-900 -rotate-90 flex w-40 -mt-36 -ml-16">
              <div className="text-5xl">*</div>
              <div className="text-base whitespace-nowrap">
                <div>
                  3월~6월23일
                </div>
                <div>아동 안전 시스템</div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="w-60 h-1 bg-blue-700 rotate-90 absolute z-0 -ml-24 -mt-20 flex gap-12">
            <div className="text-pink-900 -rotate-90 flex w-40 -mt-36">
              <div className="text-5xl">*</div>
              <div className="text-base whitespace-nowrap">
                <div>
                  1월15일~1월30일
                </div>
                <div>codeit 코딩 교육콘텐츠</div>
              </div>
            </div>
            <div className="text-pink-900 -rotate-90 flex w-40 -ml-20 -mt-36">
              <div className="text-5xl">*</div>
              <div className="text-base whitespace-nowrap">
                <div>온도, 거리로 모터 제어하기</div>
              </div>
            </div>
          </div>
          <div className="w-40 h-20 flex items-center justify-center bg-blue-600 rounded-full relative z-10">2023</div>
        </div>
        <div className="relative">
          <div className="w-40 h-20 flex items-center justify-center bg-blue-600 rounded-full relative z-10">2024</div>
          <div className="w-[870px] h-1 bg-blue-700 rotate-90 absolute z-0 -ml-72 mt-[420px] flex gap-12">
            <div className="text-pink-900 -rotate-90 flex w-40 mt-[61px] -ml-10 text-end">
              <div className="text-base whitespace-nowrap">
                <div>
                  1월15일~1월30일
                </div>
                <div>delan</div>
              </div>
              <div className="text-5xl">*</div>
            </div>
            <div className="text-pink-900 -rotate-90 flex w-40 mt-[61px] -ml-24 text-end">
              <div className="text-base whitespace-nowrap">
                <div>
                  1월15일~1월30일
                </div>
                <div>수상한 자판기</div>
              </div>
              <div className="text-5xl">*</div>
            </div>
            <div className="text-pink-900 -rotate-90 flex w-40 mt-[61px] -ml-24 text-end">
              <div className="text-base whitespace-nowrap">
                <div>
                  1월15일~1월30일
                </div>
                <div>먼지능</div>
              </div>
              <div className="text-5xl">*</div>
            </div>
            <div className="text-pink-900 -rotate-90 flex w-40 mt-[61px] -ml-24 text-end">
              <div className="text-base whitespace-nowrap">
                <div>
                  1월15일~1월30일
                </div>
                <div>Next Level</div>
              </div>
              <div className="text-5xl">*</div>
            </div>
            <div className="text-pink-900 -rotate-90 flex w-40 mt-[61px] -ml-24 text-end">
              <div className="text-base whitespace-nowrap">
                <div>
                  1월15일~1월30일
                </div>
                <div>공포 게임</div>
              </div>
              <div className="text-5xl">*</div>
            </div>
            <div className="text-pink-900 -rotate-90 flex w-40 mt-[61px] -ml-24 text-end">
              <div className="text-base whitespace-nowrap">
                <div>
                  1월15일~1월30일
                </div>
                <div>운세 타로</div>
              </div>
              <div className="text-5xl">*</div>
            </div>
            <div className="text-pink-900 -rotate-90 flex w-40 mt-[61px] -ml-24 text-end">
              <div className="text-base whitespace-nowrap">
                <div>
                  1월15일~1월30일
                </div>
                <div>블로그</div>
              </div>
              <div className="text-5xl">*</div>
            </div>
            <div className="text-pink-900 -rotate-90 flex w-40 mt-[61px] -ml-24 text-end">
              <div className="text-base whitespace-nowrap">
                <div>
                  1월15일~1월30일
                </div>
                <div>풍선 복권</div>
              </div>
              <div className="text-5xl">*</div>
            </div>
            <div className="text-pink-900 -rotate-90 flex w-40 mt-[61px] -ml-24 text-end">
              <div className="text-base whitespace-nowrap">
                <div>
                  1월15일~1월30일
                </div>
                <div>로또</div>
              </div>
              <div className="text-5xl">*</div>
            </div>
            <div className="text-pink-900 -rotate-90 flex w-40 mt-[61px] -ml-24 text-end">
              <div className="text-base whitespace-nowrap">
                <div>
                  1월15일~1월30일
                </div>
                <div>거절 프로젝트</div>
              </div>
              <div className="text-5xl">*</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
