import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Layout from '../Component/layout'
import Product from '../Component/Products/product'
const IndexPage = () => {
  return (
    <div>
      <Layout>
         <Product/>
      </Layout>
    </div>
  )
}
export default IndexPage
