import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "category",
      label: "Category",
      link: {
        type: "generated-index",
        title: "Category",
        slug: "/category/getting-started/apis/openapi/category",
      },
      items: [
        {
          type: "doc",
          id: "getting-started/apis/openapi/creates-a-new-product-category",
          label: "Creates a new product category",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "getting-started/apis/openapi/gets-a-list-of-product-categories",
          label: "Gets a list of product categories",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "getting-started/apis/openapi/updates-an-existing-product-category",
          label: "Updates an existing product category",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "getting-started/apis/openapi/deletes-an-existing-product-category",
          label: "Deletes an existing product category",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "getting-started/apis/openapi/gets-the-details-of-a-product-category",
          label: "Gets the details of a product category",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "getting-started/apis/openapi/sorts-product-categories",
          label: "Sorts product categories",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
