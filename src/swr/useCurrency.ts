"use client";
import useSWR from "swr";

export default function useCurrency() {
  const { data } = useSWR("/api/exchangeRate");

  return [data];
}
