import React from "react";
import Navigationbar from "./navbar";
import Footer from "./footer";

function freePlan() {
  return (
    <>
      <Navigationbar />
      <div className="container" style={{ height: "32vh" }}>
        <div className="d-flex justify-content-center text-light mt-5">
          <h1 className="pt-5 text-capitalize">free plan</h1>
        </div>
        <div
          className="mt-4"
          style={{ backgroundColor: "white", height: "1px" }}
        />
      </div>
      <div className="bg-white">
        <div className="container p-5">
          <p className="text-center py-5">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque, Sed ut perspiciatis unde omnis iste natus
            error sit voluptatem accusantium doloremque Sed ut perspiciatis unde
            omnis iste natus error sit voluptatem accusantium doloremque, Sed ut
            perspiciatis unde omnis iste natus error sit voluptatem accusantium
            doloremque
          </p>

          <h3 className="text-capitalize text-center">why choose us?</h3>
          <div
            className="mt-4"
            style={{ backgroundColor: "#0D2C95", height: "2px", width: "80%" }}
          />
          <p className="text-center py-5">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque, Sed ut perspiciatis unde omnis iste natus
            error sit voluptatem accusantium doloremque Sed ut perspiciatis unde
            omnis iste natus error sit voluptatem accusantium doloremque, Sed ut
            perspiciatis unde omnis iste natus error sit voluptatem accusantium
            doloremque
          </p>
          <div className="row gap-5 justify-content-center">
            <div
              className="col-5 text-center text-light px-5ctext-light"
              style={{
                backgroundColor: "#4B5780",
                borderRadius: "30px",
                height: "40vh",
              }}>
              <h3 className="text-capitalize py-4 text-underline">
                Our Mission
              </h3>
              <p className="p-5">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque, Sed ut perspiciatis unde omnis iste
                natus error sit voluptatem
              </p>
            </div>
            <div
              className="col-5 text-center text-light px-5ctext-light"
              style={{
                backgroundColor: "#4B5780",
                borderRadius: "30px",
                height: "40vh",
              }}>
              <h3 className="text-capitalize py-4 text-underline">
                Our Vision
              </h3>
              <p className="p-5">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque, Sed ut perspiciatis unde omnis iste
                natus error sit voluptatem
              </p>
            </div>

            <div className="col-4"></div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default freePlan;
