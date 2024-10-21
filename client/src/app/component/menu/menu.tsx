"use client"; // 클라이언트 컴포넌트

import React, { useState } from "react";
import ProjectSubMenu from "./project_menu/sub_menu";

export default function MenuComponent() {
  const [openMenu, setOpenMenu] = useState(false);
  const [projectMenu, setProjectMenu] = useState(false);
  return (
    <div onMouseEnter={() => setOpenMenu(true)} onMouseLeave={() => setOpenMenu(false)}>
      목차
      {openMenu && (
        <div>
          <div onMouseEnter={() => setProjectMenu(true)} onMouseLeave={() => setProjectMenu(false)}>
            PROJECT
          {projectMenu && <ProjectSubMenu/>}
          </div>
          <div>
            STACK
          </div>
          <div>
            PROFILE
          </div>
        </div>
      )}
    </div>
  );
}
