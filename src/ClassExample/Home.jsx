import React, { Component } from "react";
import { Link } from "react-router-dom";
import pic1 from "./images/pic1.jpg"
import pic2 from "./images/pic2.jpg"
import pic3 from "./images/pic3.gif"
import india from "./images/india.png"
import pakistan from "./images/pakistan.png"
import china from "./images/china.png"
import us from "./images/us.png"
import japan from "./images/japan.png"
import australia from "./images/australia.png"
import germany from "./images/germany.png"
import russia from "./images/russia.png"

export default class Home extends Component {
    render() {
        return (
            <>
                <div id="carouselExample" class="carousel slide">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src={pic1} class="d-block w-100 img" alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img src={pic2} class="d-block w-100 img" alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img src={pic3} class="d-block w-100 img" alt="..." />
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
                <h1 class="h1 font background">News From Abroad</h1>
                <div class="card  width margin-left background">
                    <img src={india} class="card-img-top img" alt="..." />
                    <div class="card-body">
                        <h2 class="card-title font">INDIA</h2>
                        <Link to="/india"><a class="btn btn-primary font size">View</a></Link>
                    </div>
                </div>
                <div class="card  width margin-left background">
                    <img src={pakistan} class="card-img-top img" alt="..." />
                    <div class="card-body">
                        <h2 class="card-title font">PAKISTAN</h2>
                        <Link to="/pakistan"><a class="btn btn-primary font size">View</a></Link>
                    </div>
                </div>
                <div class="card  width margin-left background">
                    <img src={china} class="card-img-top img" alt="..." />
                    <div class="card-body">
                        <h2 class="card-title font">CHINA</h2>
                       <Link to="/china"> <a class="btn btn-primary font size">View</a></Link>
                    </div>
                </div>
                <div class="card  width margin-left background">
                    <img src={us} class="card-img-top img" alt="..." />
                    <div class="card-body">
                        <h2 class="card-title font">AFGHANISTAN</h2>
                        <Link to="/afghanistan"><a class="btn btn-primary font size">View</a></Link>
                    </div>
                </div>
                <div class="card  width margin-left margin-top background">
                    <img src={japan} class="card-img-top img" alt="..." />
                    <div class="card-body">
                        <h2 class="card-title font">JAPAN</h2>
                        <Link to="/japan"><a class="btn btn-primary font size">View</a></Link>
                    </div>
                </div>
                <div class="card  width margin-left margin-top background">
                    <img src={australia} class="card-img-top img" alt="..." />
                    <div class="card-body">
                        <h2 class="card-title font">AUSTRALIA</h2>
                       <Link to="/australia"> <a class="btn btn-primary font size">View</a></Link>
                    </div>
                </div>
                <div class="card  width margin-left margin-top background">
                    <img src={germany} class="card-img-top img" alt="..." />
                    <div class="card-body">
                        <h2 class="card-title font">GERMANY</h2>
                        <Link to="/germany"><a class="btn btn-primary font size">View</a></Link>
                    </div>
                </div>
                <div class="card  width margin-left margin-top background">
                    <img src={russia} class="card-img-top img" alt="..." />
                    <div class="card-body">
                        <h2 class="card-title font">RUSSIA</h2>
                       <Link to="/russia"> <a class="btn btn-primary font size">View</a></Link>
                    </div>
                </div>


            </>
        )
    }
}