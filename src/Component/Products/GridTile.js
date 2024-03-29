import React,{useState} from 'react'
import './gridtitle.css';
import CompareIcon from '@material-ui/icons/Compare';
import SearchIcon from '@material-ui/icons/Search';
import { Col, Row } from "react-bootstrap"
import {Link} from 'gatsby'

function GridTile(props) {
    const [product,setProduct] = useState({
        item:props.product
      })
    return (
        <div className="container mt-5">
            <Row>
            {product.item.map((edge)=>{
                 const item = edge.node
                return(
                    <Col lg={3} xl={3} sm={12} xs={12}>
                    <div className="grid__tile" key={item.productSlug}>
            <div className="gridtrans__img">
                <img
                    className="gridReal__image"
                    src={item.galleryImage1.fluid.src} alt=""
                />
                <img
                    className="gridHover__image"
                    src={item.galleryImage2.fluid.src} alt=""
                />
                <span className="avail__sec">{item.sku}</span>
                <div className="choiceSec__opt">
                    <span><SearchIcon/></span>
                    <Link to={`/Product/${item.productSlug}`}><span className="middle__span">choice of options</span></Link>
                    <span><CompareIcon/></span>
                </div>
            </div>
            <h3>{item.name}</h3>
            <h4>${item.price}</h4>
        </div>
                    </Col>
                )
            })}
              
            </Row>
        </div>
        
    )
}

export default GridTile
