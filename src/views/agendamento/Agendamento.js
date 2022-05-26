import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';

import './Agendamento.css'

export default function Agendamento (){
    return(
        <div id="Agendamento">
            <div id='agendamentoNav'>
                <CalendarTodayOutlinedIcon id='agendamentoCalendar'/>
                <label id='agendamentoOnline'>Agendamento online</label>
            </div>
        </div>
    );
}