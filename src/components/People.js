import React from 'react';
import maxime from '../assets/images/maxime.jpg'

class People extends React.Component {

    constructor (props) {
        super(props)

    }

    render() {

        return  (
            <div className={`${this.props.services.service === 'Manager' ? 'manager' : ''} people`}>
                <div className='profilPictureContainer'>
                    <img src={maxime}/>
                </div>
                <div className="profilInfosContainer">
                    <p>{this.props.services.lastname} {this.props.services.firstname}</p>
                    <p>{this.props.services.location}</p>
                </div>
            </div>
        )
    }

}
export default People;