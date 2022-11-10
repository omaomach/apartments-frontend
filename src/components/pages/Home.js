import React from "react";
import { Link } from "react-router-dom";

function Home() {
    return (
        <div>
            <section className="section ">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h3 className="main-heading">Our company</h3>
                            <div className="underline max-auto"></div>
                            <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                            </p>
                            <Link to="/about" className="btn-btn-warning shadow">Read More</Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;