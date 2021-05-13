import React from 'react'
import "./footer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFacebook,
  faInstagram,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons'
export default function Footer() {
  return (
    <div id="footer">
      <div className="footer_wrapper">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-lg-4 col-xl-4">
              <div className="footer__left widget">
                <p className="description">
                  <a>
                    <font>© Copyright 2020 Colia Shop</font>
                  </a>
                </p>
                <p className="contact">
                  <a>
                    <font>info@colia-shop.com</font>
                  </a>
                </p>
                <ul class="social-links">
                  <li
                    class="has-title hint--top hint--bounce"
                    aria-label="Instagram"
                  >
                    <span>
                    <FontAwesomeIcon
                        icon={faInstagram}
                        color="white"
                        size="1x"
                      />
                    </span>
                    <a
                      href="https://www.instagram.com/colia_shop/"
                      target="_blank"
                    >
                      <span class="title">
                        <font>
                          <font>Instagram</font>
                        </font>
                      </span>
                    </a>
                  </li>
                  <li
                    class="has-title hint--top hint--bounce"
                    aria-label="Facebook"
                  >
                       <FontAwesomeIcon
                        icon={faFacebook}
                        color="white"
                        size="1x"
                      />
                    <a
                      href="https://www.facebook.com/Coliashop/"
                      target="_blank"
                    >
                      <span class="title">
                        <font>
                          <font>Facebook</font>
                        </font>
                      </span>
                    </a>
                  </li>
                  <li
                    class="has-title hint--top hint--bounce"
                    aria-label="Youtube"
                  >
                      <FontAwesomeIcon
                        icon={faYoutube}
                        color="white"
                        size="1x"
                      />
                    <a
                      href="https://www.youtube.com/channel/UCwbSYQcghq0UhfTy9Rh0ZMg"
                      target="_blank"
                    >
                      <span class="title">
                        <font>
                          <font>Youtube</font>
                        </font>
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-xs-12 col-lg-4 col-xl-4">
              <div className="footer__middle">
                <div className="textwidget">
                  <div className="row">
                    <div className="col-xs-12 col-sm-6">
                      <ul>
                        <li>
                          <a href="https://colia-shop.com/nouss">
                            <font>
                              <font>We</font>
                            </font>
                          </a>
                        </li>
                        <li>
                          <a href="https://colia-shop.com/contact">
                            <font>
                              <font>
                                <font>
                                  <font>Contact</font>
                                </font>
                              </font>
                            </font>
                          </a>
                        </li>
                        <li>
                          <a href="https://colia-shop.com/my-account">
                            <font>
                              <font>
                                <font>
                                  <font>My Account</font>
                                </font>
                              </font>
                            </font>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <font>
                              <font>
                                <font>
                                  <font>Site Map</font>
                                </font>
                              </font>
                            </font>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-xs-12 col-sm-6">
                      <ul className="store__rental">
                        <li>
                          <a href="https://colia-shop.com/nouss">
                            <font>
                              <font>Store rental</font>
                            </font>
                          </a>
                        </li>
                        <li>
                          <a href="https://colia-shop.com/contact">
                            <font>
                              <font>
                                <font>
                                  <font>Data protection</font>
                                </font>
                              </font>
                            </font>
                          </a>
                        </li>
                        <li>
                          <a href="https://colia-shop.com/my-account">
                            <font>
                              <font>
                                <font>
                                  <font>CVG</font>
                                </font>
                              </font>
                            </font>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <font>
                              <font>
                                <font>
                                  <font>Legel Notice</font>
                                </font>
                              </font>
                            </font>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-lg-4 col-xl-4">
              <div className="footer__right">
                <font class="heading">Follow us on social media</font>
                <ul class="social-links">
                  <li class="hint--top hint--bounce" aria-label="Facebook">
                    <a
                      href="https://www.facebook.com/Coliashop/"
                      target="_blank"
                    >
                      <FontAwesomeIcon
                        icon={faFacebook}
                        color="white"
                        size="1x"
                      />
                    </a>
                  </li>
                  <li class="hint--top hint--bounce" aria-label="Facebook">
                    <a
                      href="https://www.facebook.com/Coliashop/"
                      target="_blank"
                    >
                      <FontAwesomeIcon
                        icon={faInstagram}
                        color="white"
                        size="1x"
                      />
                    </a>
                  </li>
                  <li class="hint--top hint--bounce" aria-label="Facebook">
                    <a
                      href="https://www.facebook.com/Coliashop/"
                      target="_blank"
                    >
                      <FontAwesomeIcon
                        icon={faYoutube}
                        color="white"
                        size="1x"
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
