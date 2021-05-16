import React from 'react'
import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'

import { CustomForm, CustomInput, CustomTextarea } from './custom_form'


// Images
import MailImg from '../img/mail.png'

const WrapperBox = (props) => {
    return (
        <div className="col mb-4 mb-lg-0">
            <div className="wrapper">
                <i className={props.icon}></i>
                <div className="wrapper-content">
                    <h4>{props.title}</h4>
                    {props.content ? <address className="address">{props.content}</address> : undefined}
                    {props.list
                        ?   <ul className=' list-unstyled p-0 m-0'>
                                {
                                     props.list.map((item,i) => {
                                        return (
                                            <li key={i}><a href='#'>{item}</a></li>
                                        );
                                    })
                                }
                            </ul>
                        : undefined}
                </div>
            </div>
        </div>
    );
}

class ContactPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            mail: '',
            message: '',
            pop_up: false
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.setState({ pop_up: true })
    }

    handleChange = (e) => { this.setState({ [e.id]: e.value }) }

    handleClick = () => { this.setState({ pop_up: false }) }

    render() {
        return (
            <motion.div className="contact-page" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ x: -10, opacity: 0 }} transition={{ delay: 0.1, duration: 0.5 }}>
                <section className="hero-section">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-10">
                                <h1 className="page-title text-center mx-auto">Contact Us</h1>
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb justify-content-center">
                                        <li className="breadcrumb-item"><NavLink to="/">Home</NavLink></li>
                                        <li className="breadcrumb-item active" aria-current="page">contact us</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="contact-box">
                    <div className="container">
                        <div className="box-wrapper row row-cols-lg-3 row-cols-md-2 row-cols-1 gx-xl-5 gx-3 justify-content-center">
                            <WrapperBox
                                icon="fas fa-map-marker-alt"
                                title="Address"
                                content="79, west road pan. 759 New york, USA." />
                            <WrapperBox
                                icon="fas fa-mail-bulk"
                                title="Mail"
                                list={['xyz@mail.com', 'xyz@mail.com']} />
                            <WrapperBox
                                icon="fas fa-phone-alt"
                                title="Phone"
                                list={['789-123-456']} />
                        </div>
                        <div className="row justify-content-center alt-font">
                            <div className="col-lg-9 col-md-11 col-12">
                                <h2 className="title mb-5">Get in touch with us</h2>
                                <CustomForm action="get" className="row" onSubmit={this.handleSubmit}>
                                    <CustomInput className="col-md-6 col-12" type="text" id="name" required={true} label="Name" onChange={this.handleChange} placeholder="Your Name" />
                                    <CustomInput className="col-md-6 col-12" type="email" id="mail" label="Email" required={true} placeholder="Your Email" />
                                    <CustomTextarea className="col-12" id="message" label="Message" rows="10" placeholder="Enter your message here" />
                                    <div className="col-auto">
                                        <input className="btn text-uppercase" type="submit" value='send now' />
                                    </div>
                                </CustomForm>
                                <motion.div initial={{ opacity: 0, visibilty: 'hidden' }} animate={this.state.pop_up ? { opacity: 1, visibility: 'visible' } : { opacity: 0, visibility: 'hidden' }} transition={{ duration: 0.5 }} className="pop-up-message">
                                    <img src={MailImg} alt="" />
                                    <p>Hey {this.state.name}, We successfully got your message.</p>
                                    <i className="fas fa-times close-btn" onClick={this.handleClick}></i>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </section>
            </motion.div >
        );
    }
}

export default ContactPage