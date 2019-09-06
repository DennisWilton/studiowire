import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Badge, Card, CardBody, CardHeader, Col, Pagination, PaginationItem, PaginationLink, Row, Table } from 'reactstrap';

import { remove, getAll } from '../../models/users';

import {useSelector} from 'react-redux';

export default function Users(){
  const [userList, setUserlist] = useState({state: true})
  const token = useSelector(state => state);
  console.log(token.auth);

  const getUsers = async (offset) => {
    const response = await getAll(offset);
    console.log(response);
    setUserlist({state: true, data: response.data});
  }
  
  useEffect(() => {
      getUsers(0);          
  }, []);
  
  return(
    <React.Fragment>
        <div>{!userList.data ? ("Carregando...") : (<Lista state={[userList, setUserlist]} getUsers={getUsers} />)}</div>

    </React.Fragment>
  )

}


const Lista = (props) => {

  const [userList, setUserlist] = props.state;
  const users = userList.data;

  return(
    <React.Fragment>
      <Tabela getUsers={props.getUsers} users={users}></Tabela>
    </React.Fragment>
  );
}


const Tabela = (props) => {
  
    const users = props.users;
      console.group("Usuários props:");
        console.log(users);
      console.groupEnd();
  
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" lg="6">
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i> Usuários
                <Link to={'users/new'} className="btn ml-2 btn-success btn-sm">Novo usuário</Link>
              </CardHeader>
              <CardBody>
                <Table responsive>
                  <thead>
                  <tr>
                    <th>Nome</th>
                    <th>E-mail</th>
                    <th>Idade</th>
                    <th>Status</th>
                  </tr>
                  </thead>
                  <tbody>
                  {users.length > 0 && users.map(user => (
                  <tr>
                    <td><Link to={`users/${user._id}`}>{user.name}</Link></td>
                    <td>{user.email}</td>
                    <td>{user.age}</td>
                    <td>
                      <Badge color="danger" style={{cursor: "pointer"}} onClick={async () => { await remove(user._id); props.getUsers(0) }}>Apagar</Badge>
                    </td>
                  </tr>))}

                  {users.length <= 0 && (
                    <tr>
                      <td>Nenhum usuário para ser mostrado.</td>
                    </tr>

                  )}

                  </tbody>
                </Table>
                <Pagination>
                  <PaginationItem>
                    <PaginationLink previous tag="button"></PaginationLink>
                  </PaginationItem>
                  <PaginationItem active>
                    <PaginationLink tag="button" onClick={() => {props.getUsers(1 * 10 - 10)}}>1</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink tag="button" onClick={() => {props.getUsers(2 * 10 - 10)}}>2</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink tag="button" onClick={() => {props.getUsers(3 * 10 - 10)}}>3</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink tag="button" onClick={() => {props.getUsers(4 * 10 - 10)}}>4</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink next tag="button"></PaginationLink>
                  </PaginationItem>
                </Pagination>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>

    );
}