import React, { useState, useEffect } from "react";
import axios from "axios";

import Box from '@mui/material/Box';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';

// import { Chart } from "react-google-charts";

import './Filtro.css'

export default function Filtro(props) {

    const [visivel, setVisivel] = useState(false)
    const [estabelecimentos, setEstabelecimento] = useState([])

    useEffect(() => {
        axios
            .get("http://0.0.0.0:3004/estabelecimentos-saude")
            .then(({ data }) => {
                setEstabelecimento(data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    // const data = [
    //     ["Municipio", "Hours per Day"],
    //     ["Work", 11],
    //     ["Eat", 2],
    //     ["Commute", 2],
    //     ["Watch TV", 2],
    //     ["Sleep", 7],
    // ];

    return (
        <div id="Filtro">
            <Button id='filtroVoltar' onClick={props.login}>Voltar</Button>
            <Button id='filtroFiltrar' onClick={() => setVisivel(true)}>Filtrar</Button>
            <label id='filtroTransparencia'>Transparência</label>
            {visivel && (
                <div id='divFiltro'>
                    <label id='spanFiltro'>Filtro</label>
                    <input id="filtroPesquisa" type="text" placeholder='Pesquise aqui' />
                    <label id='filtroMunicipio'>
                        <label>Município</label>
                    </label>
                    <Box id='filtroLista'>
                        <FormControl>
                            <RadioGroup
                                defaultValue="Natal"
                            >
                                {/* {estabelecimentos.map(estabelecimento => <FormControlLabel value={estabelecimento.dsc_cidade} control={<Radio sx={{color:"#FFFFFF"}} />} label={estabelecimento.dsc_cidade} />)} */}
                                <FormControlLabel value="Natal" control={<Radio sx={{ color: "#FFFFFF" }} />} label="Natal" />
                                <FormControlLabel value="Parnamirim" control={<Radio sx={{ color: "#FFFFFF" }} />} label="Parnamirim" />
                                <FormControlLabel value="São Gonçalo" control={<Radio sx={{ color: "#FFFFFF" }} />} label="São Gonçalo" />
                                <FormControlLabel value="Acari" control={<Radio sx={{ color: "#FFFFFF" }} />} label="Acari" />
                                <FormControlLabel value="Caicó" control={<Radio sx={{ color: "#FFFFFF" }} />} label="Caicó" />
                            </RadioGroup>
                        </FormControl>
                    </Box>
                    <Button id='filtroCancelar' onClick={() => setVisivel(false)}> Cancelar </Button>
                    <Button id='buttonFiltrar'> Filtrar </Button>
                </div>
            )}
        </div>
    );
}