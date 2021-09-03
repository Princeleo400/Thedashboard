import React from "react";
import './App.css';
import NavBar from "./components/NavBar";
import { Container, Card, Row, Col } from "react-bootstrap";
//import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import image7 from "images/download.jpg";




function LayoutB() {
  return (
    <>     
             <div className="col-xl-7 col-sm-12 col-lg-8 col-md-8">
          <div className="">

            <div className="tile" id="tile-1">
                <ul className="nav nav-tabs nav-justified" role="tablist">
                  <div className="tab-divider"></div>
                  <div className="slider"></div>
                   <li className="nav-item">
                      <a className="nav-link tabA" id="home-tab" data-toggle="tab"   role="tab" aria-controls="home" aria-selected="false"></i> Community</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" id="profile-tab" data-toggle="tab"   role="tab" aria-controls="profile" aria-selected="false"></i> See What's Trending</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link active" id="contact-tab" data-toggle="tab"   role="tab" aria-controls="contact" aria-selected="true"></i> My page</a>
                    </li>                  
                </ul>
              
                <!-- Tab panes -->
                <div className="tab-content">
                  <div className="tab-pane fade " id="home" role="tabpanel" aria-labelledby="home-tab">Community                    <!-- <div className="d-flex">
                        <div className="circular-image">
                            <img src={image7} alt=""/>
                        </div>
                        <div className="status">
                            <h2>Rose Kooto</h2>
                            <h6>User name</h6>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                                It has survived not only five centuries,
                            </p>
                        </div>
                        <div className="description-box">
                    
                        </div>
                    </div> -->
                  </div>
                <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">See What's Trending</div>
                <div className="tab-pane fade show active"  
                id="contact" 
                role="tabpanel" 
                aria-labelledby="contact-tab">
                <div className=" center-card mt-3">
<div className="d-flex flex-sm-wrap flex-lg-nowrap">
    <div className="circular-image mt-2 px-2">
        <img src="images/Ellipse 71.png" alt=""/>
    </div>
    <div className="status pr-3">
        <h2>Rose Kooto</h2>
        <h5>User name</h5>
        <p className="mt-3">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
           </p>
    </div>
    <div className="description-box">

        <div className="d-flex justify-content-between">
            <div className="posts pr-2">
                <h5> 105 </h5>
                <p> Post </p>
            </div>
            <div className="posts pr-2">
                <h5> 7080 </h5>
                <p> Followers </p>
            </div>
            <div className="posts pr-2">
                <h5> 1,500 </h5>
                <p> Following </p>
            </div>
            <div className="posts ">
                <h5> 1,500 </h5>
                <p> Supporting </p>
            </div>
        </div>

        <button className="btn btn-follow"> Following</button>

        <div className="post-links mt-4">
        <a className="pb-1"  >Other Pages</a>
        <a  >Business One</a>
        <a  >Business One longer name</a>
        <a  >Business One</a>
        <a  >Business One</a>
        <a  >Business One</a>
        </div>
    </div>
    <div className="dropdown me-1">
        <i type="button" className="btn fa fa-ellipsis-h pr-1 pl-2" id="dropdownMenuOffset" data-bs-toggle="dropdown" aria-expanded="false" data-bs-offset="1,2">        
        </i>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuOffset">
          <li><a className="dropdown-item"  ><img className="pr-2" src="images/Icon feather-external-link.png" alt=""/> Copy link</a></li>
          <li><hr className="dropdown-divider m-0"></li>
          <li><a className="dropdown-item"  ><img className="pr-2" src="images/Icon material-report.png" alt=""/> Report Post</a></li>
        </ul>
      </div>
</div>
</div>
            </div>
                </div>
              
              </div>

              <div className="search-box card p-4 my-4 post-card">
                <div className="w-100 d-flex align-content-center mb-3">
                        <div className="w-100">
                    <input type="text" className="form-control l-searchB" placeholder="Share your Moments">
                  </div>
                  <button className="btn btn-post "> Post</button>
                </div> 
                
                <div className="tags d-flex w-75 justify-content-between">
                  <a  ><svg xmlns="http://www.w3.org/2000/svg" width="20" height="14" viewBox="0 0 25 19.444">
                    <path id="Icon_awesome-images" data-name="Icon awesome-images" d="M20.833,18.917v.694a2.083,2.083,0,0,1-2.083,2.083H2.083A2.083,2.083,0,0,1,0,19.611V8.5A2.083,2.083,0,0,1,2.083,6.417h.694v9.028A3.476,3.476,0,0,0,6.25,18.917ZM25,15.444V4.333A2.083,2.083,0,0,0,22.917,2.25H6.25A2.083,2.083,0,0,0,4.167,4.333V15.444A2.083,2.083,0,0,0,6.25,17.528H22.917A2.083,2.083,0,0,0,25,15.444ZM11.111,6.417A2.083,2.083,0,1,1,9.028,4.333,2.083,2.083,0,0,1,11.111,6.417Zm-4.167,6.25,2.41-2.41a.521.521,0,0,1,.737,0l1.715,1.715L17.687,6.09a.521.521,0,0,1,.737,0l3.8,3.8V14.75H6.944Z" transform="translate(0 -2.25)" fill="#490057"/>
                  </svg> Image</a>
                  <a  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="12" viewBox="0 0 25.08 16.72">
                      <path id="Icon_awesome-video" data-name="Icon awesome-video" d="M14.639,4.5H2.081A2.081,2.081,0,0,0,0,6.581V19.139A2.081,2.081,0,0,0,2.081,21.22H14.639a2.081,2.081,0,0,0,2.081-2.081V6.581A2.081,2.081,0,0,0,14.639,4.5Zm8.247,1.642L18.113,9.433v6.853l4.772,3.287a1.4,1.4,0,0,0,2.194-1.123V7.265A1.4,1.4,0,0,0,22.885,6.142Z" transform="translate(0 -4.5)" fill="#490057"/>
                    </svg> Videos</a>
                  <a  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="20" viewBox="0 0 14.646 20.922">
                      <path id="Icon_material-location-on" data-name="Icon material-location-on" d="M14.823,3A7.317,7.317,0,0,0,7.5,10.323c0,5.492,7.323,13.6,7.323,13.6s7.323-8.107,7.323-13.6A7.317,7.317,0,0,0,14.823,3Zm0,9.938a2.615,2.615,0,1,1,2.615-2.615A2.616,2.616,0,0,1,14.823,12.938Z" transform="translate(-7.5 -3)" fill="#fbb03b"/>
                    </svg> Location</a>
                  <a  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16.309" height="16.313" viewBox="0 0 16.309 16.313">
                      <path id="Icon_ionic-ios-pricetag" data-name="Icon ionic-ios-pricetag" d="M18.558,3.375H13.739a.567.567,0,0,0-.4.165L3.7,13.174a1.131,1.131,0,0,0,0,1.6l4.588,4.588a1.131,1.131,0,0,0,1.6,0l9.631-9.631a.567.567,0,0,0,.165-.4V4.5A1.124,1.124,0,0,0,18.558,3.375Zm-1.87,4.384a1.254,1.254,0,1,1,1.11-1.11A1.256,1.256,0,0,1,16.688,7.759Z" transform="translate(-3.375 -3.375)" fill="#490057"/>
                    </svg> Tags</a>
                </div>
              </div>

              <div className=" card p-3 my-4 feed-card">
                <div className="w-100 d-flex align-content-center ">
                  <div className="photo-container">
                    <img className="w-100" src="images/highres_488961989.png" alt=""/>
                  </div>
                  
                  <div className="feed-post pl-3">
                    <div className="d-flex w-100">
                      <img className="feed-post-img" src="images/Ellipse 71.png" alt=""/>
                      <div className="px-2 w-100">
                        <div className="d-flex justify-content-between ">
                        <h5 className="feed-post-title"> Rose Kooto</h5>
                        <i className="fa fa-ellipsis-h"></i>
                        </div> 
                        <div className="d-flex justify-content-between feed-details w-75">
                          <p>Abuja</p>
                          <p>11hr ago</p>
                          <p>200 likes</p>
                        </div>
                      </div>
                      
                    </div>
                    <div className="d-flex ">
                      <p className="feed-text">is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>
                    <div className="feed-comment pl-4">
                        <p className="btn">View all comments</p>
                        <div className="d-flex w-100">
                          <img className="comment-post-img" src="images/Ellipse 71.png" alt=""/>
                          <div className="px-2 w-100">
                            <div className="">
                            <h5 className="feed-post-title-sm"> Rose Kooto</h5>
                            <p className="mb-1 last-seen">Last Seen 11hr</p>          
                            <p className="feed-comment-text mb-0">is simply dummy text of the printing and typesetting industry. 
                              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                            </div>                            
                          </div>
                          
                        </div>
                    </div>

                    <div className="d-flex feed-likes w-100">
                      
                      <svg xmlns="http://www.w3.org/2000/svg" width="21.949" height="19.205" viewBox="0 0 21.949 19.205">
                        <path id="Icon_awesome-heart" data-name="Icon awesome-heart" d="M19.818,3.561a5.862,5.862,0,0,0-8,.583l-.844.87-.845-.87a5.862,5.862,0,0,0-8-.583,6.155,6.155,0,0,0-.424,8.912L10,21.038a1.344,1.344,0,0,0,1.942,0l8.295-8.565a6.152,6.152,0,0,0-.42-8.912Z" transform="translate(0.001 -2.248)" fill="#ce0000"/>
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="19.038" height="19.038" viewBox="0 0 19.038 19.038">
                        <path id="Icon_feather-message-circle" data-name="Icon feather-message-circle" d="M22.038,12.782a8.165,8.165,0,0,1-.877,3.7,8.282,8.282,0,0,1-7.4,4.579,8.165,8.165,0,0,1-3.7-.877L4.5,22.038l1.851-5.554a8.165,8.165,0,0,1-.877-3.7,8.282,8.282,0,0,1,4.579-7.4,8.165,8.165,0,0,1,3.7-.877h.487a8.262,8.262,0,0,1,7.794,7.794Z" transform="translate(-3.75 -3.75)" fill="none" stroke="#490057" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="15.145" height="19.044" viewBox="0 0 15.145 19.044">
                        <path id="Icon_feather-bookmark" data-name="Icon feather-bookmark" d="M21.145,22.044,14.323,17.17,7.5,22.044V6.449A1.949,1.949,0,0,1,9.449,4.5H19.2a1.949,1.949,0,0,1,1.949,1.949Z" transform="translate(-6.75 -3.75)" fill="none" stroke="#490057" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
                      </svg>
  
                      <div className=" justify-content-end w-100 d-flex">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20.128" height="16.44" viewBox="0 0 22.128 18.44">
                          <path id="Icon_ionic-md-share-alt" data-name="Icon ionic-md-share-alt" d="M26.628,15.509,17.408,6.75v4.917C8.8,12.9,5.729,19.043,4.5,25.19c3.073-4.3,6.761-6.27,12.908-6.27v5.04Z" transform="translate(-4.5 -6.75)" fill="#490057"/>
                        </svg>
                      </div>
                    </div>
                  </div>

                
                </div> 
                
                
              </div>

              </div>
        </div>

        
    </>
  );
}
  export default LayoutB;
