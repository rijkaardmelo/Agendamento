// import { useState } from 'react';

import AppBar from '@mui/material/AppBar';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import FolderOpenOutlinedIcon from '@mui/icons-material/FolderOpenOutlined';
import EditIcon from '@mui/icons-material/Edit';
import Avatar from '@mui/material/Avatar';
import { styled } from '@mui/material/styles';

import './Agendamento.css'
import { Button } from '@mui/material';

const BootstrapButton = styled(Button)({
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 14,
    padding: '6px 12px',
    border: '1px solid',
    lineHeight: 1.5,
    backgroundColor: "#FFFFFF",
    borderColor: "#FFFFFF",
    color: "#000000",
    fontFamily: 'Poppins',
    '&:focus': {
        boxShadow: 'none',
        backgroundColor: '#0063cc',
        borderColor: '#0063cc',
        color: '#FFFFFF',
    },
});

export default function Agendamento() {
    return (
        <div id="Agendamento">
            <AppBar id='agendamentoNav' >
                <CalendarTodayOutlinedIcon id='agendamentoCalendar' />
                <label id='agendamentoOnline'>Agendamento online</label>
                <BootstrapButton id='agendamentoMeus' startIcon={<FolderOpenOutlinedIcon />}> <span>Meus agendamentos</span></BootstrapButton>
                <BootstrapButton id='agendamentoAgendar' startIcon={<EditIcon />}>Agendar</BootstrapButton>
                <Avatar id='agendamentoAvatar' >LC</Avatar>
            </AppBar>
        </div>
    );
}