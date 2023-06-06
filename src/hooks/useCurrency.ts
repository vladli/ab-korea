"use client";
import { useEffect, useState } from "react";
import useSWR from "swr";

export default function useCurrency() {
  const { data } = useSWR("/api/exchangeRate");
  const [currency, setCurrency] = useState<any>(null);
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
  if (!currency) return null;
  return currency;
}
