"use client";

import React, { useState } from "react";
import Link from "next/link";

type SlideTextType = {
  texts: { title: string, href: string }[]; // 글씨 배열
  visibleCount: number; // 처음 보이는 글씨 개수
};

const ProjectSlide: React.FC<SlideTextType> = ({ texts, visibleCount }) => {
  const [slideNum, setSlideNum] = useState(0); // 현재 슬라이드 번호
  const totalTexts = texts.length; // 총 글씨 개수

  const navigation = (direction: number) => {
    const nowSlideNum = Math.max(0, Math.min(totalTexts - visibleCount, slideNum + direction));
    setSlideNum(nowSlideNum);
  };

  return (
    <div className="relative">
      <div className="flex justify-center gap-20">
        {texts.slice(slideNum, slideNum + visibleCount).map((text, index) => (
          <Link href={text.href} key={index}>
            <div className="flex-shrink-0 w-[150px] p-5 text-center border text-red-800 bg-gray-500 rounded hover:bg-blue-700">
              {text.title}
            </div>
          </Link>
        ))}
      </div>
      {/* 좌우 버튼 추가 */}
      <button onClick={() => navigation(-2)} disabled={slideNum === 0} className="absolute left-20 top-1/2 transform -translate-y-1/2 text-2xl">
        &#60; {/* 좌측 화살표 */}
      </button>
      <button onClick={() => navigation(2)} disabled={slideNum + visibleCount >= totalTexts} className="absolute right-20 top-1/2 transform -translate-y-1/2 text-2xl">
        &#62; {/* 우측 화살표 */}
      </button>
    </div>
  );
};

export default ProjectSlide;