import React from "react";
import '../styles/style.css';
import '../asset/logo.svg.jpg';
import {AiOutlineArrowRight} from 'react-icons/ai';
import {FcGoogle} from 'react-icons/fc';
function HomePage() {
    return (
        <div className="mainContent">
            <div className="header">
                <div className="header1">
                    <a href="/" className="link">
                        <img className="logo" src={require('../asset/logo.svg.jpg')} alt="talentdrop logo"/>
                      
                    </a>
                </div>
                <div className="header2">
                    <div className="sub-header">
                        <a className="link" href="/about">About</a>
                    </div>
                    <div className="sub-header">
                        <a className="link" href="/signin">Sign In</a>
                    </div>
                    <div className="sub-header">
                        <a className="alink" href="/signup">Sign Up</a>
                    </div>
                </div>
            </div>
            <section className="subContainer">
                <div className="subContainer1">
                    <div className="subContainer2">
                        <h2 className="title">Recruiting, Evolved</h2>
                        <h2 className="paragraph">Combine the power of collaborative hiring with AI automation to find, screen,and hire the best candidates. Talentdrop works for...</h2>

                        <div className="ex-container1">
                            <a href="/" className="ex-link1">Small Business Owners</a>
                            <AiOutlineArrowRight className="arrow"/>
                        </div>
                        <div className="ex-container1">
                            <a href="/" className="ex-link1">Properties</a>
                            <AiOutlineArrowRight className="arrow"/>
                        </div>
                        <div className="ex-container1">
                            <a href="/" className="ex-link1">Individual Hiring Managers</a>
                            <AiOutlineArrowRight className="arrow"/>
                        </div>
                        <div className="ex-container1">
                            <button className="btn">
                                <FcGoogle style={{width:'50px',height:'50%'}}/>
                               <h4> Continue with Google</h4> 
                            </button>
                            <a href="/" className="sign-link">or sign up</a>
                        </div>
                    </div>
                </div>
                <div>
                <img src={require('../asset/photo.png.jpg')} alt='talent' style={{width:'700px',borderRadius:'10px'}}/>
                </div>
            </section>
        </div>
    )
}

export default HomePage;