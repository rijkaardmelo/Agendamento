import { useNavigate } from "react-router-dom";
import { useState } from 'react';

import axios from 'axios';

import Button from '@mui/material/Button';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';

import pt from "date-fns/locale/pt";
import dateFormat from "dateformat";
import DatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import './CadastroUsuario.css';

export default function CadastroUsuario(props) {

    registerLocale("pt", pt);

    const navigate = useNavigate()
    const [dataNascimento, setDataNascimento] = useState(new Date())
    const [confirmarSenha, setConfirmarSenha] = useState('')

    const [cadastro, setCadastro] = useState({
        nome: '',
        email: props.email,
        data_nascimento: dateFormat(dataNascimento, "dd/mm/yyyy"),
        password: ''
    })

    const validacao = (e) => {
        e.preventDefault()
        if (!(cadastro.nome === '' ||
            cadastro.email === '' ||
            cadastro.data_nascimento === '' ||
            cadastro.password ||
            (cadastro.password != confirmarSenha))) {
            return axios
                .post('http://0.0.0.0:3004/users', cadastro)
                .then(response => {
                    if (response.data.accessToken) {
                        localStorage.setItem("user", JSON.stringify(response.data))
                    }
                    navigate('/agendamento')
                })
                .catch(err => console.log(err))
        }
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

            <form id='cadastrousuarioForm' onSubmit={validacao}>
                <label id='cadastrousuarioPreencha'>Preencha os campos abaixo</label>
                <label id='cadastrousuarioRapido'>É rápido, simples e seguro</label>

                <label id='cadastrousuarioEmail'>Email: </label>
                <input
                    id="cadastrousuarioInputEmail"
                    type="email"
                    name="email"
                    value={cadastro.email}
                    onChange={e => cadastroChange(e)}
                    readOnly
                />

                <label id='cadastrousuarioNome'>Nome: </label>
                <input
                    id="cadastrousuarioInputNome"
                    type="text"
                    name="nome"
                    value={cadastro.nome}
                    onChange={e => cadastroChange(e)}
                />

                <label id='cadastrousuarioData'>Data de Nascimento: </label>
                <DatePicker
                    id='cadastrousuarioInputData'
                    name="data_nascimento"
                    value={dataNascimento}
                    onChange={e => setDataNascimento(e)}
                    locale="pt"
                    selected={dataNascimento}
                    dateFormat="dd/MM/yyyy"
                />

                <label id='cadastrousuarioSenha'>Senha: </label>
                <input
                    id="cadastrousuarioInputSenha"
                    type="password"
                    name="password"
                    value={cadastro.password}
                    onChange={e => cadastroChange(e)}
                />

                <label id='cadastrousuarioConfirmacao'>Confirmação de senha: </label>
                <input
                    id="cadastrousuarioInputConfirmacao"
                    type="password"
                    onChange={e => setConfirmarSenha(e.target.value)}
                />

                <Button id="cadastrousuarioButtonCadastrar" type="submit" >Cadastrar</Button>
            </form>
        </div>
    );
}