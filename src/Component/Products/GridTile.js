import React,{useState} from 'react'
import './GridTile.css'
import CompareIcon from '@material-ui/icons/Compare';
import SearchIcon from '@material-ui/icons/Search';
import image3 from "../../assets/images/product_images/Product3.png";
import image1 from "../../assets/images/product_images/Product1.png"
import { Image, Col, Row } from "react-bootstrap"
import {Link} from 'gatsby'

function GridTile(props) {
    const [product,setProduct] = useState({
        item:props.product
      })
    return (
        <div className="container mt-5">
            <Row>
            {product.item.map((edge,index)=>{
                 const item = edge.node
                return(
                    <Col lg={3} xl={3} sm={6} xs={6}>
                    <div className="grid__tile">
            <div className="gridtrans__img">
                <img
                    className="gridReal__image"
                    src={item.galleryImage1.file.url} alt=""
                />
                <img
                    className="gridHover__image"
                    src={item.galleryImage2.file.url} alt=""
                />
                <span className="avail__sec">{item.sku}</span>
                <div className="choiceSec__opt">
                    <span><SearchIcon/></span>
                    <Link to={`/Product/${item.name}`}><span className="middle__span">choice of options</span></Link>
                    <span><CompareIcon/></span>
                </div>
            </div>
            <h3>{item.name}</h3>
            <h4>{item.price}</h4>
        </div>
                    </Col>
                )
            })}
              
                {/* <Col lg={3} xl={3} sm={6} xs={6}>
                <div className="grid__tile">
        <div className="gridtrans__img">
            <img
                className="gridReal__image"
                src={image3} alt=""
            />
            <img
                className="gridHover__image"
                src={image1} alt=""
            />
            <span className="avail__sec">New</span>
            <div className="choiceSec__opt">
                <span><SearchIcon/></span>
                <span className="middle__span">choice of options</span>
                <span><CompareIcon/></span>
            </div>
        </div>
        <h3> dfsd </h3>
        <h4> fsdfsd </h4>
    </div>
                </Col>
                <Col lg={3} xl={3} sm={6} xs={6}>
                <div className="grid__tile">
        <div className="gridtrans__img">
            <img
                className="gridReal__image"
                src={image3} alt=""
            />
            <img
                className="gridHover__image"
                src={image1} alt=""
            />
            <span className="avail__sec">New</span>
            <div className="choiceSec__opt">
                <span><SearchIcon/></span>
                <span className="middle__span">choice of options</span>
                <span><CompareIcon/></span>
            </div>
        </div>
        <h3> dfsd </h3>
        <h4> fsdfsd </h4>
    </div>
                </Col> */}
            </Row>
        </div>
        
    )
}

export default GridTile
