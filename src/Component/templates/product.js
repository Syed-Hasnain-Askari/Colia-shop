import React from 'react';
import Layout from '../layout'
import ProductDetail from '../Products/product'
import "bootstrap/dist/css/bootstrap.min.css";
export default function Home({pageContext}) {
    console.log(pageContext.Item_Details)
    return(
        <Layout>
            <ProductDetail
            image1={pageContext.Item_Details.galleryImage1.file.url}
            image2={pageContext.Item_Details.galleryImage2.file.url}
            image3={pageContext.Item_Details.galleryImage3.file.url}
            title={pageContext.Item_Details.name}
            price={pageContext.Item_Details.price}
            sku={pageContext.Item_Details.sku}
            size={pageContext.Item_Details.size}
            />
        </Layout>
    )
}