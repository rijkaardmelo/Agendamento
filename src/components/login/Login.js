import Button from '@mui/material/Button';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';

import './Login.css'

export default function Login(props) {

    const validacao = () => {
        window.location.href = 'agendamento'
    }

    return (
        <div id='Login'>
            <span id='loginNao'>Não tem uma conta?</span>
            <Button id="loginCriar" variant="contained" startIcon={<PersonOutlineOutlinedIcon />} onClick={props.cadastro}>
                Criar um usuário
                </Button>
            <div id='formLogin'>
                <span id='loginPreencha'>Preencha os campos abaixo</span>
                <span id='loginEmail' type="email">Email:</span>
                <input id="loginInputEmail" type="text" />
                <span id='loginSenha'>Senha: </span>
                <input id="loginInputPassword" type="password" />
                <span id='loginEsqueceu'>Esqueceu sua senha? </span>
                <Button id="loginButtonEntrar" onClick={validacao}>Entrar</Button>
            </div>
        </div>
    );
}