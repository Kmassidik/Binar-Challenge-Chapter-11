import React from "react";
import facebook from "../footer/facebook.png"
import twitch from "../footer/twitch.png"
import vector from "../footer/vector.svg"
import twitter from "../footer/twitter.png"
import "./footer.css"


export default function Footer() {
    return(
        <div>
          <footer className="mt-lg-5">
              <div className="container text-uppercase">
                <div className="row d-flex">
                  <div className=""></div>
                    <div className="d-flex justify-content-center">
                      <a href="" className="me-2">
                        <img width={35} src={facebook} alt="facebook" />
                      </a>
                      <a href="" className="ms-2 me-2">
                        <img width={35} src={twitter} alt="twitter" />
                      </a>
                      <a href="" className="ms-2 me-2">
                        <img src={vector} alt="youtube" />
                      </a>
                      <a href="" className="ms-2">
                        <img width={35} src={twitch} alt="twitch" />
                      </a>
                    </div>
                  </div>
                  <div className="border w-100 d-flex"></div>
                    <div className="row pt-lg-2 pb-lg-3 d-flex column-xs-reverse">
                      <div className="footer-font col d-flex text-capitalize opacity-25 justify-content-lg-start justify-content-sm-center item-xs-center">
                        © 2018 Your Games, Inc. All Rights Reserved
                      </div>
                      <div className="col-lg d-flex justify-content-lg-end small justify-content-sm-center item-xs-center ">
                        <a href="" className="fw-bold d-flex align-items-center footer-font footer-end">Privacy Policy</a>
                          <span>&nbsp;|&nbsp;</span> 
                        <a href="" className="fw-bold d-flex align-items-center footer-font footer-end">Terms of Services</a>
                          <span>&nbsp;|&nbsp;</span>
                        <a href="" className="fw-bold d-flex align-items-center footer-font footer-end">Code of Conduct</a>
                      </div>
                    </div>
                  </div>
          </footer>
        </div>
    )
}