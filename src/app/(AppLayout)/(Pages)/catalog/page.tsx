"use client";
import React from "react";
import toast from "react-hot-toast";
import type { Metadata } from "next/types";

import Box from "@/components/Box";
import Button from "@/components/Button";
import { titles } from "@/config/config";

export const metadata: Metadata = {
  title: titles.catalog,
};

function Page() {
  return (
    <Box>
      <Button onClick={() => toast("Hi")}>asd</Button>
    </Box>
  );
}

export default Page;
