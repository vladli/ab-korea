import React from "react";
import { Catalog } from "@prisma/client";

import Button from "@/components/Button";

export default function AdminMenu(props: Catalog) {
  const { id } = props;
  const handleButtonClick = (e: any) => {
    e.stopPropagation();
  };
  return (
    <div>
      <Button
        color="error"
        onClick={handleButtonClick}
        size="sm"
        variant="outline"
      >
        a
      </Button>
    </div>
  );
}
