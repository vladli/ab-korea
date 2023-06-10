"use client";
import React, { useCallback, useEffect, useState } from "react";
import {
  useParams,
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";

import Select from "@/components/Form/Select";
import {
  AuctionMark,
  FuelType,
  Maker,
  Transmission,
  WheelDrive,
} from "@/config/cars";

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
            styles={{
              control: (baseStyles) => ({
                ...baseStyles,
                width: "100%",
              }),
            }}
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
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          <Select
            isClearable
            onChange={(e) => handleChange(e, "range")}
            placeholder="Пробег до"
          />

          <div>Price</div>
          <div className="flex gap-1">
            <Select
              isClearable
              onChange={(e) => handleChange(e, "yearStart")}
              placeholder="Год от"
            />
            <Select
              isClearable
              onChange={(e) => handleChange(e, "yearEnd")}
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
              value: key,
              label: key,
            }))}
            placeholder="Топливо"
          />
          <Select
            isClearable
            onChange={(e) => handleChange(e, "transmission")}
            options={Transmission.map((key) => ({
              value: key,
              label: key,
            }))}
            placeholder="Трансмиссия"
          />
        </div>
      </div>
    </section>
  );
}
