"use client";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import Button from "@/components/Button";
import Input from "@/components/Form/Input";
import Select from "@/components/Form/Select";
import Body from "@/components/Layout/Body";
import { Maker } from "@/config/cars";

function Main() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => console.log(data);

  const [maker, setMaker] = useState("Audi");
  const [model, setModel] = useState(Maker[maker as keyof typeof Maker][0]);

  useEffect(() => {
    setModel(Maker[maker as keyof typeof Maker][0]);
  }, [maker]);

  function generateArrayOfYears() {
    var max = new Date().getFullYear();
    var min = max - 15;
    var years = [];

    for (var i = max; i >= min; i--) {
      years.push(i);
    }
    return years;
  }

  return (
    <Body>
      <section className="my-10 w-full">
        <form
          className="mx-auto flex w-[80vw] max-w-md flex-col items-center"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Select
            formControl
            label="Марка автомобиля"
            required
            {...register("Maker")}
            onChange={(e) => setMaker(e.target.value)}
          >
            {Object.keys(Maker).map((key) => (
              <Select.Option key={key}>{key}</Select.Option>
            ))}
          </Select>
          <Select
            formControl
            label="Модель"
            required
            {...register("Model")}
            onChange={(e) => setModel(e.target.value)}
            value={model}
          >
            {Maker[maker as keyof typeof Maker].map((key) => (
              <Select.Option key={key}>{key}</Select.Option>
            ))}
          </Select>
          <Select
            formControl
            label="Год выпуска"
            required
            {...register("Year")}
          >
            {generateArrayOfYears().map((key) => (
              <Select.Option key={key}>{key}</Select.Option>
            ))}
          </Select>
          <Input
            label="VIN номер"
            name="VIN"
            placeholder="KMTFA41DDNU004865"
            register={register}
          />
          <Input
            label="Пробег (км.)"
            min={0}
            name="Range"
            placeholder="21300"
            register={register}
            required
            type="number"
          />
          <Input
            defaultValue={1999}
            label="Объем двигателя (cc)"
            max={8000}
            min={0}
            name="Engine"
            placeholder="1999"
            register={register}
            required
            type="number"
          />
          <div className="flex w-full gap-2">
            <Select
              formControl
              label="Привод"
              required
              {...register("WheelDrive")}
            >
              {["AWD", "FWD", "RWD"].map((key) => (
                <Select.Option key={key}>{key}</Select.Option>
              ))}
            </Select>
            <Select
              formControl
              label="Тип топлива"
              required
              {...register("FuelType")}
            >
              {["Бензин", "Дизель", "Электрокар"].map((key) => (
                <Select.Option key={key}>{key}</Select.Option>
              ))}
            </Select>
            <Select
              formControl
              label="Трансмиссия"
              required
              {...register("Transmission")}
            >
              {["Автомат", "Механика"].map((key) => (
                <Select.Option key={key}>{key}</Select.Option>
              ))}
            </Select>
          </div>
          <div className="flex w-full gap-2">
            <Input
              label="Дата первой регистрации"
              name="RegDate"
              register={register}
              required
              type="date"
            />
            <Input
              label="Дата аукциона"
              name="AuctionDate"
              register={register}
              required
              type="date"
            />
          </div>
          <Select
            formControl
            label="Оценка аукциона"
            required
            {...register("Transmission")}
          >
            {["Автомат", "Механика"].map((key) => (
              <Select.Option key={key}>{key}</Select.Option>
            ))}
          </Select>
          <Button
            className="mt-2"
            fullWidth
            type="submit"
          >
            Добавить
          </Button>
        </form>
      </section>
    </Body>
  );
}

export default Main;
