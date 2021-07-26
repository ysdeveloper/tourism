import React, { Component } from "react";
import { motion } from "framer-motion";
import swiperCore, {Autoplay} from 'swiper'
import { Swiper, SwiperSlide } from "swiper/react";

// Components
import SearchBlock from "./searchblock";
import TourPackage from "./tour_package";

// Data
import { tour_data, services_data, testimonial_data, post_data } from "./data";

// Import Swiper styles
import "swiper/swiper-bundle.min.css";

// Image
import HeroBg from "../img/tourism-img-003.jpg";
swiperCore.use([Autoplay]);

class HomePage extends React.Component {
  render() {
    const slideUp = {
      initial: { opacity: 0, y: 100 },
      animate: { opacity: 1, y: 0 },
    };
    const fadeIn = { initial: { opacity: 0 }, animate: { opacity: 1 } };

    return (
      <motion.div
        className="home-page"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ x: -10, opacity: 0 }}
        transition={{ delay: 0.1, duration: 0.5 }}
      >
        <section className="hero-section d-flex align-items-center">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-12 col-md-6 order-2 order-md-1">
                <motion.h1
                  variants={slideUp}
                  initial="initial"
                  animate="animate"
                  transition={{ duration: 0.4 }}
                >
                  Create
                  <motion.p
                    variants={slideUp}
                    initial="initial"
                    animate="animate"
                    transition={{ delay: 0.2, duration: 0.4 }}
                  >
                    memories
                  </motion.p>
                </motion.h1>
                <motion.p
                  variants={fadeIn}
                  initial="initial"
                  animate="animate"
                  transition={{ delay: 0.5 }}
                >
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever
                </motion.p>
              </div>
              <div className="col-12 col-md-6 order-1 order-md-2 mb-5 mb-md-0">
                <motion.div
                  className="wrapper"
                  variants={fadeIn}
                  initial="initial"
                  animate="animate"
                  transition={{ duration: 0.6 }}
                >
                  <div className="img-wrapper">
                    <img src={HeroBg} alt="background" />
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
        <section className="service-section">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12 col-lg-11 col-xl-10">
                <SearchBlock />
              </div>
              <div className="col-10">
                <div className="row text-center justify-content-center">
                  {services_data.map((item, i) => {
                    return (
                      <div
                        key={i}
                        className="col-12 col-sm-6 col-lg-3 mb-4 mb-lg-0 service-block"
                      >
                        <img src={item.img} alt={item.title} />
                        <h4>{item.title}</h4>
                        <p>{item.desc}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="tour-section">
          <div className="container">
            <div className="row">
              <div className="col-12 text-center">
                <h2 className="title">Tour Packages</h2>
              </div>
            </div>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4">
              <TourPackage data={tour_data.slice(0, 4)} />
            </div>
          </div>
        </section>
        <section className="testimonial-section">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12 text-center">
                <h2 className="title">What Tourists Says</h2>
              </div>
              <div className="col-12">
                <Swiper
                  className="testimonial-slider"
                  spaceBetween={10}
                  slidesPerView={1}
                  centeredSlides={true}
                  autoplay={{ delay: 2000 }}
                  grabCursor={true}
                  breakpoints={{
                    768: {
                      spaceBetween: "60",
                      slidesPerView: 2,
                    },
                    991: {
                      spaceBetween: "60",
                      slidesPerView: 3,
                    },
                  }}
                >
                  <i className="fas fa-quote-left"></i>
                  {testimonial_data.map((item, i) => {
                    return (
                      <SwiperSlide key={i}>
                        <div className="row">
                          <div className="col-auto mb-4">
                            <img src={item.img} alt={item.name} />
                          </div>
                          <div className="col mb-4">
                            <h4 className="name">{item.name}</h4>
                            <span className="profession">
                              {item.profession}
                            </span>
                          </div>
                          <div className="col-12">
                            <p>{item.desc}</p>
                          </div>
                        </div>
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </div>
            </div>
          </div>
        </section>
        <section className="post-section">
          <div className="container">
            <div className="row">
              <div className="col-12 text-center">
                <h2 className="title">Latest Posts</h2>
              </div>
            </div>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4">
              {post_data.map((item, i) => {
                return (
                  <div key={i} className="col mb-5 mb-xl-0">
                    <div className="post">
                      <figure>
                        <img src={item.img} alt={item.author} />
                        <div className="left-block">
                          <span className="date">{item.date}</span>
                          <span className="author">{item.author}</span>
                        </div>
                      </figure>
                      <figcaption>
                        <h4>{item.title}</h4>
                        <p>{item.desc}</p>
                      </figcaption>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </motion.div>
    );
  }
}

export default HomePage;
