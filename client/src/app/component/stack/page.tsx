"use client";
import TitleCss from "../location_text/title_css";
import StackCss from "../stack_text/stack_css";
export default function StackComponent() {
  return (
    <>
      <TitleCss title="STACK"/>
      <div className="bg-blue-700 w-11/12 h-5/6 flex flex-col justify-evenly">
        <div className="flex h-32 items-center">
          <StackCss name="FRONT"/>
          <div>이미지들</div>
        </div>
        <div className="flex h-32 items-center">
          <StackCss name="BACK"/>
          <div>이미지들</div>
        </div>
        <div className="flex h-32 items-center">
          <StackCss name="DATABASE"/>
          <div>이미지들</div>
        </div>
      </div>
    </>
  )
}