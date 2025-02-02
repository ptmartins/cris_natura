import { defineConfig } from 'astro/config';
import dotenv from "dotenv";
import 'dotenv/config';
import icon from "astro-icon";

dotenv.config();

export default defineConfig({
  integrations: [icon()]
});