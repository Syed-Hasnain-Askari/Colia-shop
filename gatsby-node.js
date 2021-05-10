var path = require("path")
exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions

  const result = await graphql(`
    {
      allContentfulProducts {
        edges {
          node {
            name
            sku
            size
            qty
            price
            description {
              description
            }
            image {
              file {
                url
              }
            }
          }
        }
      }
    }
  `)

  result.data.allContentfulProducts.edges.forEach(obj => {
    createPage({
      path: `/Product/${obj.node.name}`,
      component: path.resolve("./src/Component/templates/product.js"),

      context: {
        Item_Details: obj.node,
      },
    })
  })
}
