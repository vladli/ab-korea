"use client";
import React, { useEffect, useState } from "react";
import CurrencyInput from "react-currency-input-field";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

import Button from "@/components/Button";
import Divider from "@/components/Divider";
import Input from "@/components/Form/Input";
import Select from "@/components/Form/Select";
import Textarea from "@/components/Form/Textarea";
import Join from "@/components/Join";
import Tabs from "@/components/Navigation/Tabs";
import {
  AuctionMark,
  CarYear,
  FuelType,
  Maker,
  Transmission,
  WheelDrive,
} from "@/config/cars";
import { createCar } from "@/lib/cars";

function Main() {
  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: any) => {
    const newData = { ...data };
    //Select

    newData.AuctionMark = data.AuctionMark.value;
    newData.FuelType = data.FuelType.value;
    newData.Maker = maker.value;
    newData.Model = data.Model.value;
    newData.Transmission = data.Transmission.value;
    newData.WheelDrive = data.WheelDrive.value;
    newData.Year = Number(data.Year.value);
    //
    newData.Images = inputFields;
    newData.Price = carPrice;
    newData.Range = Number(data.Range);
    newData.Engine = Number(data.Engine);

    const res = createCar(newData);

    toast.promise(res, {
      loading: "Добавление в каталог",
      success: () => {
        reset();
        setInputFields([{ url: "" }]);
        return "Автомобиль - добавлен";
      },
      error: "Произошла - ошибка",
    });
  };
  const [tabValue, setTabValue] = React.useState(0);
  const [maker, setMaker] = useState({ value: "Audi", label: "Audi" });

  const [inputFields, setInputFields] = useState<any>([{ url: "" }]);
  const [carPrice, setCarPrice] = useState(0);

  useEffect(() => {
    reset({ Model: null, Year: null });
  }, [maker]);

  const handleFormChange = (event: any, index: any) => {
    const data = [...inputFields];
    data[index][event.target.name] = event.target.value;
    setInputFields(data);
  };

  const handleInputChange = (event: any) => {
    const inputValue = event.target.value;
    const urls = inputValue.split("\n").map((url: any) => ({ url }));
    setInputFields(urls);
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

  const today = new Date().toISOString().split("T")[0];
  return (
    <section className="my-10 w-full">
      <form
        className="mx-auto flex w-[80vw] max-w-md flex-col items-center"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex w-full gap-2">
          <Select
            control={control}
            defaultValue={{ value: maker.value, label: maker.label }}
            formControl
            isSearchable
            label="Марка"
            name="Maker"
            onChange={(e) => {
              setMaker({ value: e!.value, label: e!.label });
            }}
            options={Object.keys(Maker).map((key) => ({
              value: key,
              label: key,
            }))}
            required
            value={maker}
          />
          <Select
            control={control}
            formControl
            isSearchable
            label="Модель"
            name="Model"
            options={Maker[maker.value as keyof typeof Maker].map((key) => ({
              value: key,
              label: key,
            }))}
            required
          />
        </div>
        <Select
          control={control}
          formControl
          isSearchable
          label="Год"
          name="Year"
          options={CarYear().map((key) => ({
            value: key,
            label: key,
          }))}
          required
        />
        <Input
          label="VIN номер"
          name="VIN"
          placeholder="KMTFA41DDNU004865"
          register={register}
        />
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">
              Цена (KRW)<span className="text-red-500">*</span>
            </span>
          </label>
          <CurrencyInput
            className="input-bordered input w-full focus:outline-none"
            decimalsLimit={0}
            onValueChange={(value) => setCarPrice(Number(value))}
            placeholder="Цена автомобиля"
            required
          />
        </div>
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
            control={control}
            defaultValue={{ value: "AWD", label: "AWD" }}
            formControl
            label="Привод"
            name="WheelDrive"
            options={WheelDrive.map((key) => ({
              value: key,
              label: key,
            }))}
            required
          />
          <Select
            control={control}
            defaultValue={{ value: "Автомат", label: "Автомат" }}
            formControl
            label="Трансмиссия"
            name="Transmission"
            options={Transmission.map((key) => ({
              value: key.ru,
              label: key.ru,
            }))}
            required
          />
          <Select
            control={control}
            defaultValue={{ value: "Бензин", label: "Бензин" }}
            formControl
            label="Тип топлива"
            name="FuelType"
            options={FuelType.map((key) => ({
              value: key.ru,
              label: key.ru,
            }))}
            required
          />
        </div>
        <div className="flex w-full flex-col gap-2 md:flex-row">
          <Input
            label="Дата первой регистрации"
            max={today}
            name="RegDate"
            register={register}
            required
            type="date"
          />
          <Input
            label="Дата аукциона"
            max={today}
            name="AuctionDate"
            register={register}
            required
            type="date"
          />
        </div>
        <Select
          control={control}
          defaultValue={{ value: AuctionMark[0], label: AuctionMark[0] }}
          formControl
          label="Оценка аукциона"
          name="AuctionMark"
          options={AuctionMark.map((key) => ({
            value: key,
            label: key,
          }))}
          required
        />
        <Divider />
        <h3>Картинки</h3>
        <Input
          label="Состояние кузова"
          name="bodyImg"
          placeholder="https//:ab-korea.kz/car/car.png"
          register={register}
          required
          type="url"
        />
        <Tabs
          className="mt-2"
          onChange={setTabValue}
          value={tabValue}
          variant="lifted"
        >
          <Tabs.Tab value={0}>По одной ссылке</Tabs.Tab>
          <Tabs.Tab value={1}>Ссылки в новой строке</Tabs.Tab>
        </Tabs>
        {!tabValue ? (
          <>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Кузов и салон</span>
              </label>
              {inputFields.map(({ url }: any, index: any) => {
                return (
                  <Join
                    className="mb-1"
                    key={index}
                  >
                    <input
                      className="input-bordered input join-item w-full focus:outline-offset-0"
                      name="url"
                      onChange={(event) => handleFormChange(event, index)}
                      placeholder="https//:ab-korea.kz/car/car.png"
                      required
                      type="url"
                      value={url}
                    />
                    {index !== 0 ? (
                      <Button
                        className="join-item"
                        color="error"
                        onClick={() => removeFields(index)}
                        type="button"
                      >
                        X
                      </Button>
                    ) : null}
                  </Join>
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
          </>
        ) : (
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Кузов и салон</span>
            </label>
            <Textarea
              onChange={handleInputChange}
              placeholder="Введите ссылку на картинку (новая картинка в новой строке)"
            />
          </div>
        )}
        <Button
          className="mt-2"
          fullWidth
          type="submit"
        >
          Добавить
        </Button>
      </form>
    </section>
  );
}

export default Main;
