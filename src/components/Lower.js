import React from 'react'
import 'fomantic-ui-css/semantic.css';
import '../assets/fomantic/dist/semantic.css';
import logo from '../images/download.png'


function Lower() {
    return (
        <div class="ui fluid container">
            <div class="ui grid">
                <div class="row" className="backtotop">
                    <p>Back to Top</p>
                </div>

                <div class="row footer">
                    <div class="four wide column">
                        <div class="ui list">
                            <div class="item"><a href="#"><b>Get To Know Us</b></a></div>
                            <div class="item"><a href="#">About Us</a></div>
                            <div class="item"><a href="#">Careers</a></div>
                            <div class="item"><a href="#">Press Releases</a></div>
                            <div class="item"><a href="#">Amazon Cares</a></div>
                            <div class="item"><a href=""><a href="#">Gift a Smile</a></a></div>
                        </div>
                    </div>
                    <div class="four wide column">
                        <div class="ui list">
                            <div class="item"><a href="#"><b>Connect With Us</b></a></div>
                            <div class="item"><a href="#">Facebook</a></div>
                            <div class="item"><a href="#">Twitter</a></div>
                            <div class="item"><a href="#">Instagram</a></div>
                        </div>
                    </div>
                    <div class="four wide column">
                        <div class="ui list">
                            <div class="item"><a href="#"><b>Make Money with Us</b></a></div>
                            <div class="item"><a href="#">Sell on Amazon</a></div>
                            <div class="item"><a href="#">Sell Under Amazon Accelerator</a></div>
                            <div class="item"><a href="#">Amazon Global Selling</a></div>
                            <div class="item"><a href="#">Become an Affilate</a></div>
                            <div class="item"><a href="#">Fulfillment by Amazon</a></div>
                            <div class="item"><a href="#">Advertise Your Products</a></div>
                            <div class="item"><a href="#">Amazon pay on Merchants</a></div>
                            <div class="item"><a href="#">See More Make Money With Us</a></div>
                        </div>
                    </div>
                    <div class="four wide column">
                        <div class="ui list">
                            <div class="item"><a href="#"><b>Let us Help you</b></a></div>
                            <div class="item"><a href="#">COVID-19 and Amazon</a></div>
                            <div class="item"><a href="#">Your Account</a></div>
                            <div class="item"><a href="#">Returns Center</a></div>
                            <div class="item"><a href="#">100% Purchase Protection</a></div>
                            <div class="item"><a href="#">Amazon App Download</a></div>
                        </div>
                    </div>
                   

                    <div class="ui two column centered grid ">

                    
                        <div class="four column centered row">
                            <div class="column"> 
                            <img src={logo} alt="logo" />
                            </div>
                            <div class="column" >

                                <select class="ui selection dropdown" className="d1">

                                    <option value=""> English</option>
                                    <option value="0">Hindi</option>
                                    <option value="1">French</option>
                                    <option value="2">Italian</option>
                                    <option value="3">Arabic</option>

                                </select>
                            </div>
                        </div>


                    </div>

                    <div class="sixteen wide column row "  >
                        <div class="ui celled horizontal centered list" className="country">
                            <a class="item">Australia</a>
                            <a class="item">Brazil</a>
                            <a class="item">Canada</a>
                            <a class="item">China</a>
                            <a class="item">France</a>
                            <a class="item">Germany</a>
                            <a class="item">Italy</a>
                            <a class="item">Japan</a>
                            <a class="item">Mexico</a>
                            <a class="item">Netherlands</a>
                            <a class="item">Singapore</a>
                            <a class="item">Spain</a>
                            <a class="item">UAE</a>
                            <a class="item">USA</a>
                            <a class="item">UK</a>
                        </div>
                    </div>



                </div>
                

                <div class="row centered footer-continued" >
                    <div class="four wide column">
                        <div class="ui list" >
                            <div class="item">
                                <a class="item" href="#">AbeBooks
                                <div class="item">
                                        Books,art<p>& collectibles</p></div></a>
                            </div>
                            <div class="item">
                                <a class="item" href="#">Shopbop
                                <div class="item">
                                        Designer<p>Fashion Brands</p></div></a>
                            </div>
                        </div>
                    </div>
                    <div class="four wide column"><div class="ui list">
                        <div class="item">
                            <a class="item" href="#">Amazon Web Services
                                <div class="item">
                                    Scalable Cloud<p>Computing Services</p></div></a>
                        </div>
                        <div class="item">
                            <a class="item" href="#">Amazon Buisness
                                <div class="item">
                                    Everything For <p>Your Buisness</p></div></a>
                        </div>
                    </div></div>
                    <div class="four wide column"><div class="ui list">
                        <div class="item">
                            <a class="item" href="#">Audible
                                <div class="item">
                                    Download<p>Audio Books</p></div></a>
                        </div>
                        <div class="item">
                            <a class="item" href="#">Prime Now
                                <div class="item">
                                    2-Hour Delivery<p>on Everyday Items</p></div></a>
                        </div>
                    </div></div>
                    <div class="four wide column"><div class="ui list">
                        <div class="item">
                            <a class="item" href="#">DPReview
                                <div class="item">
                                    Digital<p>Photography</p></div></a>
                        </div>
                        <div class="item">
                            <a class="item" href="#">Amazon Prime Music
                                <div class="item">
                                    70 million songs,ad-free</div></a>
                        </div>
                    </div></div>
                </div>

                <div class="row centered footer-continued_1">
                    <div class="ui celled horizontal centered list" className="footer-continued_1">
                        <a class="item" href="#">Conditions of Use & sale</a>
                        <a class="item" href="#">Privacy Notice</a>
                        <a class="item" href="#">Interest-Based Ads</a>
                        <a class="item" href="#">1996-2021,Amazon.com,Inc. or its affilates</a>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Lower
