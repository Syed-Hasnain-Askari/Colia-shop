import React from 'react';
import Layout from '../Component/layout';
import ControlledCarousel from '../Component/Carousal/Carousal'
import { graphql } from 'gatsby';
import {Col,Row} from 'react-bootstrap'
import { StaticImage } from 'gatsby-plugin-image';
import AllProducts from '../Component/Products/GridTile'
import './index.css'
const IndexPage = ({data}) => {
  const result = data.allContentfulProducts.edges
  return (
    <div>
      <Layout>
        <div className="layout__wrapper">
          <div className="carousal__section">
            <ControlledCarousel/>
          </div>
          <div className="container image__section">
            <div className="row border mx-auto">
            <Row className="d-flex align-content-center justify-content-sm-end justify-content-lg-center mx-auto m-lg-5">
                <Col sm={12} xs={12} lg={4} className="ml-5">
                <StaticImage
                        src="../assets/images/frontpage1.jpeg"
                        quality={95}
                        formats={["AUTO", "WEBP", "AVIF"]}
                        alt="A Gatsby astronaut"
                        className="image1"
                        style={{ marginBottom: `1.5rem` }}
                      />
                  
                </Col>
                <Col sm={12} xs={12} lg={8} className="mt-lg-5">
                  
                <StaticImage
                        src="../assets/images/frontpage2.jpeg"
                        quality={95}
                        formats={["AUTO", "WEBP", "AVIF"]}
                        alt="A Gatsby astronaut"
                        width={700}
                        className="frontimage2"
                        style={{
                          marginBottom: `1.5rem`,
                          
                        }}
                      />
                </Col>
              </Row>
            </div>
          </div> 
          <AllProducts product={result}/>
          
          {/* <Cart/>
          <Checkout/> */}
          <div className="container-fluid image__section1">
            <Row>
              <Col>
              <StaticImage
                        src="../assets/images/col_joy_520.jpeg"
                        quality={95}
                        formats={["AUTO", "WEBP", "AVIF"]}
                        alt="A Gatsby astronaut"
                        width={700}
                        className="col_joy_520"
                        style={{
                          marginBottom: `1.5rem`,
                          
                        }}
                      />
              </Col>
              <Col>
              <StaticImage
                        src="../assets/images/Gilet-Emilia.jpeg"
                        quality={95}
                        formats={["AUTO", "WEBP", "AVIF"]}
                        alt="A Gatsby astronaut"
                        width={700}
                        className="Gilet-Emilia"
                        style={{
                          marginBottom: `1.5rem`,
                          
                        }}
                      />
              </Col>
            </Row>
            </div>
        
        </div>
      </Layout>
    </div>
  )
}
export default IndexPage
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