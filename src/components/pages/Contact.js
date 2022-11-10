import React from "react";

function Contactus() {
    return (
        <div>

            <section className="section ">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 my-auto">
                            <h4>Contact Us</h4>
                            <div className="col-md-8 my-auto">
                                <h6 className="float-end">
                                    Home / Contact Us
                                </h6>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
               <div className="container">
                  <div className="card shadow">
                    <div className="card-body">
                        <div className="row ">
                            <div className="col-md-6">
                                <h6>Contact Form</h6>
                                <hr />
                                <div className="form-group">
                                    <label for="">Full Name</label>
                                    <input type="text" className="form-control" placeholder="Enter Full Name" />
                                </div>
                                <div className="form-group">
                                    <label for="">Phone Number</label>
                                    <input type="text" className="form-control" placeholder="Enter Full Name" />
                                </div>
                                <div className="form-group">
                                    <label for="">Email Address</label>
                                    <input type="text" className="form-control" placeholder="Enter Full Name" />
                                </div>
                                <div className="form-group">
                                    <label for="">Message</label>
                                    <textarea row="3" className="form-control" placeholder="Type youe message...."></textarea>
                                </div>
                                <div className="form-group py-3">
                                    <button type="button" className="btn btn-primary shadow w-100" ></button>
                                </div>
                            </div>
                            <div className="col-md-6 border-right">
                                <h5 className="main-heading">Address Information</h5>
                                <div className="underline"></div>
                                <p>
                                    #xx, John , Kasarani - 07xxx, Kenya
                                </p>
                                <p>
                                    Phone: +2547xxxxxx
                                </p>
                                <p>
                                    Email: email@domain.com
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
              </div>
            </section>
        </div>
    );
}

export default Contactus;