import React from "react";
import logo from '../Assets/logo1.png';
import bg from '../Assets/bg1.avif';
import { ParallaxLayer } from "@react-spring/parallax";

function Home() {
    return (
        <ParallaxLayer offset={0} speed={0.4}>
            <div id="home-page">
                <div id="bg-img">
                    <ParallaxLayer offset={0} speed={-1}>
                        <img src={bg} />
                    </ParallaxLayer>
                </div>
                <div id="summary">
                    <div id="logo">
                        <img src={logo} />
                    </div>
                    <div id="summary-content">
                        <ParallaxLayer offset={0} speed={0.4}>
                            <h1>With an over 94% match rate in the 2023 match cycle, our team of physicians will achieve the highest yield by working with you in a real time basis to fulfill all of your residency requirements.</h1>
                        </ParallaxLayer>
                    </div>
                </div>
            </div>
        </ParallaxLayer>
    )
}


export default Home;