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
    showHome: false,
    showTags: false,
    links: [
    ],
    sections: [
      {
        label: "Java",
        collapsible: true,
        groups: [
          {
            query: createNotesQuery({
              pattern: "^/Java(?: method| Classes| Data Structures)?/",
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
        collapsible: true,
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
        collapsible: true,
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
      {
        label: "11ty",
        collapsible: true,
        expanded: false,
        links: [
          {
            url: "/",
            label: "Home",
            icon: "home",
            openInNewTab: false,
          },
          {
            url: "https://github.com/rothsandro/eleventy-notes",
            label: "GitHub / Support",
            icon: "github",
          },
        ],
        groups: [
          {
            query: createNotesQuery({
              pattern: "^/Introduction/",
            }),
          },
        ],
      },
    ],
  },
});
