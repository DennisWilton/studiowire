import React, { useState, useEffect } from 'react';
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Col,
  Collapse,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Fade,
  Form,
  FormGroup,
  FormText,
  FormFeedback,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupButtonDropdown,
  InputGroupText,
  Label,
  Row,
} from 'reactstrap';
import * as Users from '../../models/users';

function NewUser(props){

    const [state, setState] = useState({
        collapse: true,
        fadeIn: true,
        timeout: 300
    });
    
    const toggle = () => {
        setState({...state, collapse: !state.collapse });
    }
    
    const toggleFade = () => {
        setState({...state, fadeIn: !state.fadeIn});
    }

    useEffect(() => {
        console.log(props);
    },[]);
    
    const addNewUser = async () => {
        const credentials = {
            name: document.getElementById("name").value,
            password: document.getElementById("password").value,
            email: document.getElementById("email").value,
        }
        await Users.create(credentials);
        props.history.push(`/users`)
    }
    
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" sm="6">
            <Card>
              <CardHeader>
                <strong>Cadastro de usuários</strong>
              </CardHeader>
              <CardBody>
                <Row>
                  <Col xs="12">
                    <FormGroup>
                      <Label htmlFor="name">Nome do usuário</Label>
                      <Input type="text" id="name" placeholder="Nome completo" required />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col xs="12">
                    <FormGroup>
                      <Label htmlFor="ccnumber">Senha</Label>
                      <Input type="password" id="password" placeholder="••••••••" required />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <FormGroup>
                        <Label>E-mail</Label>
                        <Input type="email" id="email" placeholder="example@domain.com" required />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                    <Col><Button onClick={() => { props.history.goBack() }} className="btn btn-block btn-danger">Cancelar</Button></Col>
                    <Col><Button onClick={ addNewUser } className="btn btn-success btn-block">Pronto</Button></Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
}

export default NewUser;
