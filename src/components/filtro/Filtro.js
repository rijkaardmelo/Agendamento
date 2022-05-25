import { useState } from 'react';

import './Filtro.css'

export default function Filtro(props) {
    const [visivel, setVisivel] = useState(false)
    return (
        <div id="Filtro">
            <button id='filtroVoltar' onClick={props.login}><span>Voltar</span></button>
            <button id='filtroFiltrar' onClick={() => setVisivel(true)}><span>Filtrar</span></button>
            <span id='filtroTransparencia'>Transparência</span>
            {visivel && (
                <div id='divFiltro'>
                    <span id='spanFiltro'>Filtro</span>
                    <input id="filtroPesquisa" type="text" placeholder='Pesquise aqui' />
                    <label id='filtroMunicipio'>
                        <span>Município</span>
                    </label>
                    <button id='filtroCancelar' onClick={() => setVisivel(false)}>
                        <span>Cancelar</span>
                    </button>
                    <button id='buttonFiltrar'>
                        <span>Filtrar</span>
                    </button>
                </div>
            )}

        </div>
    );
}