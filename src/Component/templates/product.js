import React from 'react';
import Layout from '../layout'
import {Link,graphql} from 'gatsby'
import ProductDetail from '../Products/product'
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
export default function Home({pageContext}) {
    return(
        <Layout>
            <div className="d-flex justify-content-end mt-5 m-lg-5" ><Link to="/"><KeyboardBackspaceIcon style={{ fontSize: 40, color:"black" }}/></Link></div>
            <ProductDetail
            id={pageContext.Item_Details.id}
            image1={pageContext.Item_Details.galleryImage1.fluid.src}
            image2={pageContext.Item_Details.galleryImage2.fluid.src}
            image3={pageContext.Item_Details.galleryImage3.fluid.src}
            title={pageContext.Item_Details.name}
            price={pageContext.Item_Details.price}
            sku={pageContext.Item_Details.sku}
            size={pageContext.Item_Details.size}
            category={pageContext.Item_Details.category}
            slug={pageContext.Item_Details.productSlug}
            />
        </Layout>
    )
}
export const query = graphql`
  {
    allContentfulProducts {
        edges {
          node {
            id
            name
            price
            category
            productSlug
            size
            sku
            galleryImage1 {
              fluid(quality: 95) {
                src
              }
            }
            galleryImage2 {
              fluid(quality: 95) {
                src
              }
            }
            galleryImage3 {
              fluid(quality: 95) {
                src
              }
            }
            galleryImage4 {
              fluid(quality: 95) {
                src
              }
            }
          }
        }
      }
  }
`;