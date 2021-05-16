import React from 'react'
import { Link } from 'react-router-dom'
import {gsap} from 'gsap'

class TourPackage extends React.Component {
    constructor() {
        super()
        this.el = []
    }

    componentDidMount() { gsap.fromTo(this.el , {opacity: 0},{opacity: 1, stagger:0.2, duration: 1, ease:"easeInOut"}) }

    render() {
        const data = this.props.data.map((item,i) => {
            return (
                <div ref={div => this.el[i] = div} className="col mb-5" key={i.toString()}>
                    <div className="tour-wrapper">
                        <figure><img src={item.image} alt="" /></figure>
                        <figcaption>
                            <h6 className="price">{`from ${item.price}`}</h6>
                            <ul className="d-flex tag-list p-0 list-unstyled">
                                <li className="me-3">{item.duration}</li>
                                <li><i className="fas fa-map-marker-alt me-2"></i>{item.location}</li>
                            </ul>
                            <h4 className="m-0"><Link to={`/destinations/${item.uid}`}>{item.title}</Link></h4>
                        </figcaption>
                    </div>
                </div>
            )
        });

        return data
    }
}

export default TourPackage