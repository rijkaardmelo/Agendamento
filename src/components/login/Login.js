import { useNavigate } from "react-router-dom";
import { useState } from 'react';

import axios from 'axios';

import Button from '@mui/material/Button';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';

import './Login.css';

export default function Login(props) {

    const navigate = useNavigate()

    const [login, setLogin] = useState({
        email: '',
        password: ''
    })

    const validacao = (e) => {
        e.preventDefault();
        if (!(login.email === '' || login.password === '')) {
            return axios
                .post('http://0.0.0.0:3004/login', login)
                .then(response => {
                    if (response.data.accessToken) {
                        localStorage.setItem("user", JSON.stringify(response.data))
                    }
                    navigate('/agendamento')
                })
                .catch(err => console.log(err))
        }
    }

    const loginChange = (e) => {
        setLogin({ ...login, [e.target.name]: e.target.value })
    }

    return (
        <div id='Login'>
            <label id='loginNao'>Não tem uma conta?</label>
            <Button
                id="loginCriar"
                variant="contained"
                startIcon={<PersonOutlineOutlinedIcon />}
                onClick={props.cadastro}>
                Criar um usuário
            </Button>
            <form id='formLogin' onSubmit={validacao}>
                <label id='loginPreencha'>Preencha os campos abaixo</label>
                <label id='loginEmail'>Email:</label>
                <input
                    id="loginInputEmail"
                    type="email"
                    value={login.email}
                    name='email'
                    onChange={e => loginChange(e)}
                />
                <label id='loginSenha'>Senha: </label>
                <input
                    id="loginInputPassword"
                    type="password"
                    value={login.password}
                    name='password'
                    onChange={e => loginChange(e)}
                />
                <label id='loginEsqueceu'>Esqueceu sua senha? </label>
                <Button id="loginButtonEntrar" type="submit">Entrar</Button>
            </form>
        </div>
    );
}