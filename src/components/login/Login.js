import './Login.css'

export default function Login(props) {

    const validacao = () => {
        window.location.href = 'agendamento'
    }

    return (
        <div id='Login'>
            <span id='loginNao'>Não tem uma conta?</span>
            <button id="loginCriar" onClick={props.cadastro}><div></div><span>Criar um usuário</span></button>
            <div id='formLogin'>
                <span id='loginPreencha'>Preencha os campos abaixo</span>
                <span id='loginEmail' type="email">Email:</span>
                <input id="loginInputEmail" type="text" />
                <span id='loginSenha'>Senha: </span>
                <input id="loginInputPassword" type="password" />
                <span id='loginEsqueceu'>Esqueceu sua senha? </span>
                <button id="loginButtonEntrar" onClick={validacao}><span>Entrar</span></button>
            </div>
        </div>
    );
}