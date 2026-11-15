import { defineType, defineField } from "sanity";

export const heroBannerType = defineType({
  name: "heroBanner",
  title: "Hero Banner",
  type: "document",

  fields: [
    defineField({
      name: "bgImage",
      title: "Banner Background Image",
      type: "image",
      options: { hotspot: true },
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: "heading",
      title: "Banner Heading",
      type: "string",
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: "description",
      title: "Banner Description",
      type: "text",
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: "image",
      title: "Banner Image",
      type: "image",
      options: { hotspot: true },
    }),

    defineField({
      name: "ctaSlug",
      title: "CTA Slug",
      type: "slug",
      options: {
        source: "heading",
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),
  ],
});