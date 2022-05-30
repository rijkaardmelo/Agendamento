import { useNavigate } from "react-router-dom";
import { useState } from 'react';

import axios from 'axios';

import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';

import './CadastroUsuario.css';

export default function CadastroUsuario(props) {

    const navigate = useNavigate()

    const [cadastro, setCadastro] = useState({
        nome: '',
        email: '',
        data_nascimento: '31/05/2022',
        password: '123456'
    })

    const validacao = (e) => {
        e.preventDefault()
        console.log()
        axios.post('http://0.0.0.0:3004/users', cadastro)
            .then(res => {
                if (res.status === 200)
                    navigate('/agendamento')
                else
                    Promise.reject()
            })
            .catch(err => console.log(err))
    }

    const cadastroChange = (e) => {
        setCadastro({ ...cadastro, [e.target.name]: e.target.value })
    }

    return (
        <div id='CadastroUsuario'>
            <label id='cadastrousuarioJa'>Já tem uma conta?</label>
            <Button
                id="cadastrousuarioEntrar"
                variant="contained"
                startIcon={<PersonOutlineOutlinedIcon />}
                onClick={props.login}>
                Entrar
            </Button>
            <Box id='cadastrousuarioForm'>
                <label id='cadastrousuarioPreencha'>Preencha os campos abaixo</label>
                <label id='cadastrousuarioRapido'>É rápido, simples e seguro</label>
                <label id='cadastrousuarioEmail'>Email: </label>
                <input
                    id="cadastrousuarioInputEmail"
                    type="text"
                    name="email"
                    defaultValue={props.email}
                    onChange={e => setCadastro({email:e.target.value})}
                    readOnly
                />
                <label id='cadastrousuarioNome'>Nome: </label>
                <input
                    id="cadastrousuarioInputNome"
                    type="text"
                    name="nome"
                    // value={cadastro.nome}
                    onChange={e => setCadastro({nome:e.target.value})}
                />
                <label id='cadastrousuarioSenha'>Senha: </label>
                <input
                    id="cadastrousuarioInputSenha"
                    type="password"
                    name="password"
                    // value={cadastro.password}
                    onChange={e => setCadastro({password:e.target.value})}
                />
                <label id='cadastrousuarioConfirmacao'>Confirmação de senha: </label>
                <input id="cadastrousuarioInputConfirmacao" type="password" />
                <Button id="cadastrousuarioButtonCadastrar" onClick={validacao} >Cadastrar</Button>
            </Box>
        </div>
    );
}