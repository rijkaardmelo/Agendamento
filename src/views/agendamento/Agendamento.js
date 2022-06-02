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
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import TextField from '@mui/material/TextField';

import DatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './Agendamento.css'
import pt from "date-fns/locale/pt";

export default function Agendamento() {

    registerLocale("pt", pt);

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

    const [dateAgendamento, setDateAgendamento] = useState(new Date());
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

    const Exibir = () => {
        if (status)
            return (
                <>
                </>
            )
        else
            return (
                <div id='agendamentoPainel'>
                    <label>Agendar</label>
                    <Box id="agendamentoForm">
                        <label id='agendLCampanha'>Campanha:</label>
                        <FormControl id='agendFCCampanha' sx={{ width: 200 }} size="small">
                            <Select value={campanhas.id}>
                                {campanhas.map(campanha => <MenuItem value={campanha.id}>{campanha.nome}</MenuItem>)}
                            </Select>
                        </FormControl>

                        <label id='agendLMunicipio'>Município:</label>
                        <FormControl id='agendFCMunicipio' sx={{ width: 200 }} size="small">
                        <Select
                                defaultValue=""
                            >
                                {/* {estabelecimentos.map(estabelecimento => <FormControlLabel value={estabelecimento.dsc_cidade} control={<Radio sx={{color:"#FFFFFF"}} />} label={estabelecimento.dsc_cidade} />)} */}
                                <MenuItem value="Natal">Natal</MenuItem>
                                <MenuItem value="Parnamirim" >Parnamirim</MenuItem>
                                <MenuItem value="São Gonçalo" >São Gonçalo</MenuItem>
                                <MenuItem value="Acari" >Acari</MenuItem>
                                <MenuItem value="Caicó" >Caicó</MenuItem>
                            </Select>
                        </FormControl>

                        <label id='agendLGrupo'>Grupos de Atendimentos:</label>
                        <FormControl id='agendFCGrupo' sx={{ width: 200 }} size="small">
                            <Select key={grupos.id}>
                                {grupos.map(grupo => <MenuItem value={grupo.id}>{grupo.nome}</MenuItem>)}
                            </Select>
                        </FormControl>

                        <label id='agendLExame'>Tipo de Exame:</label>
                        <FormControl id='agendFCExame' sx={{ width: 200 }} size="small">
                            <Select value={exames.id} >
                                {exames.map(exame => <MenuItem value={exame.id}>{exame.nome}</MenuItem>)}
                            </Select>
                        </FormControl>
                        <label id='agendLData'>Data:</label>
                        <DatePicker
                            id='AgendData'
                            onChange={(e) => setDateAgendamento(e)}
                            locale="pt"
                            selected={dateAgendamento}
                            //customInput={<TextField id='AgendText' sx={{ width: 200 }} size="small" value={dateAgendamento} />}
                            dateFormat="dd/MM/yyyy"
                        />

                        <Button id='agendamentoProcurar' variant="contained">Procurar</Button>

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