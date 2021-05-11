import * as React from "react"
import Layout from '../Component/layout'
import Product from '../Component/Products/product'
import Carousal from '../Component/Carousal/Carousal'
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
