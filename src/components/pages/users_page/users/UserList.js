import React from 'react';
import EmptyPageImages from '../../../empty_page_image/EmptyPageImage'
import empty_users_image from "../../../../assets/img/empty_users.png"
import './UserList.scss'

export default class UserList extends React.Component {
    empty_text = "No invited users yet."
    empty_smalltext = "You have not invited any users. Tap the '+' button to add a user."
    render(){
        return (
            <div>
                {!!this.props.users ? <EmptyPageImages imgsrc={empty_users_image} text={this.empty_text} smalltext={this.empty_smalltext}/> : <p>Here are devices</p>}
            </div>
        );
    }
}