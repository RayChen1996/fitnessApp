import { Controller, Get } from "@nestjs/common";

export type WorkoutSummary = {
  id: string;
  label: string;
  title: string;
  cover: string;
  level: string;
  intensity: string;
  durationMinutes: number;
  focus: string;
  tags: string[];
};

export const WORKOUTS: WorkoutSummary[] = [
  {
    id: "chest-01",
    label: "胸肌菜單",
    title: "增大胸肌菜單",
    cover:
      "https://images.unsplash.com/photo-1558611848-73f7eb4001a1?auto=format&fit=crop&w=1200&q=80",
    level: "入門",
    intensity: "入門",
    durationMinutes: 10,
    focus: "胸肌",
    tags: ["胸肌"],
  },
  {
    id: "core-01",
    label: "女生訓練菜單",
    title: "韓國女藝人冰山美人腹肌菜單",
    cover:
      "https://images.unsplash.com/photo-1514996937319-344454492b37?auto=format&fit=crop&w=1200&q=80",
    level: "中級",
    intensity: "較難",
    durationMinutes: 10,
    focus: "核心",
    tags: ["女生", "冰山美人"],
  },
  {
    id: "full-body-01",
    label: "全身菜單",
    title: "快準狠燃脂菜單",
    cover:
      "https://images.unsplash.com/photo-1546484959-f9a9c6c1ff64?auto=format&fit=crop&w=1200&q=80",
    level: "中級",
    intensity: "較難",
    durationMinutes: 35,
    focus: "全身",
    tags: ["燃脂"],
  },
  {
    id: "shoulder-01",
    label: "女生訓練菜單",
    title: "韓國女藝人甜美圓肩菜單",
    cover:
      "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1200&q=80",
    level: "中級",
    intensity: "較難",
    durationMinutes: 35,
    focus: "肩膀",
    tags: ["女生", "甜美圓肩"],
  },
  {
    id: "abs-quick",
    label: "腹肌菜單",
    title: "超短 10 分鐘腹肌菜單",
    cover:
      "https://images.unsplash.com/photo-1541537103745-ea3429c65dc7?auto=format&fit=crop&w=1200&q=80",
    level: "入門",
    intensity: "入門",
    durationMinutes: 10,
    focus: "腹肌",
    tags: ["腹肌", "零器材"],
  },
];

@Controller("workouts")
export class WorkoutsController {
  @Get()
  getCatalog(): WorkoutSummary[] {
    return WORKOUTS;
  }

  @Get("featured")
  getFeatured(): { title: string; caption: string; items: WorkoutSummary[] } {
    return {
      title: "精選鍛煉菜單列表",
      caption: "韓國藝人菜單",
      items: WORKOUTS,
    };
  }
}
