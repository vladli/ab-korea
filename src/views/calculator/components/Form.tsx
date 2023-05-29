"use client";
import React, { useState } from "react";
import CurrencyInput from "react-currency-input-field";

function Form() {
  const [currency, setCurrency] = useState("KRW");
  const [carPrice, setCarPrice] = useState(0);
  const [carCurrency, setCarCurrency] = useState("KRW");
  const USDollar = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currency,
  });
  console.log(currency);
  return (
    <div className="my-10 flex flex-col items-center gap-2">
      <div className="flex flex-col items-center gap-2">
        <div className="form-control">
          <label className="input-group">
            <span>Цена автомобиля</span>
            <CurrencyInput
              className="input-bordered input focus:outline-none"
              decimalsLimit={0}
              onValueChange={(value) => setCarPrice(Number(value))}
              placeholder="Please enter a number"
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
            onChange={(e) => setCurrency(e.target.value)}
            value={currency}
          >
            <option value="KRW">KRW</option>
            <option value="KZT">KZT</option>
            <option value="USD">USD</option>
          </select>
        </div>
      </div>
      <div className="mt-5 w-1/2 overflow-x-auto">
        <table className="table-zebra table w-full">
          <thead>
            <tr>
              <th>Наименование</th>
              <th>Цена</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Автомобиль</td>
              <td>{USDollar.format(carPrice)}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Form;
