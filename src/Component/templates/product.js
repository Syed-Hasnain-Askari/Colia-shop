import React from 'react';
import Layout from '../layout'
import {Link} from 'gatsby'
import ProductDetail from '../Products/product'
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
export default function Home({pageContext}) {
    return(
        <Layout>
            <div className="d-flex justify-content-end mt-5 m-lg-5" ><Link to="/"><KeyboardBackspaceIcon style={{ fontSize: 40, color:"black" }}/></Link></div>
            <ProductDetail
            id={pageContext.Item_Details.id}
            image1={pageContext.Item_Details.galleryImage1.file.url}
            image2={pageContext.Item_Details.galleryImage2.file.url}
            image3={pageContext.Item_Details.galleryImage3.file.url}
            title={pageContext.Item_Details.name}
            price={pageContext.Item_Details.price}
            sku={pageContext.Item_Details.sku}
            size={pageContext.Item_Details.size}
            category={pageContext.Item_Details.category}
            />
        </Layout>
    )
}