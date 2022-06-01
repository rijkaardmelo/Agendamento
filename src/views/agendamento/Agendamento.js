import * as React from 'react';

import { useState, useEffect } from 'react';

import axios from "axios";

import AppBar from '@mui/material/AppBar';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import FolderOpenOutlinedIcon from '@mui/icons-material/FolderOpenOutlined';
import EditIcon from '@mui/icons-material/Edit';
import Avatar from '@mui/material/Avatar';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import DatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './Agendamento.css'
import pt from "date-fns/locale/pt";

export default function Agendamento() {

    registerLocale("pt", pt);

    const [date, setDate] = useState(new Date());

    const [campanhas, setCampanhas] = useState({
        id: '',
        nome: '',
        tipos_exame: []
    });

    const [grupos, setGrupos] = useState({
        id: '',
        nome: '',
        idade_minima: ''
    });

    const [exames, setExame] = useState({
        id: '',
        nome: ''
    });

    const [styleAgendamentoMeus, setStyleAgendamentoMeus] = useState("agendamentoMeusSelect");
    const [styleAgendamentoAgendar, setStyleAgendamentoAgendar] = useState("agendamentoAgendar");
    const [status, setStatus] = useState(true);

    useEffect(() => {
        axios
            .get("http://0.0.0.0:3004/campanhas")
            .then(({ data }) => {
                setCampanhas(data);
            })
            .catch((error) => {
                console.log(error);
            });

        axios
            .get("http://0.0.0.0:3004/grupos-atendimentos")
            .then(({ data }) => {
                setGrupos(data);
            })
            .catch((error) => {
                console.log(error);
            });

        axios
            .get("http://0.0.0.0:3004/tipos_exame")
            .then(({ data }) => {
                setExame(data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    const changeAgendamentoMeus = () => {
        setStyleAgendamentoMeus("agendamentoMeusSelect");
        setStyleAgendamentoAgendar("agendamentoAgendar");
        setStatus(true)
    }

    const changeAgendamentoAgendar = () => {
        setStyleAgendamentoMeus("agendamentoMeus");
        setStyleAgendamentoAgendar("agendamentoAgendarSelect");
        setStatus(false)
    }

    const Input = ({ onChange, placeholder, value, isSecure, id, onClick }) => (
        <TextField
            onChvalueange={onChange}
            placeholder={placeholder}
            value={date}
            isSecure={isSecure}
            id={id}
            onClick={onClick}
        />
    );


    const Exibir = () => {
        if (status)
            return (
                <>
                </>
            )
        else
            return (
                <div id='agendamentoPainel'>
                    <Box id="agendamentoForm">
                        <FormControl sx={{ width: 200 }} size="small">
                            <Select value={campanhas.nome}>
                                {campanhas.map(campanha => <MenuItem value={campanha.id}>{campanha.nome}</MenuItem>)}
                            </Select>
                        </FormControl>

                        <FormControl sx={{ width: 200 }} size="small">
                            <Select value={grupos.nome}>
                                {grupos.map(grupo => <MenuItem value={grupo.id}>{grupo.nome}</MenuItem>)}
                            </Select>
                        </FormControl>

                        <FormControl sx={{ width: 200 }} size="small">
                            <Select value={exames.nome}>
                                {exames.map(exame => <MenuItem value={exame.id}>{exame.nome}</MenuItem>)}
                            </Select>
                        </FormControl>

                        <DatePicker 
                            onChange={(date:Date) => setDate(date)} 
                            value={date}
                            locale="pt"
                            selected={date}
                            customInput={<TextField sx={{ width: 200 }} size="small" value={date}/>}
                            dateFormat="dd/MM/yyyy"
                        /> 

                    </Box>
                </div>
            )
    }

    return (
        <div id="Agendamento">
            <AppBar id='agendamentoNav' >
                <Button id='agendamentoOnline'>
                    <CalendarTodayOutlinedIcon sx={{ fontSize: 30 }} />
                    <label>Agendamento online</label>
                </Button>
                <Button id={styleAgendamentoMeus} onClick={changeAgendamentoMeus}   >
                    <FolderOpenOutlinedIcon sx={{ fontSize: 28 }} />
                    <label>Meus agendamentos</label>
                </Button>
                <Button id={styleAgendamentoAgendar} onClick={changeAgendamentoAgendar}>
                    <EditIcon sx={{ fontSize: 24 }} />
                    <label>Agendar</label>
                </Button>
                <Avatar id='agendamentoAvatar'>LC</Avatar>
            </AppBar>
            <div id='agendamentoPrincipal'>
                <Exibir />
            </div>
        </div>
    );
}