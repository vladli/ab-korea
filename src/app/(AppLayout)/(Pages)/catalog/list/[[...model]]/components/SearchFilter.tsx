"use client";
import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

import Select from "@/components/Form/Select";
import { Maker } from "@/config/cars";

export default function SearchFilter() {
  const router = useRouter();
  const params = useParams();
  const [maker, setMaker] = useState<any>(null);
  const handleChange = (e) => {
    setMaker(e);
    if (e) {
      router.push(`/catalog/list?asd=1`, {});
    } else {
      router.push("/catalog/list/", {});
    }
  };
  useEffect(() => {
    console.log(params.model);
    if (params.model !== undefined) {
      setMaker({ value: params.model, label: params.model });
    } else {
      setMaker(null);
    }
  }, [router]);
  return (
    <section className="flex h-full w-full p-4">
      <div className="my-auto flex w-full flex-col gap-4">
        <div className="grid grid-cols-2 gap-4">
          <Select
            isClearable
            name="Maker"
            onChange={handleChange}
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
          <Select placeholder="Пробег до" />
          <div>Price</div>
          <div className="flex gap-1">
            <Select placeholder="Год от" />
            <Select placeholder="Год до" />
          </div>
          <Select placeholder="Оценка аукциона" />
        </div>
        <div className="grid grid-cols-3 gap-4">
          <Select placeholder="Привод" />
          <Select placeholder="Топливо" />
          <Select placeholder="Трансмиссия" />
        </div>
      </div>
    </section>
  );
}
