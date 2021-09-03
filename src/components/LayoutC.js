import React from "react";
import './App.css';
import NavBar from "./components/NavBar";
import { Container, Card, Row, Col } from "react-bootstrap";
//import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import image71 from "images/Ellipse 71.png";



function LayoutC() {
  return (
    <>     
        <div  className="col-xl-3 col-sm-12 ol-lg-3"> 
            <h6  className="l-titleB mt-3 p-1">Suggested Listings</h6>
            <div  className="card center right-card "> 
                <div  className="py-2 d-flex circular-imageB  w-100">
                    <img  src={image71} alt=""/>
                    <div  className="px-2 w-100" >
                    <div  className="store-list d-flex justify-content-between">
                        <h3>Smoothie</h3>
                        <button  className="btn btn-order"> Order</button>
                      </div>
                      <div  className="store-list">
                        <p>Smoothy store</p>
                        <p>25 Orders Left</p>
                        <div  className="progress bg-grey ">
                            <div  className="bg-yellow" style="height:10px;width:60%"></div>
                          </div> 
                      </div>
                        </div>
                    
                </div> 

                <div  className="py-2 d-flex circular-imageB  w-100">
                  <img  src="images/Ellipse 71.png" alt=""/>
                  <div  className="px-2 w-100" >
                  <div  className="store-list d-flex justify-content-between">
                      <h3>Smoothie</h3>
                      <button  className="btn btn-order"> Order</button>
                    </div>
                    <div  className="store-list">
                      <p>Smoothy store</p>
                      <p>25 Orders Left</p>
                      <div  className="progress bg-grey ">
                          <div  className="bg-yellow" style="height:10px;width:40%"></div>
                        </div> 
                    </div>
                      </div>
                  
              </div>

              <div  className="py-2 d-flex circular-imageB  w-100">
                <img  src="images/Ellipse 71.png" alt=""/>
                <div  className="px-2 w-100" >
                <div  className="store-list d-flex justify-content-between">
                    <h3>Smoothie</h3>
                    <button  className="btn btn-order"> Order</button>
                  </div>
                  <div  className="store-list">
                    <p>Smoothy store</p>
                    <p>25 Orders Left</p>
                    <div  className="progress bg-grey ">
                        <div  className="bg-yellow" style="height:10px;width:75%"></div>
                      </div> 
                  </div>
                    </div>
                
            </div>

            <div  className="py-2 d-flex circular-imageB  w-100">
              <img  src="images/Ellipse 71.png" alt="">
              <div  className="px-2 w-100" >
              <div  className="store-list d-flex justify-content-between">
                  <h3>Smoothie</h3>
                  <button  className="btn btn-order"> Order</button>
                </div>
                <div  className="store-list">
                  <p>Smoothy store</p>
                  <p>25 Orders Left</p>
                  <div  className="progress bg-grey ">
                      <div  className="bg-yellow" style="height:10px;width:55%"></div>
                    </div> 
                </div>
                  </div>
              
          </div>
          
                                                       
              </div>

              <div  className="tile" >                
                <ul  className="nav nav-tabs nav-justified slider-tab" role="tablist">
                  <div  className="tab-divider"></div>
                  <div  className="sliderB"></div>
                   <li  className="nav-item">
                      <a  className="nav-link slider-link"    role="tab" aria-controls="home" aria-selected="false"></i> Suggested Users</a>
                    </li>                   
                    <li  className="nav-item">
                      <a  className="nav-link slider-link" role="tab" aria-controls="contact" aria-selected="true"></i> Suggested Pages</a>
                    </li>                  
                </ul>
              </div>

              <div  className="card center right-card mt-4"> 
                <div  className="py-2 d-flex circular-imageB justify-content-between  w-100">
                    <img  src="images/Ellipse 71.png" alt=""/>

                    <div  className="support-details ">
                        <h4>Rose Kooto</h4>    
                        <p  className="mb-0">Abuja</p>                    
                      </div>             
                      
                      <div  className="">
                        <button  className="btn btn-support mx-2">Support</button>
                        <svg xmlns="http://www.w3.org/2000/svg" width="15.145" height="19.044" viewBox="0 0 15.145 19.044">
                          <path id="Icon_feather-bookmark" data-name="Icon feather-bookmark" d="M21.145,22.044,14.323,17.17,7.5,22.044V6.449A1.949,1.949,0,0,1,9.449,4.5H19.2a1.949,1.949,0,0,1,1.949,1.949Z" transform="translate(-6.75 -3.75)" fill="none" stroke="#490057" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
                        </svg>
                      </div>
                                           
                </div> 

                <div  className="py-2 d-flex circular-imageB justify-content-between  w-100">
                  <img  src="images/Ellipse 71.png" alt=""/>

                  <div  className="support-details ">
                      <h4>Rose Kooto</h4>    
                      <p  className="mb-0">Abuja</p>                    
                    </div>             
                    
                    <div  className="">
                      <button  className="btn btn-support mx-2">Support</button>
                      <svg xmlns="http://www.w3.org/2000/svg" width="15.145" height="19.044" viewBox="0 0 15.145 19.044">
                        <path id="Icon_feather-bookmark" data-name="Icon feather-bookmark" d="M21.145,22.044,14.323,17.17,7.5,22.044V6.449A1.949,1.949,0,0,1,9.449,4.5H19.2a1.949,1.949,0,0,1,1.949,1.949Z" transform="translate(-6.75 -3.75)" fill="none" stroke="#490057" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
                      </svg>
                    </div>
                                         
              </div> 

              <div  className="py-2 d-flex circular-imageB justify-content-between  w-100">
                <img  src="images/Ellipse 71.png" alt=""/>

                <div  className="support-details ">
                    <h4>Rose Kooto</h4>    
                    <p  className="mb-0">Abuja</p>                    
                  </div>             
                  
                  <div  className="">
                    <button  className="btn btn-support mx-2">Support</button>
                    <svg xmlns="http://www.w3.org/2000/svg" width="15.145" height="19.044" viewBox="0 0 15.145 19.044">
                      <path id="Icon_feather-bookmark" data-name="Icon feather-bookmark" d="M21.145,22.044,14.323,17.17,7.5,22.044V6.449A1.949,1.949,0,0,1,9.449,4.5H19.2a1.949,1.949,0,0,1,1.949,1.949Z" transform="translate(-6.75 -3.75)" fill="none" stroke="#490057" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
                    </svg>
                  </div>
                                       
            </div> 

            <div  className="py-2 d-flex circular-imageB justify-content-between  w-100">
              <img  src="images/Ellipse 71.png" alt=""/>

              <div  className="support-details ">
                  <h4>Rose Kooto</h4>    
                  <p  className="mb-0">Abuja</p>                    
                </div>             
                
                <div  className="">
                  <button  className="btn btn-support mx-2">Support</button>
                  <svg xmlns="http://www.w3.org/2000/svg" width="15.145" height="19.044" viewBox="0 0 15.145 19.044">
                    <path id="Icon_feather-bookmark" data-name="Icon feather-bookmark" d="M21.145,22.044,14.323,17.17,7.5,22.044V6.449A1.949,1.949,0,0,1,9.449,4.5H19.2a1.949,1.949,0,0,1,1.949,1.949Z" transform="translate(-6.75 -3.75)" fill="none" stroke="#490057" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
                  </svg>
                </div>
                                     
          </div> 
          <div  className="py-2 d-flex circular-imageB justify-content-between  w-100">
            <img  src="images/Ellipse 71.png" alt=""/>

            <div  className="support-details ">
                <h4>Rose Kooto</h4>    
                <p  className="mb-0">Abuja</p>                    
              </div>             
              
              <div  className="">
                <button  className="btn btn-support mx-2">Support</button>
                <svg xmlns="http://www.w3.org/2000/svg" width="15.145" height="19.044" viewBox="0 0 15.145 19.044">
                  <path id="Icon_feather-bookmark" data-name="Icon feather-bookmark" d="M21.145,22.044,14.323,17.17,7.5,22.044V6.449A1.949,1.949,0,0,1,9.449,4.5H19.2a1.949,1.949,0,0,1,1.949,1.949Z" transform="translate(-6.75 -3.75)" fill="none" stroke="#490057" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
                </svg>
              </div>
                                   
        </div> 
                                      
              </div>
        </div>

        
    </>
  );
}
  export default LayoutC;
