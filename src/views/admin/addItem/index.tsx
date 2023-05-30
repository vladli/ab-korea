"use client";
import React, { useState } from "react";

import InputGroup from "@/components/Form/InputGroup";
import Select from "@/components/Form/Select";
import Body from "@/components/Layout/Body";
import { Maker } from "@/config/cars";

function Main() {
  const [maker, setMaker] = useState("");
  console.log(maker);
  return (
    <Body>
      <section className="my-10 flex w-full flex-col items-center gap-2">
        <div className="flex w-[85vw] max-w-lg flex-col items-center gap-2">
          <InputGroup className="">
            <span>Модель</span>
            <Select className="w-full">
              {Object.keys(Maker).map((key) => (
                <Select.Option key={key}>{key}</Select.Option>
              ))}
            </Select>
          </InputGroup>
        </div>
      </section>
    </Body>
  );
}

export default Main;
