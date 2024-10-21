"use client"; // 클라이언트 컴포넌트

import React, { useState } from "react";
import ProjectSubMenu from "./project_menu/sub_menu";
import StackSubMenu from "./stack_menu/sub_menu";
import ProfileSubMenu from "./profile_menu/sub_menu";

export default function MenuComponent() {
  const [openMenu, setOpenMenu] = useState(false);
  const [projectMenu, setProjectMenu] = useState(false);
  const [stackMenu, setStackMenu] = useState(false);
  const [profileMenu, setProfileMenu] = useState(false);

  return (
    <div onMouseEnter={() => setOpenMenu(true)} onMouseLeave={() => setOpenMenu(false)}>
      목차
      {openMenu && (
        <div>
          <div onMouseEnter={() => setProjectMenu(true)} onMouseLeave={() => setProjectMenu(false)}>
            PROJECT
          {projectMenu && <ProjectSubMenu/>}
          </div>
          <div onMouseEnter={() => setStackMenu(true)} onMouseLeave={() => setStackMenu(false)}>
            STACK
            {stackMenu && <StackSubMenu/>}
          </div>
          <div onMouseEnter={() => setProfileMenu(true)} onMouseLeave={() => setProfileMenu(false)}>
            PROFILE
            {profileMenu && <ProfileSubMenu/>}
          </div>
        </div>
      )}
    </div>
  );
}
