import React from 'react'
import { motion } from 'framer-motion'

export class CustomForm extends React.Component {
    render() {
        return (
            <form action={this.props.action} className={this.props.className} onSubmit={this.props.onSubmit}>
                {this.props.children}
            </form>
        );
    }
}

export class CustomInput extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            error_message: '',
            error: false
        }
    }

    handleChange = (e) => {
        let el = e.target
        let val = el.value
        let type = el.type
        let pattern = /(.+)@(.+){2,}\.(.+){2,}/;
        if (type === "email") {
            pattern.test(val) ? this.setState({ error_message: 'email is valid', error: false }) : this.setState({ error_message: 'email is invalid', error: true })
        }
        this.props.onChange && this.props.onChange(el)
    }

    handleblur = (e) => {
        let el = e.target
        let val = el.value
        let type = el.type
        let pattern = /(.+)@(.+){2,}\.(.+){2,}/;
        if (val === '') {
            this.setState({ error_message: "Field shouldn't be empty", error: true })
        } else if (val !== '' && type === "email") {
            pattern.test(val) ? this.setState({ error_message: 'email is valid', error: false }) : this.setState({ error_message: 'email is invalid', error: true })
        } else {
            this.setState({ error : false })
        }
    }

    render() {
        return (
            <div className={`input-wrapper ${this.props.className ? this.props.className : ''} ${this.state.error ? 'error' : ''}`}>
                {this.props.label && <label htmlFor={this.props.id}>{this.props.label}</label>}
                <input 
                id={this.props.id}
                type={this.props.type} 
                required={this.props.required} 
                name={this.props.name} 
                placeholder={this.props.placeholder}
                onChange={this.handleChange}
                onBlur={this.handleblur} />
                <motion.span className='message' initial={{opacity: 0}} animate={this.state.error ? {opacity: 1} : {opacity: 0}}>{this.state.error_message}</motion.span>
            </div>
        );
    }
}

export class CustomTextarea extends React.Component {
    render() {
        return (
            <div className={`input-wrapper ${this.props.className ? this.props.className : ''}`}>
                {this.props.label && <label htmlFor={this.props.id}>{this.props.label}</label>}
                <textarea 
                id={this.props.id}
                name={this.props.name} 
                placeholder={this.props.placeholder}
                onChange={this.handleChange}
                rows={this.props.rows}
                />
            </div>
        );
    }
}