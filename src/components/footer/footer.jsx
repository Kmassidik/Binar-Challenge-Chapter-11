import React from "react";
import footerBinar from "../footer/footerBinar.svg"
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
                  <div className="col-lg-1"></div>
                    <div className="col-lg-8 d-flex justify-content-sm-start item-xs-center">
                        <div className="d-flex mb-2">
                          <img width={50} src={footerBinar} alt="" />
                          <h5 className="card-title ms-3 me-3 mt-2">Binar<br/>Games</h5>
                        </div>
                    </div>
                    <div className="col-lg-3 d-flex justify-content-lg-between justify-content-sm-center item-xs-center">
                      <a href="" className="">
                        <img width={35} src={facebook} alt="facebook" />
                      </a>
                      <a href="" className="">
                        <img width={35} src={twitter} alt="twitter" />
                      </a>
                      <a href="" className="">
                        <img src={vector} alt="youtube" />
                      </a>
                      <a href="" className="">
                        <img width={35} src={twitch} alt="twitch" />
                      </a>
                    </div>
                  </div>
                  <div className="border w-100 d-flex"></div>
                    <div className="row pt-lg-2 pb-lg-3 d-flex column-xs-reverse">
                      <div className="col d-flex text-capitalize opacity-25 justify-content-lg-start justify-content-sm-center item-xs-center">
                        © 2018 Your Games, Inc. All Rights Reserved
                      </div>
                      <div className="col-lg d-flex justify-content-lg-end small justify-content-sm-center item-xs-center ">
                        <a href="" className="fw-bold d-flex align-items-center footer-end">Privacy Policy</a>
                          <span>&nbsp;|&nbsp;</span> 
                        <a href="" className="fw-bold d-flex align-items-center footer-end">Terms of Services</a>
                          <span>&nbsp;|&nbsp;</span>
                        <a href="" className="fw-bold d-flex align-items-center footer-end">Code of Conduct</a>
                      </div>
                    </div>
                  </div>
          </footer>
        </div>
    )
}