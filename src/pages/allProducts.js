import React from "react"
import { graphql } from 'gatsby';

export default function Home({data}) {
    console.log(data.allContentfulProducts.edges)
    return <div></div>
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
          image {
            file {
              url
            }
          }
        }
      }
    }
  }
`