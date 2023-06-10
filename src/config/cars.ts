import { Catalog } from "@prisma/client";

export const Maker = {
  Audi: ["A4", "A5", "A6"],
  BMW: ["320i", "330i", "m340i", "520i", "530i"],
  "Mercedes-Benz": ["C200", "E250", "E350"],
};

export function CarYear() {
  var max = new Date().getFullYear();
  var min = max - 15;
  var years = [];

  for (var i = max; i >= min; i--) {
    years.push(i);
  }
  return years;
}
export const FuelType = [
  { ru: "Бензин", en: "Gasoline" },
  { ru: "Дизель", en: "Diesel" },
  { ru: "Электрокар", en: "Electric" },
  { ru: "LPG", en: "LPG" },
  { ru: "Гибрид", en: "Hybrid" },
];
export const Transmission = [
  { ru: "Автомат", en: "Automatic" },
  { ru: "Механика", en: "Manual" },
];

export const WheelDrive = ["AWD", "FWD", "RWD"];

const lowerCaseMakerMap: Record<string, string[]> = {};
for (const key in Maker) {
  lowerCaseMakerMap[key.toLowerCase()] = Maker[key as keyof typeof Maker].map(
    (model: string) => model.toLowerCase()
  );
}

export const isValidMaker = (maker: string | null): boolean => {
  if (maker) {
    const lowerCaseMaker = maker.toLowerCase();
    return lowerCaseMaker in lowerCaseMakerMap;
  }
  return false;
};

export function findByMaker(data: Catalog[], maker: string): Catalog[] {
  const lowerCaseMaker = maker.toLowerCase();

  return data.filter((item) => item.Maker.toLowerCase() === lowerCaseMaker);
}

export const isValidModel = (
  maker: string | null,
  model: string | null
): boolean => {
  if (maker && model) {
    const lowerCaseMaker = maker.toLowerCase();
    const lowerCaseModel = model.toLowerCase();
    if (isValidMaker(lowerCaseMaker)) {
      const validModels = lowerCaseMakerMap[lowerCaseMaker];
      return validModels.includes(lowerCaseModel);
    }
  }
  return false;
};

export function findByMakerAndModel(
  data: Catalog[],
  maker: string,
  model: string
): Catalog[] {
  const lowerCaseMaker = maker.toLowerCase();
  const lowerCaseModel = model.toLowerCase();

  return data.filter((item) => {
    const itemMaker = item.Maker.toLowerCase();
    const itemModel = item.Model.toLowerCase();

    return itemMaker === lowerCaseMaker && itemModel === lowerCaseModel;
  });
}

export const AuctionMark = [
  "A/A",
  "A/B",
  "A/C",
  "A/D",
  "A/F",
  "B/A",
  "B/B",
  "B/C",
  "B/D",
  "B/F",
  "C/A",
  "C/B",
  "C/C",
  "C/D",
  "C/F",
  "D/A",
  "D/B",
  "D/C",
  "D/D",
  "D/F",
  "E/A",
  "E/B",
  "E/C",
  "E/D",
  "E/F",
  "F/A",
  "F/B",
  "F/C",
  "F/D",
  "F/F",
];
