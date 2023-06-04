"use client";
import React, { useEffect, useState } from "react";
import CurrencyInput from "react-currency-input-field";
import useSWR from "swr";

import Select from "@/components/Form/Select";
import Join from "@/components/Join";
import Table from "@/components/Table";

function Main() {
  const { data } = useSWR("/api/exchangeRate");

  const [currency, setCurrency] = useState<any>(null);
  const [selectedCurrency, setSelectedCurrency] = useState("USD");

  const [carPrice, setCarPrice] = useState(0);
  const [carCurrency, setCarCurrency] = useState("KRW");

  const [total, setTotal] = useState(0);

  const car = convertCurrency(carPrice, carCurrency, selectedCurrency);
  const carTax = convertCurrency(
    carPrice * 0.15,
    carCurrency,
    selectedCurrency
  );
  const abFee = convertCurrency(300, "USD", selectedCurrency);
  const auctionFee = convertCurrency(400, "USD", selectedCurrency);
  const skDelivery = convertCurrency(190, "USD", selectedCurrency);

  useEffect(() => {
    if (data) {
      setCurrency({
        ...currency,
        USD: 1,
        KZT: Math.round(data?.conversion_rates?.KZT),
        KRW: Math.round(data?.conversion_rates?.KRW),
        time: data?.time_last_update_unix,
      });
    }
  }, [data]);

  useEffect(() => {
    setTotal(car + carTax + abFee + auctionFee + skDelivery);
  }, [carPrice, carCurrency, selectedCurrency]);

  const Currency = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: selectedCurrency,
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
  function format_time(s: number) {
    const dtFormat = new Intl.DateTimeFormat("ru-RU", {
      timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      day: "2-digit",
      month: "long",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });

    return dtFormat.format(new Date(s * 1e3));
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
          <Join>
            <CurrencyInput
              className="input-bordered input w-full focus:outline-none"
              decimalsLimit={0}
              onValueChange={(value) => setCarPrice(Number(value))}
              placeholder="Цена автомобиля"
            />
            <Select
              className="join-item"
              onChange={(e) => setCarCurrency(e.target.value)}
              value={carCurrency}
            >
              <Select.Option value="KRW">KRW</Select.Option>
              <Select.Option value="KZT">KZT</Select.Option>
              <Select.Option value="USD">USD</Select.Option>
            </Select>
          </Join>
        </div>

        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Выберите расчетную валюту</span>
          </label>
          <Select
            onChange={(e) => setSelectedCurrency(e.target.value)}
            value={selectedCurrency}
          >
            <Select.Option value="KRW">KRW</Select.Option>
            <Select.Option value="KZT">KZT</Select.Option>
            <Select.Option value="USD">USD</Select.Option>
          </Select>
        </div>
        {currency ? (
          <div className="flex w-full flex-col items-center">
            <div className="flex w-full justify-between">
              <span>
                KRW: <strong>{currency.KRW}</strong>
              </span>
              <span>
                KZT: <strong>{currency.KZT}</strong>
              </span>
              <span>
                USD: <strong>{currency.USD}</strong>
              </span>
            </div>
            <div>Обновление: {format_time(currency.time)}</div>
          </div>
        ) : null}

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
