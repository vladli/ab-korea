"use client";
import React, { useState } from "react";
import clsx from "clsx";

import Header from "@/components/Layout/Header";

const tabs = [
  {
    id: 1,
    title: "Tab 1",
  },
  {
    id: 2,
    title: "Tab 2",
  },
];

function Block_1() {
  const [activeTab, setActiveTab] = useState(1);
  return (
    <>
      <div className="tabs tabs-boxed w-36">
        {tabs.map((tab) => (
          <a
            className={clsx("tab", { "tab-active": activeTab === tab.id })}
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.title}
          </a>
        ))}
      </div>
    </>
  );
}

export default Block_1;
