"use client";
import React, { useEffect, useState } from "react";

import Button from "@/components/Button";
import InputGroup from "@/components/Form/InputGroup";
import Select from "@/components/Form/Select";
import Body from "@/components/Layout/Body";
import { Maker } from "@/config/cars";

function Main() {
  const [maker, setMaker] = useState("Audi");
  const [model, setModel] = useState("");

  return (
    <Body>
      <section className="my-10 w-full">
        <form className="mx-auto flex w-[80vw] max-w-md flex-col items-center">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Марка автомобиля</span>
            </label>
            <Select onChange={(e) => setMaker(e.target.value)}>
              {Object.keys(Maker).map((key) => (
                <Select.Option key={key}>{key}</Select.Option>
              ))}
            </Select>
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Модель</span>
            </label>
            <Select onChange={(e) => setModel(e.target.value)}>
              {Maker[maker as keyof typeof Maker].map((key) => (
                <Select.Option key={key}>{key}</Select.Option>
              ))}
            </Select>
          </div>
          <Button fullWidth>Submit</Button>
        </form>
      </section>
    </Body>
  );
}

export default Main;
