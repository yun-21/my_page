"use client";
import TitleCss from "../location_text/title_css";
export default function ProfileComponent() {
  return (
    <>
      <TitleCss title="PROFILE" />
      <div className="flex w-full h-full text-black">
        <div className="flex flex-col justify-evenly w-40 text-4xl ml-10">
          <div>이름</div>
          <div>생년월일</div>
          <div>email</div>
          <div>git</div>
          <div>tel</div>
        </div>
        <div className="flex flex-col justify-evenly items-center w-40 text-4xl">
          <div>:</div>
          <div>:</div>
          <div>:</div>
          <div>:</div>
          <div>:</div>
        </div>
        <div className="flex flex-col justify-evenly w-92 text-4xl">
          <div>신지윤</div>
          <div>2000.03.10</div>
          <div>sinjiyun290@gmail.com</div>
          <div>https://github.com/yun-21</div>
          <div>010 - 3657 - 6729</div>
        </div>
      </div>
    </>
  )
}