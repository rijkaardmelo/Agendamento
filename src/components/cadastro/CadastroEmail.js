import './CadastroCPF.css'

export default function CadastroEmail(props){
    return(
        <div id='CadastroEmail'>
            <span id='cadastroemailJa'>Já tem uma conta?</span>
            <button id="cadastroemailEntrar" onClick={props.event}><div></div><span>Entrar</span></button>
            <div id='cadastroemailForm'>
                <span id='cadastroemailPreencha'>Preencha os campos abaixo</span>
                <span id='cadastroemailRapido'>É rápido, simples e seguro</span>
                <span id='cadastroemailCPF'>CPF: </span>
                <input type="text" id="cadastroemailInputCPF" />
                <button id="cadastroemailButtonContinuar" ><span>Continuar</span></button>
            </div>
        </div>
    );
}