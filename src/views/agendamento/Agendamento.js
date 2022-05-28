import {useState} from 'react';

import AppBar from '@mui/material/AppBar';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import FolderOpenOutlinedIcon from '@mui/icons-material/FolderOpenOutlined';
import EditIcon from '@mui/icons-material/Edit';
import Avatar from '@mui/material/Avatar';

import './Agendamento.css'
import { Button } from '@mui/material';

export default function Agendamento() {
    const [styleAgendamentoMeus, setStyleAgendamentoMeus] = useState("agendamentoMeusSelect")
    const [styleAgendamentoAgendar, setStyleAgendamentoAgendar] = useState("agendamentoAgendar")

    const changeAgendamentoMeus = () => {
        setStyleAgendamentoMeus("agendamentoMeusSelect");
        setStyleAgendamentoAgendar("agendamentoAgendar")
    }
    const changeAgendamentoAgendar = () => {
        setStyleAgendamentoMeus("agendamentoMeus");
        setStyleAgendamentoAgendar("agendamentoAgendarSelect");
    }
    return (
        <div id="Agendamento">
            <AppBar id='agendamentoNav' >
                <Button id='agendamentoOnline'>
                    <CalendarTodayOutlinedIcon sx={{ fontSize: 40 }} />
                    <label>Agendamento online</label>
                </Button>
                <Button id={styleAgendamentoMeus} onClick={changeAgendamentoMeus}   >
                    <FolderOpenOutlinedIcon sx={{ fontSize: 30 }} />
                    <label>Meus agendamentos</label>
                </Button>
                <Button id={styleAgendamentoAgendar} onClick={changeAgendamentoAgendar}>
                    <EditIcon sx={{ fontSize: 30 }} />
                    <label>Agendar</label>
                </Button>
                <Avatar id='agendamentoAvatar' >LC</Avatar>
            </AppBar>
        </div>
    );
}