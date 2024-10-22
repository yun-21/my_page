import React from "react"
interface TitleType {
  title: string;
}
export default function TitleCss({title}:TitleType) {
  return <div className="text-5xl absolute top-20 mt-10 h-10 font-bold">{title}</div>
}