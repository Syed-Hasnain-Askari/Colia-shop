import React from 'react'
import Layout from '../Component/layout'
import ContactPage from '../Component/Contact/contact'
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import {Link} from 'gatsby'
export default function Contact() {
  return (
    <div>
      <Layout>
      <div className="d-flex justify-content-end mt-5 m-lg-5" ><Link to="/"><KeyboardBackspaceIcon style={{ fontSize: 40, color:"black" }}/></Link></div>
          <ContactPage/>
      </Layout>
    </div>
  )
}
