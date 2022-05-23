import './CadastroCPF.css'

export default function CadastroCPF(props){
    return(
        <div id='CadastroCPF'>
            <span id='cadastrocpfJa'>Já tem uma conta?</span>
            <button id="cadastrocpfEntrar" onClick={props.login}><div></div><span>Entrar</span></button>
            <div id='cadastrocpfForm'>
                <span id='cadastrocpfPreencha'>Preencha os campos abaixo</span>
                <span id='cadastrocpfRapido'>É rápido, simples e seguro</span>
                <span id='cadastrocpfCPF'>CPF: </span>
                <input type="text" id="cadastrocpfInputCPF" />
                <button id="cadastrocpfButtonContinuar" onClick={props.email}><span>Continuar</span></button>
            </div>
        </div>
    );
}