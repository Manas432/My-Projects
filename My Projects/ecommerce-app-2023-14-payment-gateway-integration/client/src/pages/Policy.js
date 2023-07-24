import React from "react";
import Layout from "./../components/Layout/Layout";



const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/contact.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">



          <p>Shipping Policy:
            We offer reliable and timely shipping services to ensure your purchases reach you as quickly as possible. Shipping fees and delivery times may vary based on your location and the products ordered. Rest assured, we will keep you informed every step of the way.</p>


         <p>Return and Exchange Policy:
Your satisfaction is our top priority. If you are not entirely happy with your purchase, we offer hassle-free returns and exchanges within [number of days] days of receiving your order. Please refer to our dedicated Return and Exchange page for detailed instructions.</p>
          


        </div>
      </div>
    </Layout>
  );
};



export default Policy;
