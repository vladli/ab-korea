"use client";
import React, { useCallback, useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import Button from "@/components/Button";
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

  const maker = searchParams.get("maker")?.toString();
  const model = searchParams.get("model")?.toString();
  const range = Number(searchParams.get("range"));
  const yearStart = Number(searchParams.get("yearStart"));
  const yearEnd = Number(searchParams.get("yearEnd")?.toString());
  const auctionMark = searchParams.get("auctionMark")?.toString();
  const wheelDrive = searchParams.get("wheelDrive")?.toString();
  const fuel = searchParams.get("fuel")?.toString();
  const transmission = searchParams.get("transmission")?.toString();

  const createQueryString = useCallback(
    (name: string | string[], value?: string | null, type = "Create") => {
      const params = new URLSearchParams(searchParams.toString());

      if (typeof name === "string") {
        if (type === "Create" && value) {
          params.set(name, value);
        } else {
          params.delete(name);
        }
      } else if (Array.isArray(name)) {
        name.forEach((paramName) => {
          if (type === "Create" && value) {
            params.set(paramName, value);
          } else {
            params.delete(paramName);
          }
        });
      }

      return params.toString();
    },
    [searchParams]
  );

  const handleChange = (e: any, name: string) => {
    if (name === "maker") {
      if (e) {
        router.push(pathname + "?" + createQueryString(name, e.value));
      } else {
        router.push(
          pathname + "?" + createQueryString(["maker", "model"], null, "Delete")
        );
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
            value={maker ? { value: maker, label: maker } : null}
          />
          <Select
            isClearable
            isDisabled={!maker}
            name="Model"
            onChange={(e) => handleChange(e, "model")}
            options={Maker[maker as keyof typeof Maker]?.map((key) => ({
              value: key,
              label: key,
            }))}
            placeholder="Модель"
            value={model ? { value: model, label: model } : null}
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
            value={range ? { value: range, label: "< " + range } : null}
          />

          <div className="col-span-2 flex w-full gap-1">
            <Select
              className="w-full"
              isClearable
              isDisabled
              onChange={(e) => handleChange(e, "priceStart")}
              placeholder="Цена от"
            />
            <Select
              className="w-full"
              isClearable
              isDisabled
              onChange={(e) => handleChange(e, "priceEnd")}
              placeholder="Цена до"
            />
          </div>

          <div className="col-span-2 flex w-full gap-1">
            <Select
              className="w-full"
              isClearable
              isDisabled
              onChange={(e) => handleChange(e, "yearStart")}
              options={CarYear().map((key) => ({
                value: key,
                label: key,
              }))}
              placeholder="Год от"
              value={yearStart ? { value: yearStart, label: yearStart } : null}
            />
            <Select
              className="w-full"
              isClearable
              isDisabled
              onChange={(e) => handleChange(e, "yearEnd")}
              options={CarYear().map((key) => ({
                value: key,
                label: key,
              }))}
              placeholder="Год до"
              value={yearEnd ? { value: yearEnd, label: yearEnd } : null}
            />
          </div>
        </div>
        <div className="grid grid-cols-4 gap-4">
          <Select
            isClearable
            onChange={(e) => handleChange(e, "wheelDrive")}
            options={WheelDrive.map((key) => ({
              value: key,
              label: key,
            }))}
            placeholder="Привод"
            value={wheelDrive ? { value: wheelDrive, label: wheelDrive } : null}
          />
          <Select
            isClearable
            onChange={(e) => handleChange(e, "fuel")}
            options={FuelType.map((key) => ({
              value: key.en,
              label: key.ru,
            }))}
            placeholder="Топливо"
            value={
              fuel
                ? {
                    value: fuel,
                    label: FuelType.find((obj) => obj.en === fuel)?.ru,
                  }
                : null
            }
          />
          <Select
            isClearable
            onChange={(e) => handleChange(e, "transmission")}
            options={Transmission.map((key) => ({
              value: key.en,
              label: key.ru,
            }))}
            placeholder="Трансмиссия"
            value={
              transmission
                ? {
                    value: transmission,
                    label: Transmission.find((obj) => obj.en === transmission)
                      ?.ru,
                  }
                : null
            }
          />
          <Select
            isClearable
            onChange={(e) => handleChange(e, "auctionMark")}
            options={AuctionMark.map((key) => ({
              value: key,
              label: key,
            }))}
            placeholder="Оценка аукциона"
            value={
              auctionMark ? { value: auctionMark, label: auctionMark } : null
            }
          />
        </div>
      </div>
    </section>
  );
}
