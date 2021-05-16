import React from 'react'

class Selectmenu extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            curr_val: ''
        }
    }

    onInputClick = () => {
        let el = window.event.target.innerHTML
        this.setState({curr_val: el})
        this.props.onInputSelect && this.props.onInputSelect(el)
    }

    render() {
        return (
            <div className="select-menu">
                <input type="text" className="destination-value" value={this.state.curr_val} readOnly />
                <ul className="options">
                    {
                        this.props.option.map((item,i) => {
                            return <li key={i} className="option"><span onClick={this.onInputClick}>{item}</span></li>
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default Selectmenu