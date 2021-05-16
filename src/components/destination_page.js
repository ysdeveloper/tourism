import React from 'react'
import { motion } from 'framer-motion'
import { NavLink } from 'react-router-dom'
import TourPackage from './tour_package'
import { tour_data } from './data'

class DestinationPage extends React.Component {
    render() {
        return (
            <motion.div className="destination-page" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ delay: 0.1, duration: 0.5 }}>
                <section className="hero-section">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-10">
                                <h1 className="page-title text-center mx-auto">Destination</h1>
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb justify-content-center">
                                        <li className="breadcrumb-item"><NavLink to="/">Home</NavLink></li>
                                        <li className="breadcrumb-item active" aria-current="page">Destination</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="destination-lists">
                    <div className="container">
                        <div className="row row-cols-xl-4 row-cols-lg-3 row-cols-md-2 row-cols-1">
                           <TourPackage data={tour_data}/>
                        </div>
                    </div>
                </section>
            </motion.div >
        );
    }
}

export default DestinationPage