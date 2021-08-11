import React from 'react';
import { Button, Card, Container, Form, Row } from 'react-bootstrap';
import { NavLink, useLocation } from 'react-router-dom';
import { AUTH_ROUTE, REGISTRATION_ROUTE } from '../utils/const';

const AuthPage = props => {
    const location = useLocation();
    const isLogin = location.pathname === AUTH_ROUTE;
    return (
        <Container 
            className = "d-flex justify-content-center align-items-center"
            style = {{height: window.innerHeight}}
        >
            <Card style = {{width : 600}} className = "p-5">
            <h2 className = "m-auto">{isLogin? 'Авторизация' : 'Регистрация'}</h2>
                <Form className ="d-flex flex-column">
                    <Form.Control 
                        className = "mt-3"
                        placeholder = "Enter your login.."
                    />
                     <Form.Control 
                        className = "mt-3"
                        placeholder = "Enter your password.."
                    />
                    <Row className = "d-flex justify-content-between mt-3 pl-3 pr-4"> 
                        {isLogin ?
                        <div>
                            Нет акка? <NavLink to = {REGISTRATION_ROUTE}>Зарегайтесь</NavLink>
                        </div>
                            :
                            <div>
                            Есть акк? <NavLink to = {AUTH_ROUTE}>Войдите</NavLink>
                        </div>    
                        }
                        <Button variant = "outline-success">
                            {isLogin ? 'Log in' : 'Registation'}
                        </Button>
                    </Row>
                </Form>
            </Card>
        </Container>
    );
};

export default AuthPage;