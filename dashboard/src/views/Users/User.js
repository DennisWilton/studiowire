import React, { useState, useEffect } from 'react';
import { Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';

import * as user from '../../models/users';

function User(props) {
  
  const {id} = props.match.params;
  const [selectedUser, setUser] = useState({_id: 'Carregando...', name: 'Carregando...'});

  useEffect(() => {

    getUserInfo(id);
    
  }, []);
  
  const getUserInfo = async (_id) => {
    const userInfo = await user.find(_id);
    setUser(await userInfo.data[0]);
    return userInfo;
  }
  
  if(!id || id == "" || id == undefined || id == null || id.length < 10){
    return (<div>ID incorreto.</div>)
  }
  
  
  return (
      <div className="animated fadeIn">
        <Row>
          <Col lg={6}>
            <Card>
              <CardHeader>
                <strong><i className="icon-info pr-1"></i>User id: {selectedUser._id}</strong>
              </CardHeader>
              <CardBody>
                  <Table responsive striped hover>
                    <tbody>
                      {
                        Object.keys(selectedUser).map( (key, value) => {
                          if(key == "_id" || key == "__v"){
                            return false;
                          }
                          return (
                            <tr key={key}>
                              <td>{`${key}:`}</td>
                              <td><strong>{selectedUser[key]}</strong></td>
                            </tr>
                          )
                        })
                      }
                    </tbody>
                  </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    )
}

export default User;
