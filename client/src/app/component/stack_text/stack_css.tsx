import React from "react"
interface StackType {
  name: string;
}
export default function StackCss({name}:StackType) {
  return <div className="text-2xl w-1/4 h-full flex items-center justify-center bg-red-400 font-semibold">{name}</div>
}