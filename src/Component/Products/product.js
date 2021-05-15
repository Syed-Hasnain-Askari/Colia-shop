import React, { useState } from 'react'
import ReactImageMagnify from 'react-image-magnify';
import { Image, Col, Row} from 'react-bootstrap'
import {useStateValue} from '../Context/StateProvider'
import ProductDetailsSidebar from './ProductDetailsSidebar'
import './ProductDetailsSidebar.css'
import './product.css';
export default function Products(props) {

  const [selectedItem, setSelectedItem] = useState(props.image1)
  const [{basket},dispatch] = useStateValue()
  const Addtocart = () =>{
    dispatch({
      type:"Add_To_Basket",
      item:{
        title:props.name,
        image:props.image1,
        price:props.price,
      }
    })
  }
  return (
         <div className="container">
            <div className="row d-flex justify-content-center product_wrapper">
              <Row className="m-0">
              <Col xl={8} lg={8} md={8} sm={12} xs={12} className="left__gallery">
                <Row>
                  <Col xl={2} lg={2} md={4} sm={4} xs={4}>
                    <Image
                      src={props.image1}
                      style={{
                        width: 150,
                        height: 130,
                        objectFit: "contain",
                        cursor: "pointer",
                      }}
                      onClick={() => {
                        setSelectedItem(props.image1)
                      }}
                    />
                    <Image
                      src={props.image2}
                      style={{
                        width: 150,
                        height: 130,
                        objectFit: "contain",
                        marginTop: "20px",
                        cursor: "pointer",
                      }}
                      onClick={() => {
                        setSelectedItem(props.image2)
                      }}
                    />
                    <Image
                      src={props.image3}
                      style={{
                        width: 150,
                        height: 130,
                        objectFit: "contain",
                        marginTop: "20px",
                        cursor: "pointer",
                      }}
                      onClick={() => {
                        setSelectedItem(props.image3)
                      }}
                    />
                  </Col>
                  <Col xl={6} lg={6} md={6} sm={6} xs={6} className="preview">
                    <ReactImageMagnify {...{
                        smallImage: {
                            alt: '',
                            isFluidWidth: true,
                            src: selectedItem,
                           
                        },
                        largeImage: {
                            alt: '',
                            src: selectedItem,
                            width: 1000,
                            height: 1800
                        }
                    }} />
                  </Col>
                </Row>
              </Col>
              <Col xl={4} lg={4} md={12} sm={12} xs={12}>
                    <ProductDetailsSidebar
                    title={props.title}
                    price={props.price}
                    sku={props.sku}
                    categoty={props.category}
                    id={props.id}
                    image={props.image1}
                    
                    />
              </Col>
            </Row>
             
            </div>
         </div>
  )
}
