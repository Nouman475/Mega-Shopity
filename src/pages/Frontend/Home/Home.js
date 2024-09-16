import React from "react";
//import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import img1 from "../../../Assets/img1.png";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();
  const { ref: featuredRef, inView: featuredInView } = useInView({
    triggerOnce: true,
  });
  const { ref: categoriesRef, inView: categoriesInView } = useInView({
    triggerOnce: true,
  });
  const { ref: testimonialsRef, inView: testimonialsInView } = useInView({
    triggerOnce: true,
  });
  const { ref: whyChooseRef, inView: whyChooseInView } = useInView({
    triggerOnce: true,
  });

  return (
    <main>
      <section className="hero container my-3">
        <div className="hero-content">
          <h1>Grab upto 50% off on selected products</h1>
          <button
            className="my-3 btn"
            onClick={() => {
              navigate("/auth/login");
            }}
          >
            Buy Now
          </button>
        </div>
        <div className="hero-image">
          <img src={img1} alt="Boy listening to music" />
        </div>
      </section>

      {/* Featured Products Section */}
      <section
        className={`featured ${
          featuredInView ? "slide-in" : "slide-hidden"
        } container`}
        ref={featuredRef}
      >
        <div className="featured-content">
          <div className="featured-text">
            <h2>Featured Products</h2>
          </div>
          <div className="featured-image">
            <img
              src="https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg"
              alt="Featured Product"
            />
          </div>
        </div>
      </section>

      <section
        className={`featured-products ${
          featuredInView ? "slide-in" : "slide-hidden"
        } my-5 container`}
        ref={featuredRef}
      >
        <h2 className="my-5">Featured Products</h2>
        <div className="row justify-content-center">
          <div className="col-md-4 mb-4">
            <div
              className="card"
              style={{
                background: "linear-gradient(135deg, #f5f7fa, #c3cfe2)",
              }}
            >
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">Laptop X1</h5>
                <p className="card-text">
                  High-performance laptop for all your needs.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div
              className="card"
              style={{
                background: "linear-gradient(135deg, #ffecd2, #fcb69f)",
              }}
            >
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">Monitor Y2</h5>
                <p className="card-text">
                  Crystal clear display with vibrant colors.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div
              className="card"
              style={{
                background: "linear-gradient(135deg, #d4fc79, #96e6a1)",
              }}
            >
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">Keyboard Z3</h5>
                <p className="card-text">
                  Ergonomic design with customizable keys.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}

      <section
        className={`categories ${
          categoriesInView ? "slide-in" : "slide-hidden"
        } my-4 container`}
        ref={categoriesRef}
      >
        <h2 className="my-5">Product Categories</h2>
        <div className="row justify-content-center">
          <div className="col-md-6 mb-4">
            <div id="overlay">
              <div className="card card-laptops">
                <div className="card-body">
                  <h5 className="card-title">Laptops</h5>
                  <button className="shop-now-button" onClick={()=>{navigate('/products')}}>Shop Now</button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <div id="overlay">
              <div className="card card-monitors">
                <div className="card-body">
                  <h5 className="card-title">Monitors</h5>
                  <button className="shop-now-button" onClick={()=>{navigate('/products')}}>Shop Now</button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <div id="overlay">
              <div className="card card-keyboards">
                <div className="card-body">
                  <h5 className="card-title">Keyboards</h5>
                  <button className="shop-now-button" onClick={()=>{navigate('/products')}}>Shop Now</button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <div id="overlay">
              <div className="card card-mouse">
                <div className="card-body">
                  <h5 className="card-title">Mouse</h5>
                  <button className="shop-now-button" onClick={()=>{navigate('/products')}}>Shop Now</button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <div id="overlay">
              <div className="card card-headphones">
                <div className="card-body">
                  <h5 className="card-title">Headphones</h5>
                  <button className="shop-now-button" onClick={()=>{navigate('/products')}}>Shop Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section
        className={`why-choose-us ${
          whyChooseInView ? "slide-up" : "slide-hidden"
        } my-5 container`}
        ref={whyChooseRef}
      >
        <h2 className="my-5 text-center display-4 font-weight-bold text-uppercase">
          Why Choose Us?
        </h2>
        <div className="row text-center">
          <div className="col-md-4 mb-4">
            <div className="card choose-us-card">
              <div className="card-body d-flex flex-column align-items-center">
                <h5 className="card-title">Quality Products</h5>
                <p className="card-text">
                  We provide only the best and most reliable products.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card choose-us-card">
              <div className="card-body d-flex flex-column align-items-center">
                <h5 className="card-title">Affordable Prices</h5>
                <p className="card-text">
                  Our prices are unbeatable for the value we offer.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card choose-us-card">
              <div className="card-body d-flex flex-column align-items-center">
                <h5 className="card-title">Excellent Support</h5>
                <p className="card-text">
                  Our customer support is here to help you 24/7.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        className={`testimonials ${
          testimonialsInView ? "slide-in" : "slide-hidden"
        } my-4 container`}
        ref={testimonialsRef}
      >
        <h2 className="text-center my-5">Customer Testimonials</h2>
        <div
          id="testimonialsCarousel"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active text-center">
              <div className="d-flex flex-column align-items-center">
                <Avatar
                  size={100}
                  style={{
                    background: "linear-gradient(to right, #c0392b, #8e44ad)",
                  }}
                  className="mb-3"
                  icon={<UserOutlined />}
                />
                <p className="mb-1">"Great products and amazing service!"</p>
                <span>∼ Customer 1</span>
              </div>
            </div>
            <div className="carousel-item text-center">
              <div className="d-flex flex-column align-items-center">
                <Avatar
                  style={{
                    background: "linear-gradient(to right, #c0392b, #8e44ad)",
                  }}
                  size={100}
                  className="mb-3"
                  icon={<UserOutlined />}
                />
                <p className="mb-1">"Fast delivery and top-notch quality!"</p>
                <span>∼ Customer 2</span>
              </div>
            </div>
            <div className="carousel-item text-center">
              <div className="d-flex flex-column align-items-center">
                <Avatar
                  style={{
                    background: "linear-gradient(to right, #c0392b, #8e44ad)",
                  }}
                  size={100}
                  className="mb-3"
                  icon={<UserOutlined />}
                />
                <p className="mb-1">
                  "Excellent customer support and great prices."
                </p>
                <span>∼ Customer 3</span>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#testimonialsCarousel"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon bg-dark rounded-circle"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#testimonialsCarousel"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon bg-dark rounded-circle"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>
    </main>
  );
}
