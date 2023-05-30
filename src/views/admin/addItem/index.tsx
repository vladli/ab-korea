"use client";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import Button from "@/components/Button";
import Divider from "@/components/Divider";
import Input from "@/components/Form/Input";
import InputGroup from "@/components/Form/InputGroup";
import Select from "@/components/Form/Select";
import Body from "@/components/Layout/Body";
import { AuctionMark, Maker } from "@/config/cars";

function Main() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data: any) => {
    console.log(data);
    data.Images = inputFields;
    const res = await fetch("/api/catalog/item", {
      method: "POST",
      body: JSON.stringify(data),
    });
    if (res.status === 200) {
      alert("Success");
      reset();
    }
  };

  const [maker, setMaker] = useState("Audi");

  const [inputFields, setInputFields] = useState<any>([
    {
      url: "",
    },
  ]);

  const handleFormChange = (event: any, index: any) => {
    const data = [...inputFields];
    data[index][event.target.name] = event.target.value;
    setInputFields(data);
  };

  const addFields = () => {
    const object = {
      url: "",
    };

    setInputFields([...inputFields, object]);
  };

  const removeFields = (index: any) => {
    const data = [...inputFields];
    data.splice(index, 1);
    setInputFields(data);
  };

  function generateArrayOfYears() {
    var max = new Date().getFullYear();
    var min = max - 15;
    var years = [];

    for (var i = max; i >= min; i--) {
      years.push(i);
    }
    return years;
  }
  const today = new Date().toISOString().split("T")[0];
  return (
    <Body>
      <section className="my-10 w-full">
        <form
          className="mx-auto flex w-[80vw] max-w-md flex-col items-center"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex w-full gap-2">
            <Select
              formControl
              label="Марка"
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
              {...register("Model", { required: true })}
              defaultValue=""
            >
              <Select.Option
                disabled
                value=""
              ></Select.Option>
              {Maker[maker as keyof typeof Maker].map((key) => (
                <Select.Option
                  key={key}
                  value={key}
                >
                  {key}
                </Select.Option>
              ))}
            </Select>

            <Select
              formControl
              label="Год"
              required
              {...register("Year")}
            >
              {generateArrayOfYears().map((key) => (
                <Select.Option key={key}>{key}</Select.Option>
              ))}
            </Select>
          </div>
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

          <div className="flex w-full flex-col gap-2 md:flex-row">
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
              label="Трансмиссия"
              required
              {...register("Transmission")}
            >
              {["Автомат", "Механика"].map((key) => (
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
          </div>
          <div className="flex w-full flex-col gap-2 md:flex-row">
            <Input
              label="Дата первой регистрации"
              max={today}
              name="RegDate"
              register={register}
              type="date"
            />
            <Input
              label="Дата аукциона"
              max={today}
              name="AuctionDate"
              register={register}
              type="date"
            />
          </div>
          <Select
            formControl
            label="Оценка аукциона"
            required
            {...register("AuctionMark")}
          >
            {AuctionMark.map((key) => (
              <Select.Option key={key}>{key}</Select.Option>
            ))}
          </Select>
          <Divider />
          <h3>Картинки</h3>
          <Input
            label="Состояние кузова"
            name="bodyImg"
            placeholder="https//:ab-korea.kz/car/car.png"
            register={register}
            type="url"
          />
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Кузов и салон</span>
            </label>
            {inputFields.map(({ url }: any, index: any) => {
              return (
                <label
                  className="input-group mb-1"
                  key={index}
                >
                  <input
                    className="input-bordered input w-full focus:outline-offset-0"
                    name="url"
                    onChange={(event) => handleFormChange(event, index)}
                    placeholder="https//:ab-korea.kz/car/car.png"
                    type="url"
                    value={url}
                  />
                  {index !== 0 ? (
                    <Button
                      color="error"
                      onClick={() => removeFields(index)}
                      type="button"
                    >
                      X
                    </Button>
                  ) : null}
                </label>
              );
            })}
          </div>
          <Button
            fullWidth
            onClick={addFields}
            type="button"
            variant="outline"
          >
            +
          </Button>
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
