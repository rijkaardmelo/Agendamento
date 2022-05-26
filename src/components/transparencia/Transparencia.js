import Button from '@mui/material/Button';

import './Transparencia.css'

export default function Transparencia(props) {
    return (
        <div id='Trasparencia'>
            <div id='transIconCalendar' />
            <span id='transAgendamento'>
                Agendamento Online
            </span>
            <span id='transRapido'>
                Rápido e seguro
            </span>
            <span id='transEvite'>
                Evite filas e aglomeração<br />
                O seu bem é o bem de todos
            </span>
            <Button id='transTransferencia' onClick={props.filtro}>TRANSFERÊNCIA</Button>
            <div id='transIconLais' />
            <div id='transIconUFRN' />
        </div>
    );
}