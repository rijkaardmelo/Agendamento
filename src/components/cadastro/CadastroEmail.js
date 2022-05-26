import Button from '@mui/material/Button';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';

import './CadastroEmail.css'

export default function CadastroEmail(props){
    return(
        <div id='CadastroEmail'>
            <span id='cadastroemailJa'>Já tem uma conta?</span>
            <Button id="cadastroemailEntrar" variant="contained" startIcon={<PersonOutlineOutlinedIcon />} onClick={props.login}>Entrar</Button>
            <div id='cadastroemailForm'>
                <span id='cadastroemailPreencha'>Preencha os campos abaixo</span>
                <span id='cadastroemailRapido'>É rápido, simples e seguro</span>
                <span id='cadastroemailEmail'>Email: </span>
                <input id="cadastroemailInputEmail" type="text"/>
                <Button id="cadastroemailButtonContinuar" onClick={props.usuario}>Continuar</Button>
            </div>
        </div>
    );
}