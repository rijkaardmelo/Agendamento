import { useState } from 'react';

import Button from '@mui/material/Button';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';

import './CadastroEmail.css';

export default function CadastroEmail(props) {

    var aux = /\S+@\S+\.\S+/;

    const [email, setEmail] = useState()

    const validarEmail = (e) => {
        e.preventDefault()
        if (aux.test(email))
            props.usuario(email)
        else {
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
            <form id='cadastroemailForm' onSubmit={validarEmail}>
                <label id='cadastroemailPreencha'>Preencha os campos abaixo</label>
                <label id='cadastroemailRapido'>É rápido, simples e seguro</label>
                <label id='cadastroemailEmail'>Email: </label>
                <input
                    id="cadastroemailInputEmail"
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <Button id="cadastroemailButtonContinuar" type="submit">Continuar</Button>
            </form>
        </div>
    );
}