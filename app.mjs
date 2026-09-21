// @ts-check
import { defineConfig, createNotesQuery } from "./.app/app-config.js";

export default defineConfig({
  title: "Eleventy Notes",
  description:
    "A simple, lightweight, and flexible note-taking template for Eleventy.",
  editThisNote: {
    url: "https://github.com/rothsandro/eleventy-notes/edit/{{branch}}/{{file}}",
  },
  staticAssets: {
    paths: { "public/": "/" },
  },
  ignores: ["README.md", "CHANGELOG.md"],
  customProperties: {
    properties: [
      {
        name: "author",
        template: "[{{ value.name }}]({{ value.url }})",
      },
      {
        path: "props",
        options: {
          date: {
            locale: "en-US",
          },
        },
      },
    ],
  },
  sidebar: {
    showTags: false,
    links: [
      {
        url: "https://github.com/rothsandro/eleventy-notes",
        label: "GitHub / Support",
        icon: "github",
      }
    ],
    sections: [
      {
        label: "Introduction",
        groups: [
          {
            query: createNotesQuery({
              pattern: "^/Introduction/",
            }),
          },
        ],
      },
      {
        label: "Java",
        groups: [
          {
            query: createNotesQuery({
              pattern: "^/Java(?: method)?/",
              tree: {
                expanded: false,
                replace: {
                  "^/Java/[^/]+/": "/Java/",
                },
              },
            }),
          },
        ],
      },
      {
        label: "Version Control & CI",
        groups: [
          {
            query: createNotesQuery({
              pattern: "^/Git and GitHub/",
              tree: {
                expanded: false,
                replace: {
                  "^/Git and GitHub/": "/Version Control & CI/",
                },
              },
            }),
          },
        ],
      },
      {
        label: "AI Basics",
        groups: [
          {
            query: createNotesQuery({
              pattern: "^/AI Basics/",
              tree: {
                expanded: false,
              },
            }),
          },
        ],
      },
    ],
  },
});
