import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// Tour Data
import { tour_data } from "./data";

class DestinationDetailPage extends React.Component {
  render() {
    const data = this.props.match.params.destination;
    const mydata = tour_data[data];
    const filtered_data = tour_data.filter(
      (item) => item.location === mydata.location && item.uid !== mydata.uid
    );
    const Style = {
      main_section: {
        backgroundImage: `url(${mydata.cover})`,
      },
    };

    return (
      <motion.div
        className="destination-detail-page"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <section className="hero-section" style={Style.main_section}>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h1 className="page-title text-center">{mydata.country}</h1>
              </div>
            </div>
          </div>
        </section>
        <section className="details-section">
          <div className="container">
            <div className="row">
              <div className="col-12 col-lg-9 details-wrapper mb-4 mb-lg-0">
                <div className="tour-details-head d-flex justify-content-between mb-5">
                  <h3 className="title mb-4 mb-md-0">{`About ${mydata.country}`}</h3>
                  <a href="#" className="btn price-btn align-self-center">{mydata.price}/ person</a>
                </div>
                <ul className="extra-details-wrapper mb-5">
                  <li>
                    <strong>Departure</strong>
                    <p>Buddhist Kingdom</p>
                  </li>
                  <li>
                    <strong>Departure</strong>
                    <p>Buddhist Kingdom</p>
                  </li>
                  <li>
                    <strong>Departure Time</strong>
                    <p>2 Hours before flight time.</p>
                  </li>
                  <li>
                    <strong>Return Time</strong>
                    <p>Feb 27, 2020</p>
                  </li>
                  <li>
                    <strong>Included</strong>
                    <ul className="including-details">
                      <li>Air Transport</li>
                      <li>Tour Guide</li>
                      <li>Breakfast</li>
                      <li>Lunch</li>
                    </ul>
                  </li>
                </ul>
                <p className="content">{mydata.desc}</p>
              </div>
              {
                filtered_data.length !== 0 ?
                <aside className="col-12 col-lg-3">
                <div className="row">
                  <div className="col-12">
                    <h4 className="title mb-5">Similar destinations</h4>
                  </div>
                  {filtered_data.map((item, index) => {
                    return (
                      <div key={index} className="col-lg-12 col-md-4 col-12 mb-3 mb-lg-0">
                        <Link
                          className="mb-3 w-100"
                          to={`/destinations/${item.uid}`}
                        >
                          <div
                            className="card-wrapper"
                            style={{ backgroundImage: `url(${item.cover})` }}
                          >
                            <h3 className="card-title">{item.country}</h3>
                          </div>
                        </Link>
                      </div>
                    );
                  })}
                </div>
              </aside> : undefined
              }
            </div>
          </div>
        </section>
      </motion.div>
    );
  }
}

export default DestinationDetailPage;
