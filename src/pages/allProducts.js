import React from 'react'
import { graphql } from 'gatsby';

export default function Home() {
    // const item = data.allContentfulProducts.edges
    // console.log(item)
    return <div>
      <h1>dasdasd</h1>
    </div>
}

export const query = graphql`
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
          galleryImage1 {
            file {
              url
            }
          }
          galleryImage2 {
            file {
              url
            }
          }
          galleryImage3 {
            file {
              url
            }
          }
        }
      }
    }
  }
`