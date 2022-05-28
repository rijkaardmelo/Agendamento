import {useNavigate} from "react-router-dom";
import {useState} from 'react';

import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';

import './Login.css'

export default function Login(props) {

    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);

    const validacao = async (e) => {
        e.preventDefault();

      await fetch('  http://0.0.0.0:3004/users', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            credentials: 'include',
            body: JSON.stringify({
                email,
                password
            })
        });

        setRedirect(true);
    }

    if (redirect) {
        navigate('/agendamento');
    }

    return (
        <div id='Login'>
            <label id='loginNao'>Não tem uma conta?</label>
            <Button id="loginCriar" variant="contained" startIcon={<PersonOutlineOutlinedIcon />} onClick={props.cadastro}>
                Criar um usuário
                </Button>
            <Box id='formLogin'>
                <label id='loginPreencha'>Preencha os campos abaixo</label>
                <label id='loginEmail' type="email" onChange={e => setEmail(e.target.value)}>Email:</label>
                <input id="loginInputEmail" type="text" />
                <label id='loginSenha'>Senha: </label>
                <input id="loginInputPassword" type="password" onChange={e => setPassword(e.target.value)}/>
                <label id='loginEsqueceu'>Esqueceu sua senha? </label>
                <Button id="loginButtonEntrar" onClick={validacao}>Entrar</Button>
            </Box>
        </div>
    );
}