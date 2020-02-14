import React from 'react';
import './DetailsPeople.css';
import maxime from '../assets/images/maxime.jpg'

class DetailsPeople extends React.Component {

    constructor (props) {
        super(props)
    }

    render() {

        return (
            <div className='details'>
                <div className='picture'><img src={maxime}/></div><div className='headerDetails'>{this.props.value.lastname} {this.props.value.firstname}</div>
                <div className='content'>
                <p>nom : {this.props.value.lastname}
                    <br />
                    prénom : {this.props.value.firstname}
                    <br />
                    service : {this.props.value.service}
                    <br />
                    E-mail : ?
                    <br />
                    numéro de téléphone : ?
                </p>
                </div>
          </div>
        )
    }
}
export default DetailsPeople;