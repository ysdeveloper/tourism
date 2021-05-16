import React from 'react'
import { motion } from 'framer-motion'
import Selectmenu from './selectmenu'
import { tour_data } from './data'
import TourPackage from './tour_package'

class Searchblock extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            active: false,
            destination: ''
        }
    }

    onButtonClick = () => (this.state.destination !== '') ? (this.state.active === false && this.setState({active: true})) : undefined

    handleInputSelect = val => val.toLowerCase() !== this.state.destination.toLowerCase() && this.setState({ destination: val })

    render() {
        const filtered_tour = tour_data.filter(item => item.country.toLowerCase() === this.state.destination.toLowerCase())

        return (
            <div className="search-wrapper">
                <div className="row align-items-center justify-content-lg-between justify-content-center">
                    <div className="col-lg-2 col-md-3 col-sm-6 col-12 mb-4 mb-lg-0">
                        <h6 className="search-title">Destination</h6>
                        <Selectmenu onInputSelect={this.handleInputSelect} option={['Switzerland', 'France', 'UAE', 'India']} />
                    </div>
                    <div className="col-lg-2 col-md-3 col-sm-6 col-12 mb-4 mb-lg-0">
                        <h6 className="search-title">Person</h6>
                        <Selectmenu option={['01', '02', '03', '04']} />
                    </div>
                    <div className="col-lg-2 col-md-3 col-sm-6 col-12 mb-4 mb-lg-0">
                        <h6 className="search-title">Check in</h6>
                        <Selectmenu option={['']} />
                    </div>
                    <div className="col-lg-2 col-md-3 col-sm-6 col-12 mb-4 mb-lg-0">
                        <h6 className="search-title">Check out</h6>
                        <Selectmenu option={['']} />
                    </div>
                    <div className="col-auto">
                        <button className="btn text-uppercase" onClick={this.onButtonClick}>search now</button>
                    </div>
                </div>
                <motion.div className="result-wrapper" initial={{scaleY: 0}} animate={this.state.active && {scaleY: 1}} transition={{duration: 0.2}} >
                    <div className="inner-wrap">
                        <div className="text-center">
                            <h2 className="title">Tour Packages</h2>
                        </div>
                        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4">
                            {
                                filtered_tour.length !== 0 ?
                                    <TourPackage data={filtered_tour} />
                                    :
                                    <div className="no-tours">There is no tours</div>
                            }
                        </div>
                    </div>
                </motion.div>
            </div>
        );
    }
}

export default Searchblock