import { defineConfig, presetUno, presetIcons } from "unocss";

export default defineConfig({
  presets: [
    presetUno(),
    presetIcons({
      // scale: 1.2, // 默认图标大小 - @default 1
      warn: true, // 当没有匹配到图标时发出警告
    }),
  ],
  shortcuts: {
    "flex-center": "flex items-center justify-center",
    "wh-full": "w-full h-full",
    "base-btn":
      "inline-flex items-center justify-center flex-wrap select-none cursor-pointer text-center transition duration-200 px-3 h-10 min-h-10 min-w-20 gap-2 no-underline",
    "contained-btn":
      "base-btn border border-transparent rounded shadow-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700",
    "outlined-btn":
      "base-btn bg-transparent border border-solid rounded border-indigo-500 text-indigo-500 hover:bg-indigo-100/40 hover:text-indigo-600 hover:border-indigo-600",
  },
  theme: {
    colors: {
      primary: {
        500: "#a2a2a2",
        600: "#808080",
      },
    },
  },
});
