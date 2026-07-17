// @ts-check
// Sidebar definition. See https://docusaurus.io/docs/sidebar

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docs: [
    {
      type: "category",
      label: "Kizeo Connector",
      collapsible: true,
      collapsed: false,
      items: [
        {
          type: "category",
          label: "Getting started",
          key: "connector-getting-started",
          items: ["installation"],
        },
        {
          type: "category",
          label: "Settings",
          items: ["configuration", "mysql", "postgressql", "microsoftsql"],
        },
        { type: "category", label: "Settings wizard", items: ["demo"] },
        { type: "category", label: "Samples", items: ["howtouse"] },
      ],
    },
    {
      type: "category",
      label: "Web Service",
      collapsible: true,
      collapsed: true,
      items: [
        {
          type: "category",
          label: "Getting started",
          key: "webservice-getting-started",
          items: ["restv3", "curl-install"],
        },
        { type: "category", label: "Forms", items: ["forms", "forms-samples"] },
        { type: "category", label: "Lists", items: ["lists", "lists-samples"] },
        { type: "category", label: "Users", items: ["users", "users-samples"] },
        { type: "category", label: "Data", items: ["data", "data-samples"] },
        { type: "category", label: "Exports", items: ["exports", "exports-samples"] },
        { type: "category", label: "Tips", items: ["tips"] },
      ],
    },
    {
      type: "category",
      label: "Deep linking",
      collapsible: true,
      collapsed: true,
      items: ["deep-linking"],
    },
  ],
};

module.exports = sidebars;
