import { Controller, Get } from "@nestjs/common";

import { WORKOUTS, WorkoutSummary } from "../workouts/workouts.controller";

type HomeFilterResponse = {
  categories: string[];
  durations: number[];
};

type HomeSection = {
  id: string;
  title: string;
  caption: string;
  items: WorkoutSummary[];
};

type HeroCreator = {
  name: string;
  headline: string;
  plan: string;
  favorites: number;
};

@Controller("home")
export class HomeController {
  @Get("filters")
  getFilters(): HomeFilterResponse {
    return {
      categories: [
        "徒手",
        "器材",
        "無噪音",
        "瑜珈",
        "女性",
        "男性",
        "入門",
        "高階",
      ],
      durations: [5, 10, 20, 35, 45, 60],
    };
  }

  @Get("sections")
  getSections(): HomeSection[] {
    return [
      {
        id: "all",
        title: "所有鍛煉列表",
        caption: "連假也健身",
        items: WORKOUTS,
      },
      {
        id: "featured",
        title: "精選鍛煉菜單列表",
        caption: "韓國藝人菜單",
        items: WORKOUTS,
      },
    ];
  }

  @Get("creator")
  getCreatorHighlight(): HeroCreator {
    return {
      name: "李玟婷",
      headline: "這個暑假雕塑漂亮的身材",
      plan: "7月減脂計畫",
      favorites: 68799,
    };
  }
}
