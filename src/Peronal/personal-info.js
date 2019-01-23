import React, { Component } from 'react';

import './personal-info.css';

class Profile extends Component {
    state = {
        profile : {
            "fullName" : "R Mussarath Sheriff",
            "fname" : "Mussarath",
            "lname" : "Sheriff",
            "address1" : "214/2, 145/2, Solaiappan Street",
            "address2" : "Old Washermanpet",
            "city" : "Chennai",
            "postalCode" : "600021",
            "mobileNo" : "(+91) - 9884255816",
            "Nationality" : "Indian",
            "dob" : "13-03-1990",
            "gender" : "male",
            "poistion" : "UI Engineer"
        }
    }
  render() {
    
    return (
        
      <div className="Profile row">
        <div className="col-md-8">
            <h1>{this.state.profile.fullName}</h1>
            <label>{this.state.profile.poistion}</label>
            
        </div>
        <div className="col-md-4">

        </div>
      </div>
    );
  }
}

export default Profile;
