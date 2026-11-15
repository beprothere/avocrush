import { type SchemaTypeDefinition } from "sanity";
import { heroBannerType } from "@/sanity/schemaTypes/heroBannerType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [heroBannerType],
};
