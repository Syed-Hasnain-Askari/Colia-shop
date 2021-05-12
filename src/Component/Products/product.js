import React, { useState } from "react"
import image1 from "../../assets/images/product_images/Product1.png"
import image2 from "../../assets/images/product_images/Product2.png"
import image3 from "../../assets/images/product_images/Product3.png"
import image4 from "../../assets/images/product_images/Product4.png"
import ReactImageMagnify from 'react-image-magnify';
import { Image, Col, Row } from "react-bootstrap"
import image5 from "../../assets/images/product_images/robe-Nalya.jpeg"
import { StaticImage } from "gatsby-plugin-image"
import "./product.css"
export default function Products() {
  const [selectedItem, setSelectedItem] = useState(image1)
  return (
         <div className="container">
            <div className="row d-flex justify-content-center">
              <div className="col-xl-12 col-xs-12 col-lg-12">
              <Row className="m-0 border">
              <Col xl={6} lg={6} md={6} sm={6} xs={6} className="left__gallery">
                <Row className="">
                  <Col xl={2} lg={2} md={4} sm={4} xs={4}>
                    <Image
                      src={image1}
                      style={{
                        width: 150,
                        height: 130,
                        objectFit: "contain",
                        marginTop: "20px",
                        cursor: "pointer",
                      }}
                      onClick={() => {
                        setSelectedItem(image1)
                      }}
                    />
                    <Image
                      src={image2}
                      style={{
                        width: 150,
                        height: 130,
                        objectFit: "contain",
                        marginTop: "20px",
                        cursor: "pointer",
                      }}
                      onClick={() => {
                        setSelectedItem(image2)
                      }}
                    />
                    <Image
                      src={image3}
                      style={{
                        width: 150,
                        height: 130,
                        objectFit: "contain",
                        marginTop: "20px",
                        cursor: "pointer",
                      }}
                      onClick={() => {
                        setSelectedItem(image3)
                      }}
                    />
                    <Image
                      src={image4}
                      style={{
                        width: 150,
                        height: 130,
                        objectFit: "contain",
                        marginTop: "20px",
                        cursor: "pointer",
                      }}
                      onClick={() => {
                        setSelectedItem(image4)
                      }}
                    />
                  </Col>
                  <Col xl={4} lg={4} md={4} sm={4} xs={4} className="preview">
                    <Image
                      src={selectedItem}
                      style={{
                        width: 500,
                        height: 500,
                        objectFit: "contain",
                      }}
                    />
                  </Col>
                </Row>
              </Col>
              <Col xl={6} lg={6} md={6} sm={12} xs={12}>
                <Row>
                  <div className="product__title">
                      <h4>Robe Escondida</h4>
                  </div>
                </Row>
                <Row>
                  <div className="product__costsection d-flex justify-content-between">
                  <div className="product__cost">
                      <del>65.96</del>
                  </div>
                  <div className="product__discount">
                  <span class="woocommerce-Price-currencySymbol">$</span>&nbsp;39.52
                  </div>
                  </div>
                  <div className="price">
                      <h5></h5>
                  </div>
                </Row>
              </Col>
            </Row>
              </div>
            </div>
         </div>
  )
}
