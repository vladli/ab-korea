"use client";
import React, { useEffect, useState } from "react";
import CurrencyInput from "react-currency-input-field";
import useSWR from "swr";

function Form() {
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
      title: "Налог",
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
    <div className="my-10 flex w-full flex-col items-center gap-2">
      <div className="flex w-[85vw] max-w-xl flex-col items-center gap-2">
        <div className="form-control w-full">
          <label className="input-group">
            <span>Цена</span>
            <CurrencyInput
              className="input-bordered input w-full focus:outline-none"
              decimalsLimit={0}
              onValueChange={(value) => setCarPrice(Number(value))}
              placeholder="Цена авто"
            />

            <select
              className="select-bordered select focus:outline-none"
              onChange={(e) => setCarCurrency(e.target.value)}
              value={carCurrency}
            >
              <option value="KRW">KRW</option>
              <option value="KZT">KZT</option>
              <option value="USD">USD</option>
            </select>
          </label>
        </div>

        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Выберите расчетную валюту</span>
          </label>
          <select
            className="select-bordered select focus:outline-none"
            onChange={(e) => setSelectedCurrency(e.target.value)}
            value={selectedCurrency}
          >
            <option value="KRW">KRW</option>
            <option value="KZT">KZT</option>
            <option value="USD">USD</option>
          </select>
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
          <table className="table-zebra table w-full">
            <thead>
              <tr>
                <th>Наименование</th>
                <th>Цена</th>
              </tr>
            </thead>
            <tbody>
              {prices.map(({ title, price }) => (
                <tr key={title}>
                  <td>{title}</td>
                  <td>{price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div>
          *Все цены указаны - приблизительно, конечная цена может отличаться.
        </div>
      </div>
    </div>
  );
}

export default Form;
