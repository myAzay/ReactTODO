import React, { useContext } from 'react';
import { Button, Container, Navbar } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { Context } from '..';
import { AUTH_ROUTE } from '../utils/const';

const Header = () => {
    const { user } = useContext(Context);
    const history = useHistory();
    const logout = (path) => {
        //localStorage.removeItem('token');
        user.setIsAuth(false);
        user.setUser({});
        history.push(path);
    };
    return (
        <Navbar>
            <Container>
                <Navbar.Brand>
                    TODOList
                </Navbar.Brand>
                <div className="justify-content-end px-2">
                <span className="px-2">{user.user.userName}</span>
                    <Button className="btn btn-dark"
                        onClick={() => {
                            logout(AUTH_ROUTE);
                        }}
                        variant="dark"
                    >
                        Logout
                    </Button>
                </div>
            </Container>
        </Navbar>
    );
};

export default Header;