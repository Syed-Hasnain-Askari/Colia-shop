import React from 'react'
// import './checkout.css'

export default function Checkout() {
    return (
        <div>
        <section className="container">
        {/* BILLING ADDRESS*/}
        <h2 className="h5 text-uppercase mb-4">Billing details</h2>
        <div className="row">
          <div className="col-lg-8">
            <form action="#">
              <div className="row">
                <div className="col-lg-6 form-group">
                  <label className="text-small text-uppercase" htmlFor="firstName">First name</label>
                  <input className="form-control form-control-lg inputfield" id="firstName" type="text" placeholder="Enter your first name" />
                </div>
                <div className="col-lg-6 form-group">
                  <label className="text-small text-uppercase" htmlFor="lastName">Last name</label>
                  <input className="form-control form-control-lg inputfield" id="lastName" type="text" placeholder="Enter your last name" />
                </div>
                <div className="col-lg-6 form-group">
                  <label className="text-small text-uppercase" htmlFor="email">Email address</label>
                  <input className="form-control form-control-lg inputfield" id="email" type="email" placeholder="e.g. Jason@example.com" />
                </div>
                <div className="col-lg-6 form-group">
                  <label className="text-small text-uppercase" htmlFor="phone">Telephone</label>
                  <input className="form-control form-control-lg inputfield" id="phone" type="tel" placeholder="e.g. +02 245354745" />
                </div>
                <div className="col-lg-6 form-group">
                  <label className="text-small text-uppercase" htmlFor="company">Company name (optional)</label>
                  <input className="form-control form-control-lg inputfield" id="company" type="text" placeholder="Your company name" />
                </div>
                <div className="col-lg-6 form-group">
                  <label className="text-small text-uppercase" htmlFor="country">Postal Code</label>
                  <input className="form-control form-control-lg inputfield" id="lastName" type="text" placeholder="Enter your last name" />
                </div>
                <div className="col-lg-12 form-group">
                  <label className="text-small text-uppercase" htmlFor="address">Street Number And Number</label>
                  <input className="form-control form-control-lg inputfield" id="streetno" type="text" placeholder="House number and street name" />
                </div>
                <div className="col-lg-12 form-group">
                  <label className="text-small text-uppercase" htmlFor="address">Address line 1</label>
                  <input className="form-control form-control-lg inputfield" id="address" type="text" placeholder="House number and street name" />
                </div>
                <div className="col-lg-6 form-group">
                  <label className="text-small text-uppercase" htmlFor="city">Town/City</label>
                  <input className="form-control form-control-lg inputfield" id="city" type="text" />
                </div>
                <div className="col-lg-6 form-group">
                  <label className="text-small text-uppercase" htmlFor="state">State/County</label>
                  <input className="form-control form-control-lg inputfield" id="state" type="text" />
                </div>
                <div className="col-lg-6 form-group mt-3">
                  <div className="custom-control custom-checkbox">
                    <input className="custom-control-input" id="alternateAddressCheckbox" type="checkbox" />
                    <label className="custom-control-label text-small ml-3" htmlFor="alternateAddressCheckbox">Create an Accout</label>
                  </div>
                </div>
                <div className="row">
                <div className="col-lg-12 form-group mt-3">
                  <div className="custom-control custom-checkbox">
                    <input className="custom-control-input" id="alternateAddressCheckbox" type="checkbox" />
                    <label className="custom-control-label ship-address ml-5" htmlFor="alternateAddressCheckbox">Ship to a Different email Address?</label>
                  </div>
                </div>
                </div>
                <div className="row">
                <div className="col-lg-6 form-group mt-3 pb-5">
                  <div className="custom-control">
                    <textarea className="form-control form-control-lg ml-g-4 pb-5 inputfield" placeholder="Comment about your order">

                    </textarea>
                  </div>
                </div>
                </div>
                <div className="col-lg-12">
                  <div className="row d-none" id="alternateAddress">
                    <div className="col-12 mt-4">
                      <h2 className="h4 text-uppercase mb-4">Alternative billing details</h2>
                    </div>
                    <div className="col-lg-6 form-group">
                      <label className="text-small text-uppercase" htmlFor="firstName2">First name</label>
                      <input className="form-control form-control-lg" id="firstName2" type="text" placeholder="Enter your first name" />
                    </div>
                    <div className="col-lg-6 form-group">
                      <label className="text-small text-uppercase" htmlFor="lastName2">Last name</label>
                      <input className="form-control form-control-lg" id="lastName2" type="text" placeholder="Enter your last name" />
                    </div>
                    <div className="col-lg-6 form-group">
                      <label className="text-small text-uppercase" htmlFor="email2">Email address</label>
                      <input className="form-control form-control-lg" id="email2" type="email" placeholder="e.g. Jason@example.com" />
                    </div>
                    <div className="col-lg-6 form-group">
                      <label className="text-small text-uppercase" htmlFor="phone2">Phone number</label>
                      <input className="form-control form-control-lg" id="phone2" type="tel" placeholder="e.g. +02 245354745" />
                    </div>
                    <div className="col-lg-6 form-group">
                      <label className="text-small text-uppercase" htmlFor="company2">Company name (optional)</label>
                      <input className="form-control form-control-lg" id="company2" type="text" placeholder="Your company name" />
                    </div>
                    <div className="col-lg-6 form-group">
                      <label className="text-small text-uppercase" htmlFor="country2">Country</label>
                      <select className="selectpicker country" id="country2" data-width="fit" data-style="form-control form-control-lg" data-title="Select your country" />
                    </div>
                    <div className="col-lg-12 form-group">
                      <label className="text-small text-uppercase" htmlFor="address2">Address line 1</label>
                      <input className="form-control form-control-lg" id="address2" type="text" placeholder="House number and street name" />
                    </div>
                    <div className="col-lg-12 form-group">
                      <label className="text-small text-uppercase" htmlFor="address2">Address line 2</label>
                      <input className="form-control form-control-lg" id="addressalt2" type="text" placeholder="Apartment, Suite, Unit, etc (optional)" />
                    </div>
                    <div className="col-lg-6 form-group">
                      <label className="text-small text-uppercase" htmlFor="city3">Town/City</label>
                      <input className="form-control form-control-lg" id="city3" type="text" />
                    </div>
                    <div className="col-lg-6 form-group">
                      <label className="text-small text-uppercase" htmlFor="state4">State/County</label>
                      <input className="form-control form-control-lg" id="state4" type="text" />
                    </div>
                  </div>
                </div>
                <div className="col-lg-12 form-group">
                  <button className="btn btn-dark" type="submit">Place order</button>
                </div>
              </div>
            </form>
          </div>
          {/* ORDER SUMMARY*/}
          <div className="col-lg-4">
            <div className="card border-0 rounded-0 p-lg-4 bg-light">
              <div className="card-body">
                <h5 className="text-uppercase mb-4">Your order</h5>
                <ul className="list-unstyled mb-0">
                  <li className="d-flex align-items-center justify-content-between"><strong className="small font-weight-bold">Red digital smartwatch</strong><span className="text-muted small">$250</span></li>
                  <li className="border-bottom my-2" />
                  <li className="d-flex align-items-center justify-content-between"><strong className="small font-weight-bold">Gray Nike running shoes</strong><span className="text-muted small">$351</span></li>
                  <li className="border-bottom my-2" />
                  <li className="d-flex align-items-center justify-content-between"><strong className="text-uppercase small font-weight-bold">Total</strong><span>$601</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
        </div>
    )
}
