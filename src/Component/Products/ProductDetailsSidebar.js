import React, { useState } from 'react'
import "./ProductDetailsSidebar.css";
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import MailOutlineIcon from '@material-ui/icons/MailOutline';

function ProductDetailsSidebar(props) {

    const [num, setNum] = useState(0);
    
    const increase = () => {
        setNum(num+1);
    };
    const decrease = () => {
        if( num > 0 ) {
            setNum(num-1);
        }
        else {
            setNum(0);
        }
    };

    return (
        <div className="productSidebar__details">
            <h3> {props.productName} </h3>
            <h4 className="price"> {props.productPrice} </h4>
            <div className="size__sec">
                <label>Size:</label>
                <button>S</button>
                <button>M</button>
            </div>
            <div className="add__toCart">
                <div className="counter">
                    <button
                        onClick={decrease}
                    >-</button>
                    <h4> {num} </h4>
                    <button 
                        onClick={increase}
                    >+</button>
                </div>
                <div className="ADC__sec">
                    <button className="ADC__button">add to cart</button>
                </div>
            </div>
            <div className="further__details">
                <table>
                    <tr>
                        <th>SKU:</th>
                        <td>N / A</td>
                    </tr>
                    <tr>
                        <th>Categories:</th>
                        <td>{props.category} </td>
                    </tr>
                    <tr>
                        <th>Share on:</th>
                        <td>
                            <FacebookIcon/>
                            <TwitterIcon/>
                            <MailOutlineIcon/>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    )
}

export default ProductDetailsSidebar
