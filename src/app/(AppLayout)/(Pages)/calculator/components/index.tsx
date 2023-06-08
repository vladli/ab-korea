"use client";
import React, { useEffect, useState } from "react";
import CurrencyInput from "react-currency-input-field";

import CurrencyBlock from "@/components/CurrencyBlock";
import Select, { FlagOption } from "@/components/Form/Select";
import Join from "@/components/Join";
import Table from "@/components/Table";
import { currencies } from "@/config/config";
import useCurrency from "@/hooks/useCurrency";

function Main() {
  const currency = useCurrency();

  const [selectedCurrency, setSelectedCurrency] = useState({
    value: currencies[0].value,
    label: currencies[0].label,
  });
  const [carPrice, setCarPrice] = useState(0);
  const [carCurrency, setCarCurrency] = useState({
    value: currencies[0].value,
    label: currencies[0].value,
  });

  const [total, setTotal] = useState(0);

  const car = convertCurrency(
    carPrice,
    carCurrency.value,
    selectedCurrency.value
  );
  const carTax = convertCurrency(
    carPrice * 0.15,
    carCurrency.value,
    selectedCurrency.value
  );
  const abFee = convertCurrency(300, "USD", selectedCurrency.value);
  const auctionFee = convertCurrency(400, "USD", selectedCurrency.value);
  const skDelivery = convertCurrency(190, "USD", selectedCurrency.value);

  useEffect(() => {
    setTotal(car + carTax + abFee + auctionFee + skDelivery);
  }, [carPrice, carCurrency, selectedCurrency.value]);

  const Currency = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: selectedCurrency.value,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });

  function convertCurrency(
    amount: number,
    fromCurrency: string,
    toCurrency: string
  ) {
    if (!amount || !currency) return 0;
    const exchangeRate = currency[toCurrency] / currency[fromCurrency];
    const convertedAmount = exchangeRate * amount;
    return convertedAmount;
  }

  const prices = [
    {
      title: "Автомобиль",
      price: Currency.format(car),
    },
    {
      title: "Налог (15%)",
      price: Currency.format(carTax),
    },
    {
      title: "Услуги AB Korea",
      price: Currency.format(abFee),
    },
    {
      title: "Комиссия аукциона",
      price: Currency.format(auctionFee),
    },
    {
      title: "Логистика по Корее",
      price: Currency.format(skDelivery),
    },
    {
      title: "Общая стоимость",
      price: Currency.format(total),
    },
  ];

  return (
    <section className="my-10 flex w-full flex-col items-center gap-2">
      <div className="flex w-[85vw] max-w-2xl flex-col items-center gap-2">
        <div className="form-control w-full">
          <label className="label">
            <span>Цена</span>
          </label>
          <div className="flex w-full">
            <CurrencyInput
              className="input-bordered input w-full focus:outline-none"
              decimalsLimit={0}
              onValueChange={(value) => setCarPrice(Number(value))}
              placeholder="Цена автомобиля"
            />
            <Select
              components={{ Option: FlagOption }}
              onChange={(e) =>
                setCarCurrency({ value: e!.value, label: e!.label })
              }
              options={currencies.map(({ value, label, icon }) => ({
                value: value,
                label: value,
              }))}
              styles={{
                control: (baseStyles) => ({
                  ...baseStyles,
                  width: "8rem",
                }),
              }}
              value={carCurrency}
            />
          </div>
        </div>

        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Выберите расчетную валюту</span>
          </label>
          <Select
            components={{ Option: FlagOption }}
            onChange={(e) =>
              setSelectedCurrency({ value: e!.value, label: e!.label })
            }
            options={currencies.map(({ value, label, icon }) => ({
              value: value,
              label: label,
              icon: icon,
            }))}
            value={selectedCurrency}
          />
        </div>

        <CurrencyBlock />

        <div className="mt-2 w-full overflow-x-auto">
          <Table
            className="w-full"
            zebra
          >
            <Table.Head>
              <span>Наименование</span>
              <span>Цена</span>
            </Table.Head>
            <Table.Body>
              {prices.map(({ title, price }) => (
                <Table.Row key={title}>
                  <span>{title}</span>
                  <span>{price}</span>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        </div>
        <div>
          *Все цены указаны - приблизительно, конечная цена может отличаться.
        </div>
      </div>
    </section>
  );
}

export default Main;
