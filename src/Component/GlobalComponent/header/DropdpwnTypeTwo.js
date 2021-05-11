import React from 'react'
import './DropdpwnTypeTwo.css'
import droptype2 from '../../../assets/images/header_images/droptype2.jpeg'


function DropdpwnTypeTwo() {
    return (
        <div className="dropdown2">
            <div className="col1">
                <table>
                    <tr>
                        <td><a href="">CLOTHING</a></td>
                        <td><a href="">Dresses</a></td>
                    </tr>
                    <tr>
                        <td><a href="">bodysuits</a></td>
                        <td><a href="">long dresses</a></td>
                    </tr>
                    <tr>
                        <td><a href="">crop tops</a></td>
                        <td><a href="">evening dresses</a></td>
                    </tr>
                    <tr>
                        <td><a href="">playsuits</a></td>
                        <td><a href="">basic dresses</a></td>
                    </tr>
                    <tr>
                        <td><a href="">sports outfits</a></td>
                        <td><a href="">bandages</a></td>
                    </tr>
                    <tr>
                        <td> <a href="">Jackets</a></td>
                        <td><a href="">skirts bandages</a></td>
                    </tr>
                    <tr>
                        <td><a href="">sets</a></td>
                        <td><a href="">bandage dresses</a></td>
                    </tr>
                    <tr>
                        <td><a href="">combinations</a></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td><a href="">SLEEVES</a></td>
                        <td><a href="">ACCESSORIES</a></td>
                    </tr>
                    <tr>
                        <td> <a href="">SHOES</a></td>
                        <td></td>
                    </tr>
                </table>
            </div>
            <div className="col2">
                <img src={droptype2} alt="" />
            </div>
        </div>
    )
}

export default DropdpwnTypeTwo
