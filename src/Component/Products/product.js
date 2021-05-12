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
              <Row className="m-0 border">
              <Col xl={8} lg={8} md={8} sm={12} xs={12} className="left__gallery">
                <Row className="border">
                  <Col xl={2} lg={2} md={4} sm={4} xs={4}>
                    <Image
                      src={image1}
                      style={{
                        width: 150,
                        height: 130,
                        objectFit: "contain",
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
              <Col xl={4} lg={4} md={12} sm={12} xs={12}>
                <Row>
                  <div className="product__title">
                      <h4>Robe Escondida</h4>
                  </div>
                </Row>
                <Row>
                  <div className="product__costsection d-flex justify-content-between mt-3">
                  <div className="product__cost">
                      <del>65.96</del>
                  </div>
                  <div className="product__discount">
                  <span>$</span>&nbsp;39.52
                  </div>
                  </div>
                </Row>
                <Row>
                <div className="color__section d-flex justify-content-between mt-5">
                  <div className="color__heading">
                      <h5>Color</h5>
                  </div>
                  <div className="pick__color">
                  <div class="color-item" role="presentation"></div>
                  <div class="color-item" role="presentation"></div>
                  
                  </div>
                  </div>
                </Row>
              </Col>
            </Row>
             
            </div>
         </div>
  )
}
