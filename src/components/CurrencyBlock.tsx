import React from "react";

import useCurrency from "@/hooks/useCurrency";

import Counter from "./Counter";

export default function CurrencyBlock() {
    const currency = useCurrency();

    function format_time(s: number) {
        const dtFormat = new Intl.DateTimeFormat("ru-RU", {
            timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
            day: "2-digit",
            month: "long",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
        });
        if (!s || isNaN(s)) return "Invalid date";
        return dtFormat.format(new Date(s * 1e3));
    }

    if (!currency) return null;
    return (
        <div className="flex w-full max-w-xl flex-col items-center">
            <div className="flex w-full justify-between">
        <span>
          KRW:
          <strong>
            <Counter
                from={0}
                to={currency.KRW}
            />
          </strong>
        </span>
                <span>
          KZT:
          <strong>
            <Counter
                from={0}
                to={currency.KZT}
            />
          </strong>
        </span>
                <span>
          USD:
          <strong>
            <Counter
                from={0}
                to={currency.USD}
            />
          </strong>
        </span>
            </div>
            <div>Обновление: {format_time(currency.time)}</div>
        </div>
    );
}
