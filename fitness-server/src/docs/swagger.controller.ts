import { Controller, Get, Header } from "@nestjs/common";

const openApiSpec = {
  openapi: "3.0.1",
  info: {
    title: "Fitness Home API",
    version: "0.1.0",
    description: "Swagger specification for首頁的示意資料",
  },
  servers: [{ url: "http://localhost:3000" }],
  paths: {
    "/workouts": {
      get: {
        summary: "取得所有鍛煉菜單",
        tags: ["Workouts"],
        responses: {
          "200": {
            description: "成功取得列表",
            content: {
              "application/json": {
                schema: {
                  type: "array",
                  items: { $ref: "#/components/schemas/WorkoutSummary" },
                },
              },
            },
          },
        },
      },
    },
    "/workouts/featured": {
      get: {
        summary: "取得精選鍛煉菜單",
        tags: ["Workouts"],
        responses: {
          "200": {
            description: "精選菜單區塊",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    title: { type: "string", example: "精選鍛煉菜單列表" },
                    caption: { type: "string", example: "韓國藝人菜單" },
                    items: {
                      type: "array",
                      items: { $ref: "#/components/schemas/WorkoutSummary" },
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
    "/home/filters": {
      get: {
        summary: "首頁篩選條件",
        tags: ["Home"],
        responses: {
          "200": {
            description: "篩選條件列表",
            content: {
              "application/json": {
                schema: { $ref: "#/components/schemas/HomeFilters" },
              },
            },
          },
        },
      },
    },
    "/home/sections": {
      get: {
        summary: "首頁菜單區塊",
        tags: ["Home"],
        responses: {
          "200": {
            description: "列表區塊與卡片內容",
            content: {
              "application/json": {
                schema: {
                  type: "array",
                  items: { $ref: "#/components/schemas/HomeSection" },
                },
              },
            },
          },
        },
      },
    },
    "/home/creator": {
      get: {
        summary: "首頁創作者亮點",
        tags: ["Home"],
        responses: {
          "200": {
            description: "創作者摘要",
            content: {
              "application/json": {
                schema: { $ref: "#/components/schemas/HeroCreator" },
              },
            },
          },
        },
      },
    },
  },
  components: {
    schemas: {
      WorkoutSummary: {
        type: "object",
        properties: {
          id: { type: "string", example: "chest-01" },
          label: { type: "string", example: "胸肌菜單" },
          title: { type: "string", example: "增大胸肌菜單" },
          cover: { type: "string", format: "uri" },
          level: { type: "string", example: "入門" },
          intensity: { type: "string", example: "較難" },
          durationMinutes: { type: "integer", example: 10 },
          focus: { type: "string", example: "胸肌" },
          tags: {
            type: "array",
            items: { type: "string" },
            example: ["女生", "冰山美人"],
          },
        },
      },
      HomeSection: {
        type: "object",
        properties: {
          id: { type: "string", example: "all" },
          title: { type: "string", example: "所有鍛煉列表" },
          caption: { type: "string", example: "連假也健身" },
          items: {
            type: "array",
            items: { $ref: "#/components/schemas/WorkoutSummary" },
          },
        },
      },
      HomeFilters: {
        type: "object",
        properties: {
          categories: {
            type: "array",
            items: { type: "string" },
            example: ["徒手", "器材", "無噪音"],
          },
          durations: {
            type: "array",
            items: { type: "integer" },
            example: [5, 10, 35],
          },
        },
      },
      HeroCreator: {
        type: "object",
        properties: {
          name: { type: "string", example: "李玟婷" },
          headline: { type: "string", example: "這個暑假雕塑漂亮的身材" },
          plan: { type: "string", example: "7月減脂計畫" },
          favorites: { type: "integer", example: 68799 },
        },
      },
    },
  },
};

@Controller("swagger")
export class SwaggerController {
  @Get("openapi.json")
  getDocument() {
    return openApiSpec;
  }

  @Get()
  @Header("Content-Type", "text/html")
  getUi() {
    return `<!doctype html>
<html lang="zh-Hant">
  <head>
    <meta charset="UTF-8" />
    <title>Fitness API Docs</title>
    <link rel="stylesheet" href="https://unpkg.com/swagger-ui-dist@5.17.14/swagger-ui.css" />
  </head>
  <body>
    <div id="swagger-ui"></div>
    <script src="https://unpkg.com/swagger-ui-dist@5.17.14/swagger-ui-bundle.js"></script>
    <script>
      window.onload = () => {
        SwaggerUIBundle({
          dom_id: '#swagger-ui',
          url: '/swagger/openapi.json',
          presets: [SwaggerUIBundle.presets.apis],
        });
      };
    </script>
  </body>
</html>`;
  }
}
