import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Badge, Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';

import usersData from './UsersData'

function UserRow(props) {
  const user = props.user
  const userLink = `/users/${user._id}`

  const getBadge = (status) => {
    return status === 'Active' ? 'success' :
      status === 'Inactive' ? 'secondary' :
        status === 'Pending' ? 'warning' :
          status === 'Banned' ? 'danger' :
            'primary'
  }

  return (
    <tr key={user.id.toString()}>
      <th scope="row"><Link to={userLink}>{user.id}</Link></th>
      <td><Link to={userLink}>{user.name}</Link></td>
      <td>{user.email}</td>
      <td>{user.age}</td>
    </tr>
  )
}

function Users(props) {

    const [userList, setUsers] = useState([]);

    const updateUsers = async () => {
      const userList = await usersData;
            setUsers(userList);
    }
    
    useEffect(() => {
      updateUsers();
    }, []);

    return (
      <div className="animated fadeIn">
        <Row>
          <Col xl={6}>
            <Card>
              <CardHeader style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <span><i className="fa fa-users"></i> Usuários</span>
                <button class="btn btn-success"><i className="fa fa-plus"></i> Novo usuário</button>
              </CardHeader>
              <CardBody>
                <Table responsive hover>
                  <thead>
                    <tr>
                      <th scope="col">#ID</th>
                      <th scope="col">Nome completo</th>
                      <th scope="col">E-mail</th>
                      <th scope="col">Idade</th>
                    </tr>
                  </thead>
                  <tbody>
                    {userList.map((user, index) =>
                      <UserRow key={index} user={{...user, id: index}}/>
                    )}
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    )
}

export default Users;
