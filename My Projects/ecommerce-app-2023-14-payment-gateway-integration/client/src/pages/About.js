import React from "react";
import Layout from "./../components/Layout/Layout";




const About = () => {
  return (
    <Layout title={"About us - Ecommer app"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
          Welcome to [PrimeBuy]!

At [PrimeBuy'], we are more than just an online shopping destination - we are a seamless retail experience tailored to your needs.

Discover a World of Endless Possibilities: With an extensive selection of top-quality products from leading brands, we aim to cater to your every desire, making shopping an exhilarating journey.

Customer-Centric Approach: Our customers are at the heart of everything we do. We strive to provide exceptional service, timely support, and a user-friendly interface to ensure your satisfaction.

Quality You Can Trust: We believe in delivering only the best. Each product in our store undergoes rigorous quality checks, promising reliability and longevity.


          </p>
        </div>
      </div>
    </Layout>
  );
};





export default About;
