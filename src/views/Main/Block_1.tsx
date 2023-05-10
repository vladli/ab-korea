import React from "react";

import Header from "@/components/Layout/Header";

function Block_1() {
  return (
    <header className="h-[100vh] w-full">
      <div className="absolute top-0 h-full w-full bg-black/60" />
      <video
        autoPlay
        className="h-full w-full object-cover"
        loop
        muted
        src="video.mp4"
      />
      <div className="absolute top-0 flex h-10 w-full items-center bg-black/30">
        AB Koreaa
      </div>
    </header>
  );
}

export default Block_1;
