"use client";
import React, { useEffect, useState } from "react";

import CurrencyBlock from "@/components/CurrencyBlock";
import Select from "@/components/Form/Select";
import Table from "@/components/Table";
import useCurrency from "@/hooks/useCurrency";

export default function PriceTable({ Price }: { Price: number }) {
  const currency = useCurrency();

  const [selectedCurrency, setSelectedCurrency] = useState("KRW");

  const [total, setTotal] = useState(0);

  const car = convertCurrency(Price + Price * 0.2, "KRW", selectedCurrency);
  const carTax = convertCurrency(
    (Price + Price * 0.2) * 0.15,
    "KRW",
    selectedCurrency
  );
  const abFee = convertCurrency(300, "USD", selectedCurrency);
  const auctionFee = convertCurrency(400, "USD", selectedCurrency);
  const skDelivery = convertCurrency(190, "USD", selectedCurrency);

  useEffect(() => {
    setTotal(car + carTax + abFee + auctionFee + skDelivery);
  }, [car, selectedCurrency]);

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

  const prices = [
    {
      title: "Примерная ставка на аукционе (+20%)",
      helper: "(может быть меньше или больше)",
      price: Currency.format(car),
    },
    {
      title: "Налог",
      helper: "(15%)",
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
    <div className="mx-auto flex w-full max-w-xl flex-col items-center lg:max-w-6xl">
      <Table zebra>
        <Table.Head>
          <span>Наименование</span>
          <span>Цена</span>
        </Table.Head>
        <Table.Body>
          {prices.map(({ title, price, helper }) => (
            <Table.Row key={title}>
              <div>
                <div>{title}</div>
                <div className="text-sm opacity-50">{helper}</div>
              </div>
              <span>{price}</span>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
      <div className="text-center">
        Стоимость на автомобиль указана как начальная ставка аукциона +20%
        (средний процент повышения ставок на торгах)
      </div>
      <div className="form-control mt-2 w-full max-w-xl">
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

      <CurrencyBlock />
      <div className="text-center">
        *Все цены указаны - приблизительно, конечная цена может отличаться.
      </div>
    </div>
  );
}
