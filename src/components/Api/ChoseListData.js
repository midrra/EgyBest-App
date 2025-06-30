import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import LocalMoviesIcon from "@mui/icons-material/LocalMovies";
import TvIcon from "@mui/icons-material/Tv";
import SellIcon from "@mui/icons-material/Sell";
import LanguageIcon from "@mui/icons-material/Language";
import FolderIcon from "@mui/icons-material/Folder";

export const ChoseListData = [
  {
    id: "1",
    // type: "ايجي بست",
    type: "egybest",
    logo: <SellIcon />,
  },
  {
    id: "2",
    // type: "الاكثر مشاهده",
    type: "trending",
    logo: <HomeIcon />,
  },
  {
    id: "3",
    // type: "افلام",
    type: "movies",
    logo: <SellIcon />,
  },
  {
    id: "4",
    // type: "مسلسلات",
    type: "series",
    logo: <TvIcon />,
  },
  {
    id: "5",
    // type: "أنمي",
    type: "anime",
    logo: <SellIcon />,
  },
  {
    id: "6",
    // type: "برامج",
    type: "programs",
    logo: <LocalMoviesIcon />,
  },
  {
    id: "7",
    // type: "المصارعه الحره",
    type: "sports",
    logo: <LanguageIcon />,
  },
  {
    id: "8",
    // type: "مسرحيات",
    type: "stage",
    logo: <FolderIcon />,
  },
  {
    id: "9",
    // type: "مكتبتي",
    type: "library",
    logo: <LocalMoviesIcon />,
  },
];
