import React from 'react'
import image1 from '../../assets/images/product_images/Product1.png'
import image2 from '../../assets/images/product_images/Product2.png'
import image3 from '../../assets/images/product_images/Product3.png'
import image4 from  '../../assets/images/product_images/Product4.png'
import image5 from  '../../assets/images/product_images/robe-Nalya.jpeg'
import { StaticImage } from "gatsby-plugin-image"
import './product.css';
export default function Products() {
    return (
      <div className="hero">
       <div className="container__wrapper">
       <div className="container">
        <div className="row d-flex justify-content-lg-between">
        <div className="col">
          <div className="slider">
            <div className="product">
                <div className="row d-flex justify-content-center">
                    <div className="col border-dark">
                         <img src={image1} className="img-fluid"></img>
                    </div>
                </div>
                <div className="row d-flex justify-content-center">
                    <div className="col">
                        <img src={image2} className="img-thumbnail"></img>
                    </div>
                </div>
                <div className="row">
                <div className="col">
                        <img src={image2} className="img-thumbnail"></img>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="preview">
                <StaticImage
                        src="../../assets/images/product_images/robe-Nalya.jpeg"
                        quality={95}
                        formats={["AUTO", "WEBP", "AVIF"]}
                        alt="A Gatsby astronaut"
                        style={{ marginBottom: `1.5rem` }}
                        />
                </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="content">
            <p className="brand">Brand: Varanga</p>
            <h2>Woman Black Quirky Print Empire Dress</h2>
            {/* <div className="rating">
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star-half-o" />
            </div> */}
            <p className="price">Brand: Varanga</p>
            <p>Size: <select name="size">
                <option value="select size">select size</option>
                <option value="small">small</option>
                <option value="medium">medium</option>
                <option value="large">large</option>
              </select></p>
            <p>Quantity: <input type="text" defaultValue={1} /></p>
            <button type="button">
              {/* <i className="fa fa-shopping-cart" /> */}
              Add to cart</button>
          </div>
        </div>
      </div>
      <div className="related">
        <h2 className="text-center">related items</h2>
        <div className="row d-flex justify-content-center mx-auto">
          <div className="product__item">
            <div className="items">
              <img src={image1} alt="" className="img-fluid" />
              <div className="details">
                <p>Woman Brown Solid Biker Jacket</p>
                {/* <div className="rating">
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star-half-o" />
                </div> */}
                <p>USD $120.00</p>
              </div>
            </div>
          </div>
          <div className="product__item">
            <div className="items">
              <img src={image3} alt="" className="img-fluid" />
              <div className="details">
                <p>Navy Blue Flared Palazzos</p>
                {/* <div className="rating">
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star-half-o" />
                  <i className="fa fa-star-o" />
                </div> */}
                <p>USD $80.00</p>
              </div>
            </div>
          </div>

          <div className="product__item">
            <div className="items">
              <img src={image4} alt=""  />
              <div className="details">
                <p>Printed Straight Kurta</p>
                {/* <div className="rating">
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star-half-o" />
                  <i className="fa fa-star-o" />
                </div> */}
                <p>USD $100.00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
        </div>
       </div>
    </div>
    )
}
