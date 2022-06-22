import React, {useContext} from 'react';
import {Context} from "../index";
import {Button, Container, Nav, Navbar} from "react-bootstrap";
import {NavLink, useNavigate} from "react-router-dom";
import {LOGIN_ROUTE, MAIN_ROUTE} from "../utils/consts";
import {observer} from "mobx-react-lite";

const NavBar = observer(() =>
    {
        const {user} = useContext(Context)
        const navigate = useNavigate()

        const logOut = () => {
            user.setUser({})
            user.setIsAuth(false)
            console.log('User isAuth:' + user.isAuth)
        }

        return (
            <Navbar bg="dark" variant="dark">
                <Container>
                    <NavLink style={{color: 'white', textDecoration: "none"}} to={MAIN_ROUTE}>Hofmeister App</NavLink>
                    {user.isAuth ?
                        <Nav className="ml-auto" style={{color: "white"}}>
                            <Button
                                variant={"outline-light"}
                                onClick={() => logOut()}
                                className="ml-4"
                            >
                                Выйти
                            </Button>
                        </Nav>
                        :
                        <Nav className="ml-auto">
                            <Button variant={"outline-light"} onClick={() => navigate(LOGIN_ROUTE)}>Авторизация</Button>
                        </Nav>
                    }
                </Container>
            </Navbar>
        );
    }
);

export default NavBar;