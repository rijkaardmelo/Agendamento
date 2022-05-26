import Button from '@mui/material/Button';
import { useState } from 'react';

import './Filtro.css'

export default function Filtro(props) {
    const [visivel, setVisivel] = useState(false)
    return (
        <div id="Filtro">
            <Button id='filtroVoltar' onClick={props.login}>Voltar</Button>
            <Button id='filtroFiltrar' onClick={() => setVisivel(true)}>Filtrar</Button>
            <span id='filtroTransparencia'>Transparência</span>
            {visivel && (
                <div id='divFiltro'>
                    <span id='spanFiltro'>Filtro</span>
                    <input id="filtroPesquisa" type="text" placeholder='Pesquise aqui' />
                    <label id='filtroMunicipio'>
                        <span>Município</span>
                    </label>
                    <Button id='filtroCancelar' onClick={() => setVisivel(false)}> Cancelar </Button>
                    <Button id='buttonFiltrar'> Filtrar </Button>
                </div>
            )}

        </div>
    );
}