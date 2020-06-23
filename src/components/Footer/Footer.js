import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import React, { Component } from 'react';
import './Footer.css';
import logo from '../Navbar/Logo.png';

const FooterPage = () => {
  return (
    <MDBFooter className="footer">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
        <h5 className="title"> <img
                            alt=""
                            src={logo}
                            width="35"
                            height="35"
                        />{' '}Happy Paws</h5>
          <MDBCol>
            <ol>
              <li>
                <a href="/donation">Donation</a>
              </li>
              <li className="list">
                <a href="/">Find a Pet</a>
              </li>
              <li className="list">
                <a href="/">Pet Care</a>
              </li>
              <li className="list">
                <a href="/share">Share your story</a>
              </li>
            </ol>
          </MDBCol>
          <MDBCol>
          <li className="list">
                <a href="/">Support Us</a>
                <ol>
                  <li className="list">
                    <a href="/">Volunteer</a>
                  </li>
                  <li className="list">
                    <a href="/">See our stories</a>
                  </li>
                </ol>
              </li>
          </MDBCol>
          <MDBCol>
            <ol>
            <li className="list">
                <a href="/">Contact Us</a>
                <ol>
                  <li className="list">
                    <a href="/">About Us</a>
                  </li>
                  <li className="list">
                    <a href="/">FAQs</a>
                  </li>
                </ol>
              </li>
            </ol>
          
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer_class">
        <MDBContainer >
          &copy; {new Date().getFullYear()} Copyright: <a className="link" href="/"> HappyPaws.com </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPage;