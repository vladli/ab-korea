"use client";
import React, { useCallback, useState } from "react";
import {
  useParams,
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";

import Select from "@/components/Form/Select";
import {
  AuctionMark,
  CarYear,
  FuelType,
  Maker,
  Transmission,
  WheelDrive,
} from "@/config/cars";
import { generateNumbers } from "@/lib/utils";

export default function SearchFilter() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams()!;
  const [maker, setMaker] = useState<any>(null);
  const createQueryString = useCallback(
    (name: string, value?: string | null, type = "Create") => {
      const params = new URLSearchParams(searchParams.toString()); // Convert to string
      if (type === "Create" && value) params.set(name, value);
      else params.delete(name);

      return params.toString();
    },
    [searchParams]
  );

  const handleChange = (e: any, name: string) => {
    if (name === "maker") {
      setMaker(e);
      if (e) {
        router.push(pathname + "?" + createQueryString(name, e.value));
      } else {
        router.push(pathname);
      }
      return;
    }
    if (e) {
      router.push(pathname + "?" + createQueryString(name, e.value));
    } else {
      router.push(pathname + "?" + createQueryString(name, null, "Delete"));
    }
  };

  return (
    <section className="flex h-full w-full p-4">
      <div className="my-auto flex w-full flex-col gap-4">
        <div className="grid grid-cols-2 gap-4">
          <Select
            isClearable
            name="Maker"
            onChange={(e) => handleChange(e, "maker")}
            options={Object.keys(Maker).map((key) => ({
              value: key,
              label: key,
            }))}
            placeholder="Марка"
            value={maker}
          />
          <Select
            isClearable
            isDisabled={!maker}
            name="Model"
            onChange={(e) => handleChange(e, "model")}
            options={Maker[maker?.value as keyof typeof Maker]?.map((key) => ({
              value: key,
              label: key,
            }))}
            placeholder="Модель"
            styles={{
              control: (baseStyles) => ({
                ...baseStyles,
                width: "100%",
              }),
            }}
          />
        </div>
        <div className="grid grid-cols-2 items-center gap-4 md:grid-cols-5">
          <Select
            isClearable
            onChange={(e) => handleChange(e, "range")}
            options={generateNumbers(10000, 10000, 10).map((key) => ({
              value: key,
              label: "< " + key,
            }))}
            placeholder="Пробег до"
          />

          <div>Price</div>

          <div className="col-span-2 flex w-full gap-1">
            <Select
              className="w-full"
              isClearable
              onChange={(e) => handleChange(e, "yearStart")}
              options={CarYear().map((key) => ({
                value: key,
                label: key,
              }))}
              placeholder="Год от"
            />
            <Select
              className="w-full"
              isClearable
              onChange={(e) => handleChange(e, "yearEnd")}
              options={CarYear().map((key) => ({
                value: key,
                label: key,
              }))}
              placeholder="Год до"
            />
          </div>
          <Select
            isClearable
            onChange={(e) => handleChange(e, "auctionMark")}
            options={AuctionMark.map((key) => ({
              value: key,
              label: key,
            }))}
            placeholder="Оценка аукциона"
          />
        </div>
        <div className="grid grid-cols-3 gap-4">
          <Select
            isClearable
            onChange={(e) => handleChange(e, "wheelDrive")}
            options={WheelDrive.map((key) => ({
              value: key,
              label: key,
            }))}
            placeholder="Привод"
          />
          <Select
            isClearable
            onChange={(e) => handleChange(e, "fuel")}
            options={FuelType.map((key) => ({
              value: key.en,
              label: key.ru,
            }))}
            placeholder="Топливо"
          />
          <Select
            isClearable
            onChange={(e) => handleChange(e, "transmission")}
            options={Transmission.map((key) => ({
              value: key.en,
              label: key.ru,
            }))}
            placeholder="Трансмиссия"
          />
        </div>
      </div>
    </section>
  );
}
