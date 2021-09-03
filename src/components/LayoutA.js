import React from "react";
import '../App.css';
import { Container, Card } from "react-bootstrap";
//import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";




function LayoutA() {
  return (
    <>     
        
 <div className="col-xl-2 col-sm-12 col-lg-4 col-md-4">
      <Card>
          <div className="card center l-card ">
            <h6 className="l-titleA">Switch Account</h6>
            <div id="toggle-btn" className="center  d-flex position-relative">
              <button id="button1" className="btn  l-nav-linkA w-50"><span className="rounded-pill badge-notificationA bg-yellow">50+</span>Social</button>
              <button id="button2" className="btn l-nav-linkB w-50"><span className=" rounded-pill badge-notificationB bg-yellow">50+</span>Business</button>
            </div>
          </div>
          </Card>

        <Card>
          <div className="card center purple-card my-4">           
            <ul className="l-list">
              <li className="l-side-list py-2"><a className="list-link list-link-Active" ><i className="fa fa-rss l-side-link px-1"></i> Feeds</a></li>
              <li className="l-side-list py-2"><a className="list-link" >
                <i className="fa fa-picture-o"></i> Gallery</a></li>
              <li className="py-2"><a className="list-link" ><i className="fa fa-cog px-1"></i> Settings</a></li>
              <li className="py-2"><a className="list-link" > <img className="ref" src="images/Layer 2.png" alt=""/> Referral</a></li>
              <li className="pt-2"><a className="list-link" > <i className="fa fa-bookmark px-1"></i> Saved</a></li>
            </ul>
          </div>
          </Card>

         
          <div className="card center l-card my-3 px-0 py-3">
            <div className="d-flex justify-content-between px-2">
              <h6 className="l-titleC">My Pages</h6>
              <button className="btn l-nav-linkC ">Create new</button>
            </div>
            <div className="form-group has-search px-1 my-2">
              
              <form className="d-flex">
                <input
                  className="form-control l-searchC"
                  type="search"
                  placeholder="Search Pages"
                  aria-label="Search"/>
              </form>
            </div>

            <div className="contact-pages d-flex  my-1 p-2 ">
              <img src="images/Ellipse 95.png" alt=""/>
              <div className="business-tag mx-1 w-100">
                <div className="d-flex justify-content-between w-100">
                  <h5 className="business-name" >Business name</h5>
                  <div className="dropdown ">
                    <i type="button" className="btn fa fa-ellipsis-h p-0 " id="dropdownMenuOffset" data-bs-toggle="dropdown" aria-expanded="false" data-bs-offset="1,2">        
                    </i>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuOffset">
                      <li><a className="dropdown-item"><img className="pr-2" src="images/Icon feather-external-link.png" alt=""/> Pin</a></li>
                      <li><hr className="dropdown-divider m-0"></li>
                      <li><a className="dropdown-item" ><img className="pr-2" src="images/Icon material-edit.svg" alt=""/> Edit Post</a></li>
                    </ul>
                  </div>
                </div>
                <div className="d-flex justify-content-between">
                  <a className="business-link" >Business  Page</a>
                  <svg xmlns="http://www.w3.org/2000/svg" width="8.654" height="12.751" viewBox="0 0 8.654 12.751">
                    <path id="Icon_metro-pin" data-name="Icon metro-pin" d="M16.306,13.455,12.05,11a1.092,1.092,0,1,0-1.092,1.891l4.255,2.457a1.092,1.092,0,0,0,1.093-1.891ZM12.8,10.8l3.31,1.911,1.126-3.133L14.946,8.257Zm-2.44,8.048L13.522,15,12.1,14.182Zm8.244-11L15.763,6.206a.819.819,0,0,0-.819,1.419l2.837,1.638A.819.819,0,1,0,18.6,7.844Z" transform="translate(-10.356 -6.096)" fill="#490057"/>
                  </svg>               
                 </div>
              </div>
            </div>
            </Card>

            <div className="contact-pages d-flex  my-1 p-2">
              <img src="images/Ellipse 95.png" alt=""/>
              <div className="business-tag mx-1 w-100">
                <div className="d-flex justify-content-between w-100">
                  <h5 className="business-name" >Business name</h5>
                  <div className="dropdown ">
                    <i type="button" className="btn fa fa-ellipsis-h p-0 " id="dropdownMenuOffset" data-bs-toggle="dropdown" aria-expanded="false" data-bs-offset="1,2">        
                    </i>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuOffset">
                      <li><a className="dropdown-item" href="#"><img className="pr-2" src="images/Icon feather-external-link.png" alt=""/> Pin</a></li>
                      <li><hr className="dropdown-divider m-0"></li>
                      <li><a className="dropdown-item" href="#"><img className="pr-2" src="images/Icon material-edit.svg" alt=""/> Edit Post</a></li>
                    </ul>
                  </div>
                </div>
                <div className="d-flex justify-content-between">
                  <a className="business-link" >Business  Page</a>
                  <svg xmlns="http://www.w3.org/2000/svg" width="8.654" height="12.751" viewBox="0 0 8.654 12.751">
                    <path id="Icon_metro-pin" data-name="Icon metro-pin" d="M16.306,13.455,12.05,11a1.092,1.092,0,1,0-1.092,1.891l4.255,2.457a1.092,1.092,0,0,0,1.093-1.891ZM12.8,10.8l3.31,1.911,1.126-3.133L14.946,8.257Zm-2.44,8.048L13.522,15,12.1,14.182Zm8.244-11L15.763,6.206a.819.819,0,0,0-.819,1.419l2.837,1.638A.819.819,0,1,0,18.6,7.844Z" transform="translate(-10.356 -6.096)" fill="#490057"/>
                  </svg>               
                 </div>
              </div>
            </div>

            <div className="contact-pages d-flex  my-1 p-2">
              <img src="images/Ellipse 95.png" alt="">
              <div className="business-tag mx-1 w-100">
                <div className="d-flex justify-content-between w-100">
                  <h5 className="business-name" >Business name</h5>
                  <div className="dropdown ">
                    <i type="button" className="btn fa fa-ellipsis-h p-0 " id="dropdownMenuOffset" data-bs-toggle="dropdown" aria-expanded="false" data-bs-offset="1,2">        
                    </i>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuOffset">
                      <li><a className="dropdown-item" href="#"><img className="pr-2" src="images/Icon feather-external-link.png" alt=""/> Pin</a></li>
                      <li><hr className="dropdown-divider m-0"></li>
                      <li><a className="dropdown-item" href="#"><img className="pr-2" src="images/Icon material-edit.svg" alt=""/> Edit Post</a></li>
                    </ul>
                  </div>
                </div>
                <div className="d-flex justify-content-between">
                  <a className="business-link" >Business  Page</a>
                  <svg xmlns="http://www.w3.org/2000/svg" width="8.654" height="12.751" viewBox="0 0 8.654 12.751">
                    <path id="Icon_metro-pin" data-name="Icon metro-pin" d="M16.306,13.455,12.05,11a1.092,1.092,0,1,0-1.092,1.891l4.255,2.457a1.092,1.092,0,0,0,1.093-1.891ZM12.8,10.8l3.31,1.911,1.126-3.133L14.946,8.257Zm-2.44,8.048L13.522,15,12.1,14.182Zm8.244-11L15.763,6.206a.819.819,0,0,0-.819,1.419l2.837,1.638A.819.819,0,1,0,18.6,7.844Z" transform="translate(-10.356 -6.096)" fill="#490057"/>
                  </svg>               
                 </div>
              </div>
            </div>

            <div className="contact-pages d-flex  my-1 p-2">
              <img src="images/Ellipse 95.png" alt="">
              <div className="business-tag mx-1 w-100">
                <div className="d-flex justify-content-between w-100">
                  <h5 className="business-name" >Business name</h5>
                  <div className="dropdown ">
                    <i type="button" className="btn fa fa-ellipsis-h p-0 " id="dropdownMenuOffset" data-bs-toggle="dropdown" aria-expanded="false" data-bs-offset="1,2">        
                    </i>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuOffset">
                      <li><a className="dropdown-item" href="#"><img className="pr-2" src="images/Icon feather-external-link.png" alt=""/> Pin</a></li>
                      <li><hr className="dropdown-divider m-0"></li>
                      <li><a className="dropdown-item" href="#"><img className="pr-2" src="images/Icon material-edit.svg" alt=""/> Edit Post</a></li>
                    </ul>
                  </div>
                </div>
                <div className="d-flex justify-content-between">
                  <a className="business-link" >Business  Page</a>
                  <svg xmlns="http://www.w3.org/2000/svg" width="8.654" height="12.751" viewBox="0 0 8.654 12.751">
                    <path id="Icon_metro-pin" data-name="Icon metro-pin" d="M16.306,13.455,12.05,11a1.092,1.092,0,1,0-1.092,1.891l4.255,2.457a1.092,1.092,0,0,0,1.093-1.891ZM12.8,10.8l3.31,1.911,1.126-3.133L14.946,8.257Zm-2.44,8.048L13.522,15,12.1,14.182Zm8.244-11L15.763,6.206a.819.819,0,0,0-.819,1.419l2.837,1.638A.819.819,0,1,0,18.6,7.844Z" transform="translate(-10.356 -6.096)" fill="#490057"/>
                  </svg>               
                 </div>
              </div>
            </div>

            
          </div>
            </div>  
        
    </>
  );
}
  export default LayoutA;
