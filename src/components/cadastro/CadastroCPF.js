import Button from '@mui/material/Button';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import './CadastroCPF.css'

export default function CadastroCPF(props) {
    return (
        <div id='CadastroCPF'>
            <span id='cadastrocpfJa'>Já tem uma conta?</span>
            <Button id="cadastrocpfEntrar" variant="contained" startIcon={<PersonOutlineOutlinedIcon />} onClick={props.login}>Entrar</Button>
            <div id='cadastrocpfForm'>
                <span id='cadastrocpfPreencha'>Preencha os campos abaixo</span>
                <span id='cadastrocpfRapido'>É rápido, simples e seguro</span>
                <span id='cadastrocpfCPF'>CPF: </span>
                <input id="cadastrocpfInputCPF" type="text" />
                <Button id="cadastrocpfButtonContinuar" onClick={props.email}>Continuar</Button>
            </div>
        </div>
    );
}