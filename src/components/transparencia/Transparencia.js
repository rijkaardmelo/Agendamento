import { Icon } from '@mui/material';
import Button from '@mui/material/Button';

import './Transparencia.css'

export default function Transparencia(props) {
    return (
        <div id='Trasparencia'>
            <Icon id='transIconCalendar' />
            <label id='transAgendamento'>
                Agendamento Online
            </label>
            <label id='transRapido'>
                Rápido e seguro
            </label>
            <label id='transEvite'>
                Evite filas e aglomeração<br />
                O seu bem é o bem de todos
            </label>
            <Button id='transTransferencia' onClick={props.filtro}>TRANSFERÊNCIA</Button>
            <Icon id='transIconLais' />
            <Icon id='transIconUFRN' />
        </div>
    );
}