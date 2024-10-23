"use client"; // 클라이언트 컴포넌트

import React, { useState } from "react";
import ProjectSubMenu from "./project_menu/sub_menu";
import Link from "next/link";

export default function MenuComponent() {
  const [openMenu, setOpenMenu] = useState(false);
  const [projectMenu, setProjectMenu] = useState(false);
  return (
    <div className="text-4xl" onMouseEnter={() => setOpenMenu(true)} onMouseLeave={() => setOpenMenu(false)}>
      =
      {openMenu && (
        <div className="bg-blue-500 ml-6">
          <div className="flex" onMouseEnter={() => setProjectMenu(true)} onMouseLeave={() => setProjectMenu(false)}>
            <div>
              PROJECT
            </div>
            {projectMenu && (
              <div>
                <ProjectSubMenu />
              </div>
            )}
          </div>
          <Link href="/component/stack">
            <div>
              STACK
            </div>
          </Link>
          <Link href="/component/profile">
            <div>
              PROFILE
            </div>
          </Link>
        </div>
      )}
    </div>
  );
}
