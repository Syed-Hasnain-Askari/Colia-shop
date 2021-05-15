import React from 'react';
import Layout from '../Component/layout';
import ControlledCarousel from '../Component/Carousal/Carousal'
import { graphql } from 'gatsby';
import {Col,Row} from 'react-bootstrap'
import { StaticImage } from 'gatsby-plugin-image';
import AllProducts from '../Component/Products/GridTile'
import '../Component/index.css'
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
          <Row className="d-flex justify-content-center">
            <Col lg={6}>
              <h1 className="text-center product__heading">Achetez ces looks</h1>
              <p className="text-center">Mettez en valeur votre propre personnalité et votre individualité avec nos articles à la mode.</p>
            </Col>
          </Row>
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
          id
          name
          sku
          size
          qty
          price
          category
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