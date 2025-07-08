import SellIcon from "@mui/icons-material/Sell";

export const MovieCatData = [
  {
    id: 1,
    title: "افلام",
    log: <SellIcon />,
  },
  {
    id: 2,
    title: "احدث الاضافات",
    log: <SellIcon />,
  },
  {
    id: 3,
    title: "افضل الافلام",
    log: <SellIcon />,
  },
  {
    id: 4,
    title: "افلام قادمة",
    log: <SellIcon />,
  },
];

export const years = Array.from({ length: 70 }, (_, i) => {
  const y = 2026 - i;
  const year = y.toString() === "2026" ? "العام" : y.toString();
  return {
    label: year,
    value: y.toString(),
  };
});

export const language = [
  { label: "اللغة", value: "" },
  { label: "الانجليزية", value: "en" },
  { label: "اليابانية", value: "ja" },
  { label: "الكورية", value: "ko" },
  { label: "العربية", value: "ar" },
  { label: "الصينية", value: "zh" },
  { label: "الاسبانية", value: "es" },
  { label: "الهندية", value: "hi" },
  { label: "الالمانية", value: "de" },
  { label: "التركية", value: "tr" },
  { label: "الايطالية", value: "it" },
];

export const country = [
  { label: "البلد", value: "" },
  { label: "امريكا", value: "en" },
  { label: "اليابان", value: "ja" },
  { label: "كوريا", value: "ko" },
  { label: "مصر", value: "ar" },
  { label: "اسبانيا", value: "es" },
  { label: "البرتغال", value: "pt" },
  { label: "الهند", value: "hi" },
  { label: "الصين", value: "zh" },
  { label: "تركيا", value: "tr" },
  { label: "ايطاليا", value: "it" },
];

export const sort = [
  { label: "النوع" },
  { label: "اكشن", value: "28" },
  { label: "مغامرة", value: "12" },
  { label: " عائلة", value: "10751" },
  { label: "رسوم متحركة", value: "16" },
  { label: "مغامرة", value: "12" },
  { label: "كوميديا", value: "35" },
  { label: "جريمة", value: "80" },
  { label: "دراما", value: "18" },
  { label: "حرب", value: "10752" },
  { label: "رومانسية", value: "10749" },
  { label: "غموض", value: "9648" },
];
