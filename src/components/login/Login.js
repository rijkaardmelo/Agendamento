import './Login.css'

export default function Login(props) {
    return (
        <div id='Login'>
            <span id='loginNao'>Não tem uma conta?</span>
            <button id="loginCriar" onClick={props.event}><div></div><span>Criar um usuário</span></button>
            <div id='formLogin'>
                <span id='loginPreencha'>Preencha os campos abaixo</span>
                <span id='loginEmail'>Email:</span>
                <input type="text" id="loginInputEmail" />
                <span id='loginSenha'>Senha: </span>
                <input type="password" id="loginInputPassword" />
                <span id='loginEsqueceu'>Esqueceu sua senha? </span>
                <button id="loginButtonEntrar" type="button"><span>Entrar</span></button>
            </div>
        </div>
    );
}