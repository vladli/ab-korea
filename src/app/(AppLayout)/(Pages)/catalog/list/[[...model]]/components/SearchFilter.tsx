"use client";
import React from "react";

import Select from "@/components/Form/Select";

export default function SearchFilter() {
  return (
    <section className="flex h-full w-full p-4">
      <div className="my-auto flex w-full flex-col gap-4">
        <div className="grid grid-cols-2 gap-4">
          <Select
            placeholder="Марка"
            styles={{
              control: (baseStyles) => ({
                ...baseStyles,
                width: "100%",
              }),
            }}
          />
          <Select
            styles={{
              control: (baseStyles) => ({
                ...baseStyles,
                width: "100%",
              }),
            }}
          />
        </div>

        <div className="grid grid-cols-4 gap-4">
          <Select />
          <Select />
          <Select />
          <Select />
        </div>
      </div>
    </section>
  );
}
