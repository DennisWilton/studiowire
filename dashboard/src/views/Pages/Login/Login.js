import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';

import {useDispatch, useSelector} from 'react-redux';
import { Login as loginMtd } from '../../../models/auth';

function Login(props) {

    const initialMessage = `Entre na sua conta`;
    const [state, setState] = useState({ message: initialMessage, error: false});
    const auth = useSelector(state => state.auth);
    const dispatch = useDispatch();

    const login = async () => {
        const credentials = { email: document.getElementById("input_email"), password: document.getElementById("input_password") };
        
        try { 
         const response = await loginMtd(credentials); 
         if(!response.status){
           throw({message: response.message});
         } else {
           console.log(response);
           setState({...state, message: `Bem-vindo, ${response.user.name.split(" ")[0]}!`});
           dispatch({type: 'LOGIN', profile: response.user, token: response.token});
           props.history.push('/dashboard');
         }
        } 
        catch (err) {
          setState({...state, message: err.message, error: true});
          setTimeout(() => { setState({...state, message: initialMessage, error: false}) }, 2000);
          dispatch({type: 'LOGOUT'});
        }
    }

    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="8">
              <CardGroup>
                <Card className="p-4">
                  <CardBody>
                    <Form onSubmit={login}>
                      <h1>Login</h1>
                      <p className={state.error ? `bg-danger text-light p-2` : `text-muted pt-2 pb-2`} >{state.message}</p>
                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-user"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="email" id="input_email" placeholder="Email" autoComplete="username" />
                      </InputGroup>
                      <InputGroup className="mb-4">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-lock"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="password" id="input_password" placeholder="Senha" autoComplete="current-password" />
                      </InputGroup>
                      <Row>
                        <Col xs="6">
                          <Button color="primary" onClick={ login } className="px-4">Entrar</Button>
                        </Col>
                        <Col xs="6" className="text-right">
                          <Button color="link" className="px-0">Esqueci minha senha</Button>
                        </Col>
                      </Row>
                    </Form>
                  </CardBody>
                </Card>
                <Card className="text-white bg-primary py-5 d-md-down-none" style={{ width: '44%' }}>
                  <CardBody className="text-center">
                    <div>
                      <h2>Sou novo aqui!</h2>
                      <p>Se você ainda não tem uma conta no Dashboard do site, registre-se clicando no botão logo abaixo e aguarde a validação do seu cadastro.</p>
                      <Link to="/register">
                        <Button color="primary" className="mt-3" active tabIndex={-1}>Registrar-me agora</Button>
                      </Link>
                    </div>
                  </CardBody>
                </Card>
              </CardGroup>
            </Col>
          </Row>
        </Container>
      </div>
    );
}

export default Login;
