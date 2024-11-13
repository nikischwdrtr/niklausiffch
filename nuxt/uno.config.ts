// uno.config.ts
import {
  defineConfig,
  transformerDirectives,
  transformerVariantGroup,
} from "unocss";

export default defineConfig({
  shortcuts: {
    flexCenter: "flex items-center justify-center",
  },
  transformers: [transformerDirectives(), transformerVariantGroup()],
});