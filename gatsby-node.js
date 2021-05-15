var path = require("path")
exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions

  const result = await graphql(`
  {
    allContentfulProducts {
      edges {
        node {
          id
          name
          price
          category
          productSlug
          size
          sku
          galleryImage1 {
            fluid(quality: 95) {
              src
            }
          }
          galleryImage2 {
            fluid(quality: 95) {
              src
            }
          }
          galleryImage3 {
            fluid(quality: 95) {
              src
            }
          }
          galleryImage4 {
            fluid(quality: 95) {
              src
            }
          }
        }
      }
    }
  }
`)

  result.data.allContentfulProducts.edges.forEach(obj => {
    createPage({
      path: `/Product/${obj.node.productSlug}`,
      component: path.resolve("./src/Component/templates/product.js"),
      context: {
        Item_Details: obj.node,
      },
    })
  })
}
