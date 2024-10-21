import React, { ReactHTMLElement } from "react"
interface TitleType {
  title: string;
}
export default function TitleCss({title}:TitleType) {
  return <div className="text-5xl absolute flex items-center justify-center h-full -top-90 font-bold">{title}</div>
}