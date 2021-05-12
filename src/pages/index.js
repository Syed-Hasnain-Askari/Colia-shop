import * as React from "react"
import Layout from "../Component/layout"
import Checkout from '../Component/Checkout/Checkout'
import Product from "../Component/Products/product"
import ControlledCarousel from "../Component/Carousal/Carousal"
import image from "../assets/images/frontpage1.jpeg"
import SilderComponent from '../Component/Carousal/SliderComponent'
import { StaticImage } from "gatsby-plugin-image"
const IndexPage = () => {
  return (
    <div>
      <Layout>
        <div className="layout__wrapper">
          <div className="carousal__section">
            <ControlledCarousel/>
          </div>
          <div className="container image__section">
            <div className="row d-flex justify-content-center mx-auto">
              <div className="col-lg-10 col-md-10 col-xl-10">
                <div className="row d-flex justify-content-center">
                  <div className="col-lg-12 col-xs-12 firstimage__section border d-flex justify-content-xl-between align-content-center">
                    <div>
                      <StaticImage
                        src="../assets/images/frontpage1.jpeg"
                        quality={95}
                        formats={["AUTO", "WEBP", "AVIF"]}
                        alt="A Gatsby astronaut"
                        style={{ marginBottom: `1.5rem` }}
                      />
                    </div>
                    <div className="second__image">
                      <StaticImage
                        src="../assets/images/frontpage2.jpeg"
                        quality={95}
                        width={700}
                        formats={["AUTO", "WEBP", "AVIF"]}
                        alt="A Gatsby astronaut"
                        style={{
                          marginBottom: `1.5rem`,
                        }}
                      />
                    </div>
                  </div>
                 
                </div>
              </div>
            </div>
          </div> 
          <Product />
          <Checkout/>
        </div>
      </Layout>
    </div>
  )
}
export default IndexPage
