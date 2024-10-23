"use client";
import TitleCss from "../location_text/title_css";
import StackCss from "../stack_text/stack_css";
export default function StackComponent() {
  return (
    <>
      <TitleCss title="STACK" />
      <div className="bg-blue-700 w-11/12 h-5/6 flex flex-col justify-evenly">
        <div className="flex h-32 items-center gap-10">
          <StackCss name="FRONT" />
          <div>HTML</div>
          <div>JavaScript</div>
          <div>TypeScript</div>
          <div>React</div>
          <div>Next.js</div>
          <div>CSS</div>
          <div>Vanilla Extract</div>
          <div>TailwindCSS</div>
        </div>
        <div className="flex h-32 items-center gap-10">
          <StackCss name="BACK" />
          <div>Node.js</div>
          <div>Nest.js</div>
          <div>Express</div>
          <div>Python</div>
        </div>
        <div className="flex h-32 items-center gap-10">
          <StackCss name="DATABASE" />
          <div>SQLite</div>
          <div>MongoDB</div>
          <div>PostgreSQL</div>
          <div>MySQL</div>
          <div>MariaDB</div>
        </div>
        <div className="flex h-32 items-center gap-10">
          <StackCss name="Collaboration & Tools"/>
          <div>Slack</div>
          <div>Notion</div>
          <div>Figma</div>
          <div>AWS</div>
        </div>
      </div>
    </>
  )
}