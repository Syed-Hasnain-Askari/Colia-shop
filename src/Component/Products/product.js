import React from 'react'
import image1 from '../../images/Product1.png'
import image2 from '../../images/Product2.png'
import image3 from '../../images/Product3.png'
import image4 from  '../../images/Product4.png'
import './product.css';
export default function Products() {
    return (
      <div className="hero container">
      <div className="row d-flex justify-content-lg-between">
        <div className="col">
          <div className="slider border">
            <div className="product border">
                <div className="row d-flex justify-content-center">
                    <div className="col">
                         <img src={image1}></img>
                    </div>
                </div>
                <div className="row d-flex justify-content-center">
                    <div className="col">
                        <img src={image2}></img>
                    </div>
                </div>
                <div className="row">
                <div className="col">
                        <img src={image2}></img>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="preview border">
                    <img src={image1}></img>
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
        <h2>related items</h2>
        <div className="row">
          <div className="columns">
            <div className="items">
              <img src={image1} alt="" />
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
          <div className="columns">
            <div className="items">
              <img src={image3} alt="" />
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

          <div className="columns">
            <div className="items">
              <img src={image4} alt="" />
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
    )
}
