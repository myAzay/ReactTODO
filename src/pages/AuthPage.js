import React, { useContext, useState } from "react";
import { Button, Card, Container, Form, Row } from "react-bootstrap";
import { NavLink, useHistory, useLocation } from "react-router-dom";
import {
  AUTH_ROUTE,
  REGISTRATION_ROUTE,
  TODO_LIST_ROUTE,
  USER_SECRET,
} from "../utils/const";
import jwt from "jsonwebtoken";
import jwtDecode from "jwt-decode";
import { Context } from "..";

const AuthPage = () => {
  const location = useLocation();
  const history = useHistory();
  const { user } = useContext(Context);
  const isLogin = location.pathname === AUTH_ROUTE;
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const  clickHandle = async (userName, userPassword) => {
    if (!isLogin) {
      const token = localStorage.getItem('token');
      let data = {
        users : []
      };
      token ? data = jwtDecode(token) : data.users = [];
      data.users.push({login: login, password: password});
      await localStorage.removeItem('token');
      const newToken = jwt.sign(
        data,
        USER_SECRET,
        //{ expiresIn: "7d" }
      );
      localStorage.setItem('token', newToken);
      user.setUser({ userName: userName });
      user.setIsAuth(true);
      history.push(TODO_LIST_ROUTE);
    } else {
      const token = localStorage.getItem('token');
      if (!token) return;
      const data = jwtDecode(token);
      for(var myUser in data.users){
        if(data.users[myUser].login === userName && data.users[myUser].password === userPassword) {
          user.setUser({ userName: data.users[myUser].login });
          user.setIsAuth(true);
          history.push(TODO_LIST_ROUTE);
          break;
        }
      }    
    }
  };

  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ height: window.innerHeight }}
    >
      <Card style={{ width: 600 }} className="p-5">
        <h2 className="m-auto">{isLogin ? "Authorization" : "Registration"}</h2>
        <Form className="d-flex flex-column">
          <Form.Control
            className="mt-3"
            placeholder="Enter your login.."
            onChange={(e) => {
              setLogin(e.target.value);
            }}
          />
          <Form.Control
            className="mt-3"
            placeholder="Enter your password.."
            type="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <Row className="d-flex justify-content-between mt-3 pl-3 pr-4">
            {isLogin ? (
              <div>
                Don't have an account?{" "}
                <NavLink to={REGISTRATION_ROUTE}>Register</NavLink>
              </div>
            ) : (
              <div>
                Have an account? <NavLink to={AUTH_ROUTE}>Sign in</NavLink>
              </div>
            )}
            <Button
              variant="outline-success"
              onClick={() => clickHandle(login, password)}
            >
              {isLogin ? "Log in" : "Registation"}
            </Button>
          </Row>
        </Form>
      </Card>
    </Container>
  );
};

export default AuthPage;
