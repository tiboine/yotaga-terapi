import { defineConfig } from "tinacms";

export default defineConfig({
  branch: "master",
  clientId: "",
  token: "",
  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "images",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      {
        name: "site",
        label: "Nettside",
        path: "content/site",
        format: "json",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        fields: [
          {
            type: "object",
            name: "hero",
            label: "Forside (Hero)",
            fields: [
              {
                type: "string",
                name: "subtitle",
                label: "Undertittel",
              },
              {
                type: "string",
                name: "title",
                label: "Tittel",
              },
              {
                type: "string",
                name: "description",
                label: "Beskrivelse",
                ui: {
                  component: "textarea",
                },
              },
            ],
          },
          {
            type: "object",
            name: "about",
            label: "Om meg",
            fields: [
              {
                type: "string",
                name: "name",
                label: "Navn",
              },
              {
                type: "string",
                name: "bio",
                label: "Biografi",
                ui: {
                  component: "textarea",
                },
              },
              {
                type: "string",
                name: "bio2",
                label: "Biografi (avsnitt 2)",
                ui: {
                  component: "textarea",
                },
              },
              {
                type: "string",
                name: "bio3",
                label: "Biografi (avsnitt 3)",
                ui: {
                  component: "textarea",
                },
              },
            ],
          },
          {
            type: "object",
            name: "services",
            label: "Tjenester",
            list: true,
            ui: {
              itemProps: (item: Record<string, string>) => ({
                label: item?.title || "Ny tjeneste",
              }),
            },
            fields: [
              {
                type: "string",
                name: "title",
                label: "Tittel",
              },
              {
                type: "string",
                name: "description",
                label: "Beskrivelse",
                ui: {
                  component: "textarea",
                },
              },
              {
                type: "string",
                name: "features",
                label: "Stikkord",
                list: true,
              },
            ],
          },
          {
            type: "object",
            name: "testimonials",
            label: "Anmeldelser",
            list: true,
            ui: {
              itemProps: (item: Record<string, string>) => ({
                label: item?.name || "Ny anmeldelse",
              }),
            },
            fields: [
              {
                type: "string",
                name: "name",
                label: "Navn",
              },
              {
                type: "string",
                name: "text",
                label: "Anmeldelse",
                ui: {
                  component: "textarea",
                },
              },
              {
                type: "string",
                name: "service",
                label: "Tjeneste",
              },
              {
                type: "number",
                name: "rating",
                label: "Stjerner (1-5)",
              },
            ],
          },
          {
            type: "object",
            name: "contact",
            label: "Kontakt",
            fields: [
              {
                type: "string",
                name: "phone",
                label: "Telefon",
              },
              {
                type: "string",
                name: "email",
                label: "E-post",
              },
              {
                type: "string",
                name: "facebook",
                label: "Facebook URL",
              },
              {
                type: "string",
                name: "location",
                label: "Lokasjonsbeskrivelse",
                ui: {
                  component: "textarea",
                },
              },
            ],
          },
        ],
      },
    ],
  },
});
