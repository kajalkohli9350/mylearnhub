import React from "react";
import Content from '../../components/home/content';
import Image from '../../components/home/image';
import Success from '../../components/home/sucess';
import Review from '../../components/home/review';
import Ready from '../../components/home/ready';
import Footer from '../../components/home/footer';
function Home() {
    return(
        <div>
        <Content/>
        <Image/>
        <Success/>
        <Review/>
        <Ready/>
        <Footer/>
        </div>
    )
}
export default Home