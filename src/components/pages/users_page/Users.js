import React from 'react';
import UserList from './users/UserList'
import Content from '../../content/Content';
import './Users.scss';

class UsersPage extends React.Component {
  componentDidMount() {
    document.title = 'Users | Possio Alarm';
  }

  render() {
    return (
      <Content>
          <UserList users={[]}/>
      </Content>
    );
  }
}

export default UsersPage;