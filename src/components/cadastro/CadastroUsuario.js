import './CadastroUsuario.css'

export default function CadastroUsuario(props) {
    
    const validacao = () => {
        window.location.href = 'agendamento'
    }
    
    return (
        <div id='CadastroUsuario'>
            <span id='cadastrousuarioJa'>Já tem uma conta?</span>
            <button id="cadastrousuarioEntrar" onClick={props.login}><div></div><span>Entrar</span></button>
            <div id='cadastrousuarioForm'>
                <span id='cadastrousuarioPreencha'>Preencha os campos abaixo</span>
                <span id='cadastrousuarioRapido'>É rápido, simples e seguro</span>
                <span id='cadastrousuarioEmail'>Email: </span>
                <input id="cadastrousuarioInputEmail" type="text" />
                <span id='cadastrousuarioNome'>Nome: </span>
                <input id="cadastrousuarioInputNome" type="text" />
                <span id='cadastrousuarioSenha'>Senha: </span>
                <input id="cadastrousuarioInputSenha" type="password" />
                <span id='cadastrousuarioConfirmacao'>Confirmação de senha: </span>
                <input id="cadastrousuarioInputConfirmacao" type="password" />
                <button id="cadastrousuarioButtonCadastrar" onClick={validacao} ><span>Cadastrar</span></button>
            </div>
        </div>
    );
}