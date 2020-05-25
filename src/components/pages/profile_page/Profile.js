import React from 'react';
import './Profile.scss';
import Setting from '../../setting/Setting';
import Pay from './payment/Stripe';
import TitleNav from '../../title_nav/TitleNav';
import StatusButton from '../../status_button/StatusButton'
import { Route, NavLink, } from 'react-router-dom';

class ProfilePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        unit: true, //true = km, false = miles
        mobile_number: "0707341202",
        email: "mail@gmail.com",
        payment_method: "",
        transaction_history: "",
    };
  }

  setUnit(event) {
    this.setState({unit:event.target.value});
  }

  transactions() {
    if (this.state.transaction_history === "") {
      return (
        <p>There are no successful transactions.</p>
      );
    }
    else {
      return (
        <p>Insert transactions</p>
      );
    }
  }

  componentDidMount() {
    document.title = 'Profile | Possio Alarm';
  }

  render() {
    return (
      <div className="profile">
        <div className="card">
          <Route exact path="/profile">
            <TitleNav title="Profile settings" backlink="/location" />
            <div className="p">
              <div className="s">
                <p>Unit</p>
                <div onChange={this.setUnit.bind(this)} className="radios">
                  <label>
                    <input type="radio" name="unit" value={true} defaultChecked /> <p><strong>km</strong></p>
                  </label>
                  <label>
                    <input type="radio" name="unit" value={false} /> <p><strong>miles</strong></p>
                  </label>
                </div>
              </div>
              <div className="s">
                <p>Mobile number</p>
                <strong>{this.state.mobile_number}</strong>
              </div>
              <div className="s">
                <p>Email</p>
                <strong>{this.state.email}</strong>
              </div>
              <div className="s">
                <p>Payment method</p>
                <Pay />
              </div>
              <NavLink to="/profile/transaction-history/success">
                <Setting title="Transaction history" />
              </NavLink>
            </div>
          </Route> 
          <Route path="/profile/transaction-history">
            <TitleNav title="Transaction history" backlink="/profile" />
            <div className="status-button-container">
              <StatusButton status_link="/profile/transaction-history/success" status_title="Active" />
              <StatusButton status_link="/profile/transaction-history/failed" status_title="Disabled" />
            </div>
            <div className="p">
              <Route path="/profile/transaction-history/success"> 
              {this.transactions()}
              </Route>
              <Route path="/profile/transaction-history/failed">
              {this.transactions()}
              </Route>
            </div>
          </Route> 
        </div>
      </div>
    );
  }
}

export default ProfilePage;