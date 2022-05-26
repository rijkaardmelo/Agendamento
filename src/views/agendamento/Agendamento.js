// import { useState } from 'react';

import AppBar from '@mui/material/AppBar';
// import ToggleButton from '@mui/material/ToggleButton';
// import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';

import './Agendamento.css'


export default function Agendamento() {
    // const [alignment, setAlignment] = useState('web');

    // const handleChange = (event, newAlignment) => {
    //     setAlignment(newAlignment);
    // };
    return (
        <div id="Agendamento">
            <AppBar id='agendamentoNav' >
                <CalendarTodayOutlinedIcon id='agendamentoCalendar' />
                <label id='agendamentoOnline'>Agendamento online</label>
                {/* <ToggleButtonGroup
                    color="primary"
                    value={alignment}
                    exclusive
                    onChange={handleChange}
                >
                    <ToggleButton value="web">Web</ToggleButton>
                    <ToggleButton value="android">Android</ToggleButton>
                    <ToggleButton value="ios">iOS</ToggleButton>
                </ToggleButtonGroup> */}
            </AppBar>
        </div>
    );
}