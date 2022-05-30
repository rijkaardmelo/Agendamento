import { useState } from 'react';

import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';

import './CadastroEmail.css';

export default function CadastroEmail(props) {

    var re = /\S+@\S+\.\S+/;
    
    const [email, setEmail] = useState()

    const validarEmail = (e) => {
        e.preventDefault()
        if(re.test(email))
            props.usuario(email)
        else{
            alert("Email incorreto")
        }
    }

    return (
        <div id='CadastroEmail'>
            <label id='cadastroemailJa'>Já tem uma conta?</label>
            <Button
                id="cadastroemailEntrar"
                variant="contained"
                startIcon={<PersonOutlineOutlinedIcon />}
                onClick={props.login}>
                Entrar
            </Button>
            <Box id='cadastroemailForm'>
                <label id='cadastroemailPreencha'>Preencha os campos abaixo</label>
                <label id='cadastroemailRapido'>É rápido, simples e seguro</label>
                <label id='cadastroemailEmail'>Email: </label>
                <input id="cadastroemailInputEmail" type="text" onChange={(e) => setEmail(e.target.value)}/>
                <Button id="cadastroemailButtonContinuar" onClick={validarEmail}>Continuar</Button>
            </Box>
        </div>
    );
}